import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import MainContainer from "./components/MainContainer"
import { useState } from "react"

function App() {

  const [showSidebar,setShowSidebar] = useState(false);

  return (

      <div className={`min-h-screen max-h-fit bg-[#FAFAFA] flex w-screen ${showSidebar?"max-sm:h-screen max-sm:overflow-hidden":""}`}>
        <Sidebar showSidebar={showSidebar} />
        <MainContainer showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </div>
    
  )
}

export default App
