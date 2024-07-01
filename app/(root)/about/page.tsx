import Hero from "@/components/about/hero";
import Mv from "@/components/about/mv";
import Team from "@/components/about/team";
import PublicFooter from "@/components/shared/PublicFooter";
import PublicNavBar from "@/components/shared/PublicNavBar";

const page = () => {
  return (
    <main className="text-seconday-3 relative overflow-hidden bg-light-4 text-xl font-semibold">
      {/* added all the components of the About page   */}
      <PublicNavBar />
      <Hero />
      <Mv />
      <Team />
      <PublicFooter />
    </main>
  );
};

export default page;
