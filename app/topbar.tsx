import styles from "@/app/ui/home.module.css"

export default function TopBar() {
    return (
        <div className={styles.topBar}>
            <p className={styles.heading}>CloudCanvas</p>
        </div>
    );
}