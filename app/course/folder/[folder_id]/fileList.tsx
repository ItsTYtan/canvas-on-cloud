import MongoDb from "@/app/lib/database";
import styles from "@/app/ui/home.module.css";
import Image from 'next/image';
import Link from "next/link";

export default async function FileList({ folder_id } : Props) {
    const db : MongoDb = await MongoDb.getDb();
    const folder = await db.getFolder(folder_id);
    const folders = folder.files.map((file : {
        file_name : string,
        _id: number,
        url: string
    }) => {
        return (
            <Link className={styles.document} href={file.url}>
                <Image 
                    src='/images/file-orange.png' 
                    alt="file-icon"
                    width={38}
                    height={32}
                />
                <p>{file.file_name}</p>
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
    folder_id : number
}