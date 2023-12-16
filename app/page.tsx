import NavBar from '@/components/global/navbar'
import LandingScreen from '@/components/home/landing-screen'
import Intro from '@/components/home/intro'
import Footer from '@/components/global/footer'
import Stewarding from '@/components/home/stewarding'
import Profiles from '@/components/home/profiles'
import Represent from '@/components/home/represent'

export default function Home() {
  return (
    <main>
      <div data-theme="retro">
        <NavBar />
        <LandingScreen />
        <Intro />
        <Stewarding />
        <Profiles />
        <Represent />
        <Footer />
      </div>
    </main>
  )
}
