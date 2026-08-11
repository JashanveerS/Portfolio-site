import styles from './FooterStyles.module.css';
import { useSiteFx } from '../../common/SiteFxContext';

function Footer() {
  const { playClick, showAchievement } = useSiteFx();

  const onFooterClick = () => {
    playClick();
    showAchievement('Archivist', false);
  };

  return (
    <footer className={styles.footer}>
      <span onClick={onFooterClick} data-cursor="link" style={{ cursor: 'pointer' }}>
        © 2026 Jashanveer Singh Arora · Built with a little too much love, and a few hidden secrets.
      </span>
    </footer>
  );
}

export default Footer;
