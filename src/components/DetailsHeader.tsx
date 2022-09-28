import { Link } from "react-router-dom";
import { Artist, ArtistData, Song, ArtistAttributes, Track } from "../redux/types";

export const DetailsHeader = ({
  artistId,
  artistData,
  songData,
}: {
  artistId?: string;
  artistData?: ArtistData;
  songData?: Track;
}) => {
  const artist = artistId && artistData?.artists[artistId].attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-1 from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            (artist as ArtistAttributes)?.artwork?.url
              .replace("{w}", "500")
              .replace("{h}", "500") || songData?.images?.coverart
          }
          alt="art"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {(artist as ArtistAttributes)?.name || songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`} className="text-base text-gray-400 mt-2">
              <p>{songData?.subtitle}</p>
            </Link>
          )}
          <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? (artist as ArtistAttributes)?.genreNames[0] : songData?.genres?.primary}</p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};
