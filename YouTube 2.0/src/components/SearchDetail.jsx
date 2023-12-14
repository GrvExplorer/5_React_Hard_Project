import { useEffect, useState } from 'react'
import { fetchYoutubeSearch } from '../utils/fetchFromAPI'
import { Loader, NavBar, SideBar, Videos } from '.'

function SearchDetail({loading, setLoading}) {
  const [videos, setVideos] = useState()

  useEffect(() => {
    setLoading(true)
    fetchYoutubeSearch('search/').then(res => {
      setLoading(false)
      setVideos(res.items)
    }).catch(err => {console.log(err)
    
    setLoading(false)
    })
  
  }, [])
  
  return (
 <>
 <NavBar />
  <div className='flex '>
  <div className="fixed flex">
          <SideBar />
          <div className="h-screen w-[1px] bg-gray-500"></div>
    </div>
    <Videos videos={videos} loading={loading} />
  </div>
 </>
  )
}

export default SearchDetail