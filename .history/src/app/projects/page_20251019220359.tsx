import { type Metadata } from 'next'
import Image from 'next/image'

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
      <div className="space-y-2">
        <p>
          To quantify the effectiveness of the ion exchange resin, we conducted an
          experiment measuring the Ca²⁺ concentration and pH of tap water and DI water
          before and after passing through a charged ion exchange resin.
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li>
            Pour EWS ion exchange resin product into a buret. Charge it by submerging the
            resin in 3M HCl for ~20 minutes.
          </li>
          <li>
            Once sufficiently charged, drain out HCl and dispose of it in a hazardous-waste
            container. Rinse with DI water 1–2 times.
          </li>
          <li>
            Calibrate the Ca²⁺ probe using 100 mg/L and 1000 mg/L Ca²⁺ standards.
          </li>
          <li>
            Measure 100 mL of tap water in a beaker. Record Ca²⁺ and pH values.
          </li>
          <li>
            Flush the tap water through the buret and measure again.
          </li>
          <li>Repeat 3 times for tap water and DI water respectively.</li>
        </ol>
      </div>
    ),
    logo: logoExperiment,
  },

  {
    name: 'Theoretical Background',
    description: (
      <div className="space-y-2">
        <p className="indent-8">
          Water hardness, defined by Ca²⁺ and Mg²⁺ content, causes mineral deposits that
          block pipelines and reduce heat-exchanger efficiency. In Utah, hardness can
          exceed 500 PPM in some cities [1].
          Ion exchange removes Ca²⁺ via resins such as Amberlite, containing sulfonic acid
          groups (–SO₃H) [2]. Charging with HCl replaces Na⁺ with H⁺; during treatment, Ca²⁺
          ions in water are exchanged for H⁺ ions.
          We examined the EWS resin's ability to remove Ca²⁺ from Utah tap water using ion-selective and pH
          electrodes. DI water served as control.
          A qualitative soap test also distinguishes hard vs soft water: Ca²⁺ forms insoluble
          scum with soap in hard water, while soft water produces suds.
        </p>
      </div>
    ),
    logo: logoTheory,
  },

  {
    name: 'Experimental Data',
    description: (
      <div className="space-y-2">
        <p>
          Measured Ca²⁺ concentration (mg/L) and pH of Utah tap water before and after
          ion-exchange (Fig. 1). Ca²⁺ levels decreased significantly after treatment.
        </p>

        <figure className="text-center">
          <Image src={bardata} alt="Tap-water Ca data" width={480} className="mx-auto rounded-xl" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 1. Tap-water Ca²⁺ concentration change.
          </figcaption>
        </figure>

        <p>
          Mean change in Ca²⁺ = –59 ± 13.8 mg/L; pH change = –3.83 ± 0.29. A paired t-test (95 %
          confidence) confirms significant differences.
        </p>

        <figure className="text-center">
          <Image src={tapdata} alt="Tap t-test" width={350} className="mx-auto rounded-xl" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 2. Tap-water t-test and mean data.
          </figcaption>
        </figure>

        <p>
          DI water (0 mg/L Ca²⁺, pH ≈ 7) showed no change after treatment (Fig. 3), confirming instrument accuracy.
        </p>

        <figure className="text-center">
          <Image src={didata} alt="DI water data" width={240} className="mx-auto rounded-xl" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 3. DI-water mean and SD.
          </figcaption>
        </figure>
      </div>
    ),
    logo: logoExperiment,
  },

  {
    name: 'Explanation of Results',
    description: (
      <div className="space-y-2">
        <p>
          The resin significantly softened tap water by removing Ca²⁺. No change in DI water validates
          probe calibration. The observed pH drop matches the reaction Ca²⁺ ↔ 2 H⁺, indicating proper ion exchange.
        </p>
      </div>
    ),
    logo: logoResults,
  },

  {
    name: 'Comparison of Results',
    description: (
      <div className="space-y-2">
        <p>
          Compared to Cetin (2014) [2], EWS resin showed 98.8–100 % Ca²⁺ removal, surpassing Cetin’s 53.6–100 %
          range under varied conditions.
        </p>
      </div>
    ),
    logo: logoCompare,
  },

  {
    name: 'References',
    description: (
      <div className="space-y-2">
        <p>
          [1] EDRO Corporation, “Water hardness.” Sep 25 2025. 
          <a
            href="https://edrocorp.com/141104news.html"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            edrocorp.com/141104news.html
          </a>
        </p>
        <p>
          [2] G. Cetin, “Removal of hardness of earth alkaline metals from aqueous solutions by ion exchange method,” 
          <i>ISRN Analytical Chemistry</i>, 2014.
        </p>
      </div>
    ),
    logo: logoResults,
  },
]

export const metadata: Metadata = {
  title: 'Data / Experiment',
  description: 'Comprehensive data, theory, and analysis for ion-exchange resin testing.',
}

export default function DataExperimentPage() {
  return (
    <SimpleLayout
      title="Data & Experiment"
      intro="Detailed sections describing theoretical background, methods, data, and interpretation."
    >
      <div className="space-y-16">
        {projects.map((project) => (
          <section
            key={project.name}
            className="border-t border-zinc-200 dark:border-zinc-700 pt-10"
          >
            <div className="flex items-center space-x-4 mb-4">
              <Image src={project.logo} alt="" width={48} height={48} />
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>
            </div>
            <div className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.description}
            </div>
          </section>
        ))}
      </div>
    </SimpleLayout>
  )
}
