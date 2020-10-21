import React, { useEffect, useState } from "react";
import "./App.css";

import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

import About from "../sections/About";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Works from "../sections/Works";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

function App() {
  const [section, setSection] = useState();

  const showIndex = (e) => {
    setSection(e);
  };

  useEffect(() => {
    setSection(0);
  }, []);

  return (
    <div className="App">
      <BindKeyboardSwipeableViews onChangeIndex={(e) => showIndex(e)}>
        <Home />
        <About />
        <Works />
        <Contact />
      </BindKeyboardSwipeableViews>
    </div>
  );
}

export default App;
