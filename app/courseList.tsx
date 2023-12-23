import MongoDb from "@/app/lib/database";
import styles from "@/app/ui/home.module.css";
import Image from 'next/image';
import Link from "next/link";

export default async function CourseList() {
    const db : MongoDb = await MongoDb.getDb();
    const user = await db.getUser();
    const courses = user.courses.map((course : {
        course_name : string,
        _id: number
    }) => {
        return (
            <Link className={styles.document} href={"./course/" + course._id}>
                <Image 
                    src='/images/file-orange.png' 
                    alt="file-icon"
                    width={38}
                    height={32}
                />
                <p>{course.course_name}</p>
            </Link>
        )
    });
    return (
        <div className={styles.documentList}>
            {courses}
        </div>
    )
}