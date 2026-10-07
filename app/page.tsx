import { SiteHeader } from '@/components/parade/site-header'
import { Hero } from '@/components/parade/hero'
import { Countdown } from '@/components/parade/countdown'
import { Experience } from '@/components/parade/experience'
import { Balloons } from '@/components/parade/balloons'
import { Scrapbook } from '@/components/parade/scrapbook'
import { SiteFooter } from '@/components/parade/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Countdown />
        <Experience />
        <Balloons />
        <Scrapbook />
      </main>
      <SiteFooter />
    </>
  )
}
