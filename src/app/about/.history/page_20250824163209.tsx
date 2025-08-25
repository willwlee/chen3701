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
          <BriefcaseIcon className="h-7 w-7 text-blue-500" />
          <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">Experience</h2>
        </div>

      </section>
    </Container>
  )
}
