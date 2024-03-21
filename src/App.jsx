
import { Route, Routes } from "react-router"
import NavBar from "./components/NavBar"
import TimelineMindmap from "./components/TimelineMindmap"
import Home from "./components/Home"
import Stats from "./components/Stats"

const App = () => {
  return (
    <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/process" element={<TimelineMindmap />} />
      <Route path="/stats" element={<Stats />} />

    </Routes>
    </div>
  )
}

export default App
