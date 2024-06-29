import SocialButtons from "./SocialButtons";
import { Youtube, Ig, Twitter, Kick, Twitch } from "./icons/icons";

const redes = [
  {
    icon: <Youtube />,
    link: "https://www.youtube.com/@c0ker",
    label: "Youtube de C0ker",
  },
  {
    icon: <Ig />,
    link: "https://www.instagram.com/c0ker_/",
    label: "Instagram de C0ker",
  },
  {
    icon: <Twitter />,
    link: "https://x.com/c0ker_",
    label: "X de C0ker",
  },
  {
    icon: <Kick />,
    link: "https://kick.com/c0ker",
    label: "Kick de C0ker",
  },
  {
    icon: <Twitch />,
    link: "https://www.twitch.tv/c0ker",
    label: "Twitch de C0ker",
  },
];

export default function Hero() {
  return (
    <header className="w-full h-full flex flex-col justify-between">
      <h1 className="titulo text-3xl text-center text-white text-balance my-6 font-bold tracking-wide">
        Aguante el Cokismo y la Timba
      </h1>

      <ul className="flex gap-6 justify-center">
        {redes.map((red, index) => (
          <SocialButtons key={index} ariaLabel={red.label} href={red.link}>
            {red.icon}
          </SocialButtons>
        ))}
      </ul>
    </header>
  );
}
