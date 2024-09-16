import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div class="container-fluid p-0">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div 
        className="d-flex justify-content-center w-100" 
        style={{ 
          height: "660px", 
          backgroundImage: "url('https://images.unsplash.com/photo-1564057740580-02521995d221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "89px"  
        }}>
        <div class="container item-center my-auto">
          <span 
            class="text-white d-block fw-semibold lh-sm mb-4"
            style={{ fontSize: "56px" }}
          >
            Transform, Innovate, Lead: <br/> Embrace Digital for a Future of <br/> Endless Possibilities
          </span>
          <span class="text-white d-block fs-4 mb-4">
            leap into digital twin transformation with us as your partners to cultivate <br/> digital champions within your organization
          </span>
          <button type="button" class="btn btn-outline-light btn-lg">
            Working With Us
          </button>
        </div>
      </div>

      {/* Content */}
      <div class="container gap-10 m-auto" style={{ paddingTop: "80px", paddingBottom: "80px" }}>

        <div class="card mb-5 border-0">
          <div class="row g-0 align-items-center">
            <div class="col-md-6">
              <img src="/landing-page/pic1.png" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title fs-1 mb-4">
                  Build an Independent and Competitive Future with Us
                </h5>
                <p class="card-text fs-5">
                  We believe that empowering your team is the key to the future. Through training, consulting, and technology development, we help you build unmatched internal expertise.
                </p>
                <ul>
                  <li><p class="fs-5 p-0 m-0 mb-2">Personnel Empowerment</p></li>
                  <li><p class="fs-5 p-0 m-0 mb-2">Training and Consulting</p></li>
                  <li><p class="fs-5 p-0 m-0 mb-2">Technology Development and Enhancement</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-5 border-0">
          <div class="row g-0 align-items-center">
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title fs-1 mb-4">
                  Optimize Operations and Maintenance for a Competitive Edge
                </h5>
                <p class="card-text fs-5">
                  Efficient operations and maintenance are key to reducing costs, enhancing your reputation, and solidifying your market position. We help keep your business running smoothly.
                </p>
                <ul>
                  <li><p class="fs-5 p-0 m-0 mb-2">Optimize asset performance</p></li>
                  <li><p class="fs-5 p-0 m-0 mb-2">Minimize downtime</p></li>
                  <li><p class="fs-5 p-0 m-0 mb-2">Ensure environmental compliance</p></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <img src="/landing-page/pic1.png" class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>

        <div class="card mb-5 border-0">
          <div class="row g-0 align-items-center">
            <div class="col-md-6">
              <img src="/landing-page/pic1.png" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title fs-1 mb-4">
                  Digital Twin Technology: The Key to the Future
                </h5>
                <p class="card-text fs-5">
                  With digital twin technology, you can foresee the future of your business. Optimize performance, predict failures before they happen, and take action faster. Make digital twin your secret weapon.
                </p>
                <p class="card-text fs-6"><a class="text-decoration-none" href="#">
                  Learn More About Digital Twin</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-5 border-0">
          <div class="row g-0 align-items-center">
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title fs-1 mb-4">
                  Local Expertise and Rich Data: The Key to a Successful Digital Twin
                </h5>
                <p class="card-text fs-5">
                  An effective digital twin requires more than just advanced modeling. We leverage historical data and deep expertise to create digital models that truly add value to your business.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img src="/landing-page/pic1.png" class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>

        <div class="card mb-5 border-0">
          <div class="row g-0 align-items-center">
            <div class="col-md-6">
              <img src="/landing-page/pic1.png" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title fs-1 mb-4">
                  Intense Competition Demands Innovation and Agility
                </h5>
                <p class="card-text fs-5">
                  In today’s challenging business landscape, only those who continuously innovate and adapt can survive. We understand that your business needs to stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-5 border-0">
          <div class="row g-0 align-items-center">
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title fs-1 mb-4">
                  Take Control of Your Business, Reduce Vendor Dependency
                </h5>
                <p class="card-text fs-5">
                  Don’t let your business rely too heavily on external vendors. We help you build strong internal capabilities, so you can maintain control and save costs.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <img src="/landing-page/pic1.png" class="img-fluid rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div class="card container d-flex flex-column align-items-center gap-3" style={{ padding: "56px" }}>
        <h1 class="text-center" style={{ fontSize: "56px" }}>
          Ready to Start Your Digital <br/> Transformation?
        </h1>
        <p class="card-text fs-5 text-center">
          Contact us now and begin your journey towards a future full of opportunities.
        </p>
        <button type="button" class="btn btn-primary btn-lg w-25 p-3">
          Contact Us Now
        </button>
      </div>

      {/* About Us */}
      <div class="card my-5 border-0 container">
        <div class="row g-0 align-items-center">
          <div class="col-md-6">
            <img src="/landing-page/pic1.png" class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title fs-1 mb-4">
                About Us
              </h5>
              <p class="card-text fs-5">
                Our company stands at the forefront of innovation, serving as a pivotal partner for research institutions and technology firms driving the future of the digital energy industry. We specialize in the advanced development and implementation of cutting-edge algorithms and methods that harness the power of artificial intelligence—particularly machine learning—to model and create highly accurate digital twins of both critical and ancillary processes and assets within power plants. By leveraging our deep expertise, we empower energy companies to optimize operations, enhance predictive maintenance, and unlock unprecedented levels of efficiency and reliability, using their already existing solution. Whether it is pioneering new initiatives or refining existing technologies, our team delivers robust, data-driven human resource empowerment that are instrumental in navigating the complexities of modern energy production.
              </p>
              <p class="card-text fs-6"><a class="text-decoration-none" href="#">
                Learn More</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div class="container d-flex flex-column align-items-center gap-3" style={{ padding: "56px" }}>
        <h1 class="text-center" style={{ fontSize: "56px" }}>
          Let’s Connect with Us
        </h1>
        <p class="card-text fs-5 text-center">
          We invite you to explore how our specialized services can propel your digital team to new heights. Connect with us to discuss how we can collaborate to achieve your goals and drive innovation in your operations.
        </p>
        <button type="button" class="btn btn-primary btn-lg w-25 p-3">
          Contact Us Now
        </button>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

