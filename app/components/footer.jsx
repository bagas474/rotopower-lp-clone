import React from 'react'

const Footer = () => {
  return (
    <div class="container-fluid mt-5 p-0">

        <footer class="text-center text-lg-start text-white bg-primary">

          <div class="container p-4 pb-0">

            <section class="">

              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    RotoPower
                  </h6>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Services</h6>
                  <p>
                    <a class="text-white">Training</a>
                  </p>
                  <p>
                    <a class="text-white">Consulting</a>
                  </p>
                  <p>
                    <a class="text-white">Added-Services</a>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Address
                  </h6>
                  <p>
                    <a class="text-white">Semarang, Indonesia</a>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i class="fas fa-envelope mr-3"></i> toni.prahasto@rotopower.org</p>
                  <p><i class="fas fa-phone mr-3"></i> 6281325693690</p>
                </div>
            
              </div>
          
            </section>


            <hr class="my-3"/>

        
            <section class="p-3 pt-0">
              <div class="row d-flex align-items-center">
                
                <div class="col-md-7 col-lg-8 text-center text-md-start">
            
                  <div class="p-3">
                    © 2024 RotoPower. All rights reserved.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
    </div>
  )
}

export default Footer