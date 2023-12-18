import { Loader, VideosCard } from ".";


function Videos({videos, loading}) {
  console.log(videos);
  return (
    <>
    {loading ? <Loader/> : (
      <div className="w-full bg-Neutral text-white flex gap-4 flex-wrap">
      {videos.map((v, i) => 
        <VideosCard key={i} video={v} />
      )}
    </div>
    )}
    </>
  );
}

export default Videos;
