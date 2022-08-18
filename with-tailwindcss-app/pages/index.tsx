import Head from 'next/head'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import CalloutSection from '../components/callout-with-stat-section'

const navigation = [
  { name: 'The Dispatch', href: 'https://buttondown.email/MutualAidLA/archive/' },
  { name: 'Contribute', href: 'https://www.gofundme.com/f/mutualaidla' }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Experimenting with Tailwind</title>
        <link rel="icon" href="/favicon-master_transparent.png" />
        {/* Inter font */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      {/* page content */}
      <div className="relative bg-[#FAD60C] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-[#FAD60C] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-[#FF5B2B] transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          alt="Workflow"
                          className="h-8 w-auto sm:h-16"
                          src="/MALAN_Logo_yellowbox_whitebackground.png"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-slate-800 hover:text-slate-900" target="_blank">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-14 w-auto"
                          src="/MALAN_Logo_yellowbox_whitebackground.png"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-[#FF5B2B] bg-slate-50 hover:bg-slate-100"
                    >
                      Contribute
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-bold text-slate-800 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
                  <span className="block xl:inline">LA Mutual Aid</span>{' '}
                  <span className="block text-[#FF5B2B] xl:inline">Network</span>
                </h1>
                <p className="mt-3 text-base tracking-tight text-slate-800 sm:mt-5 sm:max-w-lg sm:mx-auto md:text-lg md:mt-5 lg:mx-0">
                  We’ve been doing some recalibrating and reorganizing over the last few months and are almost ready to present a whole menu of ways folks can get involved with Mutual Aid LA.<br/><br/>We encourage you to take a look at all of the published <a href="https://buttondown.email/MutualAidLA/archive/" className="font-medium underline underline-offset-2 transition hover:text-[#FF5B2B]">Mutual Aid LA Dispatches</a> and use them to find groups doing work in your neighborhood or just doing work that interests you.
                </p>
                {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border-2 border-white text-base rounded-md text-slate-700 bg-white bg-opacity-50 hover:bg-white hover:text-slate-800 md:text-lg transition"
                    >
                      Contribute
                    </a>
                  </div>
                </div> */}
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/rita-vicari-m6RCv8K0rTM-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      
      <CalloutSection />
    </div>
  )
}
