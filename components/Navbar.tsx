"use client";

import StaggeredMenu from "./StaggeredMenu";
import { ThemeToggleWrapper } from "./ThemeToggleWrapper";

export function Navbar() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "#about" },
    {
      label: "Experience",
      ariaLabel: "View our experience",
      link: "#experience",
    },
    { label: "Projects", ariaLabel: "View our projects", link: "#projects" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
  ];

  const socialItems = [
    { label: "LinkedIn", link: "https://www.linkedin.com/in/naufal-dzaki11/" },
    { label: "GitHub", link: "https://github.com/NopalDzaki" },
    { label: "Email", link: "mailto:naufalforyou11@gmail.com" },
  ];

  return (
    <StaggeredMenu
      isFixed={true}
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="var(--ink)"
      openMenuButtonColor="var(--paper)"
      changeMenuColorOnOpen={true}
      colors={["var(--ink)"]}
      accentColor="var(--accent)"
      headerLeftContent={
        <div className="flex items-center gap-3 font-sans font-medium">
          <div className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center font-serif italic text-lg">
            N
          </div>
          <span className="text-sm tracking-wide hidden sm:block">Nopal / PORTFOLIO</span>
        </div>
      }
      headerRightContent={<ThemeToggleWrapper />}
    />
  );
}
