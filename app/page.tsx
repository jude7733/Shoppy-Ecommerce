import Category from "@/components/category";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto">
      <HeroSection />
      <Category />
    </div>
  );
}
