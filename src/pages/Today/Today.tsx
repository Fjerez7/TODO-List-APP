import {Layout} from "../../components/Layout/Layout.tsx";
import styles from "./Today.module.css";
import {AddTaskPage} from "../../components/AddTaskPage/AddTaskPage.tsx";
import {useState} from "react";

export const Today = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <Layout>
            <div>
                <h1>Today</h1>
                <div className={styles.btnAddTask} onClick={() => setShowModal(true)}>
                    <span className={`pi pi-plus ${styles.iconAdd}`}/>
                    <p className={styles.labelAdd}>Add Task</p>
                </div>
                <div className={styles.addTaskModal}>
                    <AddTaskPage showModal={showModal} onClose={()=>setShowModal(false)}/>
                </div>
            </div>
        </Layout>
    );
}