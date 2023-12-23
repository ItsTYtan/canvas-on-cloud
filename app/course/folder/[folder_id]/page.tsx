import TopBar from '@/components/topbar';
import FileList from './fileList';

export default async function Page({ params, searchParams } : PageProps) {
    const query = searchParams?.query || '';

    return(
        <>
            <TopBar query={query}/>
            <FileList folder_id={params.folder_id} />
        </>
    );
}

interface PageProps {
    params : {
        folder_id : number
    },
    searchParams?: {
        query?: string;
    };
}