import PublicNavBar from "@/components/shared/PublicNavBar";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="text-seconday-3 relative overflow-hidden bg-primary-1 text-xl font-semibold">
      <PublicNavBar />
      <Hero />
    </main>
  );
}
