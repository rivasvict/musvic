import { Song } from "../redux/types";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { SyntheticEvent } from "react";

export const PlayPause = ({
  song,
  handlePauseClick,
  handlePlayClick,
  activeSong,
  isPlaying,
  index
}: {
  song: Song;
  handlePauseClick: () => void;
  handlePlayClick: (song: Song, i: number) => void;
  activeSong?: Song;
  isPlaying: boolean;
  index: number
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePauseClick} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={() => handlePlayClick(song, index)} />
  );
};
