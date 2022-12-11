import { Component } from "react";
import styles from "./Category.module.css";
import { FaFilter} from 'react-icons/fa'
import { filterCategory } from "../Data/Data";

class Category extends Component{

    render(){
        return(
            <div className={styles.filter}>
            <h1 className={styles.title}>Latest Posts</h1>
            <span className={styles.subtitle}> <FaFilter color="#3D84C3"/> Filter by Category</span>
            <div className={styles.category_container}>
            {filterCategory.map((item) => {
                return(
                    
                    <div className={styles.filterCategory}>{item}</div>
                )
            })}
            </div>
            </div>
        )
    }
}

export default Category