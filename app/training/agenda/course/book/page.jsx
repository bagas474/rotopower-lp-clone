import Footer from '@/app/components/footer'
import Hero from '@/app/components/hero'
import Navbar from '@/app/components/navbar'
import React from 'react'

const Book = () => {
  return (
    <div>
        <Navbar/>
        <Hero
            sectionName="Book Agenda"
        />

        <div class="container d-flex gap-5 my-5">
            
            <div style={{ width: "400px" }}>
                <h5 class="mb-4">Training Details</h5>
                <div class="card p-4">
                    <p>Failure Modes and Effect Analysis (FMEA)</p>
                    <h5>Mastering FMEA for the Oil and Gas Industry with OREDA-Based Asset Management and Rotopower Software Tools</h5>
                    <div class="d-flex gap-4">
                        <p>2 Days</p>
                        <p>7-8 November</p>
                        <p>Yogyakarta</p>
                    </div>
                </div>
            </div>
            
            <div class="flex-grow-1">
                <h5 class="mb-4">Send Us Message</h5>
                <div class="card p-4 gap-2 mb-3">
                    <div class="d-flex gap-4">
                        <div class="mb-3 flex-fill">
                            <label for="exampleFormControlInput1" class="form-label">Name*</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E.g. Ahmad Bagas"/>
                        </div>
                        <div class="mb-3 flex-fill">
                            <label for="exampleFormControlInput1" class="form-label">Email*</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div class="d-flex gap-4">
                        <div class="mb-3 flex-fill">
                            <label for="exampleFormControlInput1" class="form-label">Phone*</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3 flex-fill">
                            <label for="exampleFormControlInput1" class="form-label">Company</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Leave Us Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your messages here ..."></textarea>
                    </div>
                </div>
                <div></div>
                <button type="button" class="btn btn-primary btn-lg">Send Your Message</button>
            </div>
        </div>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Book