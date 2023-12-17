import { useEffect, useState } from "react";
import { Artiest, Poster, Title } from "./demo";

const App = () => {
  const [tracks, setTracks] = useState();

  async function Toptracks() {
    // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

    function getToken() {
      fetch("https://accounts.spotify.com/api/token", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "7f97b2cc559042fca9d3a248b1aaec01",
          client_secret: "c6ebd016d68747f8a270783a09421566",
        }),
      })
        .then((res) => {
          return res;
        })
        .catch((err) => console.log(err));
    }

    const token =     "BQCERs-1teQkh9z9UhgCHSyi3ofAMdbF1AdGJVvBZwrBBR9f_AxSl4YtrKMdQmTKfG-et1CWK8VwZdXQHreL5vXv1TCl7_W4nzVglIct14AIQ7i_Pmw"
    ;
    console.log(token);

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
      return (
        await fetchWebApi(
          "v1/me/top/tracks?time_range=long_term&limit=5",
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
