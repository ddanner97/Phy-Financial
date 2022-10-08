import React, { useState, useEffect } from 'react';
import './main.css'

// Animations
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

// Images
import kc from './images/kansas_line.png'

// Component
import ContactForm from './components/ContactForm';

function App() {

  const [loading, setLoading] = useState(true)
  const [viewSidebar, setViewSidebar] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  //Scroll animation
  gsap.registerPlugin(ScrollTrigger);
  // REVEAL //
  gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 20%",
      markers: false,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { y: -100, autoAlpha: 0 },
          {
            duration: 1.25,
            y: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      }
    });
  });


  return (
    <div className="App font-poppins bg-primary">

      {/* Loading Screen */}
      {loading &&
        <div className='absolute h-screen w-screen bg-secondary'>
          {/* <h1 className=' text-4xl text-primary relative top-2/4 text-center'>Welcome,</h1> */}
          <div className="waviy text-4xl text-primary relative top-2/4 text-center">
            <span className='animation-flip'>L</span>
            <span>o</span>
            <span>a</span>
            <span>d</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
            <span>.</span>
          </div>
        </div>
      }

      {!loading &&
        <div className="main-view h-screen text-secondary px-4 max-w-5xl mx-auto">

        {/* Header - Navigation Bar */}
        <div className="flex">
          <h1 className='text-2xl font-bold grow py-4'>Phun Phynancial</h1>

          {viewSidebar &&
            <div className="sidebar absolute h-screen bg-secondary z-10 drop-shadow-2xl px-20 right-0">
              <ul className='text-primary relative top-1/3'>
                <li className=''>
                  <a className='mx-2 text-4xl border-b-2'>Home</a>
                </li>

                <li className='my-8'>
                  <a className='mx-2 text-4xl border-b-2'>Services</a>
                </li>

                <li className='my-8'>
                  <a className='mx-2 text-4xl border-b-2'>About</a>
                </li>

                <li className='my-8'>
                  <a className='mx-2 text-4xl border-b-2' href="#contact" onClick={() => setViewSidebar(false)}>Contact</a>
                </li>
              </ul>
            </div>
          }

          <button id="menuToggle" className='z-50' onClick={() => viewSidebar ? setViewSidebar(false) : setViewSidebar(true)}>
            <input type="checkbox" />
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Home - Hero Section */}
          <div id="home" className='h-screen'>
            <div className='pt-8'>
              <img src={kc}></img>
            </div>

            <h1 className="text-5xl text-secondary font-bold pt-8 drop-shadow-md">
              Ending <br></br>
              Generational <br></br>
              Poverty One <br></br>
              Family <br></br>
              At A Time <br></br>
            </h1>

            <div className='sub-hero'>
              <p className="pt-4 text-sm">HELLO</p>

              <p className="pt-4 pb-4 text-xs border-b-2 border-gold">IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. VIDEMUSNE UT PUERI NE VERBERIBUS QUIDEM A CONTEMPLANDIS REBUS PERQUIRENDISQUE DETERREANTUR</p>
            </div>

          </div>

          {/* Services */}

          {/* About */}

          {/* Contact */}
          <ContactForm />

        </div>
      }

    </div>
  );
}

export default App;
