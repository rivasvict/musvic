import { Igenre, genres } from "../assets/constants";
import SongCard from "../components/SongCard";
import { Song } from "../redux/types";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectGenreListId } from "../redux/features/playerSlice";
import { addFavorite, removeFavorite } from "../redux/features/favoriteSlice";

const useFavorite = () => {
  const { favoriteSongs } = useAppSelector((state) => state.favorite);
  const dispatch = useAppDispatch();

  const toggleFavorite = (songKey: string) => {
    const isFavorite = favoriteSongs.find((favorite: string) => favorite === songKey);
    if (!isFavorite) {
      dispatch(addFavorite(songKey))
    } else {
      dispatch(removeFavorite(songKey))
    }
  };

  return {
    favoriteSongs,
    toggleFavorite
  }
}

const Discover = () => {
  const dispatch = useAppDispatch();
  const { favoriteSongs, toggleFavorite } = useFavorite();
  const { activeSong, isPlaying, genreListId } = useAppSelector((state) => {
    return state.player;
  });
  const { data, isFetching, error } = useGetSongsByGenreQuery({ genre: genreListId || 'POP' });

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value })=> value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
        <select
          onChange={(event) => {dispatch(selectGenreListId(event.target.value))}}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre: Igenre) => {
            return (
              <option value={genre.value} key={genre.value}>
                {genre.title}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: Song, index: number) => {
          const isFavorite = !!favoriteSongs.find((favoriteSong: string) => favoriteSong === song.key);
          /** TODO: add song.key instead */
          return (
            <SongCard
              key={index}
              song={song}
              i={index}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              isFavorite={isFavorite}
              onClickFavorite={toggleFavorite}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Discover;
