import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Accordion, AccordionItem } from "react-light-accordion";
import Banner from "./images/career_desktop.jpg";
import Mbanner from "./images/career_mobile.jpg";
import axios from "axios";
import { Helmet } from "react-helmet";

export const InvestorRealation = () => {
  // API Start
  const [pagedata, setPagedata] = useState([]);
  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      const response = await axios.get(
        "https://www.premierenergies.com/api/career.php"
      );
      if (mounted) {
        setPagedata(response.data);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  console.log(pagedata);

  if (pagedata.length === 0) {
    console.log("no data");
    return null;
  }
  // API End
  return (
    <>
      <Helmet>
        <title>Investor Relations - Premier Energies</title>
        <meta
          name="description"
          content="Explore Exciting Career Opportunities at Premier Energies - Join the Team that Illuminates the World."
        />
        <link
          rel="canonical"
          href="https://premierenergies.com/investor-relations"
        />
        <meta
          property="og:url"
          content="https://premierenergies.com/investor-relations"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Investor-Relations - Premier Energies"
        />
        <meta
          name="og:description"
          content="Explore Exciting Career Opportunities at Premier Energies - Join the Team that Illuminates the World."
        ></meta>
      </Helmet>
      <Header />
      <section id="banner" className="p-0">
        <div className="banner">
          <img src={Banner} className="desktop-show" />
          <img src={Mbanner} className="mobile-show mobilebanner" />
        </div>
      </section>
      <section id="career">
        <div className="career">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="careerbox">
                  <div className="title centerheading">
                    <div className="centerit">
                      <span className="colorborder">
                        <em></em>
                      </span>
                      <h1
                        data-aos="fade-down"
                        data-aos-offset="100"
                        data-aos-easing="ease-in-sine"
                        data-aos-once="true"
                        data-aos-duration="500"
                      >
                        Career
                      </h1>
                    </div>
                  </div>
                  <h3
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    WHY Premier Energies?
                  </h3>
                  <p
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos-once="true"
                    data-aos-duration="500"
                  >
                    With a vision to improve overall quality of life on this
                    planet while also being an amiable company to work for and
                    an ethical company to work with, Premier Energies provides a
                    wide range of opportunities to its people to contribute
                    towards building a cleaner, greener tomorrow.{" "}
                  </p>
                  <p>
                    Guided by the philosophy of ‘Planet First, Humans First’, we
                    ensure that our employees are empowered with the necessary
                    resources and provided the right direction by our management
                    team of highly enthusiastic and motivated solar experts.{" "}
                  </p>
                </div>
                <div className="careerbox">
                  <div className="nriaccordian m-0 p-0">
                    <div>
                      {pagedata.careerjobs ? (
                        <div
                          className="currentopening"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <Accordion atomic={true}>
                            {/* Loop Start */}
                            {pagedata.careerjobs.map((jobsData) => (
                              <AccordionItem title={jobsData.role}>
                                <div className="nricont">
                                  <ul>
                                    <li>
                                      <i className="fa fa-suitcase"></i>
                                      <span>{jobsData.descp}</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-map-marker"></i>
                                      <span>{jobsData.city}</span>
                                    </li>
                                  </ul>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: jobsData.ocontent,
                                    }}
                                  ></p>
                                </div>
                              </AccordionItem>
                            ))}
                            {/* Loop End */}
                          </Accordion>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="currentopening">
        <div className="career">
          <div className="container">
            <div className="row">
              <div className="web-container">
                <div className="careerbox">
                  <div className="nriaccordian m-0 p-0">
                    <div className="title centerheading">
                      <div className="centerit">
                        <span className="colorborder">
                          <em></em>
                        </span>
                        <h2
                          data-aos="fade-down"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          Current Opening
                        </h2>
                      </div>
                    </div>
                    <div>
                      {pagedata.careerjobs ? (
                        <div
                          className="currentopening"
                          data-aos="fade-up"
                          data-aos-offset="100"
                          data-aos-easing="ease-in-sine"
                          data-aos-once="true"
                          data-aos-duration="500"
                        >
                          <Accordion atomic={true}>
                            {/* Loop Start */}
                            {pagedata.careerjobs.map((jobsData) => (
                              <AccordionItem title={jobsData.role}>
                                <div className="nricont">
                                  <ul>
                                    <li>
                                      <i className="fa fa-suitcase"></i>
                                      <span>{jobsData.descp}</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-map-marker"></i>
                                      <span>{jobsData.city}</span>
                                    </li>
                                  </ul>
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: jobsData.ocontent,
                                    }}
                                  ></p>
                                </div>
                              </AccordionItem>
                            ))}
                            {/* Loop End */}
                          </Accordion>
                        </div>
                      ) : null}
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
  );
};
