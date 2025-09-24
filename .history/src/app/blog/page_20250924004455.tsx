import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import portraitImage from '@/images/home-illustration.jpg'
import portraitImage1 from '@/images/will.png'
import portraitImage2 from '@/images/default-icon.jpg'
import portraitImage3 from '@/images/default-icon.jpg'

import {
  UserIcon
} from '@heroicons/react/24/outline'

function QuickNavChips() {
  const items = [
    { href: '#members', label: 'Group Members',    Icon: UserIcon,  color: 'blue'  },
  ] as const

  const COLOR: Record<string, { light: string; dark: string }> = {
    blue: {
      light: 'hover:bg-blue-100 hover:text-blue-800 hover:ring-blue-300 focus-visible:ring-blue-400/60',
      dark:  'dark:hover:bg-blue-400/10 dark:hover:text-blue-200 dark:hover:ring-blue-300/40',
    },
    green: {
      light: 'hover:bg-green-100 hover:text-green-800 hover:ring-green-300 focus-visible:ring-green-400/60',
      dark:  'dark:hover:bg-green-400/10 dark:hover:text-green-200 dark:hover:ring-green-300/40',
    },
    purple: {
      light: 'hover:bg-purple-100 hover:text-purple-800 hover:ring-purple-300 focus-visible:ring-purple-400/60',
      dark:  'dark:hover:bg-purple-400/10 dark:hover:text-purple-200 dark:hover:ring-purple-300/40',
    },
    amber: {
      light: 'hover:bg-amber-100 hover:text-amber-800 hover:ring-amber-300 focus-visible:ring-amber-400/60',
      dark:  'dark:hover:bg-amber-400/10 dark:hover:text-amber-200 dark:hover:ring-amber-300/40',
    },
    pink: {
      light: 'hover:bg-pink-100 hover:text-pink-800 hover:ring-pink-300 focus-visible:ring-pink-400/60',
      dark:  'dark:hover:bg-pink-400/10 dark:hover:text-pink-200 dark:hover:ring-pink-300/40',
    },
  }

  return (
    <div className="mt-6">
      <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        Jump to
      </p>
      <ul className="mt-2 flex flex-wrap gap-3">
        {items.map(({ href, label, Icon, color }) => {
          const { light, dark } = COLOR[color]
          return (
            <li key={href}>
              <a
                href={href}
                className={[
                  'group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors duration-150',
                  'backdrop-blur-sm dark:backdrop-blur-none',
                  
                  'bg-zinc-100 ring-1 ring-inset ring-zinc-300 text-zinc-700',
                  'dark:bg-zinc-800/60 dark:ring-white/10 dark:text-zinc-200',

                  'focus:outline-none focus-visible:ring-2',

                  light,
                  dark,
                ].join(' ')}
              >
                {/* icon follows text color on hover via text-current */}
                <Icon className="h-4 w-4 text-current" />
                <span className="text-current">{label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Conclusion',
  description:
    'Conclusions',
}

export default function Blog() {
  return (
    <Container className="mt-16 sm:mt-32">
      
        {/* Conclusions */}
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Conclusions
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-300">
            <p>
             Our experiment is effective in determining the sufficiency of ion-exchange resin mechanisms. 
             Compared to the readings for tap water where Ca²⁺ was present before treatment, the levels of Ca²⁺ after treatment were reduced by 98.8%-100%. 
             Our final Ca²⁺ readings are well within the range of what is considered soft water according to water hardness scales,
             supporting the conclusion that the EWS ion exchange resin is effective in water softening. <br/><br/>


            </p>
          </div>
        </div>

    {/* References Section */}
      <section id="members" className="scroll-mt-28 mt-16 rounded-xl bg-zinc-50 dark:bg-zinc-800/25 p-8 shadow-sm">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 text-center">References</h2>
        </div>
        <div>
          <p>
            References of similar experiments with comparisons (minimum 1, maximum 3). Ensure to cite your references.
          </p>
        </div>
      </section>

    {/* Recommendations Section */}
      <section id="members" className="scroll-mt-28 mt-16 rounded-xl bg-zinc-50 dark:bg-zinc-800/25 p-8 shadow-sm">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 text-center">Recommendations</h2>
        </div>
        <div>
          <p>
            Recommendations as requested by your boss.
          </p>
        </div>
      </section>

    {/* Future Improvements Section */}
      <section id="members" className="scroll-mt-28 mt-16 rounded-xl bg-zinc-50 dark:bg-zinc-800/25 p-8 shadow-sm">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 text-center">Future Improvements</h2>
        </div>
        <div>
          <p>
            Future experiments could include testing and comparison of different resins to
            determine a quantifiable measure of effectiveness, such as some form of
            ion-exchange rate constant. Additionally, further exploration of its efficacy
            in removing Mg²⁺ ions and determining theories from differences could be valuable.
            Regardless, this experiment is sufficient in providing a learning experience in ion-exchange mechanisms.
          </p>
        </div>
      </section>

    </Container>
  )
}
