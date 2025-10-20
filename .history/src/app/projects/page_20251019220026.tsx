import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoTheory from '@/images/logos/data-theory.svg'
import logoExperiment from '@/images/logos/data-experiment.svg'
import logoResults from '@/images/logos/data-results.svg'
import logoCompare from '@/images/logos/data-compare.svg'

import tapdata from '@/images/tap-data.png'
import didata from '@/images/di-data.png'
import bardata from '@/images/bargraph.jpg'

/* -------------------------------------------------------------------------- */
/*  Project data                                                              */
/* -------------------------------------------------------------------------- */

type Project = {
  name: string
  description: React.ReactNode
  logo: any
}

const projects: Project[] = [
  {
    name: 'Experimental Procedure',
    description: (
      <div className="text-zinc-800 dark:text-zinc-300 space-y-1">
        <p>
          To quantify the effectiveness of the ion exchange resin, we conducted an
          experiment measuring the Ca²⁺ concentration and pH of tap water and DI water
          before and after passing through a charged ion exchange resin.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Pour EWS ion exchange resin product into a buret. Charge it by submerging
            resin in 3M HCl for ~20 minutes.
          </li>
          <li>
            Once sufficiently charged, drain out HCl and dispose in a hazardous waste
            container. Rinse with DI water 1–2 times.
          </li>
          <li>
            Calibrate Ca²⁺ probe using calibrated standards of 100 mg/L Ca²⁺ and 1000 mg/L Ca²⁺.
          </li>
          <li>
            Measure 100 mL of tap water in a beaker. Record Ca²⁺ concentration and pH using probe
            and pH test strips.
          </li>
          <li>
            Flush the tap water through the buret, allowing the water to completely exit before
            measuring Ca²⁺ and pH again.
          </li>
          <li>Repeat Steps 3–5 twice more with tap water (for 3 total trial runs).</li>
          <li>Repeat the experiment 3 times with DI water.</li>
        </ol>
      </div>
    ),
    logo: logoExperiment,
  },

  {
    name: 'Theoretical Background',
    description: (
      <div className="text-zinc-800 dark:text-zinc-300 space-y-4">
        <p className="indent-8">
          Water hardness, defined by the concentration of Ca²⁺ and Mg²⁺, is relevant to
          residential and industrial processes, especially the accumulation of mineral
          deposits blocking fluid pipelines. This is especially significant in Utah, where
          water hardness can exceed 500 PPM in cities like Blanding [1]. Proper
          identification and treatment of water hardness is essential to the function of
          chemical process equipment, such as heat exchangers and steam generators [2].
        </p>

        <p className="indent-8">
          Ion exchange, proven to be an effective method in removing Ca²⁺, involves the
          exchange of similarly charged ions via resin material. A particularly useful
          ion-exchange resin is Amberlite, characterized by sulfonic acid groups (–SO₃H) [2].
          The sulfonic acid groups are initially ionically bonded to Na⁺ ions, which are
          replaced by H⁺ ions after charging with HCl solution. When hard water is pushed
          through the resin, Ca²⁺ ions in the water are exchanged for H⁺ ions due to charge
          similarity [2].
        </p>

        <p className="indent-8">
          This report investigates the effect of Amberlite-based ion exchange on Ca²⁺ removal
          in Utah tap water. The procedure involves separately running DI & tap water through
          an Amberlite setup and evaluating Ca²⁺ concentration changes using an ion-selective
          electrode and pH strips.
        </p>

        <p className="indent-8">
          A qualitative test of water hardness is a soap test. Two equivalent functional
          groups with exchangeable H⁺ react with one equivalent Ca²⁺ ion to create an
          insoluble salt complex. In hard water, soap reacts with Ca²⁺ ions forming scum,
          whereas soft water forms suds. The soap test efficiently indicates relative
          hardness.
        </p>
      </div>
    ),
    logo: logoTheory,
  },

  {
    name: 'Experimental Data',
    description: (
      <div className="text-zinc-800 dark:text-zinc-300">
        <p>
          We collected data on the Ca²⁺ concentration (mg/L) and pH of Utah tap water before
          and after treatment with the ion-exchange resin (Fig. 1). It is relevant to point
          out the significant decrease in Ca²⁺ ion concentration.
        </p>

        <figure className="my-6 text-center">
          <Image
            src={bardata}
            alt="Tap Water Concentration Change"
            width={500}
            className="mx-auto rounded-xl"
          />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 1. Graphical representation of tap-water Ca²⁺ concentration change.
          </figcaption>
        </figure>

        <p>
          The ion-exchange resin reduced Ca²⁺ concentration by –59 (± 13.84) mg/L and
          decreased pH by –3.83 (± 0.29). A paired t-test (95% confidence) confirms a
          statistically significant change in both Ca²⁺ concentration and pH after ion exchange.
        </p>

        <figure className="my-6 text-center">
          <Image
            src={tapdata}
            alt="T-Test and Mean of Tap Data"
            width={350}
            className="mx-auto rounded-xl"
          />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 2. Calculated t-test, mean, and SD of tap-water data.
          </figcaption>
        </figure>

        <p>
          As a control, DI water measured 0.0 mg/L Ca²⁺ before and after treatment with the
          resin, pH = 7 (Fig. 3).
        </p>

        <figure className="my-6 text-center">
          <Image
            src={didata}
            alt="DI Water Data"
            width={250}
            className="mx-auto rounded-xl"
          />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 3. Mean and SD of DI water data.
          </figcaption>
        </figure>
      </div>
    ),
    logo: logoExperiment,
  },

  {
    name: 'Explanation of Results',
    description: (
      <div className="text-zinc-800 dark:text-zinc-300">
        <p>
          The ion-exchange resin effectively reduced Ca²⁺ concentration in Utah tap water,
          confirming its success in softening hard water. The lack of Ca²⁺ change in DI water
          validates calibration of both the calcium-selective electrode and pH probe. The
          observed pH drop aligns with the ion-exchange mechanism: Ca²⁺ ↔ 2H⁺, releasing H⁺ ions
          and increasing acidity. This confirms the resin’s functionality.
        </p>
      </div>
    ),
    logo: logoResults,
  },

  {
    name: 'Comparison of Results',
    description: (
      <div className="text-zinc-800 dark:text-zinc-300">
        <p>
          Compared with “Removal of Hardness of Earth Alkaline Metals from Aqueous Solutions
          by Ion Exchange Method” (G. Cetin, 2014), EWS’s resin shows very high efficiency.
          Cetin reported 53.6–100% Ca²⁺ removal under various conditions, whereas EWS’s
          resin achieved 98.8–100% effectiveness [2].
        </p>
      </div>
    ),
    logo: logoCompare,
  },

  {
    name: 'References',
    description: (
      <div className="text-zinc-800 dark:text-zinc-300 space-y-2">
        <p>
          [1] EDRO Corporation, “Water hardness.” Accessed Sep 25 2025. Available:
          <Link
            href="https://edrocorp.com/141104news.html"
            target="_blank"
            className="text-blue-500 hover:underline ml-1"
          >
            edrocorp.com/141104news.html
          </Link>
        </p>
        <p>
          [2] G. Cetin, “Removal of hardness of earth alkaline metals from aqueous
          solutions by ion exchange method,” ISRN Analytical Chemistry, 2014.
        </p>
      </div>
    ),
    logo: logoResults,
  },
]

export const metadata: Metadata = {
  title: 'Data / Experiment',
  description: 'Data and experiment section of ion-exchange water-softening project.',
}

export default function DataExperimentPage() {
  return (
    <SimpleLayout
      title="Data & Experiment"
      intro="A comprehensive summary of theoretical background, methods, data, and analysis for ion-exchange resin testing."
    >
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <Image src={project.logo} alt="" className="h-12 w-12" />
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              {project.name}
            </h2>
            <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
