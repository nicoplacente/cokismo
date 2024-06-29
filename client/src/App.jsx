import SectionContainer from "./components/SectionContainer";
import Ruleta from "./components/Ruleta";
import Hero from "./components/Hero";
import SocialButtons from "./components/SocialButtons";
import { Youtube, Ig, Portfolio } from "./components/icons/icons";

const redes = [
  {
    icon: <Youtube />,
    link: "https://www.youtube.com/@nicoplacente",
    label: "Youtube de Nico",
  },
  {
    icon: <Ig />,
    link: "https://www.instagram.com/nicoplacente/",
    label: "Instagram de Nico",
  },
  {
    icon: <Portfolio />,
    link: "https://nicoplacente.netlify.app/",
    label: "Portfolio de Nico",
  },
];

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <SectionContainer classname="hero-img">
        <Hero />
      </SectionContainer>
      <SectionContainer classname="relative">
        <Ruleta />
        <footer className="bg-hover w-full flex flex-col gap-4 p-4 sm:p-12 bottom-0 absolute">
          <h4 className="text-center text-balance">Seguime en mis redes</h4>
          <ul className="flex gap-6 justify-center">
            {redes.map((red, index) => (
              <SocialButtons key={index} ariaLabel={red.label} href={red.link}>
                {red.icon}
              </SocialButtons>
            ))}
          </ul>
        </footer>
      </SectionContainer>
    </main>
  );
}
