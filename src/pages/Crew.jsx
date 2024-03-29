import { useEffect } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';

import Hurley from '../assets/img/crew/image-douglas-hurley.png';
import Shuttleworth from '../assets/img/crew/image-mark-shuttleworth.png';
import Glover from '../assets/img/crew/image-victor-glover.png';
import Ansairi from '../assets/img/crew/image-anousheh-ansari.png';

function Crew() {
  useEffect(() => {
    document.body.classList.add('bg-crew');

    return () => {
      document.body.classList.remove('bg-crew');
    };
  }, []);

  return (
    <>
      <main>
        <div className="numbered-heading">
          <h2 className="ff-sans-condensed fs-med letter-spacing-4-72 uppercase text-white">
            <span className="bold text-opacity-25">02</span> Meet Your Crew
          </h2>
        </div>
        <div>
          <Tabs>
            <TabList aria-label="Technology" className="crew__button-container">
              <Tab id="1" className="xs-button crew__button"></Tab>
              <Tab id="2" className="xs-button crew__button"></Tab>
              <Tab id="3" className="xs-button crew__button"></Tab>
              <Tab id="4" className="xs-button crew__button"></Tab>
            </TabList>
            <TabPanel id="1" className="crew__image-text-container">
              <div className="crew__text-container">
                <h3 className="ff-serif-regular fs-lg uppercase text-white text-opacity-50">
                  Commander
                </h3>
                <h4 className="ff-serif-regular fs-xl uppercase text-white">
                  Douglas Hurley
                </h4>
                <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
              </div>
              <img src={Hurley} alt="Commander Douglas Hurley" />
            </TabPanel>
            <TabPanel id="2" className="crew__image-text-container">
              <div className="crew__text-container">
                <h3 className="ff-serif-regular fs-lg uppercase text-white text-opacity-50">
                  Mission Specialist
                </h3>
                <h4 className="ff-serif-regular fs-xl uppercase text-white">
                  Mark Shuttleworth
                </h4>
                <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
                  Mark Richard Shuttleworth is the founder and CEO of Canonical,
                  the company behind the Linux-based Ubuntu operating system.
                  Shuttleworth became the first South African to travel to space
                  as a space tourist.
                </p>
              </div>
              <img
                src={Shuttleworth}
                alt="Mission Specialist Mark Shuttleworth"
              />
            </TabPanel>
            <TabPanel id="3" className="crew__image-text-container">
              <div className="crew__text-container">
                <h3 className="ff-serif-regular fs-lg uppercase text-white text-opacity-50">
                  Pilot
                </h3>
                <h4 className="ff-serif-regular fs-xl uppercase text-white">
                  Victor Glover
                </h4>
                <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
                  Pilot on the first operational flight of the SpaceX Crew
                  Dragon to the International Space Station. Glover is a
                  commander in the U.S. Navy where he pilots an F/A-18.He was a
                  crew member of Expedition 64, and served as a station systems
                  flight engineer.
                </p>
              </div>
              <img src={Glover} alt="Pilot Victor Glover" />
            </TabPanel>
            <TabPanel id="4" className="crew__image-text-container">
              <div className="crew__text-container">
                <h3 className="ff-serif-regular fs-lg uppercase text-white text-opacity-50">
                  Flight Engineer
                </h3>
                <h4 className="ff-serif-regular fs-xl uppercase text-white">
                  Anousheh Ansairi
                </h4>
                <p className="ff-sans-regular fs-regular line-height-1-5 text-light">
                  Anousheh Ansari is an Iranian American engineer and co-founder
                  of Prodea Systems. Ansari was the fourth self-funded space
                  tourist, the first self-funded woman to fly to the ISS, and
                  the first Iranian in space.
                </p>
              </div>
              <img src={Ansairi} alt="Flight Engineer Anousheh Ansairi" />
            </TabPanel>
          </Tabs>
        </div>
      </main>
    </>
  );
}

export default Crew;
