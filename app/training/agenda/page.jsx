import Footer from '@/app/components/footer'
import Hero from '@/app/components/hero'
import Navbar from '@/app/components/navbar'
import React from 'react'

const Agenda = () => {
  return (
    <div>
        <Navbar/>
        <Hero
            sectionName="Traning Agenda"
        />
        <div class="container d-flex gap-5 my-5">

            <div style={{ maxWidth: "190px" }}>
                <p>Training Subject</p>
                <div class="d-flex flex-column gap-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Failure Modes and Effects Analysis (FMEA)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Root Cause Analysis (RCA)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Data-Driven Diagnosis and Prognosis
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Machine Learning and Artificial Intelligence in Energy
                        </label>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-column gap-3">
                
                <div>
                    <div class="d-flex align-items-center gap-5 border p-4 flex-row rounded-0">
                        <div>
                            <div class="d-flex gap-4">
                                <p>2 Agenda Available</p>
                                <p>Failure Modes and Effect Analysis (FMEA)</p>
                            </div>
                            <h5><a href="/training/agenda/course" class="text-decoration-none text-primary-emphasis">Mastering FMEA for the Oil and Gas Industry with OREDA-Based Asset Management and Rotopower Software Tools</a></h5>
                        </div>
                        <p style={{ width: "150px" }}>Show Dates</p>
                    </div>
                    <div>
                        <div class="d-flex border border-top-0 rounded-0 p-4 pb-2 bg-light">
                            <div class="d-flex flex-grow-1 gap-4">
                                <p>2 Days</p>
                                <p>7-8 November</p>
                                <p>Yogyakarta</p>
                            </div>
                            <a class="text-decoration-none" href="/training/agenda/course/book">Book this</a>
                        </div>
                        <div class="d-flex border border-top-0 rounded-0 p-4 pb-2 bg-light">
                            <div class="d-flex flex-grow-1 gap-4">
                                <p>2 Days</p>
                                <p>7-8 November</p>
                                <p>Yogyakarta</p>
                            </div>
                            <a class="text-decoration-none" href="/training/agenda/course/book">Book this</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="d-flex align-items-center gap-5 border p-4 flex-row rounded-0">
                        <div>
                            <div class="d-flex gap-4">
                                <p>1 Agenda Available</p>
                                <p>Failure Modes and Effect Analysis (FMEA)</p>
                            </div>
                            <h5><a href="/training/agenda/course" class="text-decoration-none text-primary-emphasis">Mastering FMEA for the Oil and Gas Industry with OREDA-Based Asset Management and Rotopower Software Tools</a></h5>
                        </div>
                        <p style={{ width: "150px" }}>Show Dates</p>
                    </div>
                    <div>
                        <div class="d-flex border border-top-0 rounded-0 p-4 pb-2 bg-light">
                            <div class="d-flex flex-grow-1 gap-4">
                                <p>2 Days</p>
                                <p>7-8 November</p>
                                <p>Yogyakarta</p>
                            </div>
                            <a class="text-decoration-none" href="/training/agenda/course/book">Book this</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="d-flex align-items-center gap-5 border p-4 flex-row rounded-0">
                        <div>
                            <div class="d-flex gap-4">
                                <p>No Agenda Available</p>
                                <p>Failure Modes and Effect Analysis (FMEA)</p>
                            </div>
                            <h5><a href="/training/agenda/course" class="text-decoration-none text-primary-emphasis">Mastering FMEA for the Oil and Gas Industry with OREDA-Based Asset Management and Rotopower Software Tools</a></h5>
                        </div>
                        <p class="text-body-tertiary" style={{ width: "150px" }}>Show Dates</p>
                    </div>
                    <div>
                        {/* <div class="d-flex border border-top-0 rounded-0 p-4 pb-2 bg-light">
                            <div class="d-flex flex-grow-1 gap-4">
                                <p>2 Days</p>
                                <p>7-8 November</p>
                                <p>Yogyakarta</p>
                            </div>
                            <a class="text-decoration-none" href="#">Book this</a>
                        </div> */}
                    </div>
                </div>

            </div>

        </div>

        <Footer/>
    </div>
  )
}

export default Agenda