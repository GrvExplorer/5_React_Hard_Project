import { useState } from 'react'
import { MdClear } from 'react-icons/md'
function Search() {
const [search, setSearch] = useState('')

  return (
    <div className='bg-white rounded-full'>
      <label htmlFor="search" className='flex items-center pr-4'>

      <input type="text" id='search' value={search}
      onChange={(e) => {
        setSearch(e.target.value)
      }}
      className='focus:outline-none cursor-pointer rounded-full text-2xl px-4 py-1' />
      <MdClear className='text-xl font-semibold' onClick={() => setSearch('')} />
      </label>
    </div>
  )
}

export default Search