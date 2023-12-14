import { Loader, VideosCard } from ".";


function Videos({videos, loading}) {
  return (
    <>
    {loading ? <Loader/> : (
      <div className="pl-64 pt-36 pb-4 w-full bg-Neutral text-white flex gap-4 flex-wrap">
      {videos.map((v, i) => 
        <VideosCard key={i} video={v} />
      )}
    </div>
    )}
    </>
  );
}

export default Videos;
