import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swiper, { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode'
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { Song } from '../redux/types';

const TopChartCard = ({ song, index }: { song: Song, index: number }) => {
  return (
    <div className='w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2'>
      {song.title}
    </div>
  )
}

export const TopPlay = () => {
  const dispatch = useAppDispatch();
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);
  const { data } = useGetTopChartsQuery({});
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  });

  const topPlays = data?.slice(0, 5);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(true));
  };

  return (
    <div id='blabla' className='xl:mk-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col' ref={divRef}>
      <div className='w-full flex flex-col'>
        <div className='flex flex-row justify-between item-center'>
          <h2 className='text-white font-bold text-2xl'>Top Charts</h2>
          <Link to='/top-charts'>
            <p className='text-gray-300 cursor-pointer text-base'>See more</p>
          </Link>
        </div>
        <div className='empty-4 flex flex-col gap-1'>
          {topPlays?.map((song: Song, i: number) => {
            return (
              <TopChartCard key={song.key} song={song} index={i} />
            )
          })}
        </div>
      </div>
      <div className='w-full flex flex-col mt-8'>
        <div className='flex flex-row justify-between item-center'>
          <h2 className='text-white font-bold text-2xl'>Top Artists</h2>
          <Link to='/top-artists'>
            <p className='text-gray-300 cursor-pointer text-base'>See more</p>
          </Link>
        </div>
        <Swiper
          slidePerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?Map((song, i) => {
            <SwiperSlide
              key={song?.key}
              style={{width: '25%', height: 'auto'}}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${song?.artists[0].adamid}`}>
                <img src={song?.images.background} alt="name" className='rounded-full w-full object-cover' />
              </Link>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </div>
  );
};