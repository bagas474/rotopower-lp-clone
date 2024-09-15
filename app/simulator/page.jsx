import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Hero from '../components/hero'

const Simulator = () => {
  return (
    <div class="container-fluid p-0" style={{ backgroundColor: "#F9FAFB" }}>

        {/* Navbar */}
        <Navbar/>

        {/* Hero Section */}
        <Hero 
            sectionName= "Our Simulator"
        />

        {/* Carousel */}
        <div class="container my-5">
            <h5 class="fs-1 mb-4 text-center">Elevate your training with our cutting-edge <br/> simulation tool</h5>
        </div>

        <div 
            id="carouselExampleIndicators" 
            class="container carousel slide my-5">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/slide/slide1.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="/slide/slide2.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="/slide/slide3.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="/slide/slide4.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="/slide/slide5.png" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        {/* Key Features */}
        <div class="container my-5">
            <h5 class="fs-1 mb-4 text-center">Key Features</h5>
        </div>

        <div class="container d-flex gap-4 mb-3">
            <div class="card border-0 bg-transparent">
                <img src="/key-features/failure-analysis.png" class="card-img-top" alt="..."/>
                <div class="card-body p-4">
                    <h4 class="card-title">Failure Analysis</h4>
                    <p class="card-text">Identify potential failures and their consequences using fault trees.</p>
                </div>
            </div>
            <div class="card border-0 bg-transparent">
                <img src="/key-features/digital-twin.png" class="card-img-top" alt="..."/>
                <div class="card-body p-4">
                    <h4 class="card-title">Digital Twin Technology</h4>
                    <p class="card-text">Leverage AI to predict asset behavior and detect anomalies.</p>
                </div>
            </div>
        </div>
        <div class="container d-flex gap-4">
            <div class="card border-0 bg-transparent">
                <img src="/key-features/asset-tree.png" class="card-img-top" alt="..."/>
                <div class="card-body p-4">
                    <h4 class="card-title">Asset Tree</h4>
                    <p class="card-text">Organize your assets into a hierarchical structure.</p>
                </div>
            </div>
            <div class="card border-0 bg-transparent">
                <img src="/key-features/sensor-integration.png" class="card-img-top" alt="..."/>
                <div class="card-body p-4">
                    <h4 class="card-title">Sensor Integration</h4>
                    <p class="card-text">Connect real and virtual sensors for comprehensive data set.</p>
                </div>
            </div>
            <div class="card border-0 bg-transparent">
                <img src="/key-features/data-generation.png" class="card-img-top" alt="..."/>
                <div class="card-body p-4">
                    <h4 class="card-title">Data Generation</h4>
                    <p class="card-text">Simulate real-world scenarios with synthetic data.</p>
                </div>
            </div>
        </div>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Simulator