import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Machinery } from "@/components/sections/Machinery";
import { Clients } from "@/components/sections/Clients";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { Sustainability } from "@/components/sections/Sustainability";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Machinery />
      <Clients />
      <WhyUs />
      <Stats />
      <Sustainability />
      <Team />
      <Contact />
    </>
  );
}
