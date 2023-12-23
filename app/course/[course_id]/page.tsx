import FolderList from './folderList';
import TopBar from '@/components/topbar';

export default async function Page({ params, searchParams } : PageProps) {
    const query = searchParams?.query || '';

    return (
        <>
            <TopBar query={query}/>
            <FolderList course_id={params.course_id} />
        </>
    );
    
}

interface PageProps {
    params : {
        course_id : number
    },
    searchParams?: {
        query?: string;
    };
}