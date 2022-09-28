import { Route, Routes } from "react-router-dom"
import MusicPlayer from "./components/MusicPlayer";
import { Sidebar } from "./components/Sidebar";
import { TopPlay } from "./components/TopPlay";
import { AroundYou } from "./pages/AroundYou";
import { ArtistDetails } from "./pages/ArtistDetails";
import Discover from "./pages/Discover"
import { SongDetails } from "./pages/SongDetails";
import { TopArtists } from "./pages/TopArtists";
import { TopCharts } from "./pages/TopCharts";
import { useAppSelector } from "./redux/hooks"

function App() {
  const { activeSong } = useAppSelector((store) => store.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path='/' element={<Discover />} />
              <Route path='/songs/:songid' element={<SongDetails />} />
              <Route path='/artists/:id' element={<ArtistDetails />} />
              <Route path='/around-you' element={<AroundYou />} />
              <Route path='/top-charts' element={<TopCharts />} />
              <Route path='/top-artists' element={<TopArtists />} />
              {/* <Searchbar />*/}
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 hfit">
            <TopPlay />
          </div>
        </div>
      </div>
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}

export default App
