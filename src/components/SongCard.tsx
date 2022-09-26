import { Link } from "react-router-dom";
import { Song } from "../redux/types";
import { PlayPause } from "./PlayPause";

const SongCard = ({ song, i }: { song: Song; i: string }) => {
  const activeSong = { title: "Test" };

  const handlePauseClick = () => {};

  const handlePlayClick = () => {

  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 background-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause song={song} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} />
        </div>
        <img alt='son_img' src={song.images?.coverart} />
      </div>
      <div
        className="mt-4 flex flex-col"
      >
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : `/top-artists` }>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
