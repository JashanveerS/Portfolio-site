import { Fragment, useState } from 'react';
import './App.css';
import Classical from './Classical';
import Gazette from './sections/Gazette/Gazette';
import { SiteFxProvider } from './common/SiteFxContext';

const MODES = [
  { value: 'classical', label: 'Classical' },
  { value: 'gazette', label: '1960 Gazette' },
  { value: 'minecraft', label: 'Minecraft' },
];

function App() {
  const [mode, setMode] = useState('classical');

  return (
    <>
      <div className={mode === 'minecraft' ? 'mode-pill mode-pill-top' : 'mode-pill'}>
        {MODES.map((m, i) => (
          <Fragment key={m.value}>
            {i > 0 && <span className="divider">·</span>}
            <span
              className={mode === m.value ? 'active' : ''}
              onClick={() => setMode(m.value)}
              data-cursor="link"
            >
              {m.label}
            </span>
          </Fragment>
        ))}
      </div>

      {mode === 'minecraft' && (
        <div className="minecraft-mode">
          <iframe src="/minecraft-site.html" title="Minecraft-inspired portfolio" />
        </div>
      )}

      {mode === 'gazette' && <Gazette />}

      {mode === 'classical' && (
        <SiteFxProvider>
          <Classical />
        </SiteFxProvider>
      )}
    </>
  );
}

export default App;
