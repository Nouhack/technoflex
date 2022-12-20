/*import React, { useState } from 'react';

export default function Testimonials() {
  const forward = () => {
    if (testindex !== 1) {
      settestindex(prev => ++prev)
    } else {
      settestindex(0)

    }
  }

  const backward = () => {
    console.log(testindex)
    if (testindex !== 0) {
      settestindex(prev => --prev)
    } else {
      settestindex(1)

    }
  }
  const [testindex, settestindex] = useState(0)
  const [testimonial_list, set_testimonial_list] = useState([

    {
      id: 0,
      name: 'name',
      post: 'post',
      message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Various versions have evolved over the years, sometimes by accident, sometimes on purpose(injected humour and the like).",
      img: 'https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'


    },

    {
      id: 1,
      name: 'name 2',
      post: 'post 2',
      message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non- characteristic words etc.",
      img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'


    }
  ])

  return (
    <div class="pb-16"
      style={{
        fontFamily: "font-family: 'Lato', sans-serif"
      }}>
      <dh-component>
        <div class="container mx-auto pt-16">
          <div class="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
            <h1 tabindex="0" class="focus:outline-none xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">Principaux partenaires</h1>
            <p tabindex="0" class="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">Our success has come from being committed to the property and investing in the development of the product to maximize sales. At the same time and maintaining the integrity.</p>
          </div>

          <div class="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
              <img tabindex="0" class="focus:outline-none w-28 h-28" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Snvi_logo.png" alt="Adidas" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
              <img tabindex="0" class="focus:outline-none" src="https://www.enmtp.com/wp-content/themes/Final2/images/object623621369.png" alt="Chanel" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
              <img tabindex="0" class="focus:outline-none w-28 h-28" src="https://www.mdn.dz/site_principal/images/mdn.png" alt="Nike" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
              <img tabindex="0" class="focus:outline-none h-28" src="https://sonatrach.com/img/header/sonatrach.png" alt="Toyota" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4  flex  justify-center xl:border-r lg:border-r border-gray-200  items-center">
              <img tabindex="0" class="focus:outline-none " src="https://rhino-files.s3.amazonaws.com/uploads/cAw4edgPnRd7z5xTYTjbWDEkZ.png" alt="GS1" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200  items-center">
              <img tabindex="0" class="focus:outline-none w-28 h-28" src="https://farissiabtp.dz/img/partenaires/anbt.png" alt="BlackBerry" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  items-center ">
              <img tabindex="0" class="focus:outline-none w-28 h-28" src="https://elmouchir.caci.dz/assets/images/entreprise/1666015450.jpg" alt="Mini" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 max-h-60 flex justify-center xl:border-l lg:border-l border-gray-200 items-center">
              <img tabindex="0" class="focus:outline-none w-28 " src="https://gicep-dz.com/html/ext/assets/img/skikda.png" alt="Honda" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-t xl:border-r lg:border-t lg:border-r border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
              <img tabindex="0" class="focus:outline-none w-28 " src="https://gicep-dz.com/html/ext/assets/img/skikda.png" alt="Honda" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-t xl:border-r lg:border-r lg:border-t border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
              <img tabindex="0" class="focus:outline-none w-28 h-28" src="https://elmouchir.caci.dz/assets/images/entreprise/1666015450.jpg" alt="Mini" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-t xl:border-r lg:border-r lg:border-t border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
              <img tabindex="0" class="focus:outline-none w-28 h-28" src="https://elmouchir.caci.dz/assets/images/entreprise/1666015450.jpg" alt="Mini" role="img" />
            </div>
            <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-t lg:border-t border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
              <img tabindex="0" class="focus:outline-none w-28 h-28" src="https://elmouchir.caci.dz/assets/images/entreprise/1666015450.jpg" alt="Mini" role="img" />
            </div>
          </div>


        </div>
      </dh-component>
    </div >
  )
}
*/
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import times from "lodash/times";


export default function Non() {
  const partners = [
    {
      id: 0,
      img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Snvi_logo.png'
    },
    {
      id: 1,
      img: 'https://www.enmtp.com/wp-content/themes/Final2/images/object623621369.png'
    },
    {
      id: 2,
      img: 'https://www.mdn.dz/site_principal/images/mdn.png'
    },
    {
      id: 3,
      img: 'https://sonatrach.com/img/header/sonatrach.png'
    },
    {
      id: 4,
      img: 'https://rhino-files.s3.amazonaws.com/uploads/cAw4edgPnRd7z5xTYTjbWDEkZ.png'
    },
    {
      id: 5,
      img: 'https://farissiabtp.dz/img/partenaires/anbt.png'
    },
    {
      id: 6,
      img: 'https://elmouchir.caci.dz/assets/images/entreprise/1666015450.jpg'
    },
    {
      id: 7,
      img: 'https://gicep-dz.com/html/ext/assets/img/skikda.png'
    },
  ]
  return (

    <>

      <div className=" max-w-xl mt-10 md:mx-auto sm:text-center lg:max-w-2xl md:mt-36 text-center">
        <h2 className="max-w-lg  font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">P</span>
          </span>{' '}
          rincipaux partenaires
        </h2>
      </div>
      <div style={{ height: "500px" }}>
        <Marquee velocity={50} scatterRandomly minScale={0.7}>
          {times(partners.length, Number).map((id) => (
            <Motion
              key={`marquee-example-company-${id}`}
              initDeg={randomIntFromInterval(0, 360)}
              direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
              velocity={10}
            >
              <div

                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  position: 'absolute',
                  transform: 'scale(0.4)',
                  top: '-50%',
                  left: '-50%',
                  objectPosition: 'center center',
                  willChange: 'transform opacity',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '10px',
                  overflow: 'hidden'

                }}
              >

                <img src={partners[id].img} style={{
                  width: '90%',
                  height: '90%',
                  objectFit: 'contain'
                }} alt='img' />
              </div>
            </Motion>
          ))}
        </Marquee>
      </div>

    </>

  )
}
/* 
*
*
* */
