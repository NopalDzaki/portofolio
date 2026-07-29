import Link from "next/link";
import FuzzyText from "@/components/ui/FuzzyText";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      <div className="relative mb-6">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={1.5}
          enableHover={true}
          gradient={["#3b82f6", "#8b5cf6"]} // primary to secondary
          fontSize="clamp(5rem, 25vw, 15rem)"
          fontWeight={900}
        >
          404
        </FuzzyText>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        Page Not Found
      </h2>

      <p className="text-foreground/70 mb-10 max-w-md text-center px-4 text-lg">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-primary/25"
      >
        Return to Home
      </Link>
    </div>
  );
}
