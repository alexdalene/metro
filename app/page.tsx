import {
  LockOpen1Icon,
  MagnifyingGlassIcon,
  LightningBoltIcon,
  DiscordLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import logo from "@/public/metro-logo.webp";
import Link from "next/link";
const links: { name: string; href: string; icon: React.ReactNode }[] = [
  {
    name: "Regelverk",
    href: "#",
    icon: <LockOpen1Icon />,
  },
  {
    name: "Søk her",
    href: "#",
    icon: <MagnifyingGlassIcon />,
  },
  {
    name: "Discord",
    href: "#",
    icon: <DiscordLogoIcon />,
  },
];

const serverInfo: { name: string; value: string; icon: React.ReactNode }[] = [
  {
    name: "Spillere",
    value: "93 / 100",
    icon: <LightningBoltIcon />,
  },
  {
    name: "Karakterer",
    value: "123",
    icon: <PersonIcon />,
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-4">
      <ul className="flex gap-8 self-start uppercase items-center">
        <li>
          <Image src={logo} alt="Metro Logo" className="w-10 h-auto" />
        </li>
        {links.map((link) => (
          <li key={link.name} className="hover:underline">
            <a href={link.href} className="flex items-center gap-2">
              {link.icon}
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <h1 className="text-6xl font-bold leading-tight">
        Metro, byen som <br />
        <span className="text-primary">aldri sover</span>
      </h1>
      <ul className="flex gap-4 self-start mt-4">
        {serverInfo.map((info) => (
          <li
            key={info.name}
            className="flex flex-col bg-zinc-900 p-4 rounded-lg gap-4"
          >
            <span className="uppercase text-zinc-500 font-bold flex items-center gap-2">
              {info.icon}
              {info.name}
            </span>
            <span className="text-4xl font-bold text-primary">
              {info.value}
            </span>
          </li>
        ))}
        <li className="bg-primary rounded-lg gap-4 group hover:bg-zinc-50 transition-colors">
          <Link href="/join" className="w-full h-full">
            <button className="p-4 w-full h-full text-2xl flex items-center gap-2 text-zinc-900 font-bold uppercase group-hover:text-primary transition-colors">
              Bli med
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
