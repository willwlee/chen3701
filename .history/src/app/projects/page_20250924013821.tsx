import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoTheory from '@/images/logos/data-theory.svg'
import logoExperiment from '@/images/logos/data-results.svg'
import logoResults from '@/images/logos/data-experiment.svg'
import logoCompare from '@/images/logos/data-compare.svg'

import tapdata from '@/images/tap-data.png'
import didata from '@/images/di-data.png'

/* -------------------------------------------------------------------------- */
/*  Project data                                                              */
/* -------------------------------------------------------------------------- */

type Project = {
  name: string
  description: React.ReactNode
  logo: any
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Experimental Procedure',
    description:
    <div className='text-zinc-800 dark:text-zinc-300'>
      <p>
        To quantify the effectiveness of the ion exchange resin,
        we conducted an experiment measuring the Ca²⁺ concentration and pH of
        tap water and DI water before and after passing through a charged ion
        exchange resin.<br /><br />
      </p>
        <li>
          1. Pour EWS ion exchange resin product into a buret. Charge it by submerging
          resin in 3M HCl for ~20 minutes.
        </li>
        <li>
          2. Once sufficiently charged, drain out HCl and dispose in a hazardous waste
          container. Rinse with DI water 1–2 times.
        </li>
        <li>
          3. Calibrate Ca²⁺ probe using calibrated standards of 100 mg/L Ca²⁺ and 1000
          mg/L Ca²⁺.
        </li>
        <li>
          4. Measure 100 mL of tap water in a beaker. Record Ca²⁺ concentration and pH
          using probe and pH test strips.
        </li>
        <li>
          5. Flush the tap water through the buret, allowing the water to completely
          exit before measuring Ca²⁺ and pH again.
        </li>
        <li>
          6. Repeat Steps 3–5 twice more with tap water (for 3 total trial runs).
        </li>
        <li>7. Repeat the experiment 3 times with DI water.</li>
        </div>,
    logo: logoExperiment,
    tags: ['Experiment'],
  },  
  
  
  {
    name: 'Theoretical Background',
    description:
      'Experimental Data Here',
    logo: logoTheory,
    tags: ['Theory'],
  },

  {
    name: 'Experimental Data',
    description:
      <div className='text-zinc-800 dark:text-zinc-300'>
        
        <figure className="my-6 text-center">
          <Image src={tapdata} alt="Calculated T-Test & Mean of Data" className="mx-auto" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 1. Calculated T-Test, Mean, & SD of Tap Water Data
          </figcaption>
        </figure>

        <p>
          <br />The ion exchange resin reduced the Ca²⁺ concentration by an average change of -59 (± 13.84) mg/L. 
          Furthermore, the resin decreased pH by an average change of -3.83 (± 0.29) mg/L.<br /><br />   
          A paired t-test with a 95% confidence was used to evaluate the efficacy of the ion exchange resin. 
          The results of the t-test indicate a statistically significant change in both Ca2+ concentration and pH after ion exchange.<br /><br />
        </p>  

        <figure className="my-6 text-center">
          <Image src={didata} alt="Calculated T-Test & Mean of Data" className="mx-auto" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 1. Calculated Mean, & SD of DI Water Data
          </figcaption>
        </figure>

        <p>
          As a baseline, the DI water measured 0.0 mg/L Ca²⁺ before and after treatment with the resin, wih a pH = 7.0.
          These results are established as a control for the experiment.
        </p>
      </div>,
    logo: logoExperiment,
    tags: ['Data'],
  },

  {
    name: 'Explanation of Results',
    description:
      <div className='text-zinc-800 dark:text-zinc-300'>
        <p>
          The ion exchange resin effectively reduced the Ca²⁺ concentration in Utah tap water, demonstrating its success in softening hard water.
          This is indicated by the statistically significant decrease in Ca²⁺ concentration after treatment with the resin.
          
          The lack of Ca²⁺ change in DI water is expected, and indicates that the resin does not add Ca²⁺ ions.
          Furthermore, since the Ca²⁺ concentrations of DI are exactly 0.0 mg/L, we can conclude the Ca²⁺ selective electrode
          is calibrated correctly and functioning properly. Similar can be said for the pH probe, since the measured pH of DI water is
          very similar to the expected value of 7.0. <br/><br/>

          The decrease in pH after treatment with the resin is consistent with the ion exchange mechanism, where Ca²⁺ ions are exchanged
          for H⁺ ions. The release of H⁺ ions into the tap water results in increased acidity (and consequently, a lower pH). This further supports
          the conclusion that the resin is effective in water softening by removal of Ca²⁺ ions from the water.<br/><br/>

        </p>
      </div>,
    logo: logoResults,
    tags: ['Analysis'],
  },

  {
    name: 'Comparison of Results',
    description: 'Compare Results',
    logo: logoCompare,
    tags: ['Analysis'],
  },
]


function normalizeTags(input?: string) {
  if (!input) return []
  const parts = input.split(',').filter(Boolean).map(decodeURIComponent)

  if (parts.length === 1) {
    return [parts[0]]
  } else if (parts.length === 2) {
    return [parts[1]]
  }
  return []
}

function hrefFor(tag: string, selected: string[]) {
  const next = selected.includes(tag)
    ? selected.filter(t => t !== tag)
    : [...selected, tag]

  if (next.length === 0) return '/projects'
  return `/projects?tags=${next.map(encodeURIComponent).join(',')}`
}

function TagChip({ tag, selected }: { tag: string; selected: string[] }) {
  const isActive = tag !== 'All' && selected.includes(tag)
  const href = tag === 'All' ? '/projects' : hrefFor(tag, selected)

  return (
    <Link
      href={href}
      className={`rounded-full px-3 py-1 text-sm font-medium ring-1 ring-zinc-300 dark:ring-zinc-700 transition
        ${
          isActive
            ? 'bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900'
            : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-700'
        }`}
    >
      {tag}
    </Link>
  )
}

/* Icon for the external-link footer */
function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Data/Experiment',
  description: 'Data and Experiment Section',
}

export default async function Projects({
  searchParams,
}: {
  searchParams: Promise<{ tags?: string }>
}) {
  /* current filter → chips & project list */
  const selected = normalizeTags((await searchParams).tags)
  const allTags = Array.from(
    new Set(projects.flatMap(p => p.tags ?? [])),
  )

  const visible =
    selected.length === 0
      ? projects
      : projects.filter(p => selected.every(t => p.tags?.includes(t)))

  return (
    <SimpleLayout
      title="Data and Experiment"
      intro="Detailed description of the collected data, experiment and any simulations used."
      gapClass="mt-12 sm:mt-8"
    >
      {/* filter bar */}
      {allTags.length > 0 && (
        <div className="mb-10 flex flex-wrap gap-2">
          <TagChip tag="All" selected={selected} />
          {allTags.map(tag => (
            <TagChip key={tag} tag={tag} selected={selected} />
          ))}
        </div>
      )}

      {/* project grid */}
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16"
      >
        {visible.map(project => (
          <Card as="li" key={project.name}>
            {/* logo */}
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
            </div>

            {/* name */}
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>

            {/* description */}
            <Card.Description>{project.description}</Card.Description>

            {/* tech-stack chips */}
            {project.tags?.length > 0 && (
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {project.tags
                  .slice()
                  .sort()
                  .map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-700/40 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            )}
          </Card>
        ))}
      </ul>
      {visible.length === 0 && (
        <p className="mt-4 text-zinc-500 dark:text-zinc-400">
          No projects match&nbsp;
          {[...selected]
            .sort((a, b) => a.localeCompare(b))
            .map(t => `"${t}"`)
            .join(', ')}
          .
        </p>
      )}
    </SimpleLayout>
  )
}
