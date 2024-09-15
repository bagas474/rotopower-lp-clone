import Footer from '@/app/components/footer'
import Hero from '@/app/components/hero'
import Navbar from '@/app/components/navbar'
import React from 'react'

const Course = () => {
  return (
    <div>
        <Navbar/>
        <Hero
            sectionName="Training Agenda"
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
                    <h5 class="fs-1 mb-4 text-start">
                        Two-Day Intensive Training: Mastering FMEA for the Oil and Gas Industry with OREDA-Based Asset Management and Rotopower Software Tools
                    </h5>
                    <p>
                        Unleash the power of Failure Modes and Effects Analysis (FMEA) tailored for the oil and gas industry in our comprehensive two-day training. Leveraging OREDA-based asset data and our Rotopower proprietary state-of-the-art software tools, this course is designed to equip industry professionals with the skills and knowledge to enhance operational reliability and safety.
                    </p>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">
                        Why Attend?
                    </h5>
                    <p>
                        In the high-stakes world of oil and gas, minimizing downtime and ensuring safety is paramount. This training not only covers the essentials and advanced techniques of FMEA but also integrates OREDA (Offshore Reliability Data) standards and cutting-edge software tools. Learn how to utilize these resources to conduct precise, efficient, and actionable FMEA, giving you the edge in maintaining plant reliability and safety.
                    </p>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">
                        What You’ll Learn?
                    </h5>
                    <ul class="d-flex flex-column gap-2">
                        <li><b>Fundamentals and Advanced Techniques:</b> Gain a deep understanding of FMEA principles and methodologies, tailored specifically for the oil and gas industry.</li>
                        <li><b>OREDA-Based Asset Management:</b> Learn how to apply OREDA standards to enhance the accuracy and effectiveness of your FMEA.</li>
                        <li><b>Software Integration:</b> Utilize state-of-the-art software tools designed to streamline the FMEA process, making it more efficient and precise.</li>
                        <li><b>Risk Identification and Mitigation:</b> Develop robust strategies to identify and mitigate potential failure modes, ensuring continuous and safe operations.</li>
                        <li><b>Hands-On Experience:</b> Apply your knowledge through practical exercises and real-world case studies using the provided software tools.</li>
                    </ul>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">
                        Key Features
                    </h5>
                    <div class="d-flex gap-3">
                        <div class="d-flex flex-column gap-3 p-4 bg-light">
                            <img src="/agenda-details/expert.svg" class="card-img-top" alt="..." style={{ width:"48px" }}/>
                            <div>
                                <h5>Expert Instruction</h5>
                                <p class="text-secondary">Learn from industry veterans with extensive experience in FMEA and oil and gas operations.</p>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 bg-light">
                            <img src="/agenda-details/learning.svg" class="card-img-top" alt="..." style={{ width:"48px" }}/>
                            <div>
                                <h5>Interactive Learning</h5>
                                <p class="text-secondary">Engage in group activities, case study analyses, and real-world problem-solving scenarios.</p>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 bg-light">
                            <img src="/agenda-details/tools.svg" class="card-img-top" alt="..." style={{ width:"48px" }}/>
                            <div>
                                <h5>Advanced Software Tools</h5>
                                <p class="text-secondary">Gain hands-on experience with the latest FMEA software tools, designed to streamline and enhance your analysis process.</p>
                            </div>
                        </div>
                        <div class="d-flex flex-column gap-3 p-4 bg-light">
                            <img src="/agenda-details/impact.svg" class="card-img-top" alt="..." style={{ width:"48px" }}/>
                            <div>
                                <h5>Immediate Impact</h5>
                                <p class="text-secondary">Walk away with actionable insights and strategies that you can implement in your operations right away.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">
                        Who Should Attend?
                    </h5>
                    <ul class="d-flex flex-column gap-2">
                        <li>Plant Managers and Engineers</li>
                        <li>Maintenance and Reliability Professionals</li>
                        <li>Safety Officers</li>
                        <li>Quality Assurance Engineers</li>
                        <li>Asset Integrity Managers</li>
                    </ul>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">
                        Training Agenda
                    </h5>
                    <div class="accordion" id="accordionExample">

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Day 1: Foundations and Methodology
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}>08:00 AM - 09:00 AM</p>
                                    <p><b>Welcome Coffee and Recap of Day 1</b></p>
                                </div>
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}>09:00 AM - 10:30 AM</p>
                                    <div>
                                        <p><b>Advanced Software Training for FMEA</b></p>
                                        <ul>
                                            <li>Overview of available software tools</li>
                                            <li>Using software tools for data collection and analysis</li>
                                            <li>Automating FMEA processes for efficiency</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}></p>
                                    <p><b>Coffee Break</b></p>
                                </div>
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}>10:45 AM - 11:15 AM</p>
                                    <div>
                                        <p><b>Practical Applications and Real-World Case Studies</b></p>
                                        <ul>
                                            <li>Overview of available software tools</li>
                                            <li>Lessons learned and best practices</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}>11:15 AM - 11:15 AM</p>
                                    <div>
                                        <p><b>Wrap-Up and Certificate Distribution</b></p>
                                        <ul>
                                            <li>Summary of key takeaways</li>
                                            <li>Distribution of training certificates</li>
                                            <li>Final remarks and networking opportunity</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>
                        
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Day 2: Advanced Techniques and Real-World Applications
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}>08:00 AM - 09:00 AM</p>
                                    <p><b>Welcome Coffee and Recap of Day 1</b></p>
                                </div>
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}>09:00 AM - 10:30 AM</p>
                                    <div>
                                        <p><b>Advanced Software Training for FMEA</b></p>
                                        <ul>
                                            <li>Overview of available software tools</li>
                                            <li>Using software tools for data collection and analysis</li>
                                            <li>Automating FMEA processes for efficiency</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}></p>
                                    <p><b>Coffee Break</b></p>
                                </div>
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}>10:45 AM - 11:15 AM</p>
                                    <div>
                                        <p><b>Practical Applications and Real-World Case Studies</b></p>
                                        <ul>
                                            <li>Overview of available software tools</li>
                                            <li>Lessons learned and best practices</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="d-flex gap-5">
                                    <p style={{ width: "150px" }}>11:15 AM - 11:15 AM</p>
                                    <div>
                                        <p><b>Wrap-Up and Certificate Distribution</b></p>
                                        <ul>
                                            <li>Summary of key takeaways</li>
                                            <li>Distribution of training certificates</li>
                                            <li>Final remarks and networking opportunity</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <h5 class="fs-1 mb-4 text-start">
                        Available Dates
                    </h5>
                    <div>
                        <div class="d-flex flex-column flex-grow-1 gap-4">
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

                <div class="card p-5 d-flex flex-row gap-5 border-0 bg-primary">
                    <div class="align-self-center">
                        <h5 class="fs-1 mb-4 text-start text-light">Request Private In-House</h5>
                        <p class="text-white-50">Experience customized training sessions designed exclusively for your team. Tailor the content to fit your company's specific needs and schedule.</p>
                    </div>
                    <button type="button" class="btn btn-light btn-lg w-50 align-self-center">Contact Us</button>
                </div>

            </div>
        </div>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Course