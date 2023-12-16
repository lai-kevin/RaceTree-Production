import NavBar from "@/components/global/navbar";
import LandingScreen from "@/components/home/landing-screen";
import Intro from "@/components/home/intro";
import Footer from "@/components/global/footer";
import Stewarding from "@/components/home/stewarding";
import Profiles from "@/components/home/profiles";
import Represent from "@/components/home/represent";
import Cheaters from "@/components/home/cheaters";

export default function Home() {
  return (
    <main>
      <div data-theme="retro">
        <NavBar />
        <LandingScreen />
        <Intro />
        <div className="md:hidden bg-neutral">
          <Stewarding />
          <Represent />
          <Cheaters />
          <Profiles />
        </div>
        <div className="flex justify-center bg-neutral">
          <div className="invisible hidden flex-col md:flex md:visible">
            <div className="bg-accent p-5 m-10 rounded-3xl">
              <h1 className="text-6xl pl-10">Features: </h1>
              <div className="flex flex-row mt-5">
                <div className="w-1/2">
                  <Stewarding />
                </div>
                <div className="w-1/2">
                  <Represent />
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-1/2">
                  <Cheaters />
                </div>
                <div className="w-1/2">
                  <Profiles />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
