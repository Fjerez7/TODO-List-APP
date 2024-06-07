import {Layout} from "../../components/Layout/Layout.tsx";
import styles from "./Today.module.css";

export const Today = () => {
    return (
        <Layout>
            <h1>Today</h1>
            <div className={styles.todayContent}>
                <span className={`pi pi-plus ${styles.iconAdd}`}/>
                <p className={styles.labelAdd}>Add Task</p>
            </div>
        </Layout>
    );
}