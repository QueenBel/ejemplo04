import React from "react";

// import components
import HouseList from "../components/HouseList";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="min-h-[1800px] bg-gray-400">
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
