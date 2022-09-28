import { useParams } from "react-router-dom";
import { DetailsHeader } from "../components/DetailsHeader";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

export const SongDetails = () => {
  const dispatch = useAppDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data: songData, isFetching: isFectchingSongDetails } = useGetSongDetailsQuery({ songid });
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} songData={songData} />
      <div className='mb-10'>
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((line, i) => {
            return (
              <p key={i} className='text-gray-400 text-base my=1'>{line}</p>
            );
          }) : <p className='text-gray-400 text-base my=1'>Sorry, no lyrics found!</p>}
        </div>
      </div>
    </div>
  );
}