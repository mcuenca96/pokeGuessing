import type { NextPage } from "next";

import Header from "@components/Header";
import Silhouette from "containers/Silhouette";
import InputArea from "containers/InputArea";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-500">
      <Header />
      <div className="flex flex-col items-center justify-center align-middle">
        <Silhouette />
        <InputArea />
      </div>
    </div>
  );
};

export default Home;
