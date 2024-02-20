import React from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Banner from './images/awards-banner.jpg'
import Img01 from './images/certificate01.png'
import Img02 from './images/certificate02.png'
import Img03 from './images/certificate03.png'
import Img04 from './images/certificate04.png'
import Img05 from './images/certificate05.png'
import Img06 from './images/certificate06.png'
import Img07 from './images/certificate07.png'
import Img08 from './images/certificate08.png'
import Img09 from './images/certificate09.png'
import Img10 from './images/certificate10.png'
import Img11 from './images/certificate11.png'
import Img12 from './images/certificate12.png'
import Img13 from './images/certificate13.png'
import Img14 from './images/certificate14.png'
import Img15 from './images/certificate15.png'
import Img16 from './images/certificate16.png'
import Img17 from './images/certificate17.png'
import Img18 from './images/certificate18.png'
import Img19 from './images/certificate19.png'
import Img20 from './images/certificate20.png'

export const Certification = () => {
  return (
    <>
    <Helmet>
    <link rel="canonical" href="https://premierenergies.com/certification" />
    </Helmet>
        <Header />
        <section id='banner' className='p-0'>
      <div className='banner'>
        <img src={Banner} />
      </div>
    </section>
    <section id='certification'>
            <div className='certification'>
                <div className='container'>
                    <div className='row'>
                        <div className='web-container'>
                        <div className='title centerheading'>
                    <div className='centerit'>
                  <span className='colorborder'><em></em></span>
                    <h2 data-aos="fade-down" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-once='true' data-aos-duration="500">Certifications</h2>
                  </div>
                  </div> 
                  <div className='content'>
                  <p>Premier Energy takes pride in holding several prestigious certifications that speak for the quality of our offerings and our management. We value our clients & employees immensely, continuously working in their favour by meeting and often even surpassing their expectations. Our certifications thus serve as formal recognitions of the standards we uphold for our products and services. </p>
                  <p>Here are some of the numerous certifications received by Premier Energies over the years.</p>
                  </div>
                  <div className='certificates'>
                    <ul>
                        <li><img src={Img01}/></li>
                        <li><img src={Img02}/></li>
                        <li><img src={Img03}/></li>
                        <li><img src={Img04}/></li>
                        <li><img src={Img05}/></li>
                        <li><img src={Img06}/></li>
                        <li><img src={Img07}/></li>
                        <li><img src={Img08}/></li>
                        <li><img src={Img09}/></li>
                        <li><img src={Img10}/></li>
                        <li><img src={Img11}/></li>
                        <li><img src={Img12}/></li>
                        <li><img src={Img13}/></li>
                        <li><img src={Img14}/></li>
                        <li><img src={Img15}/></li>
                        <li><img src={Img16}/></li>
                        <li><img src={Img17}/></li>
                        <li><img src={Img18}/></li>
                        <li><img src={Img19}/></li>
                        <li><img src={Img20}/></li>
                    </ul>
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
