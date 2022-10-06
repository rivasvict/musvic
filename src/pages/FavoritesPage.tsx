import { Igenre, genres } from "../assets/constants";
import SongCard from "../components/SongCard";
import { Song } from "../redux/types";
import { useGetSongsByGenreQuery, useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { useAppDispatch, useAppSelector, useFavorite } from "../redux/hooks";
import { selectGenreListId } from "../redux/features/playerSlice";

export const FavoritesPage = () => {
  const dispatch = useAppDispatch();
  const { favoriteSongs } = useFavorite();
  const { data: topPlaysData, isFetching: fetchingGetTopCharts } = useGetTopChartsQuery({});
  const topPlays = topPlaysData?.slice(0, 5);
  
  const { activeSong, isPlaying, genreListId } = useAppSelector((state) => {
    return state.player;
  });
  const { data, isFetching, error } = useGetSongsByGenreQuery({ genre: genreListId || 'POP' });

  if (isFetching || fetchingGetTopCharts) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const songsCollection = [ ...topPlays, ...data ];

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">My Favorites</h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songsCollection?.reduce((songs: Song[], song: Song, index: number) => {
          /** TODO: add song.key instead */
          if (favoriteSongs.find((songKey) => song?.key === songKey)) {
            return [...songs, (
              <SongCard
                key={index}
                song={song}
                i={index}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
              />
            )]
          }

          return songs;
        }, [])}
      </div>
    </div>
  );
};