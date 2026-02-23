import { Typography } from "@material-tailwind/react";
import { 
  AiFillGithub,
  AiFillLinkedin 
 } from "react-icons/ai";

const LINKS = [
  {
    name: "Github",  
    icon: AiFillGithub,
    href: "https://github.com/tingq3"
  },
  {
    name: "Linkedin",
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/jack-hui-2b9546342"
  }
];

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <ul className="flex gap-8 items-center">
            {LINKS.map(({name, icon: Icon, href}) => (
              <li key={name}>
                <Typography
                  as="a"
                  href={href}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors lg:flex gap-2"
                >
                  <Icon className="h-5 w-5" />
                    {name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
