
import styles from "./page.module.css";


export default function LoadingPostDetails() {
    return(
        
    <div className={styles.loader}>
        <div data-glitch="Loading..." className={styles.glitch}>Loading...</div>
    </div>
    );
}