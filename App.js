import React, { useEffect, useState } from "react";
import Navigation from "./src/navigation";
import { PaperProvider } from 'react-native-paper';
import { AnimatedBootSplash } from "./AnimatedBootSplash";

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
    <Navigation />
    {visible && (
      <AnimatedBootSplash
      onAnimationEnd={() => {
        setVisible(false);
      }}
      />
      )}
      </>
  ) 
};

export default App;