import React, { useState } from "react";
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
    console.log(e);
  };

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
