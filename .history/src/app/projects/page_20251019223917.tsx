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
          From experimental methods, we measured Ca²⁺ concentration (mg/L) of Utah water before and after EWS resin treatment as an indicator of water softening efficacy.
          These measurements occurred 3 times each for Utah tap water and distilled (DI) water (Fig. 1). Regarding tap water, initial Ca²⁺ concentrations ranged from ~46-50 mg/L, 
          consistent with the expected range of Salt Lake City water hardness measurements. Post-treatment Ca²⁺ levels dropped to nearly 0 mg/L by a significant amount -- likely surpassing
          the limit of detection (LOD) of the ion-selective electrode. Despite this, the significant change in concentration suggests effective Ca²⁺ removal by the EWS resin.
        </p>

        <figure className="text-center">
          <Image src={bardata} alt="Tap-water Ca data" width={480} className="mx-auto rounded-xl" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 1. Tap-water Ca²⁺ concentration change.
          </figcaption>
        </figure>

        <p>
          Furthermore, we have measured the pH before and after treatment as an indication of H<sup>+</sup> ion concentration in solution.
          The mean and standard deviation were calculated for concentration and pH (Fig. 2). 
          The mean change in Ca²⁺ is x̄ = –59 ± 13.8 mg/L. On the other hand, the mean pH change is x̄ = –3.83 ± 0.29. 
          Further statistical analysis to confirm significance was performed using a paired t-test (95 % confidence). The results indicate a p-value less than 0.05,
          confirming that the changes in both Ca²⁺ concentration and pH after treatment are statistically significant.
        </p>

        <figure className="text-center">
          <Image src={tapdata} alt="Tap t-test" width={350} className="mx-auto rounded-xl" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 2. Tap-water t-test and mean data.
          </figcaption>
        </figure>

        <p>
          DI water (0 mg/L Ca²⁺, pH ≈ 6-7) showed no change after treatment (Fig. 3). The lack of H<sup>+</sup> ion increase indicates that the resin did not release H<sup>+</sup> ions into DI water, 
          as there were no Ca²⁺ ions to exchange. This contrasts with tap water results, because the Ca<sup>2+</sup> ions in tap water were exchanged for H<sup>+</sup> ions from the resin, leading to a pH drop.
          Thus, this methodology effectively demonstrates the Ca<sup>2+</sup> ion removal is inherently due to the ion-exchange mechanism of the EWS resin.
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
    name: 'Analysis & Explanation of Results',
    description: (
      <div className="space-y-2">
        <p>
          In summary, we have demonstrated that the EWS resin is particularly effective at removing Ca²⁺ ions from hard tap water (by removing 59 ± 13.8 mg/L), as evidenced by a statistically significant drop
          in ion concentration after treatment. The measurement of the pH further supports the ion-exchange mechanism, where Ca²⁺ ions are replaced by H⁺ ions from the resin. Furthermore,
          distilled water showed no significant change in pH due to the absence of Ca²⁺ ions to exchange, validating our experimental approach. It may be important to note the potential
          limit in detection (LOD) of the Ca²⁺ ion-selective electrode, which may affect the accuracy of very low concentration measurements post-treatment. 
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
          In the experimental setup produced by this report, the ion-exchange of EWS resin resulted in 98.8–100 % Ca²⁺ removal. Comparatively, Cetin (2014) 
          yielded similar Ca²⁺ removal, at ~100 % [2]. In summary, the EWS resin performs nearly as well the resin
          used in Cetin's water-softening trials, and its high removal rate indicates it is still a viable product to use for industry.

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
          [1] EDRO Corporation, “Water Hardness,” EDRO Corporation News, Sep. 25, 2025. [Online]. Available: https://edrocorp.com/141104news.html
        </p>
        <p>
          [2] G. Cetin, “Removal of hardness of earth alkaline metals from aqueous solutions by ion exchange method,” ISRN Analytical Chemistry, vol. 2014, Art. ID 146046, PDF p. 4-6, 2014. [Online]. Available: https://doi.org/10.1155/2014/146046
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
