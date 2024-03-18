import Hero from "@/components/about/hero"
import Mv from "@/components/about/mv"
import PublicFooter from "@/components/shared/PublicFooter"
import PublicNavBar from "@/components/shared/PublicNavBar"

const page = () => {
  return (
    <main className="text-seconday-3 relative overflow-hidden bg-light-4 text-xl font-semibold">
        <PublicNavBar />
        <Hero />
        <Mv />
        <PublicFooter />
    </main>
  )
}

export default page