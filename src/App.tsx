import { Route, Routes } from "react-router-dom"
import Discover from "./pages/Discover"

function App() {

  return (
    <div className="relative flex">
      {/* <Sidebar />*/}
      <div className="flex-1 flex flex-col1 bg-gradient-to-br from-black to-[#121286]">
        {/* <Searchbar />*/}
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex x1:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-48">
            <Routes>
              <Route path='/' element={<Discover />} />
            </Routes>
          </div>
          <div className="x1:sticky relative top-0 hfit">
            {/* <TopPlay />*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
