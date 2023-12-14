import React, { useEffect } from "react";
import Navigation from "./src/navigation";
import { PaperProvider } from 'react-native-paper';
import BootSplash from "react-native-bootsplash";
const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);
  return (
    <Navigation />
  ) 
};

export default App;
