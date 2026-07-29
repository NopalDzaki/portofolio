"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggleWrapper() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatedThemeToggler
      className="p-2 rounded-full bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-colors pointer-events-auto"
      variant="circle"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      onThemeChange={(theme) => setTheme(theme)}
    />
  );
}
