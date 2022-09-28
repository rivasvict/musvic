import axios from "axios";
import { useEffect, useState } from "react";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import SongCard from "../components/SongCard";
import { useAppSelector } from "../redux/hooks";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Song } from "../redux/types";

export const TopCharts = () => {
  const { activeSong, isPlaying } = useAppSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery({});

  if (isFetching) return <Loader />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Top Charts
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: Song, index: number) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={index}
            />
          )
        })}
      </div>
    </div>
  );
}
