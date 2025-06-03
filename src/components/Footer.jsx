
import styles from '../assets/styles/components/Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={styles.footer_info}>
        <div className={styles.footer_logo}>
          <h2>La Bruja Verde</h2>
          <p>Cosmética natural. <br /> Ritual consciente.</p>
        </div>

        <div className={styles.footer_links}>
          <ul>
            <li>Política de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Redes sociales</li>
          </ul>
        </div>
      </div>

      <p className={styles.copy}>&copy; 2025 - DevRosses</p>
    </footer>
  );
}

export default Footer;
