import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import Player from "./Player.jsx";
import useGame from "./stores/useGame.js";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  console.log(blocksCount);

  return (
    <>
      <Perf />

      <Physics debug>
        <Lights />
        <Level count={blocksCount} />
        <Player />
      </Physics>
    </>
  );
}
