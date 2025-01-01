import { HeroLeft } from "./HeroLeft";
import { HeroRight } from "./HeroRight";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row relative mt-16">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}