import HeroSection from "./HeroSection/HeroSection";
import Presentation from "./Presentation";

export default function Homepage({ in3DWorld }: { in3DWorld: boolean }) {
  return (
    <>
      <HeroSection in3DWorld={in3DWorld} />
      <Presentation />
    </>
  );
}
