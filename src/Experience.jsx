import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { Level } from "./Level.jsx";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <Perf />
      <OrbitControls makeDefault />

      <Physics debug>
        <Lights />

        <Level />
      </Physics>
    </>
  );
}
