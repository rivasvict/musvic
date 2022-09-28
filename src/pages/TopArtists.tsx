import { ArtistCard } from "../components/ArtistCard";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import SongCard from "../components/SongCard";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Song, Track } from "../redux/types";

export const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery({});

  if (isFetching) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Artists
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track: Track) => {
          return (
            <ArtistCard
              key={track.key}
              track={track}
            />
          )
        })}
      </div>
    </div>
  );
}

