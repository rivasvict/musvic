import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorite } from "../redux/hooks";

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
