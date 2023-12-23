import TopBar from '@/components/topbar';
import CourseList from './courseList'

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
})  {
  const query = searchParams?.query || '';
  
  return (
    <>
      <TopBar query={query}/>
      <CourseList />
    </>
  );
}
