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
        <div className="md:hidden bg-neutral">
        <Intro />
          <div className="bg-base-200 rounded-2xl p-5">
            <h1 className="text-6xl pl-5 mb-5">Features: </h1>
            <Stewarding />
            <Represent />
            <Cheaters />
            <Profiles />
          </div>
        </div>
        <div className="flex justify-center bg-neutral">
          <div className="invisible hidden flex-col md:flex md:visible">
          <Intro />
            <div className="bg-base-200 p-5 m-10 rounded-3xl max-w-screen-2xl">
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
