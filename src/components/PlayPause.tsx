import { Song } from "../redux/types";

export const PlayPause = ({
  song,
  handlePauseClick,
  handlePlayClick,
}: {
  song: Song;
  handlePauseClick: () => {};
  handlePlayClick: () => {};
}) => {
  return <div>PlayPause works</div>;
};
