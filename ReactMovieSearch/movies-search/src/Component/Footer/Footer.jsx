import styles from "./Footer.module.css";
import {FiMail } from "react-icons/fi"
import {BsLinkedin, BsGithub  } from "react-icons/bs"
import {AiOutlineCodepenCircle} from "react-icons/ai"

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>© 2022 Kashif Khan</div>
      <div className={styles.icons}>
        <div className={styles.icon}><FiMail /></div>
        <div className={styles.icon}><BsLinkedin /></div>
        <div className={styles.icon}><BsGithub /></div>
        <div className={styles.icon}><AiOutlineCodepenCircle /></div>
      </div>
    </div>
  );
}

export default Footer;
