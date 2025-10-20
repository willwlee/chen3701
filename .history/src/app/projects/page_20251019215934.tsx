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
  },  
  
  
  {
    name: 'Theoretical Background',
    description:
      <div className='text-zinc-800 dark:text-zinc-300'>
        <p className="indent-8">
          Water hardness, defined by the concentration of Ca²⁺ and Mg²⁺, is relevant to
          residential and industrial processes, especially the accumulation of mineral
          deposits blocking fluid pipelines. This is especially significant in Utah,
          where water hardness can exceed 500&nbsp;PPM in cities like Blanding [1].
          Proper identification and treatment of water hardness is essential to the
          function of chemical process equipment, such as heat exchangers and steam
          generators [2]. <br/><br/>
        </p>

        <p className="indent-8">
          Ion exchange, proven to be an effective method in removing Ca²⁺, involves the
          exchange of similarly charged ions via resin material. A particularly useful
          ion exchange resin is Amberlite, a family of ion-exchange resins often
          characterized by sulfonic acid groups (–SO₃H) [2]. The sulfonic acid groups
          are initially ionically bonded to Na⁺ ions, which are replaced by H⁺ ions
          after a charging process with HCl solution. Subsequently, when hard water is
          pushed through the resin, Ca²⁺ ions in the water are exchanged for H⁺ ions due
          to charge similarity [2]. <br/><br/>
        </p>

        <p className="indent-8">
          This report investigates the effect of Amberlite-based ion exchange on Ca²⁺
          removal in Utah tap water. The procedure of this experiment involves
          separately running DI &amp; tap water through an Amberlite resin setup and
          evaluating the change in Ca²⁺ concentration. To gauge its effectiveness, we
          measured concentrations using an ion-selective electrode and recorded pH
          differences. <br/><br/>
        </p>

        <p className="indent-8">
          For our experiment, we measured both Ca²⁺ concentration with an ion selective
          electrode (1.0 to 40,000&nbsp;mg/L) and pH using pH test strips (ranging from
          0–14) before and after treating our water. The calcium-selective electrode may
          be used by a chemical engineer who needs an accurate reading of water
          hardness, specifically the Ca²⁺ concentration. Determination of pH may be
          acquired from pH strips, useful for chemical engineers in many applications
          including monitoring of progression along the chemical reaction coordinate. <br/><br/>
        </p>

        <p className="indent-8">
          A qualitative test of water hardness is a soap test. Two equivalent functional
          groups with an exchangeable ion (i.e. H⁺) react with one equivalent Ca²⁺ ion
          to create an insoluble salt complex; this effectively removes Ca²⁺ from the
          solution as the ion-exchanger is fixed. By putting soap into hard water the
          soap bonds with the Ca²⁺ ions. This creates soap scum and consequently does
          not produce any soap suds on the top of the surface. However, soft water
          doesn’t create soap scum and creates soap suds on the top of the water. The
          soap test can be used as an efficient method of determining the relative
          hardness of water. <br/><br/>
        </p>
      </div>,
    logo: logoTheory,
  },

  {
    name: 'Experimental Data',
    description:
      <div className='text-zinc-800 dark:text-zinc-300'>
        
        <p>
          We collected data on the Ca²⁺ concentration (mg/L) and pH of Utah tap water before and after treatment with the ion exchange resin (Fig. 1).
          It is relevant to point out the significant decrease of before and after concentrations of Ca²⁺ ions.

        </p>
        <figure className="my-6 text-center">
          <Image src={bardata} alt="Calculated T-Test & Mean of Data" style={{ width: "50%", height: "auto" }} className="mx-auto" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 1. Graphical Representation of Tap Water Concentration Change
          </figcaption>
        </figure>

        <p>
          <br />The ion exchange resin reduced the Ca²⁺ concentration by an average change of -59 (± 13.84) mg/L. 
          Furthermore, the resin decreased pH by an average change of -3.83 (± 0.29) mg/L.<br /><br />   
          A paired t-test with a 95% confidence was used to evaluate the efficacy of the ion exchange resin. 
          The results of the t-test indicate a statistically significant change in both Ca2+ concentration and pH after ion exchange.<br /><br />
        </p>  

        <figure className="my-6 text-center">
          <Image src={tapdata} alt="Calculated T-Test & Mean of Data" style={{ width: "35%", height: "auto" }} className="mx-auto" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 2. Calculated T-Test, Mean, & SD of Tap Water Data
          </figcaption>
        </figure>

        <p>
          Furthermore, we have also determined the concentration of DI water before and after running it through the resin-exchange setup.
          As a baseline, the DI water measured 0.0 mg/L Ca²⁺ before and after treatment with the resin, wih a pH = 7.
          These results are established as a control for the experiment (Fig. 3).
        </p>

        <figure className="my-6 text-center">
          <Image src={didata} alt="Calculated T-Test & Mean of Data" style={{ width: "20%", height: "auto" }} className="mx-auto" />
          <figcaption className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Figure 3. Calculated Mean, & SD of DI Water Data
          </figcaption>
        </figure>
      </div>,
    logo: logoExperiment,
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
  },

  {
    name: 'Comparison of Results',
    description:
    <div>
      <p>
      In comparison with the results of a similar experiment in the article: “Removal of Hardness of Earth Alkaline Metals from Aqueous Solutions by Ion Exchange Method” by Gulten Cetin, the effectiveness of EWS’s ion exchange resin was very high. 
      The experiment, detailed in the article previously mentioned, was comparing the effectiveness of the resin removing both Magnesium and Calcium over time with varying conditions. 
      The range of Calcium under varying conditions was 53.6%-100%, whereas EWS’s ion exchange resin’s range of effectiveness was 98.8%-100% [2].
      </p>
    </div>,
    logo: logoCompare,
  },

    {
    name: 'References',
    description: <div>
      <p>
      [1] EDRO Corporation, “Water hardness.” Accessed: Sep. 25, 2025. [Online]. Available: https://edrocorp.com/141104news.html <br/>
      [2] G. Cetin, “Removal of hardness of earth alkaline metals from aqueous solutions by ion exchange method,” ISRN Analytical Chemistry, 2014.
      </p>
    </div>,
    logo: logoResults,
  },
]


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


export const metadata: Metadata = {
  title: 'Data/Experiment',
  description: 'Data and Experiment Section',
}

