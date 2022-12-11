import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${props.image}`}
        alt={props.title}
      />
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
