import NavBar from '@/components/global/navbar'
import LandingScreen from '@/components/home/landing-screen'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div data-theme="retro">
        <NavBar />
        <LandingScreen />
        <div>hello</div>
      </div>
    </main>
  )
}
