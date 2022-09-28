import { useParams } from "react-router-dom";
import { DetailsHeader } from "../components/DetailsHeader";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { RelatedSongs } from "../components/RelatedSongs";
import {
  useAppSelector,
} from "../redux/hooks";
import {
  useGetArtistDetailsQuery
} from "../redux/services/shazamCore";
import { Song } from "../redux/types";

export const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  /** TODO: Implement error when fetching in this function */

  const { data: artist, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistid: artistId });

  if (isFetchingArtistDetails) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artist} />
      <RelatedSongs
        data={Object.values(artist?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong as Song}
      />
    </div>
  );
};
