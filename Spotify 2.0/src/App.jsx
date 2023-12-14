import { useEffect, useState } from "react";
import { Artiest, Poster, Title } from "./demo"; 

const App = () => {
  const [tracks, setTracks] = useState();

  async function Toptracks() {
    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
    const token =
      "BQD-9ZPeH9SjYcxDRdIz7M9hLkf4k6wh3Bz65DClveP6NFDQhQel9c2zG6xICs6Ly5pyRKZZFVMjcW9kOG6mxB9oWI8oNOFDwV0pT_bOxNDWonu7uKJuHEdarGJz2JvF_3x8GelqdZAE1qlRpeFVCX5MeTAKLKXkwe8meFJpz_3xGh6DAW2lwIQoFwsaOYpURVikRt1R1-_-kN1z004IpR4QWIzitUbKKVnsqZ_R0iU5jDeRPsbwiUz7NNipJJE9MZuMaRpONn_rIhsDWx_CCaqz";
    async function fetchWebApi(endpoint, method, body) {
      const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body),
      });
      return await res.json();
    }

    async function getTopTracks() {
      // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
      return (
        await fetchWebApi(
          "v1/me/top/tracks?time_range=long_term&limit=20",
          "GET",
        )
      ).items;
    }

    const topTracks = await getTopTracks();
    setTracks(topTracks);
  }

  useEffect(() => {
    Toptracks();
  }, []);

  return (
    <>
      <p className="text-4xl font-bold">Discover Soul</p>
      <div className="flex w-full flex-wrap  justify-center gap-8 bg-black p-20 text-white">
        {tracks?.map(
          ({
            name,
            artists,
            preview_url,
            external_ids,
            href,
            album: { images },
          }) => (
            <div
              key={external_ids.isrc}
              className="flex h-fit flex-col gap-2 bg-gray-600 p-4"
            >
              <a href={preview_url}>
                <img
                  src={images[0]?.url}
                  alt=""
                  srcSet=""
                  className="h-80 w-96"
                />
              </a>
              <p className=" space-x-4 pl-4 text-4xl font-semibold text-black ">
                {name}
              </p>
              <p className="pl-6 text-xl font-medium text-black">
                {" "}
                {artists?.map((v) => v.name).join(", ")}{" "}
              </p>
            </div>
          ),
        )}
      </div>
    </>
  );
};

export default App;
