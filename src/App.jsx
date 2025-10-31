import Navbar from "./Navbar"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import BookClasses from "./pages/BookClasses"
import Contact from "./pages/Contact"
import SupportUs from "./pages/SupportUs"
import MeetOurTeam from "./pages/MeetOurTeam"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/BookClasses" element={<BookClasses />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SupportUs" element={<SupportUs />} />
          <Route path="/MeetOurTeam" element={<MeetOurTeam />} />
        </Routes>
      </div>
    </>
  )
}

export default App
