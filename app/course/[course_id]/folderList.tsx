import MongoDb from "@/app/lib/database";
import styles from "@/app/ui/home.module.css";
import Image from 'next/image';
import Link from "next/link";

export default async function FolderList({ course_id } : Props) {
    const db : MongoDb = await MongoDb.getDb();
    const course = await db.getCourse(course_id);
    const folders = course.folders.map((folder : {
        folder_name : string,
        _id: number
    }) => {
        return (
            <Link className={styles.document} href={"./folder/" + folder._id}>
                <Image 
                    src='/images/file-orange.png' 
                    alt="file-icon"
                    width={38}
                    height={32}
                />
                <p>{folder.folder_name}</p>
            </Link>
        )
    });
    return (
        <div className={styles.documentList}>
            {folders}
        </div>
    )
}

interface Props {
    course_id: number
}