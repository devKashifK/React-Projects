import { Component } from "react";
import styles from "./header.module.css";
import { IoMdArrowDropdown } from "react-icons/io";

class Header extends Component {
  render() {
    return (
        <div className={styles.HeaderContainer}
        >
        <div className={styles.topBar}
        >
Now get exciting rewards on learning. <a href="./"> Know More </a>
        </div>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <h2>EDYODA</h2>
            <p className={styles.logoText}>Stories</p>
          </div>
          <div className={styles.selectCategory}>
        Explore Category <IoMdArrowDropdown />
          </div>
        </div>
        <div className={styles.rightSide}>
          <p className={styles.text}>
            EdYoda is free learning and knowledge sharing platform for techies
          </p>
          <button>Go To Main Website</button>
        </div>
      </div>
      </div>
    );
  }
}

export default Header;
