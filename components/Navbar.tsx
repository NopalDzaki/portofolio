"use client";

import StaggeredMenu from "./StaggeredMenu";
import { useTheme } from "next-themes";
import { ThemeToggleWrapper } from "./ThemeToggleWrapper";
import { useEffect, useState } from "react";

export function Navbar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to dark before mounted to match layout.tsx's defaultTheme="dark"
  const isDark = mounted ? resolvedTheme === "dark" : true;

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "#about" },
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
      menuButtonColor={isDark ? "#ededed" : "#0a0a0a"}
      openMenuButtonColor={isDark ? "#0a0a0a" : "#ededed"}
      changeMenuColorOnOpen={true}
      colors={isDark ? ["#ffffff", "#3b82f6"] : ["#0a0a0a", "#3b82f6"]}
      accentColor="#3b82f6"
      headerLeftContent={<ThemeToggleWrapper />}
    />
  );
}
