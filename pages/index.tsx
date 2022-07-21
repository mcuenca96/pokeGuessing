import type { NextPage } from "next";

import Header from "@components/Header";
import Silhouette from "containers/Silhouette";
import InputArea from "containers/InputArea";
import SolutionButton from "containers/SolutionButton";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-500">
      <Header />
      <div className="flex grow">
        <div className="w-1/4 p-4">GENERATIONS</div>
        <div className="flex flex-col items-center justify-center align-middle rounded-lg bg-slate-400 p-8 w-3/5 m-auto">
          <Silhouette />
          <InputArea />
        </div>
        <div className="w-1/5 p-4">
          <SolutionButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
