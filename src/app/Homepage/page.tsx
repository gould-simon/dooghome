
import Footer from "../Components/Footer"
import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import RealTimeSolution from "@/components/RealTimeSolution"
import Features from "@/components/Features"
import WaitlistCard from "@/components/WaitlistCard"
import HeroImage from "@/components/HeroImage"


export default function Homepage() {

    return (
        <div className="max-w-[1440px] mx-auto flex flex-col gap-[60px] md:gap-[120px]">
            <NavBar />
            <HeroSection />
            {/* Hero Image */}
            <HeroImage />

            <RealTimeSolution />
            <Features />

            <WaitlistCard />

            <Footer />
        </div>
    )
}
