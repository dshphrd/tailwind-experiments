const stats = [
  { label: 'Where', value: 'Saint James Park in LA', info: 'W Adams Blvd & Severance St' },
  { label: 'When', value: 'Thursdays @ 11:30am', info: '' }
]

export default function CalloutSection() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-full lg:px-20 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-[#C9E7F2] bg-opacity-20 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-[#C9E7F2] text-opacity-50" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Merch card*/}
            <div className="relative pt-40 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/krisztina-papp-ND5zJAxKRqo-unsplash.jpg"
                alt=""
              />
              <div className="absolute inset-0 bg-[#FF6234] mix-blend-multiply" />
              <div className="absolute inset-0" />
              <div className="relative px-8">
                <blockquote className="mt-8">
                  <div className="relative text-3xl font-bold text-white drop-shadow-md md:flex-grow">
                    <p className="relative">
                      Merch
                    </p>
                  </div>

                  <footer className="mt-2">
                    <p className="text-lg font-semibold text-white drop-shadow-sm"><a href="https://www.bonfire.com/store/produce-in-the-park/" target="_blank" className="underline underline-offset-2">Produce in the Park merch</a> is available for purchase!</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-slate-900 font-bold tracking-tight sm:text-4xl sm:tracking-tight">
              Produce in the Park
            </h2>
            <div className="mt-6 text-slate-500 space-y-6">
              <p className="text-lg">This is a true mutual aid effort as everyone is welcomed to show up, pitch in if they’d like and take as much as they can carry.

              </p>
              <p className="text-base leading-7">
                Every Thursday folks gather at Saint James Park  near USC for Produce in the Park. We pick-up rescued/surplus produce from Food Forward in Commerce, transport it to Saint James Park where it is then  culled and sorted. Produce gets distributed to atleast 60 people from the surrounding community via assembled produce bags AND by pick-up/delivery to at 5+ LA Community Fridges.
              </p>
            </div>
          </div>

          {/* Event Info section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-slate-100 pt-6">
                  <dt className="text-base font-medium text-slate-500">{stat.label}</dt>
                  <dd className="text-2xl font-bold tracking-tight text-slate-900">{stat.value}</dd>
                  <dd className="text-base font-semibold text-slate-600">{stat.info}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <a href="#" className="text-lg font-medium text-[#FF5B2B] hover:text-opacity-80 transition">
                {' '}
                Sign up for Produce in the Park <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
