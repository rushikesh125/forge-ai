import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CardStack } from './ui/card-stack'

const HeroSection = () => {
    const timelineData = [
        {
          title: "Upload Resume",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Built and launched Aceternity UI and Aceternity UI Pro from scratch
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://assets.aceternity.com/templates/startup-1.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/templates/startup-2.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Enter Job Description",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                I usually run out of copy, but when I see content this big, I try to
                integrate lorem ipsum.
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Lorem ipsum is for people who are too lazy to write copy. But we are
                not. Here are some more example of beautiful designs I built.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://assets.aceternity.com/pro/hero-sections.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/pro/bento-grids.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Forge Ai Process & Result",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Deployed 5 new components on Aceternity today
              </p>
              <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Card grid component
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Startup template Aceternity
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Random file upload lol
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Salman Bhai Fan Club registrations open
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://assets.aceternity.com/pro/hero-sections.png"
                  alt="hero template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/features-section.png"
                  alt="feature template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/pro/bento-grids.png"
                  alt="bento template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/cards.png"
                  alt="cards template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
        {
          title: "Suggestion for Improvement & Jobs ",
          content: (
            <div>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                Deployed 5 new components on Aceternity today
              </p>
              <div className="mb-8">
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Card grid component
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Startup template Aceternity
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Random file upload lol
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                  ✅ Salman Bhai Fan Club registrations open
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://assets.aceternity.com/templates/startup-3.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
                <img
                  src="https://assets.aceternity.com/templates/startup-4.webp"
                  alt="startup template"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            </div>
          ),
        },
      ];
  return (
    <>
    <BackgroundBeamsWithCollision
          className={`relative min-h-[90vh] md:min-h-[80vh] w-full`}
        >
          <div className="absolute h-52 w-52  lg:h-80 lg:w-80 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full z-10 blur-[110px]"></div>
          <div className="md:flex w-full justify-evenly ">
            <div className="w-full md:w-6/12   flex flex-col  items-center md:items-start mt-10 md:mt-0">
              <div className="inline-flex my-1 mx-auto md:mx-0 items-center gap-2 px-4 py-2  backdrop-blur-lg rounded-full border border-violet-100 dark:border-violet-800">
                <span className="text-violet-600 dark:text-violet-400">✨</span>
                <span className="text-gray-600 dark:text-gray-200">
                  Get personalized suggestions
                </span>
              </div>

              {/* <p className="text-gray-600 dark:text-gray-200"></p> */}
              <h2 className="text-2xl my-1 relative z-20 md:text-3xl  lg:text-4xl font-bold text-center md:text-left  text-black dark:text-white font-sans tracking-tight">
                Power Up Your Resume with <br />
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] my-1">
                  {/* <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Forge Ai</span>
              </div> */}
                  {/* <br/> */}
                  <div className="relative bg-clip-text md:text-5xl lg:text-7xl  text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ">
                    <span className="">Forge Ai</span>
                  </div>
                </div>
              </h2>
              {/* <Link
                href="/login"
                className="inline-block w-fit mx-auto md:mx-0 items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300"
              > */}
                <Link href="/login" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2 group">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              
            </div>
            <div className="w-full md:w-5/12 mt-24 md:mt-0 flex justify-center  ">
              <CardStack />
            </div>
          </div>
        </BackgroundBeamsWithCollision>
    </>
  )
}

export default HeroSection