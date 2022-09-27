import { Song } from "../redux/types";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

export const PlayPause = ({
  song,
  handlePauseClick,
  handlePlayClick,
  activeSong,
  isPlaying,
}: {
  song: Song;
  handlePauseClick: () => {};
  handlePlayClick: () => {};
  activeSong: { title: string };
  isPlaying: boolean;
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePauseClick} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlayClick} />
  );
};
