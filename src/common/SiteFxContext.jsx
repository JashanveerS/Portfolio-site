import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

const SiteFxContext = createContext(null);

export function useSiteFx() {
  const ctx = useContext(SiteFxContext);
  if (!ctx) throw new Error('useSiteFx must be used within SiteFxProvider');
  return ctx;
}

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const COINS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 7.3) % 100}%`,
  duration: `${1.6 + (i % 5) * 0.25}s`,
  delay: `${(i % 7) * 0.09}s`,
}));

export function SiteFxProvider({ children }) {
  const cursorRef = useRef(null);
  const audioCtxRef = useRef(null);
  const konamiPos = useRef(0);
  const typedBuffer = useRef('');
  const eggTimer = useRef(null);
  const [revealed, setRevealed] = useState({});
  const [egg, setEgg] = useState({ active: false, title: '', coins: false });

  const playTone = (freq, dur) => {
    try {
      if (!audioCtxRef.current) audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      const ctx = audioCtxRef.current;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = freq;
      g.gain.value = 0.05;
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
      o.stop(ctx.currentTime + dur);
    } catch {
      // Web Audio unavailable or blocked — sound is a nice-to-have, not required.
    }
  };

  const spawnParticles = (x, y) => {
    const colors = ['var(--color-accent)', 'var(--color-accent-600)', 'var(--color-accent-800)'];
    for (let i = 0; i < 7; i++) {
      const p = document.createElement('div');
      const size = 5 + Math.floor(Math.random() * 4);
      const angle = Math.random() * Math.PI * 2;
      const dist = 26 + Math.random() * 28;
      p.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:${size}px;height:${size}px;background:${colors[i % colors.length]};pointer-events:none;z-index:10000;box-shadow:inset 0 0 0 1px rgba(0,0,0,0.25);transform:translate(-50%,-50%);animation:blockPop .5s ease-out forwards;`;
      p.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
      p.style.setProperty('--dy', `${Math.sin(angle) * dist - 16}px`);
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 550);
    }
  };

  const playClick = (e) => {
    playTone(660, 0.08);
    if (e && typeof e.clientX === 'number') spawnParticles(e.clientX, e.clientY);
  };

  const playChime = () => {
    [523, 659, 784].forEach((f, i) => setTimeout(() => playTone(f, 0.25), i * 90));
  };

  const showAchievement = (title, withCoins) => {
    setEgg({ active: true, title, coins: !!withCoins });
    playChime();
    clearTimeout(eggTimer.current);
    eggTimer.current = setTimeout(() => setEgg((s) => ({ ...s, active: false })), 4200);
  };

  // Custom cursor: follows the pointer and grows over anything clickable, fine-pointer devices only.
  useEffect(() => {
    const fine = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
    if (!fine) {
      if (cursorRef.current) cursorRef.current.style.display = 'none';
      return undefined;
    }
    const onMove = (e) => {
      if (cursorRef.current) cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    const grow = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.width = '34px';
      cursorRef.current.style.height = '34px';
      cursorRef.current.style.margin = '-17px';
    };
    const shrink = () => {
      if (!cursorRef.current) return;
      cursorRef.current.style.width = '16px';
      cursorRef.current.style.height = '16px';
      cursorRef.current.style.margin = '-8px';
    };
    document.addEventListener('mousemove', onMove);
    const targets = document.querySelectorAll('[data-cursor="link"], a, button');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    return () => {
      document.removeEventListener('mousemove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  // Scroll-reveal: sections carrying data-reveal fade/slide in once they cross into view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.reveal;
            setRevealed((s) => ({ ...s, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Hidden inputs: Konami code and typing "mario" both unlock an achievement toast.
  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI[konamiPos.current]) {
        konamiPos.current += 1;
        if (konamiPos.current === KONAMI.length) {
          konamiPos.current = 0;
          showAchievement('Cheat code unlocked', true);
        }
      } else {
        konamiPos.current = key === KONAMI[0] ? 1 : 0;
      }
      if (key.length === 1) {
        typedBuffer.current = (typedBuffer.current + key).slice(-6);
        if (typedBuffer.current.endsWith('mario')) {
          showAchievement('1-Up!', true);
          typedBuffer.current = '';
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({ playClick, showAchievement, isRevealed: (id) => !!revealed[id] }),
    [revealed, playClick, showAchievement],
  );

  return (
    <SiteFxContext.Provider value={value}>
      {children}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          margin: -6,
          borderRadius: 0,
          border: '2px solid var(--color-accent)',
          background: 'color-mix(in srgb, var(--color-accent) 22%, transparent)',
          boxShadow: '2px 2px 0 0 color-mix(in srgb, var(--color-accent-800) 60%, transparent)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width .15s steps(3), height .15s steps(3), margin .15s steps(3), opacity .2s ease',
          willChange: 'transform',
        }}
      />
      {egg.active && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', overflow: 'hidden' }}>
          <div
            style={{
              position: 'absolute',
              left: 24,
              bottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              animation: 'eggPop .35s steps(6) both',
              background: 'var(--color-neutral-900)',
              border: '3px solid var(--color-accent-800)',
              boxShadow: '3px 3px 0 0 var(--color-accent-800), var(--shadow-lg)',
              padding: '14px 20px',
              maxWidth: 320,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                flex: 'none',
                background: 'var(--color-accent)',
                boxShadow: 'inset -4px -4px 0 0 var(--color-accent-800), inset 4px 4px 0 0 var(--color-accent-300)',
              }}
            />
            <div>
              <p style={{ fontFamily: "'Press Start 2P', var(--font-heading)", fontSize: 11, lineHeight: 1.6, margin: 0, color: 'var(--color-accent-300)' }}>
                ACHIEVEMENT
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, margin: '4px 0 0', color: '#f3f2f2' }}>{egg.title}</p>
            </div>
          </div>
          {egg.coins &&
            COINS.map((c, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: -40,
                  left: c.left,
                  width: 13,
                  height: 13,
                  borderRadius: 0,
                  background: 'var(--color-accent)',
                  boxShadow: 'inset -3px -3px 0 0 var(--color-accent-800), inset 3px 3px 0 0 var(--color-accent-300)',
                  animation: `coinFall ${c.duration} linear ${c.delay} both`,
                }}
              />
            ))}
        </div>
      )}
    </SiteFxContext.Provider>
  );
}
