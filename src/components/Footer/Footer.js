/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import styles from "./Footer.module.css";
import StyledFoot from "./Footer.styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFoot>
     {/* <div className={styles.container}> */}
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Movie App</h2>
       
      </footer>
    {/* </div>  */}

    </StyledFoot>
    
  );
}

export default Footer;
