'use client';
 
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
 
export default function Search({searchResults} : Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isSearching, setIsSearching] = useState(false);

  const files = JSON.parse(searchResults).map((file: {
      file_name: string
  }) => {
      return(
          <div key={file.file_name} className='py-1'>
              {file.file_name}
          </div>
        )
  })

  function handleSearch(term: string) {
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='w-full relative z-10'>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input 
          className="absolute z-30 peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          onFocus={() => setIsSearching(true)}
          onBlur={() => setIsSearching(false)}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
          placeholder={'type your filename here'}
        />
        {isSearching && <div className='absolute -top-2 w-full z-20 pt-14 p-2 bg-white drop-shadow-lg rounded-md'>
          {files}
        </div>}
    </div>
  );
}

interface Props {
  searchResults: string
}