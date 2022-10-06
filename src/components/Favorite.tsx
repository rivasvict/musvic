import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addFavorite, removeFavorite } from "../redux/features/favoriteSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

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

export const Favorite = ({
  songKey,
}: {
  songKey: string;
}) => {
  const { favoriteSongs, toggleFavorite } = useFavorite();
  const isFavorite = !!favoriteSongs.find((favoriteSong: string) => favoriteSong === songKey);

  return (
    <div
      className="text-white text-2xl"
      onClick={() => toggleFavorite(songKey)}
    >
      {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};
