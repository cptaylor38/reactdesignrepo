import React from 'react';
import './Landing.scss';
import Hero from '../../Components/Hero/Hero';

const Landing = () => {
  return (
    <>
      <div className='wel_landing--top'>
        <Hero />
        {/* <div className='wel__hero_description'>
        <h1>Wellzal</h1>
        <h3>(Zycoscalatrine)</h3>
      </div> */}
      </div>
      <div className='container-fluid wel_landing_cont' id='about'>
        <div className='wel_landing_safety'>
          <div className='wel_safety_warning'>
            <div className='wel_safety_warning_lead'>
              <h5>SAFETY INFORMATION AND INDICATIONS</h5>
              <p>WARNING: SUICIDALITY AND ANTIDEPRESSANT DRUGS</p>
              <br />
              <p>
                WELLZAL and other antidepressant medicines may increase suicidal
                thoughts or actions in some people 24 years of age and younger,
                especially within the first few months of treatment or when the
                dose is changed. Watch for these changes and call your
                healthcare provider right away if you notice new or sudden
                changes in mood, behavior, actions, thoughts, or feelings,
                especially if severe. Pay particular attention to such changes
                when WELLZAL is started or when the dose is changed.
              </p>
            </div>
            <div className='wel_safety_lists'>
              <p>
                <h6>Do not take WELLZAL if you:</h6>
                <ul>
                  <li>
                    Take a Monoamine Oxidase Inhibitor (MAOI), including
                    linezolid or methylene blue, or if you stopped taking an
                    MAOI in the last 2 weeks. Do not take an MAOI within 2 weeks
                    of stopping WELLZAL. Ask your doctor or pharmacist if you
                    are not sure if your medicine is an MAOI
                  </li>
                  <li>
                    Take Orap® (pimozide) because this can cause serious heart
                    problems.
                  </li>
                  <li>
                    Are allergic to sertraline or any of the inactive
                    ingredients in WELLZAL.
                  </li>
                  <li>
                    Take Antabuse® (disulfiram) (if you are taking the liquid
                    form of WELLZAL ) due to the alcohol content of the liquid
                    form of WELLZAL.
                  </li>
                </ul>
              </p>
              <p>
                <h6>
                  Call a doctor right away if you or a person you know who is
                  taking WELLZAL has any of the following symptoms, especially
                  if they are new, worse, or worry you:
                </h6>
                <ul>
                  <li>Attempts to commit suicide</li>
                  <li>Acting aggressive or violent New or worse depression.</li>
                  <li>Feeling agitated, restless, angry, or irritable.</li>
                  <li>
                    An increase in activity or talking more than what is normal
                    for you.
                  </li>
                  <li>Acting on dangerous impulses.</li>
                  <li>
                    Thoughts about suicide or dying New or worse anxiety or
                    panic attacks.
                  </li>
                  <li>
                    Trouble sleeping Other unusual changes in behavior or mood.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
