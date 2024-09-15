import React from 'react'
import Navbar from '../components/navbar'
import Image from 'next/image'
import Hero from '../components/hero'
import Footer from '../components/footer'

const training = () => {
  return (
    <div class="w-auto">
        
      <Navbar />
      <Hero sectionName="Training"/>

      <div class="container my-5 d-flex flex-column gap-5">

        <div>
          <h5 class="fs-1 mb-4 text-start">Training Overview</h5>
          <p>Your training experience will be enhanced by <a href='#'>an application which we developed</a> specially for modern and up to date methodology for managing asset, detecting fault by artificial intelligence and machine learning, building failure modes and their effect (FMEA) and fault tree (FTA). The application is designed to simulate the behavior of assets, including potential failures and their consequences.</p>
          <p>The simulation will be centered around an asset tree which represents the hierarchical structure of assets. Each asset can have multiple sensors—either real or virtual. Virtual sensors are created by combining data from multiple real sensors using mathematical expressions. Both real and virtual sensors can experience anomalies that indicate potential failures.</p>
          <p>We'll use fault trees to model the relationships between these failures. A fault tree is a graphical representation of how different failures can lead to a top-level system failure. Failure modes are classified based on their severity (critical, degradation, or incipient).</p>
          <p>To provide a more realistic simulation, we'll create digital twins for each sensor. These digital twins are machine learning models (like regression and time series models) trained on historical sensor data. We can use these digital twins to forecast future sensor readings and compare them to actual readings to detect anomalies.</p>
          <p>A data generator will be used to create synthetic sensor data. This data will be used to train the digital twins and to simulate various failure scenarios..</p>
        </div>

        <div>
          <h5 class="fs-1 mb-4 text-start">The Training Process</h5>
          <ul class="d-flex flex-column gap-1">
            <li>Building an asset tree</li>
            <li>Assigning sensors to assets</li>
            <li>Defining failure modes and their effects</li>
            <li>Constructing fault trees</li>
            <li>Creating digital twins</li>
            <li>Simulating failures and analyzing the results</li>
          </ul>
        </div>

        <div class="d-flex gap-3">
          <div class="card p-4 pb-5 d-flex flex-column gap-3 border-0 bg-info-subtle">
            <img src="/training/mechanic.svg" class="card-img-top" alt="..." style={{ width:"48px" }}/>
            <h5>Failure Modes and Effects Analysis (FMEA)</h5>
            <ul class="d-flex flex-column gap-1">
              <li>Introduction to FMEA</li>
              <li>Advanced FMEA Techniques for Mechanical Equipment</li>
              <li>Advanced FMEA Techniques for Mechanical Equipment</li>
              <li>Practical Applications of FMEA in Energy Industries</li>
            </ul>
            <a href="/training/agenda" class="text-decoration-none">See Available Training</a>
          </div>
          <div class="card p-4 pb-5 d-flex flex-column gap-3 border-0 bg-info-subtle">
            <img src="/training/coal.svg" class="card-img-top" alt="..." style={{ width:"48px" }}/>
            <h5>Failure Modes and Effects Analysis (FMEA)</h5>
            <ul class="d-flex flex-column gap-1">
              <li>Introduction to FMEA</li>
              <li>Advanced FMEA Techniques for Mechanical Equipment</li>
              <li>Advanced FMEA Techniques for Mechanical Equipment</li>
              <li>Practical Applications of FMEA in Energy Industries</li>
            </ul>
            <a href="/training/agenda" class="text-decoration-none">See Available Training</a>
          </div>
          <div class="card p-4 pb-5 d-flex flex-column gap-3 border-0 bg-info-subtle">
            <img src="/training/pv.svg" class="card-img-top" alt="..." style={{ width:"48px" }}/>
            <h5>Failure Modes and Effects Analysis (FMEA)</h5>
            <ul class="d-flex flex-column gap-1">
              <li>Introduction to FMEA</li>
              <li>Advanced FMEA Techniques for Mechanical Equipment</li>
              <li>Advanced FMEA Techniques for Mechanical Equipment</li>
              <li>Practical Applications of FMEA in Energy Industries</li>
            </ul>
            <a href="/training/agenda" class="text-decoration-none">See Available Training</a>
          </div>
          <div class="card p-4 pb-5 d-flex flex-column gap-3 border-0 bg-info-subtle">
            <img src="/training/fmea.svg" class="card-img-top" alt="..." style={{ width:"48px" }}/>
            <h5>Failure Modes and Effects Analysis (FMEA)</h5>
            <ul class="d-flex flex-column gap-1">
              <li>Introduction to FMEA</li>
              <li>Advanced FMEA Techniques for Mechanical Equipment</li>
              <li>Advanced FMEA Techniques for Mechanical Equipment</li>
              <li>Practical Applications of FMEA in Energy Industries</li>
            </ul>
            <a href="/training/agenda" class="text-decoration-none">See Available Training</a>
          </div>
        </div>

        <div class="d-flex">

          <div class="p-5 bg-primary">
            <img src="/training/doc-list.svg" class="card-img-top mb-3" alt="..." style={{ width:"32px" }}/>
            <h5 class="text-white fs-1 mb-4 text-start">Upcoming <br/>Training Date</h5>
            <a href="#" class="text-decoration-none text-white">See More</a>
          </div>

          <div class="d-flex flex-column flex-grow-1 p-5 gap-4">
            <div class="card border-0 d-flex flex-row align-items-center gap-5 ps-4 rounded-0 border-4 border-start border-primary">
              <div>
                <p>Failure Modes and Effects Analysis (FMEA)</p>
                <h5 class="mb-3">Mastering FMEA for the Oil and Gas Industry with OREDA-Based Asset Management and Rotopower Software Tools</h5>
                <div class="d-flex gap-4">
                  <p>2 Days</p>
                  <p>7-8 November 2024</p>
                  <p>Yogyakarta</p>
                </div>
              </div>
              <div style={{ width: "120px" }}>
                <a href="/training/agenda/course/book">Book this</a>
              </div>
            </div>

            <div class="card border-0 d-flex flex-row align-items-center gap-5 ps-4 rounded-0 border-4 border-start border-primary">
              <div>
                <p>Failure Modes and Effects Analysis (FMEA)</p>
                <h5 class="mb-3">Mastering FMEA for the Oil and Gas Industry with OREDA-Based Asset Management and Rotopower Software Tools</h5>
                <div class="d-flex gap-4">
                  <p>2 Days</p>
                  <p>7-8 November 2024</p>
                  <p>Yogyakarta</p>
                </div>
              </div>
              <div style={{ width: "120px" }}>
                <a href="/training/agenda/course/book">Book this</a>
              </div>
            </div>
          </div>

        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default training