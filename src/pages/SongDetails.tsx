import { useParams } from "react-router-dom";
import { DetailsHeader } from "../components/DetailsHeader";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { RelatedSongs } from "../components/RelatedSongs";
import {
  useAppDispatch,
  useAppSelector,
  usePlayPauseHanlders,
} from "../redux/hooks";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";
import { Song } from "../redux/types";

export const SongDetails = () => {
  const dispatch = useAppDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  /** TODO: Implement error when fetching in this function */
  const { data: songData, isFetching: isFectchingSongDetails } =
    useGetSongDetailsQuery({ songid });
  const {
    data,
    isFetching: isFectchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });

  const { handlePauseClick, handlePlayClick } = usePlayPauseHanlders();

  if (isFectchingRelatedSongs || isFectchingSongDetails) return <Loader />;
  if (error) <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => {
              return (
                <p key={i} className="text-gray-400 text-base my=1">
                  {line}
                </p>
              );
            })
          ) : (
            <p className="text-gray-400 text-base my=1">
              Sorry, no lyrics found!
            </p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        isPlaying={isPlaying}
        artistId={artistId}
        activeSong={activeSong as Song}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};
