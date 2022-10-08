import React, { useState, useEffect } from 'react';
import './main.css'

function App() {

  const [loading, setLoading] = useState(true)
  const [viewSidebar, setViewSidebar] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App font-poppins">

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
        <div className="main-view h-screen bg-primary text-secondary px-2">

        {/* Header - Navigation Bar */}
        <div className="flex">
          <h1 className='text-2xl font-bold grow py-2'>Phy/</h1>

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
                  <a className='mx-2 text-4xl border-b-2'>Contact</a>
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
          <div id="home" className='mt-16 pt-16 border-b-2 border-gold'>
            <h1 className="text-5xl text-secondary font-bold">
              Ending <br></br>
              Generational <br></br>
              Poverty One <br></br>
              Family <br></br>
              At A Time <br></br>
            </h1>

            <div className='sub-hero'>
              <p className="pt-4 text-sm">HELLO</p>

              <p className="pt-4 pb-4 text-xs">IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. VIDEMUSNE UT PUERI NE VERBERIBUS QUIDEM A CONTEMPLANDIS REBUS PERQUIRENDISQUE DETERREANTUR</p>
            </div>
          </div>

          {/* Services */}

          {/* About */}

          {/* Contact */}
          <div id="contact" className="contact bg-primary">
            <h1 className='pt-4 text-3xl'>Contact</h1>

            <form>
              <div className="name flex justify-between my-2">
                <div className="first-name flex flex-col">
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname"/>
                </div>

                <div className="last-name flex flex-col">
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname"/>
                </div>
              </div>

              <div className="email flex flex-col my-2">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email"/>
              </div>

              <div className="message flex flex-col my-2">
                <label for="email">Message:</label>
                <input className='py-10' type="text" id="email" name="email"/>
              </div>

              <div className='flex'>
                <div className='grow'>

                </div>
                <button>
                  <p>Submit</p>
                </button>
              </div>
            </form>


          </div>

        </div>
      }

    </div>
  );
}

export default App;
