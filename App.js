import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FirstScreen from "./src/screens/FirstScreen";
import SecondScreen from "./src/screens/SecondScreen";
import ThirdScreen from "./src/screens/ThirdScreen";
import AddImage from "./src/screens/ThirdScreen";
import HorizontalImage from "./src/screens/ThirdScreen";
import ChallengeScreen from "./src/screens/ThirdScreen";
import FourthScreen from "./src/screens/FourthScreen";
import Challenge4 from "./src/screens/FourthScreen";
import InstagramHomeScreen from "./src/screens/InstagramHomeScreen";
import SolarSystemScreen from "./src/screens/SolarSystemScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <FirstScreen/> */}
      {/* <SecondScreen/> */}
      {/* <ThirdScreen/> */}
      {/* <AddImage/> */}
      {/* <HorizontalImage/> */}
      {/* <ChallengeScreen/> */}
      {/* <FourthScreen/> */}
      {/* <Challenge4/> */}
      <InstagramHomeScreen/>
      {/* <SolarSystemScreen/> */}
    </SafeAreaProvider>
  )
}

export default App;