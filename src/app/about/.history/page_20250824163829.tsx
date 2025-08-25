import { type Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import {
  JavaIcon,
  PythonIcon,
  RustIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  CPlusPlusIcon,
  PyTorchIcon,
  NextJSIcon,
  FlutterIcon,
  CSharpIcon,
  CIcon,
  RIcon,
  SQLIcon,
} from '@/components/CodingIcons'
import portraitImage from '@/images/portrait.jpg'

import {
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  CheckBadgeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

function QuickNavChips() {
  const items = [
    { href: '#experience', label: 'Experience',    Icon: BriefcaseIcon,  color: 'blue'  },
    { href: '#education',  label: 'Education',     Icon: AcademicCapIcon, color: 'green' },
    { href: '#tech',       label: 'Tech',          Icon: CodeBracketIcon, color: 'purple'},
    { href: '#certs',      label: 'Certifications',Icon: CheckBadgeIcon, color: 'amber' },
    { href: '#fun',        label: 'Fun Facts',     Icon: SparklesIcon,    color: 'pink'  },
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
  title: 'About',
  description:
    'Homepage',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Sathya Tadinada Portrait"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
          <QuickNavChips />
        </div>

        {/* Intro */}
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            CH EN 3701: Mon-8 Project Website
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              A brief summary of how your experiment physically works (maximum 2 sentences). 
              Include an illustration or clearly labeled and readably sized photo.
            </p>
            <p>
              Description of the physical property measured by your experiment, 
              including the measurement range (minimum and maximum as indicated on the datasheet).
            </p>
          </div>
        </div>
      </div>

      {/* Members Section */}
      <section id="members" className="scroll-mt-28 mt-16 rounded-xl bg-zinc-50 dark:bg-zinc-800/25 p-8 shadow-sm">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 text-center">Team Members</h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Member 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={portraitImage}
              alt="Member 1"
              className="h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-medium text-zinc-800 dark:text-zinc-100">Member 1 Name</h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">Role/Title</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Brief bio or description of the member's contributions to the project.
            </p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={portraitImage}
              alt="Member 2"
              className="h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-medium text-zinc-800 dark:text-zinc-100">Member 2 Name</h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">Role/Title</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Brief bio or description of the member's contributions to the project.
            </p>
          </div>

          {/* Member 3 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src={portraitImage}
              alt="Member 3"
              className="h-32 w-32 rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-medium text-zinc-800 dark:text-zinc-100">Member 3 Name</h3>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">Role/Title</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Brief bio or description of the member's contributions to the project. 
            </p>
          </div> 
        </div>
      </section>
    </Container>
  )
}
