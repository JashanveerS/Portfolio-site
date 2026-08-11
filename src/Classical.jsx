import Nav from './sections/Nav/Nav';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Education from './sections/Education/Education';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function Classical() {
  return (
    <div className="classical-page">
      <Nav />
      <div className="wrap">
        <Hero />
        <hr className="hr" style={{ margin: 0 }} />
        <About />
        <hr className="hr" style={{ margin: 0 }} />
        <Experience />
        <hr className="hr" style={{ margin: 0 }} />
        <Projects />
        <hr className="hr" style={{ margin: 0 }} />
        <Skills />
        <hr className="hr" style={{ margin: 0 }} />
        <Education />
        <hr className="hr" style={{ margin: 0 }} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Classical;
