import styles from "@/app/ui/home.module.css"
import Search from "./search";
import MongoDb from "@/app/lib/database";

export default async function TopBar({ query } : { query: string }) {
    const db = await MongoDb.getDb();
    const files = JSON.stringify(await db.searchFiles(query));

    return (
        <div className={styles.topBar}>
            <p className={styles.heading}>CloudCanvas</p>
            <Search searchResults={files}/>
        </div>
    );
}