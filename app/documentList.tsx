import MongoDb from "@/app/lib/database";
import styles from "@/app/ui/home.module.css";
import Image from 'next/image';

export default async function DocumentList() {
    const db : MongoDb = await MongoDb.getDb();
    const user = await db.getUser();
    const courses = user.courses.map((course : {course_name : string}) => {
        return (
            <div className={styles.document}>
                <Image 
                    src='/images/file-orange.png' 
                    alt="file-icon"
                    width={38}
                    height={32}
                />
                <p>{course.course_name}</p>
            </div>
        )
    });
    return (
        <div className={styles.documentList}>
            {courses}
        </div>
    )
}