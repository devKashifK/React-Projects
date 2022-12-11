import { Component } from "react";
import styles from "./Card.module.css";

class Card extends Component {
  render() {
    return (
      <div className={styles.postBox}>
        <img
          className={styles.image}
          src={this.props.image}
          alt={this.props.title}
        />
        <div className={styles.content}>
          <h4 className={styles.title}>{this.props.title}</h4>
          <span className={styles.postDetails}>
            <strong>{this.props.author}</strong> | {this.props.date}
          </span>
          <p className={styles.desc}>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Card;
