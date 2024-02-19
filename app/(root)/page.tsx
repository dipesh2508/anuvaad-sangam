import PublicNavBar from "@/components/shared/PublicNavBar";
import PublicFooter from "@/components/shared/PublicFooter";
import Hero from "@/components/home/hero";
import Feature1 from "@/components/home/feature1";
import Feature2 from "@/components/home/feature2";
import CTA from "@/components/home/cta";
import Feature3 from "@/components/home/feature3";

export default function Home() {
  return (
    <main className="text-seconday-3 relative overflow-hidden bg-light-4 text-xl font-semibold">
      <PublicNavBar />
      <Hero />
      <Feature1 />
      <Feature2 />
      <CTA />
      <Feature3 />
      <PublicFooter />
    </main>
  );
}
