import styles from './Gazette.module.css';
import headshot from '../../assets/headshot.png';
import CV from '../../assets/cv.pdf';
import { projects, experience, skills } from '../../data/content';

function Gazette() {
  return (
    <div className={styles.gazette}>
      <div className={styles.page}>
        <div className={styles.masthead}>
          <span>Edmonton Edition · No. 1</span>
          <span>Price: A Résumé Download</span>
        </div>

        <div className={styles.titleBlock}>
          <h1>The Arora Gazette</h1>
          <p>Est. 2023 · Serving Recruiters &amp; the Curious Reader Since Sophomore Year</p>
          <div className={styles.seal}>JSA</div>
        </div>

        <div className={styles.frontPage}>
          <div className={styles.frontPageText}>
            <p className={styles.section}>Front Page — Software &amp; Systems</p>
            <h2>Local Dance-Club President Moonlights In Full-Stack Engineering</h2>
            <p className={styles.byline}>By Jashanveer Singh Arora, Staff Correspondent · University of Alberta Desk</p>
          </div>
          <div className={styles.photoBox}>
            <img src={headshot} alt="Staff photograph" />
            <p>Staff Photograph</p>
          </div>
        </div>

        <div className={styles.columns}>
          <p>
            <span className={styles.dropCap}>J</span>ashanveer Singh Arora is, by his own account, a Computing
            Science student at the University of Alberta pursuing a B.Sc. in Software Practices — though colleagues
            note he is equally at home choreographing a Bhangra routine as he is architecting a database schema.
            Between coursework, he serves as a Teaching Assistant for introductory courses and as Volunteer Tech
            Coordinator for a social impact consultancy, translating client feedback into working software.
          </p>
          <blockquote>
            &quot;He kept adding real-time features nobody asked for — and somehow shipped them anyway.&quot;
          </blockquote>
          <p>
            His growing body of work spans real-time collaboration tools, AI-assisted planning software, cloud
            storage, and a recipe app built, reportedly, out of hunger. Sources close to the developer describe a
            persistent habit of adding features that &quot;weren&apos;t strictly necessary.&quot;
          </p>
        </div>

        <hr className={styles.rule} />
        <div className={styles.almanac}>
          <p className={styles.almanacTitle}>At a Glance — The Almanac</p>
          <div className={styles.almanacGrid}>
            <p><strong>School:</strong> University of Alberta</p>
            <p><strong>Study:</strong> B.Sc. Computing Science</p>
            <p><strong>Base:</strong> Edmonton, Alberta</p>
            <p><strong>Focus:</strong> Real-time systems &amp; AI-assisted tools</p>
          </div>
        </div>

        <p className={styles.classifiedLabel}>Classified Notices — Projects for Inspection</p>
        <div className={styles.projectGrid}>
          {projects.map((p) => (
            <div key={p.name} className={styles.projectBox}>
              <p className={styles.projectName}>{p.name}</p>
              <p className={styles.projectKicker}>{p.kicker}</p>
              <p className={styles.projectDesc}>{p.desc}</p>
            </div>
          ))}
        </div>

        <hr className={styles.rule} />
        <div className={styles.twoCol}>
          <div>
            <p className={styles.label}>Positions of Note</p>
            {experience.map((e) => (
              <div key={e.role + e.org} className={styles.expRow}>
                <p className={styles.expRole}>{e.role}</p>
                <p className={styles.expMeta}>{e.org} — {e.meta}</p>
              </div>
            ))}
          </div>
          <div>
            <p className={styles.label}>Trade &amp; Tools Advertised</p>
            {skills.map((g) => (
              <div key={g.cat} className={styles.skillRow}>
                <p className={styles.skillCat}>{g.cat}</p>
                <p className={styles.skillBlurb}>{g.blurb}</p>
                <p className={styles.skillItems}>{g.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className={styles.rule} />
        <div className={styles.correspondence}>
          <p className={styles.corrTitle}>Correspondence Invited</p>
          <p className={styles.corrLede}>
            Letters to the editor, employment offers, and general inquiries received gladly at the addresses below.
          </p>
          <div className={styles.corrLinks}>
            <a href="mailto:jashanveersingharora@gmail.com">jashanveersingharora@gmail.com</a>
            <a href="https://www.linkedin.com/in/jashanveer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/JashanveerS" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={CV} download="Jashanveer_Singh_Arora_Resume.pdf">Download Résumé</a>
          </div>
        </div>

        <div className={styles.ad}>
          <p className={styles.adLabel}>Advertisement</p>
          <p className={styles.adTitle}>WANTED: Bugs, Dead or Alive</p>
          <p className={styles.adBody}>
            Reward paid in clean commits and a good night&apos;s sleep. Apply within — candidate has shipped five and
            squashed more than he can count.
          </p>
        </div>

        <p className={styles.colophon}>
          All content set in the composing room of Jashanveer Singh Arora · Not actually printed in 1960
        </p>
      </div>
    </div>
  );
}

export default Gazette;
