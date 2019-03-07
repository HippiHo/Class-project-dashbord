import React from "react";
import Decider from "./widgets/decider/Decider";
import QuoteMachine from "./widgets/QuoteMachine/QuoteMachine";
import Countdown from "./widgets/countdown/Countdown";
import Colors from "./widgets/colors/Colors";
import Activity from "./widgets/activity/Activity";
import LastFM from "./widgets/lastfm/LastFM";
import DrumKit from "./widgets/drumkit/DrumKit";
import LostOrNot from "./widgets/lostOrNot/LostOrNot";
import PlayMusic from "./widgets/playMusic/PlayMusic";
import YoutubeWidget from "./widgets/youtubeWidget/YoutubeWidget";
import Advice from "./widgets/advice/Advice";
import Giphy from "./widgets/giphy/Giphy";
import Population from "./widgets/population/Population";

const widgets = [
  {
    name: "Decider",
    component: <Decider />,
    className: "small",
    id: "1",
    mounted: true,
    developerName: "Tommey"
  },
  {
    name: "LostOrNot",
    component: <LostOrNot />,
    className: "small",
    id: "ddd01928738924734",
    mounted: true,
    developerName: "Ryan"
  },
  {
    name: "YoutubeWidget",
    component: <YoutubeWidget />,
    className: "medium",
    id: "2",
    mounted: true,
    developerName: "Angelina"
  },
  {
    name: "Countdown",
    component: <Countdown />,
    className: "small",
    id: "3",
    mounted: true,
    developerName: "Klara"
  },
  {
    name: "Activity",
    component: <Activity />,
    className: "small",
    id: "4",
    mounted: true,
    developerName: "Tommey"
  },
  {
    name: "Last FM",
    component: <LastFM />,
    className: "small",
    id: "5",
    mounted: true,
    developerName: "Elise & Elisa"
  },
  {
    name: "Colors",
    component: <Colors />,
    className: "small",
    id: "6",
    mounted: true,
    developerName: "Elise"
  },
  {
    name: "DrumKit",
    component: <DrumKit />,
    className: "small",
    id: "ddd01928738924730",
    mounted: true,
    developerName: "ReneRainer"
  },
  {
    name: "Sound",
    component: <PlayMusic />,
    className: "small",
    id: "ddd01928738924731",
    mounted: true,
    developerName: "Rainer"
  },
  {
    name: "Advice",
    component: <Advice />,
    className: "small",
    id: "123456",
    mounted: true,
    developerName: "Elise"
  },
  {
    name: "Once upon a Gif",
    component: <Giphy />,
    className: "small",
    id: "ddd01928738924740",
    mounted: true,
    developerName: "adhedgehog"
  },
  {
    name: "QuoteMachine",
    component: <QuoteMachine />,
    className: "medium",
    id: "45673",
    mounted: true,
    developerName: "Johnny"
  },
  {
    name: "Population",
    component: <Population />,
    className: "small",
    id: "14",
    mounted: true,
    developerName: "Rainer"
  }
];
export default widgets;
