import styles from "./Search.module.css";

function Search(props) {
  return (
    <input
      onChange={(e) => props.searchHandler(e)}
      className={styles.search}
      type="text"
      placeholder="Search For Movie Title ... "
    />
  );
}

export default Search;
