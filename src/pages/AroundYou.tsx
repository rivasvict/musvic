import axios from "axios";
import { useEffect, useState } from "react";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import SongCard from "../components/SongCard";
import { useAppSelector } from "../redux/hooks";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";
import { Song } from "../redux/types";

export const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByCountryQuery({ country });

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_XOSY2p3xHxJxgrPVeMDcWHFouk3si`)
      .then((response) => {
        setCountry(response?.data?.location.country)
      })
      .catch((error) => {console.log(error)})
      .finally(() => setLoading(false))
  }, [country])

  if (isFetching && loading) return <Loader />;

  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You <span className="font-black">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: Song, index: number) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={index}
            />
          )
        })}
      </div>
    </div>
  );
}