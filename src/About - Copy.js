import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Banner from './images/about-banner.jpg'
import { Link } from 'react-scroll';
import Slider from "react-slick";
import Cell01 from './images/cell01.jpg'
import Cell02 from './images/cell02.jpg'
import Cell03 from './images/cell03.jpg'
import Module01 from './images/module01.jpg'
import Module02 from './images/module02.jpg'
import Module03 from './images/module03.jpg'
import Module04 from './images/module04.png'
import Gallery01 from './images/gallery01.jpg'
import Gallery02 from './images/gallery02.jpg'
import Gallery03 from './images/gallery03.jpg'
import Gallery04 from './images/gallery04.jpg'
import Gallery05 from './images/gallery05.jpg'
import PEVEL from './images/PEVEL.jpg'
import Awards01 from './images/awards01.jpg'
import Awards02 from './images/awards02.jpg'
import Awards03 from './images/awards03.jpg'
import Awards04 from './images/awards04.jpg'
import Zero01 from './images/zero-liquid-01.jpg'
import Zero02 from './images/zero-liquid-02.jpg'
import Solarimg from './images/hand-video2.mp4'
import Leadership01 from './images/Surender-pal-singh.png'
import Leadership02 from './images/Chiranjeev-Saluja.png'
import Leadership03 from './images/B.Revathi-Rohini.png'
import Leadership04 from './images/Sudhir-Moola.png'
import Leadership05 from './images/Jasveen-Saluja.webp'
import Leadership05M from './images/Jasveen-Saluja-m.webp'
import Leadership06 from './images/Sridhar-Narayan.png'
import Leadership07 from './images/Vishnu-Hazari.png'
import Leadership08 from './images/Abhishek-Loonker.png'
import Leadership09 from './images/Niyathi-Madhasu.png'
import Leadership10 from './images/Priyadarshan-Bhatewara.png'
import Leadership11 from './images/Chandra-Mauli-Kumar.png'
import Leadership12 from './images/nk_pic.webp'
import Leadership13 from './images/srini_pic.webp'
import { NavLink } from 'react-router-dom';
import Premiervideo from './images/premier-video.mp4'
import Mpremiervideo from './images/mpremier-video.mp4'
import Aawards01 from './images/aawards01.jpg'
import Aawards02 from './images/aawards02.jpg'
import Aawards03 from './images/aawards03.jpg'
import Aawards04 from './images/aawards04.jpg'
import Aawards05 from './images/aawards05.jpg'
import Aawards06 from './images/aawards06.jpg'
import Aawards07 from './images/aawards07.jpg'
import Aawards08 from './images/aawards08.jpg'
import Aawards09 from './images/aawards09.jpg'
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Helmet } from 'react-helmet';


export const Home = () => {
  const [state, setState] = useState({turnover:1, workforce:1, states:1, cities:1});
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 600,
    arrows: true,
    autoplaySpeed:8000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
var settings2 = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 600,
  arrows: true,
  autoplaySpeed:8000,
  cssEase: "linear",
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 680,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};
var settings3 = {
  dots: false,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: false,
  speed: 600,
  arrows: true,
  autoplaySpeed:8000,
  cssEase: "linear",
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 680,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
};
useEffect(() => {
  window.addEventListener('scroll', changeBackground);             

  return () => {
    window.removeEventListener('scroll', changeBackground);
  }
 }, []);
const [tabs,setNavbar] = useState(false);
const changeBackground = () => {
 if(window.scrollY >= 700) {
   setNavbar(true);
 } else {
   setNavbar(false);
 }
};
  return (
    <>
    <Helmet>
    <title>India's leading manufacturer and supplier of PV Solar Cells and Modules</title>
    <meta name="description" content="Premier Energies is India's second largest fully integrated Solar Cell and Solar Module manufacturer. It is India's First LEED Gold Certified Solar Manufacturing Company." />
    <link rel="canonical" href="https://premierenergies.com/about-premier-energies" />
    <meta property="og:url" content="https://premierenergies.com/about-premier-energies" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="India's leading manufacturer and supplier of PV Solar Cells and Modules" />
    <meta name="og:description" content="Premier Energies is India's second largest fully integrated Solar Cell and Solar Module manufacturer. It is India's First LEED Gold Certified Solar Manufacturing Company.">
    </meta>
    </Helmet>
     <Header />
    <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
        <div className='container'>
        <div className='homcolft position-absolute position-right left'>
          <span className='colorborder'><em></em></span>
          <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Transition to a brighter tomorrow</h2>
        </div>
        </div>
      </div>
    </section>
    <section id='scrollingsection' className='pb-0'>
      <div className='scrollingsection'>
        <div className='container'>
          <div className='row'>
            <div className='web-container'>
              <div className='tabmain'>
	<div className={tabs ? 'tabs fixed' : 'tabs'}>
  <ul>
    <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="overview">OVERVIEW</Link></li>
    <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="infrastructure">INFRASTRUCTURE</Link></li>
    <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="our-ethos"> Ethos</Link></li>
    <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="our-journey"> Journey</Link></li>
    <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="our-leadership"> Leadership</Link></li>
    <li><Link activeClass="active" spy={true} smooth={true} duration={500} to="awards-recognitions"> Awards & Recognitions</Link></li>
		</ul>
	</div>
  </div>
  </div>
  </div> 
</div>
<div id="overview">
  <div className='container'>
    <div className='row'>
      <div className='web-conainer'>
        <div className='overview'>
        <div className='largecircleleft'></div>
        <div className='midcircleright down'></div>
        <div className='midcircleright'></div>
        <div className='smallcirclerightdark'></div>
                <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h1 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">About Us</h1>
                  </div>
                  </div>
                  <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Empower your future with our expertise</h3>
                  <div className='mdquote text-center'>
                    <h4 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">"The time to collaborate with nature is now, with Solar Power leading the way forward. It's the only way we are ever going to get to the other end of the 21st century."</h4>
                    <h5 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">CHIRANJEEV SALUJA</h5>
                    <h6 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">MANAGING DIRECTOR,<br/>PREMIER ENERGIES</h6>
                  </div>
                  <div className='col-12'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">The year was 1995, when Shri Surendarpal Singh Saluja established Premier Energies with the goal to harness the sun’s energy by incorporating it into solar cells and modules. </p>
                        
                        <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Over the past two and a half decades since, Premier Energies has made the journey from introducing the first solar panel assembly line with a 3 MW/year capacity, to establishing a fully-integrated 3.4 GW solar cell and module line. As part of the company’s ongoing growth, we are further expanding our horizons by undertaking construction of an additional 1.6 GW solar cell and PV module manufacturing line. </p>
                      </div>
                      <div className='col-md-6'>
                        <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Our state-of-the-art facility is equipped with the industry’s best automated mono PERC manufacturing line (with a cell efficiency of 22.9%), and is also capable of handling upcoming technologies of cells with larger sizes such as M10, M12 and Multi-Busbar cells. We also possess a fully-automated module line, capable of handling half-cut cells and bifacial modules. </p>
                        
                        <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">In addition to offering a wide range of solar products, Premier Energies also specializes in providing turnkey engineering, procurement and construction (EPC) solutions for setting up solar power plants. </p>
                      </div>
                    </div>
                  </div>                
        </div>
      </div>
    </div>
  </div>  
<div className="numbers pb-0">
          <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Premier ENERGIES IN NUMBERS</h2>
                  </div>
                  </div>                  
        </div>  
                  <div className='videostn' data-aos="fade-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
        <video autoPlay muted loop className='desktop-show'>
          <source src={Premiervideo} type="video/mp4"/>
    Sorry, your browser doesn't support videos.
</video>
<video autoPlay muted loop className='mobile-show'>
          <source src={Mpremiervideo} type="video/mp4"/>
    Sorry, your browser doesn't support videos.
</video>
        <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }) => (
                    <div className='numberbanner innernew'>
                      <div className='container'>
                        <div className='web-container'>
                        <div className="count">
      <div className="App">
            <div className="countnum">
            {/* {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 1.4} end={1.4} duration={2} separator=" " decimals={1}  decimal="."  onEnd={()=> setState({ workforce:1.4 })} /> : <CountUp start={1} end={1.4} duration={0} />} GW                 */}
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 3} end={3} duration={2} onEnd={()=> setState({ workforce:3 })} /> : <CountUp start={1} end={3} duration={0} />} GW<em>*</em>    
             <div className='labelcont'> SOLAR MODULE MANUFACTURING LINE</div>
            </div>     
            
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 2} end={2} duration={2} onEnd={()=> setState({ workforce:2 })} /> : <CountUp start={1} end={2} duration={0} />} GW  
             <div className='labelcont'>
             SOLAR CELL MANUFACTURING CAPACITY
        </div>
            </div>     
            
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.workforce===1) ? 1 : 3} end={3} duration={2} onEnd={()=> setState({ workforce:3 })} /> : <CountUp start={1} end={3} duration={0} />} GW                
             <div className='labelcont'>
             Solar modules sold worldwide
        </div>
            </div>     
            
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.states===1) ? 1 : 30} end={30} duration={2} onEnd={()=> setState({ states:30 })} /> : <CountUp start={1} end={30} duration={0}/>}+ 
             <div className='labelcont'>
             Countries of business footprint
             </div>
            </div>     
            
      </div>
      </div>
      <div className="count">
      {/* <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.cities===1) ? 1 : 2} end={2} duration={2} onEnd={() => setState({cities:2})}/> : <CountUp start={1} end={2} duration={0} />} GW
             <div className='labelcont'>
             SOLAR MODULE MANUFACTURING LINE UNDER CONSTRUCTION
             </div>
            </div>
      </div> */}
      {/* <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.cities===1) ? 1 : 2} end={2} duration={2} onEnd={() => setState({cities:2})}/> : <CountUp start={1} end={2} duration={0} />} GW
             <div className='labelcont'>
             Solar Modules sold Worldwide
             </div>
            </div>
      </div> */}
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.cities===1) ? 1 : 28} end={28} duration={2} onEnd={() => setState({cities:2})}/> : <CountUp start={1} end={2} duration={0} />}+ MW
             <div className='labelcont'>
             INDEPENDENT POWER PRODUCTION
             </div>
            </div>
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.cities===1) ? 1 : 35000} end={35000} duration={2} onEnd={() => setState({cities:2})}/> : <CountUp start={1} end={35000} duration={0} />}+
             <div className='labelcont'>
             SOLAR PUMPS INSTALLED
             </div>
            </div>
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.cities===1) ? 1 : 300} end={300} duration={2} onEnd={() => setState({cities:2})}/> : <CountUp start={1} end={300} duration={0} />}+
             <div className='labelcont'>
             Villages<br/>Electrified
             </div>
            </div>
      </div>
      <div className="App">
            <div className="countnum">
            {isVisible ? <CountUp start={(state.cities===1) ? 1 : 3000} end={3000} duration={2} onEnd={() => setState({cities:2})}/> : <CountUp start={1} end={3000} duration={0} />}+
             <div className='labelcont'>
             TALENT POOL OF EMPLOYEES
             </div>
            </div>
      </div>      
      </div>    
      </div>         
      </div>
         </div>
                        
            )}
        </VisibilitySensor>
        </div>      
        </div>
<div id="infrastructure">
<div className='infrastructure abtinfra'>
<div className='largecircleleft'></div>
<div className='midcircleright'></div>
  <div className='container'>
    <div className='row'>
      <div className='web-container'>
                    <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">infrastructure</h2>
                  </div>
                  </div>
                  <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">TO CREATE THE BEST, WE DEPLOY THE BEST. </h3>
                  <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Premier Energies deploys the latest and greatest in technology for all its projects, be it in manufacturing or EPC projects. Our new cutting-edge facility at E-City Hyderabad is testament to it.</p>
            </div>            
      </div>
    </div>
    <div className='infra'>
    <div className='infrabox'>
    <div className='largecircleright'></div>
<div className='smallcirclerightdark'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Cell Manufacturing Line</h2>
              </div>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><strong>Industry’s best automated Mono PERC manufacturing line, with 23.2% cell efficiency</strong></p>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Monocrystalline (PERC) Solar Cells can be created on the same line, owing to a Universal Texturing Machine requiring zero downtime. </p>              
              <p>The line is set up to handle wafers of sizes M10 and G12, ranging from 182x182 mm to 210x210 mm. </p>              
              <p>High degree of automation to ensure consistent & high quality and increase throughput.</p>
              </div>
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                  <Slider {...settings}>
      <div>
      <div className='homeslider'>
          <img src={Cell01} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Cell03} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Cell02} />
        </div>
      </div>
    </Slider>
                  </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div className='infrabox'>
    <div className='largecircleleft'></div>
    <div className='smallcirclerightdarkleft'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Module Manufacturing Line</h2>
              </div>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><strong>Fully-automated, state-of-the-art module line for half-cut cells and bifacial modules</strong></p>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">	Capable of manufacturing 600+W solar panels</p>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Can handle wide variety of cell sizes (M2, G1, M4, M6, M9, M10 and M12), ranging from dimensions 156.75x156.75 mm to 210x210 mm. </p>
              </div>
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                  <Slider {...settings}>
      <div>
      <div className='homeslider'>
          <img src={Module02} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Module03} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Module04} />
        </div>
      </div>
    </Slider>
                  </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div className='infrabox'>
    <div className='largecircleright'></div>
    <div className='smallcirclerightdark'></div>
      <div className='container'>
        <div className='web-container'>
          <div className='infracenter'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='infracont'>
            <div className='infraheading'>
              <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Zero Liquid Discharge System</h2>
              </div>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"><strong>Best-in-Class MVRE Technology</strong></p>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Mechanical Vapor Recompression Evaporation technology attains 90% recovery rate while using less steam than traditional processes.</p>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Wet sludge is delivered to recycling unit for further polishing and appropriate usage.</p>
              <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Final solid trash generated is then sent to hazardous waste disposal unit for use in landfills.</p>
              </div>
          </div>
          <div className='col-md-6'>
          <div className='infraslider' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                  <Slider {...settings}>
      <div>
      <div className='homeslider'>
          <img src={Zero01} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Zero02} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Module01} />
        </div>
      </div>
    </Slider>
                  </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
    <div className='infragallery pb-0'>
      <div className='container'>
        <div className='row'>
                  <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
                  <TabList>
                    <Tab>Gallery</Tab>
                    <Tab>Video</Tab>
                  </TabList>
                  <TabPanel>
                  <div className='gallery' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
          <Slider {...settings2}>
      <div>
      <div className='homeslider'>
          <img src={Gallery01} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Gallery02} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Gallery03} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Gallery04} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Gallery05} />
        </div>
      </div>      
    </Slider>
          </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='gallery' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                    <iframe  src="https://www.youtube.com/embed/hZUH1GXIRA4?rel=0" title="Premier Energies - A glimpse into our journey" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    </TabPanel>
                    </Tabs>
              
          </div>
      </div>
    </div>
  </div>

</div>
<div id="our-ethos">
  
  <div className='our-ethos'>
  <div className='largecircleleft'></div>
        <div className='midcircleright down'></div>
        <div className='midcircleright'></div>
        <div className='smallcirclerightdark'></div>
  <div className='container'>
    <div className='row'>
      <div className='web-container'>        
  <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Our Ethos</h2>
                  </div>
                  </div>
                  <div className='mdquote text-center purpose'>
                   <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Purpose</h3>
                   <p>One Planet. One mission. <br/>Let’s make it carbon-free. <br/><strong>Let’s go solar.</strong></p>
                  </div>
      </div>
    </div>
  </div>
  <div className='right-video'>
  <video autoPlay muted>
          <source src={Solarimg} type="video/mp4"/>
    Sorry, your browser doesn't support videos.
</video>
</div>
  </div>
  <div className='ethosbanner'>
    <div className='container'>
      <div className='row'>
        <div className='web-container'>
          <div className='col-md-12 ethoscont'>
            <div className='row'>
              <div className='col-md-6' data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500"> 
                <h3>vision</h3>
                <p><strong>To be an organization of high admiration.</strong></p>
                <p>Admired for providing the most compelling value in the solar energy industry. </p>
                <p>While doing so, we must become an amiable company to work for and also an ethical company to work with.</p>
              </div>
              <div className='col-md-6'>
                <div className='value' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                <h3>VALUES</h3>
                <ul>
                  <li>Culture of Safety</li>
                  <li>Sustainable Practices</li>
                  <li>Client Focus</li>
                  <li>Open, Honest and Clear Communication</li>
                  <li>Professional and Ethical</li>
                  <li>Regulatory Integrity</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="our-journey">
            <div className='our-journey'>
            <div className='largecircleright'></div>
        <div className='midcircleleft down'></div>
        <div className='midcircleleft'></div>
        <div className='midcircleright'></div>
        <div className='smallcircleleftdark'></div>
              <div className='container'>
                <div className='row'>
                  <div className='web-container'>
                  <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Our Journey</h2>
                  </div>
                  </div>                  
                  <div className='infrastructure'>
                  <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">FROM MEGA WATT TO GIGA WATT</h3>
                    <p data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">At Premier Energies, we value learning above all else. This attitude has enabled us to not only overcome the numerous challenges faced along the way, but also to grow at an accelerated pace by finding ethical solutions and incorporating them into our endeavors. </p>
                  </div>
                  <div className='journeyslider pb-0' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                  <Slider {...settings3}>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>1995</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Introduced the first solar panel assembly line with a capacity of 3 MW p.a.</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>1999</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Commenced the export of solar modules</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2001</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>15,000 solar lanterns supplied for World Bank project. </p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2002</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>300 underprivileged villages electrified</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2006</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Received the Best Export Performance Award</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2007</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Increased module manufacturing capacity to 50 MW p.a.</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2011</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Diversified Solar EPC through subsidiary “Premier Solar Powertech”</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2012</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Established a solar power plant of 2 MW in Jharkhand</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2013</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Acquired fully-automated module line with increased capacity of 125 MW p.a.</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2016</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Launched 60+ MW solar Cell manufacturing facility</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2017</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Expanded automated module line to 500 MW capacity p.a.</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2018</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Received BIS certification for quality standards </p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2019</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Implemented 100 MW EPC & World’s first IEC CB certification by UL</p>
                      </div>
                    </div>
      </div>
      <div>
      <div className='jsliderbox'>
                      <div className='jsliderimg'>
                        <h4>2021</h4>
                      </div>
                      <div className='jslidercont'>
                        <p>Established fully integrated 3.4 GW cell and Module Line at Fabcity</p>
                      </div>
                    </div>
      </div>
    </Slider>
                   
                  </div>
                </div>
                
                </div>
              </div>
            </div>
</div>
<div id="our-leadership">
            <div className='leadership pb-0'>
            <div className='largecircleleft'></div>
        <div className='midcircleleft'></div>
        <div className='midcircleright'></div>
        <div className='smallcirclerightdark'></div>
              <div className='container'>
                <div className='row'>
                  <div className='web-container'>                    
                  <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Our Leadership</h2>
                  </div>
                  </div> 
                  <h3 data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Meet the Captains of Premier Energies</h3>
                  <div className='leaderships mb-0'>
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership01} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>SURENDER PAL SINGH</h2>
                        <span>Founder & Chairman</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/surender-pal-singh'><span>Read Bio</span></NavLink> 
                  </div>
                      </div>
                    </div>
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership02} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>CHIRANJEEV SALUJA</h2>
                        <span>Managing Director</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/chiranjeev-saluja'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership03} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>REVATHI ROHINI B</h2>
                        <span>Director</span>
                        <div className='webbtn'>
                        <NavLink className="btn-4" to='/revathi-rohini-b'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership04} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>SUDHIR MOOLA</h2>
                        <span>Director</span>
                        <div className='webbtn'>
                        <NavLink className="btn-4" to='/sudhir-moola'><span>Read Bio</span></NavLink>
						</div>
                      </div>
                    </div>
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership05} className='desktop-show' />
                          <img src={Leadership05M} className='mobile-show' />
                      </div>
                      <div className='leadershipcont'>
                        <h2>JASVEEN SALUJA</h2>
                        <span>Director, Entrepreneur</span>
                        <div className='webbtn'>
                        <NavLink className="btn-4" to='/jasveen-saluja'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership06} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>SRIDHAR NARAYAN</h2>
                        <span>Director</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/sridhar-narayan'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>
                  
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership08} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>ABHISHEK LOONKER</h2>
                        <span>Director</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/abhishek-loonker'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership09} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>NIYATHI MADASU </h2>
                        <span>Director</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/niyathi-madasu'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>
                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership07} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>VISHNU HAZARI</h2>
                        <span>Chief Operating Officer</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/vishnu-hazari'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>
                    {/* <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership10} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>PRIYADARSHAN BHATEWARA </h2>
                        <span>Chief Financial Officer</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/priyadharshan-bhatewara'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div> */}
                    

                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership13} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>SRINI ADAPA</h2>
                        <span>Chief Growth Officer</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/srini-adapa'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>

                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership12} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>NAND KISHORE KHANDELWAL</h2>
                        <span>Senior Financial Advisor</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/nand-kishore-khandelwal'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>





                    <div className='leadershipbox' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                      <div className='leadershipimg'>
                          <img src={Leadership11} />
                      </div>
                      <div className='leadershipcont'>
                        <h2>CHANDRA MAULI KUMAR</h2>
                        <span>Head- Manufacturing and Technology</span>
                        <div className='webbtn'>
                  <NavLink className="btn-4" to='/chandra-mauli-kumar'><span>Read Bio</span></NavLink>
                  </div>
                      </div>
                    </div>




                  </div>
                  </div>
                </div>
              </div>
            </div>
</div>
<div id='awards-recognitions'>
        <div className='awards'>
            <div className='container'>
                <div className='row'>
                    <div className='infragallery pb-0'>
      <div className='container'>
        <div className='row'>
          <div className='web-container'>
          <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Awards & Recognitions</h2>
                  </div>
                  </div>                 
                  <h3 className='m-0'>It’s good to be recognized</h3>
                  <p>As an organisation, we are united in our purpose to build a carbon-free world. In our pursuit of manufacturing and operational excellence, we have been bestowed with an array of awards over the years, which recognize us over and again for our sustainable products & services, innovation and employee engagement policies. </p>
                  <div className="pevel_cert">
                  <img src={PEVEL} alt="pvel-certification" />
                  </div>

                  <div className='awardslogo' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
                    <div className='awardsbox'>
                      <img src={Aawards01} />
                    </div>
                    <div className='awardsbox'>
                      <img src={Aawards02} />
                    </div>
                    <div className='awardsbox'>
                      <img src={Aawards03} />
                    </div>
                    <div className='awardsbox'>
                      <img src={Aawards04} />
                    </div>
                    <div className='awardsbox'>
                      <img src={Aawards05} />
                    </div>
                    <div className='awardsbox'>
                      <img src={Aawards06} />
                    </div>
                    <div className='awardsbox'>
                      <img src={Aawards07} />
                    </div>
                    <div className='awardsbox'>
                      <img src={Aawards08} />
                    </div>
                    <div className='awardsbox'>
                      <img src={Aawards09} />
                    </div>
                  </div>
          </div>
          <div className='gallery awards-recon' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">
          <Slider {...settings2}>
      <div>
      <div className='homeslider'>
          <img src={Awards01} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Awards02} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Awards03} />
        </div>
      </div>
      <div>
      <div className='homeslider'>
          <img src={Awards04} />
        </div>
      </div>     
    </Slider>
          </div>
        </div>
      </div>
    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </section>
     <Footer />
    </>
  )
}
export default Home;