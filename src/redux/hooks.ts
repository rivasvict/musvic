import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "./features/playerSlice";
import { AppDispatch, RootState } from "./store";
import { Song } from "./types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usePlayPauseHanlders = () => {
  const dispatch = useAppDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = ({ song, data, i }: { song: Song, data: Song[] , i: number }) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return { handlePauseClick, handlePlayClick };
}