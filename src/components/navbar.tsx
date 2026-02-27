"use client"

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  RectangleStackIcon,
  CommandLineIcon,
  FingerPrintIcon,
  ClipboardDocumentCheckIcon,
  PhoneArrowDownLeftIcon,
} from "@/lib/mt";

const NAV_MENU = [
  {
    name: "Home",
    icon: RectangleStackIcon,
    href: "#"
  },
  {
    name: "About",  
    icon: FingerPrintIcon,
    href: "#skills"
  },
  {
    name: "Projects",
    icon: CommandLineIcon,
    href: "#projects"
  },
  {
    name: "Resume",
    icon: ClipboardDocumentCheckIcon,
    href: "#resume"
  },
  {
    name: "Contact",
    icon: PhoneArrowDownLeftIcon,
    href: "#contact-form"
  }
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-lg font-bold">
          Jack Hui | Web Developer
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex" >
          {NAV_MENU.map(({ name, icon: Icon, href}) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
                {name}
            </NavItem>
          ))}
        </ul>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
