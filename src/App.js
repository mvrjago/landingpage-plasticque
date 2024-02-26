import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Landingpage from "./component/Landingpage";
import MemberCount from "./component/MemberCount";
import Event from "./component/Event";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Team from "./component/Team";
import EventDetail from "./component/EventDetail";

function App() {
  return (
    <div className="my-bg">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={[<Landingpage />, <MemberCount />, <Event />, <Team />]}
          />
          <Route path="/show/:id" element={<EventDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
