import { Igenre, genres } from '../assets/constants';
import SongCard from '../components/SongCard';
import { Song } from '../redux/types';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery(undefined);
  console.log(data);
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white">Discover {genreTitle}</h2>
        <select
          name=""
          id=""
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre: Igenre) => {
            return (
              <option value={genre.title} key={genre.value}>{genre.title}</option>
            )
          })}
        </select>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {data?.map((song: Song, index: string) => {
          /** TODO: add song.key instead */
          return (
            <SongCard
              key={index}
              song={song}
              i={index}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Discover;
