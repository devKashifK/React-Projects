import { Component } from "react";
import Card from "../Card/Card";
import { data } from "../Data/Data";
import styles from "./CardGrid.module.css";

class CardGrid extends Component {
  render() {
    return (
      <div className={styles.trendingPost}>
        <h2 className={styles.title}>Trending Post</h2>
        <div className={styles.trendingContainer}>
          {data.map((post) => {
            return <Card image={post.image} title = {post.Title} author = {post.author} date = {post.date} content = {post.content}/>;
          })}
        </div>
      </div>
    );
  }
}

export default CardGrid;
