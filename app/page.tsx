import {
  LockOpen1Icon,
  MagnifyingGlassIcon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import logo from "@/public/metro-logo.webp";

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
      <h1 className="text-6xl font-bold">
        Metro, byen som <span className="text-primary">aldri sover</span>
      </h1>
    </div>
  );
}
