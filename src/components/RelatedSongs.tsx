import { Song } from "../redux/types";
import SongBar from "./SongBar";

export const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  artistId,
  handlePauseClick,
  handlePlayClick,
}: {
  data: Song[];
  isPlaying: boolean;
  activeSong: Song;
  artistId?: string,
  handlePlayClick?: ({
    song,
    data,
    i,
  }: {
    song: Song;
    data: Song[];
    i: number;
  }) => void;
  handlePauseClick?: () => void;
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">
        Related Songs:
      </h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, i) => {
          return (
            <SongBar
              key={`${song.key}-${artistId}`}
              i={i}
              song={song}
              artistId={artistId}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
              isPlaying={isPlaying}
            />
          )
        })}
      </div>
    </div>
  );
};
