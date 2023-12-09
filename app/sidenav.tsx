import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import Image from 'next/image';

export default function SideNav() {
    return (
        <div className={styles.sideNav}>
            <Link className={styles.navButton} href="/">
                <Image 
                    src="/images/file-icon.png" 
                    alt="file-icon"
                    width={24} 
                    height={24}
                />
                <p className={styles.label}>Your Files</p>
            </Link>
            <Link className={styles.navButton} href="/settings">
                <Image 
                    src="/images/settings-icon.png" 
                    alt="settings-icon" 
                    width={24} 
                    height={24}
                />
                <p className={styles.label}>Settings</p>
            </Link>
        </div>
    )
}