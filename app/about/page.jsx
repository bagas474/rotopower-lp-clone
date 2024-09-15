import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'

const About = () => {
  return (
    <div class="container-fluid p-0">

        {/* Navbar */}
        <Navbar/>

        {/* Hero */}
        <Hero
            sectionName= "About Us"
        />

        <div class="container d-flex gap-5 my-5" style={{position: "relative"}}>
            <div 
                class="d-flex flex-column"
                style={{ minWidth: "160px", position: "sticky" }}
                >
                <button type="button" class="btn btn-link text-start text-decoration-none py-2 m-0">Rotopower</button>
                <button type="button" class="btn btn-link text-start text-decoration-none py-2 m-0">Our Founders</button>
                <button type="button" class="btn btn-link text-start text-decoration-none py-2 m-0">Our Mission</button>
                <button type="button" class="btn btn-link text-start text-decoration-none py-2 m-0">Choosing Us</button>
            </div>
            <div class="flex-grow-1 d-flex flex-column gap-5">

                <div>
                    <h5 class="fs-1 mb-4 text-start">Welcome to Rotopower</h5>
                    <p>At Rotopower, we are dedicated to revolutionizing the maintenance and optimization of rotating machinery. Founded by three industry veterans, our expertise spans vibration analysis, coal-fired power plants, machine learning applications, and digital twinning. We stand at the forefront of innovation in mechanical maintenance and diagnostics.</p>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">Our Founders</h5>
                    <p>At Rotopower, we are dedicated to revolutionizing the maintenance and optimization of rotating machinery. Founded by three industry veterans, our expertise spans vibration analysis, coal-fired power plants, machine learning applications, and digital twinning. We stand at the forefront of innovation in mechanical maintenance and diagnostics.</p>
                    <div class="d-flex gap-5 mt-5">
                        <div class="card border-0 bg-transparent">
                            <img src="/about/pic1.png" class="card-img-top" alt="..."/>
                            <div class="card-body p-4">
                                <h4 class="card-title">Failure Analysis</h4>
                                <p class="card-text">Identify potential failures and their consequences using fault trees.</p>
                            </div>
                        </div>
                        <div class="card border-0 bg-transparent">
                            <img src="/about/pic2.png" class="card-img-top" alt="..."/>
                            <div class="card-body p-4">
                                <h4 class="card-title">Digital Twin Technology</h4>
                                <p class="card-text">Leverage AI to predict asset behavior and detect anomalies.</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex gap-5 mt-5">
                        <div class="card border-0 bg-transparent">
                            <img src="/about/pic3.png" class="card-img-top" alt="..."/>
                            <div class="card-body p-4">
                                <h4 class="card-title">Failure Analysis</h4>
                                <p class="card-text">Identify potential failures and their consequences using fault trees.</p>
                            </div>
                        </div>
                        <div class="card border-0 bg-transparent">
                            <img src="/about/pic4.png" class="card-img-top" alt="..."/>
                            <div class="card-body p-4">
                                <h4 class="card-title">Digital Twin Technology</h4>
                                <p class="card-text">Leverage AI to predict asset behavior and detect anomalies.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">Our Mission</h5>
                    <p>We aim to enhance the operational efficiency and reliability of mechanical equipment across various industries, including chemical plants and power generation facilities. Our core services include:</p>
                    <div class="card p-5 border-0 bg-info-subtle mt-4 d-flex flex-row align-items-center gap-5">
                        <img src="/about/lencana.svg" class="card-img-top" alt="..." style={{ width:"64px" }}/>
                        <p class="text-primary-emphasis">Corporate Training Programs: Empowering your team with the latest advancements in machine learning, engineering analytical approaches, FMEA, and digital twin modeling. Our programs provide practical, hands-on experience to ensure your personnel can implement and benefit from these advanced methodologies.</p>
                    </div>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">Why Choose RotoPower</h5>
                    <p>We aim to enhance the operational efficiency and reliability of mechanical equipment across various industries, including chemical plants and power generation facilities. Our core services include:</p>
                    <div class="d-flex gap-5 mt-5">
                        <div class="card border-0 bg-transparent">
                            <img src="/about/pic5.jpg" class="card-img-top" style={{ width: "100%", height: "150px", objectFit: "cover" }} alt="..."/>
                            <div class="card-body p-0 my-4">
                                <h4 class="card-title">Predictive Maintenance Solutions</h4>
                                <p class="card-text">Utilizing data-driven insights to achieve long-term reliability, operational efficiency, and significant cost savings.</p>
                            </div>
                        </div>
                        <div class="card border-0 bg-transparent">
                            <img src="/about/pic6.jpg" class="card-img-top" style={{ width: "100%", height: "150px", objectFit: "cover" }} alt="..."/>
                            <div class="card-body p-0 my-4">
                                <h4 class="card-title">Empowered Teams</h4>
                                <p class="card-text">Cultivating proficient operations and maintenance teams through comprehensive training programs.</p>
                            </div>
                        </div>
                        <div class="card border-0 bg-transparent">
                            <img src="/about/pic7.jpg" class="card-img-top" style={{ width: "100%", height: "150px", objectFit: "cover" }} alt="..."/>
                            <div class="card-body p-0 my-4">
                                <h4 class="card-title">Vibration Diagnosis and Prognosis</h4>
                                <p class="card-text">Leveraging advanced vibration analysis to diagnose and forecast machinery health.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card p-5 d-flex flex-row gap-5 border-0 bg-primary">
                    <div class="align-self-center">
                        <h5 class="fs-1 mb-4 text-start text-light">Join Us</h5>
                        <p class="text-white-50">Take the first step towards transforming your maintenance and operations strategies with Rotopower. Together, we can drive your business forward with the power of advanced technology and intelligent solutions.</p>
                    </div>
                    <button type="button" class="btn btn-light btn-lg w-50 align-self-center">Large button</button>
                </div>
            </div>
        </div>

        {/* Footer */}
        <Footer />

    </div>
  )
}

export default About