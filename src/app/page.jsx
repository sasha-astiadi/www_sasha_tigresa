
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero';
import AudioPlayer from '@/components/ui/AudioPlayer';
import Booktear from '@/components/ui/Booktear';




export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-transparent">
        <AudioPlayer />
        <Hero />
              </main>
      <Footer />
    </>
  )
}