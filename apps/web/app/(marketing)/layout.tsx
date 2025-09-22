import { SiteBanner } from "~/components/site-banner"
import { SiteFooter } from "~/components/site-footer"
import { SiteHeader } from "~/components/site-header"
import Particles from "~/registry/miami/ui/particles"
import { RetroGrid } from "~/registry/miami/ui/retro-grid"
import OrbitingCircles from "~/registry/miami/ui/orbiting-circles"

interface MarketingLayoutProps {
   children: React.ReactNode
}

export default async function MarketingLayout({
   children,
}: MarketingLayoutProps) {
   return (
      <>
        {/* Background effects: Particles, Retro Grid, and Orbiting Circles */}
        <div className="pointer-events-none fixed inset-0 -z-10">
           {/* Retro grid overlay */}
           <RetroGrid />

           {/* Particles across the entire home page */}
           <Particles
              className="absolute inset-0"
              quantity={140}
              size={0.6}
              staticity={60}
              ease={60}
              color="#ffffff"
              vx={0.03}
              vy={0.02}
           />

           {/* Subtle orbiting circles near center (hidden on small screens) */}
           <div className="absolute inset-0 hidden items-center justify-center md:flex">
              <div className="relative size-[34rem]">
                 <OrbitingCircles
                    className="size-[10px] border-none bg-transparent"
                    duration={24}
                    delay={12}
                    radius={110}
                    path={false}
                 >
                    <div className="size-2 rounded-full bg-white/60 dark:bg-white/40" />
                 </OrbitingCircles>
                 <OrbitingCircles
                    className="size-[14px] border-none bg-transparent"
                    duration={28}
                    delay={18}
                    radius={180}
                    reverse
                    path={false}
                 >
                    <div className="size-2 rounded-full bg-white/60 dark:bg-white/40" />
                 </OrbitingCircles>
              </div>
           </div>
        </div>
         {/* <SiteBanner /> */}
         <SiteHeader />
         <main className="flex-1">{children}</main>
         <SiteFooter />
      </>
   )
}
