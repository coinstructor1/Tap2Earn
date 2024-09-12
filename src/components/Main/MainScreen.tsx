import LevelTicker from "./LevelTicker";
import UserTicker from "./UserTicker";
import defaultUserImage from "../../hamster.svg";
import "./MainScreen.css";
function MainScreen() {
  let dummyUser = {
    name: "Jack Conev",
    image: defaultUserImage,
    earnPerTap: 1,
    coinsToLevelUp: 65,
    profitPerHour: 12,
    totalCoins: 1000,
  };
return (
    <div className="main-screen">
        <UserTicker user={dummyUser}></UserTicker>
        <LevelTicker user={dummyUser}></LevelTicker> 
    </div>
);
}

export default MainScreen;
