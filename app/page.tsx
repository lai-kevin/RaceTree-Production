import NavBar from '@/components/global/navbar'
import LandingScreen from '@/components/home/landing-screen'
import Intro from '@/components/home/intro'
import Footer from '@/components/global/footer'
import Games from '@/components/home/games'

export default function Home() {
  return (
    <main>
      <div data-theme="retro">
        <NavBar />
        <LandingScreen />
        <Intro />
        <Games />
        <Footer />
      </div>
    </main>
  )
}
