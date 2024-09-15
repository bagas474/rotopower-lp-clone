import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div class="container-fluid m-0 p-0">

        {/* Navbar */}
        <Navbar/>

        {/* Hero */}
        <Hero
            sectionName= "Contact"
        />

        {/* Contact */}
        <div class="container d-flex gap-5 my-5">
            <div class="">
                <h5 class="mb-4">Our Contact</h5>
                <div class="card p-4 gap-2">
                    <p class="p-0 m-0">toni.prahasto@rotopower.org</p>
                    <p class="p-0 m-0">6281325693690</p>
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
        <Footer />

    </div>
  )
}

export default Contact