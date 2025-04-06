import "./commonResources/css/styles.css";
import "./commonResources/css/bootstrap.css";
import React from "react";
// import Header from "./Component/Header/header";
import Alert from "./Component/Main/alert";
import Sectionone from "./Component/Main/Sectionone";
import Sectiontwo from "./Component/Main/Sectiontwo";
import Sectionthree from "./Component/Main/Sectionthree";
import SectionFour from "./Component/main/Sectionfour";
import Sectionfive from "./Component/Main/Sectionfive";
import Sectionsix from "./Component/Main/Sectionsix";
// import Footer from "./Component/Footer/Footer";
import YoutubeVideos from "./Component/YoutubeVideos/YoutubeVideos";
import { Route, Routes } from "react-router";
import SharedRoute from "./Component/SharedRoute";
import Iphone from "./pages/IphonePage/Iphone";
import Mac from "./pages/Mac/Mac";
import Cart from "./pages/Cart/Cart";
import Four04 from "./pages/Four04/Four04";
import Ipad from "./pages/Ipad/Ipad";
import Music from "./pages/Music/Music";
import Support from "./pages/Support/Support";
import TV from "./pages/TV/Tv";
import Watch from "./pages/Watch/Watch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedRoute />}>
          <Route
            index
            element={
              <>
                <Alert />
                <Sectionone />
                <Sectiontwo />
                <Sectionthree />
                <SectionFour />
                <Sectionfive />
                <Sectionsix />
                <YoutubeVideos />
              </>
            }
          />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
