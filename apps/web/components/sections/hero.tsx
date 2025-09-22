import { allDocs } from "content-collections"
import { compareDesc } from "date-fns"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

import TechStack from "~/components/tech-stack"
import { buttonVariants } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { ny } from "~/lib/utils"

export default async function Hero() {
   const post = allDocs
      .filter(
         (post) =>
            post.date &&
            post.date <= new Date().toISOString() &&
            post.published,
      )
      .sort((a, b) => {
         if (!a.date && !b.date) return 0 // Both dates are undefined, keep original order
         if (!a.date) return 1 // Move a to the end if date is undefined
         if (!b.date) return -1 // Move b to the end if date is undefined
         return compareDesc(new Date(a.date), new Date(b.date)) // Both dates are defined, proceed with comparison
      })[0]

   return (
      <section id="hero">
         <div className="relative h-full overflow-hidden py-5 md:py-14">
            <div className="z-10 flex flex-col">
               <div className="mt-10 grid grid-cols-1 md:mt-20">
                  <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
                     <Link
                        href="/about"
                        className={ny(
                           buttonVariants({
                              variant: "outline",
                              size: "sm",
                           }),
                           "rounded-full",
                        )}
                     >
                        🚀{" "}
                        <Separator
                           className="mx-2 h-4"
                           orientation="vertical"
                        />
                        Physics-Driven Innovation
                        <ChevronRight className="text-muted-foreground ml-1 size-4" />
                     </Link>
                     <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                        <h1
                           className={ny(
                              "text-black dark:text-white",
                              "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                              "text-balance text-left font-semibold tracking-tighter md:text-center",
                              "text-5xl sm:text-7xl md:text-7xl lg:text-7xl",
                           )}
                        >
                           PIVOT
                        </h1>
                     </div>

                     <p className="max-w-xl text-balance text-left text-base tracking-tight text-black md:text-center md:text-lg dark:font-medium dark:text-white ">
                        At PIVOT, we specialize in applying physics across a broad spectrum of fields—from{" "}
                        <b>engineering</b> and <b>economics</b> to <b>physics-driven philanthropy</b>.
                        <br />
                        As a nonprofit organization at <b>Virginia Tech</b>, we harness the power of physics to gain insights and develop impactful solutions for global challenges.
                     </p>

                     <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                        <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                           <Link
                              href="/research"
                              className={ny(
                                 buttonVariants({
                                    variant: "rainbow",
                                    size: "lg",
                                 }),
                                 "w-full gap-2",
                              )}
                           >
                              Explore Research
                              <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                           </Link>
                           <Link
                              href="/join"
                              className={ny(
                                 buttonVariants({
                                    size: "lg",
                                    variant: "rainbow-outline",
                                 }),
                                 "w-full gap-2",
                              )}
                           >
                              Join Our Mission
                              <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative mx-auto flex w-full max-w-56 items-center justify-center">
                  <TechStack
                     className="mx-auto flex w-full items-center justify-between"
                     technologies={[
                        "physics",
                        "engineering",
                        "economics",
                        "philanthropy",
                        "innovation",
                     ]}
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
