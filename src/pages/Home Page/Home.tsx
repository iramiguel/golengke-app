/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Headline from "./Headline";
import Main from "./MainContent";


// interface HomeProps {
//   query: string;
// }

const Home = () => {
  return (
    <div>
      <Hero />
      <Headline />
      <Main />
      <Reviews />

    </div>
  );
};

export default Home;
