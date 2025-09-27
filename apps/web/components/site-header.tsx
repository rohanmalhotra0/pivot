import Link from "next/link"
import { CommandMenu } from "~/components/command-menu"
import { Icons } from "~/components/icons"
import { MainNav } from "~/components/main-nav"
// import { MobileNav } from "~/components/mobile-nav"
import { ModeToggle } from "~/components/mode-toggle"
import { buttonVariants } from "~/components/ui/button"
import { siteConfig } from "~/config/site"
import { ny } from "~/lib/utils"

export async function SiteHeader() {
   return (
      <header
         className={ny(
            "supports-backdrop-blur:bg-background/90 bg-background/40 sticky top-0 z-40 w-full backdrop-blur-lg",
         )}
      >
         <div className="container flex h-16 items-center">
            <MainNav />
               {/* <MobileNav /> */}
            <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
               <div className="w-full flex-1 md:w-auto md:flex-none">
                  <CommandMenu />
               </div>
               <nav className="flex items-center gap-1">
                  {siteConfig.links.discord ? (
                     <Link
                        href={siteConfig.links.discord}
                        target="_blank"
                        rel="noreferrer"
                     >
                     <div
                        className={ny(
                           buttonVariants({
                              variant: "ghost",
                           }),
                           "w-9 px-0",
                        )}
                     >
                        <Icons.discord className="size-4" />
                        <span className="sr-only">Discord</span>
                     </div>
                     </Link>
                  ) : null}
                  <ModeToggle />
               </nav>
            </div>
         </div>
         <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
      </header>
   )
}
