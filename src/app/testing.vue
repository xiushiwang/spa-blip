<template>
  <div>
    <header class="header clip-eb">
      <!--start:navBar-->
      <nav class="navbar navbar-expand-lg navbar-white">
        <div class="container">
          <a class="navbar-brand" href="../">
            <!-- <img src="../assets/images/logo-white.svg" alt="Logo" class="height-36" /> -->
          </a>
          <button
            class="navbar-toggler border-none"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="../assets/images/icons/ic-menu-white.svg" alt />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="close-button">
                <button
                  class="navbar-toggler border-none"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  <img src="../assets/images/icons/ic-close.svg" alt />
                </button>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../">Home</a>
              </li>
              <li class="nav-item nav-item-has-children">
                <a class="nav-link" href="#">
                  <span>Landing</span>
                  <i class="fas fa-angle-down"></i>
                </a>
                <div class="sub-menu sub-menu-3-col">
                  <div class="sub-nav-items">
                    <h5>Services</h5>
                    <ul>
                      <li class="nav-item">
                        <a href="../services/software-library.html">Software Library</a>
                      </li>
                      <li class="nav-item">
                        <a href="../services/insurance.html">Insurance</a>
                      </li>
                      <li class="nav-item">
                        <a href="../services/conference.html">Conference</a>
                      </li>
                      <li class="nav-item">
                        <a href="../services/rent.html">Rental</a>
                      </li>
                    </ul>
                  </div>
                  <div class="sub-nav-items">
                    <h5>Products</h5>
                    <ul>
                      <li class="nav-item">
                        <a href="../apps/desktop.html">SaaS Platform</a>
                      </li>
                      <li class="nav-item">
                        <a href="../apps/mobile.html">SaaS App</a>
                      </li>
                      <li class="nav-item">
                        <a href="../landing/cosmetics.html">Cosmetics</a>
                      </li>
                      <li class="nav-item">
                        <a href="../landing/real-estate.html">Real Estate</a>
                      </li>
                    </ul>
                  </div>
                  <div class="sub-nav-items">
                    <h5>Others</h5>
                    <ul>
                      <li class="nav-item">
                        <a href="../landing/travel.html">Travel</a>
                      </li>
                      <li class="nav-item">
                        <a href="../landing/agency.html">Agency</a>
                      </li>
                      <li class="nav-item">
                        <a href="../landing/personal-site.html">Personal-site</a>
                      </li>
                      <li class="nav-item">
                        <a href="../landing/architecture.html">Architecture</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="nav-item nav-item-has-children">
                <a class="nav-link" href="#">
                  <span>Pages</span>
                  <i class="fas fa-angle-down"></i>
                </a>
                <ul class="sub-menu sub-menu-with-child">
                  <li class="nav-item nav-item-has-children">
                    <a>
                      Company
                      <i class="fas fa-angle-right"></i>
                    </a>
                    <ul class="sub-menu-children">
                      <li class="nav-item">
                        <a href="../company/about.html">About Page 1</a>
                      </li>
                      <li class="nav-item">
                        <a href="../landing/about-us.html">About Page 2</a>
                      </li>
                      <li class="nav-item">
                        <a href="../company/faq.html">FAQ Page</a>
                      </li>
                      <li class="nav-item">
                        <a href="../company/contact.html">Contact Page</a>
                      </li>
                      <li class="nav-item">
                        <a href="../company/pricing.html">Pricing Page 1</a>
                      </li>
                      <li class="nav-item">
                        <a href="../landing/pricing.html">Pricing Page 2</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav-item-has-children">
                    <a>
                      Career
                      <i class="fas fa-angle-right"></i>
                    </a>
                    <ul class="sub-menu-children">
                      <li class="nav-item">
                        <a href="../company/career.html">Career</a>
                      </li>
                      <li class="nav-item">
                        <a href="../company/career-detail.html">Career Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav-item-has-children">
                    <a>
                      Blog
                      <i class="fas fa-angle-right"></i>
                    </a>
                    <ul class="sub-menu-children">
                      <li class="nav-item">
                        <a href="../blog/blog-alt-1.html">Blog 1</a>
                      </li>
                      <li class="nav-item">
                        <a href="../blog/blog-alt-2.html">Blog 2</a>
                      </li>
                      <li class="nav-item">
                        <a href="../blog/blog-detail.html">Article Detail</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav-item-has-children">
                    <a>
                      Utility - Sign in
                      <i class="fas fa-angle-right"></i>
                    </a>
                    <ul class="sub-menu-children">
                      <li class="nav-item">
                        <a href="../auth/signin-basic.html">Basic</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signin-left-cover.html">Left Cover</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signin-right-cover.html">Right Cover</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signin-popup.html">Modal</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signin-popup-image.html">Modal with Image</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signin-illustration.html">Illustration</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav-item-has-children">
                    <a>
                      Utility - Sign up
                      <i class="fas fa-angle-right"></i>
                    </a>
                    <ul class="sub-menu-children">
                      <li class="nav-item">
                        <a href="../auth/signup-basic.html">Basic</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signup-left-cover.html">Left Cover</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signup-right-cover.html">Right Cover</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signup-popup.html">Modal</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signup-popup-image.html">Modal with Image</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/signup-illustration.html">Illustration</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav-item-has-children">
                    <a>
                      Utility - Password Reset
                      <i class="fas fa-angle-right"></i>
                    </a>
                    <ul class="sub-menu-children">
                      <li class="nav-item">
                        <a href="../auth/reset-password.html">Basic</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/reset-password-illustration.html">Illustration</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav-item-has-children">
                    <a>
                      Utility - Error 404
                      <i class="fas fa-angle-right"></i>
                    </a>
                    <ul class="sub-menu-children">
                      <li class="nav-item">
                        <a href="../auth/error-404-basic.html">Basic</a>
                      </li>
                      <li class="nav-item">
                        <a href="../auth/error-404-illustration.html">Illustration</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Docs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Help</a>
              </li>
              <li class="nav-item">
                <a
                  class="btn btn-outline-white"
                  href="https://designspace.io/product/ehya-landing-page-design-template/"
                >Get it now</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!--end:navBar-->

      <!--start:hero-->
      <div class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
              <div class="heading text-center text-white">
                <h1 class="mb-24 wow fadeInUp">Contact our sales team</h1>
                <p
                  class="mb-0 wow fadeInUp"
                >If you need our help, have questions about how to use the platform or are experiencing technical difficulties, please do not hesitate to contact us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end:hero-->
    </header>
    <!--end:header-->

    <!--start:section contact form-->
    <section class="contact-form">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
            <div class="content bg-white box-shadow p-64 rounded-8 mt-56 wow fadeInUp">
              <form action>
                <div class="form-row">
                  <div class="col col-lg-6 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label for="nameInput">Your name *</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your name"
                        id="nameInput"
                      />
                    </div>
                  </div>
                  <div class="col col-lg-6 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label for="emailInput">Contact email *</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your name"
                        id="emailInput"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="col col-lg-6 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label for="companyName">Company name *</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Company name"
                        id="companyName"
                      />
                    </div>
                  </div>
                  <div class="col col-lg-6 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label for="countryInput">Country *</label>
                      <select class="form-control input-lg selectpicker" id="countryInput">
                        <option selected>Indonesia</option>
                        <option>Singapore</option>
                        <option>Malaysia</option>
                        <option>Palestine</option>
                        <option>Turkey</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="messagesInput">Your messages *</label>
                  <textarea
                    name
                    id="messagesInput"
                    cols="30"
                    rows="6"
                    class="form-control"
                    placeholder="Your messages"
                  ></textarea>
                </div>
                <div class="form-group mb-32">
                  <p
                    class="text-gray mb-0"
                  >By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                </div>
                <button type="button" class="btn btn-primary">Contact sales</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--end:section contact form-->

    <!--start:section contact form detail-->
    <section class="contact-form-detail clip-eb">
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="card-f flex text-center wow fadeInUp">
                <div class="card-f-heading">
                  <div class="ic ic-lg ic-badge bg-primary-100 mb-24">
                    <img src="../assets/images/icons/mail.svg" alt />
                  </div>
                </div>
                <div class="card-f-body">
                  <h4 class="text-black mb-24">Email us</h4>
                  <p
                    class="text-gray mb-12"
                  >Email us for general queries, including marketing and partnership opportunities.</p>
                  <a class="font-bold" href="mailto:hello@helpcenter.com">hello@helpcenter.com</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="card-f flex text-center wow fadeInUp">
                <div class="card-f-heading">
                  <div class="ic ic-lg ic-badge bg-primary-100 mb-24">
                    <img src="../assets/images/icons/phone.svg" alt />
                  </div>
                </div>
                <div class="card-f-body">
                  <h4 class="text-black mb-24">Call us</h4>
                  <p
                    class="text-gray mb-12"
                  >Call us to speak to a member of our team. We are always happy to help.</p>
                  <p class="text-primary font-bold">+1 (646) 786-5060</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
              <div class="card-f flex text-center wow fadeInUp">
                <div class="card-f-heading">
                  <div class="ic ic-lg ic-badge bg-primary-100 mb-24">
                    <img src="../assets/images/background.jpg" alt />
                  </div>
                </div>
                <div class="card-f-body">
                  <h4 class="mb-24 text-black">Support</h4>
                  <p class="text-gray mb-12">Check out helpful resources, FAQs and developer tools.</p>
                  <button type="button" class="btn btn-sm btn-outline-primary">
                    Support Center
                    <i class="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="features">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                <div class="heading text-center wow fadeInUp">
                    <span class="badge badge-success badge-pill">FEATURES</span>
                    <h3 class="text-black mt-16">Our solution for your business</h3>
                    <p class="text-gray mt-16 mb-0">We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card-f flex text-center wow fadeInUp">
                        <div class="card-f-heading">
                            <div class="ic ic-lg ic-badge bg-primary-100 mb-36">
                                <img src="../assets/images/icons/pie-chart.svg" alt="">
                            </div>
                        </div>
                        <div class="card-f-body">
                            <h4 class="text-20 text-black mb-12">Analyze your data</h4>
                            <p class="text-gray mb-20">Create reports with an easy to use drag-and-drop designer. </p>
                            <a href="#" class="font-bold text-18 text-primary">Learn more <i class="fas fa-arrow-right text-14 ml-8"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card-f flex text-center wow fadeInUp">
                        <div class="card-f-heading">
                            <div class="ic ic-lg ic-badge bg-primary-100 mb-36">
                                <img src="../assets/images/icons/shield.svg" alt="">
                            </div>
                        </div>
                        <div class="card-f-body">
                            <h4 class="text-20 text-black mb-12">Collaborate securely</h4>
                            <p class="text-gray mb-20">Share/publish your reports with your colleagues.</p>
                            <a href="#" class="font-bold text-18 text-primary">Learn more <i class="fas fa-arrow-right text-14 ml-8"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card-f flex text-center wow fadeInUp">
                        <div class="card-f-heading">
                            <div class="ic ic-lg ic-badge bg-primary-100 mb-36">
                                <img src="../assets/images/icons/line-chart.svg" alt="">
                            </div>
                        </div>
                        <div class="card-f-body">
                            <h4 class="text-20 text-black mb-12">Embedded analytics</h4>
                            <p class="text-gray mb-20">Get a powerful analytics tool in your own brand name.</p>
                            <a href="#" class="font-bold text-18 text-primary">Learn more <i class="fas fa-arrow-right text-14 ml-8"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card-f flex text-center wow fadeInUp">
                        <div class="card-f-heading">
                            <div class="ic ic-lg ic-badge bg-primary-100 mb-36">
                                <img src="../assets/images/icons/workflow.svg" alt="">
                            </div>
                        </div>
                        <div class="card-f-body">
                            <h4 class="text-20 text-black mb-12">Easy and Intuitive</h4>
                            <p class="text-gray mb-20">Easily converse with your data using everyday language. </p>
                            <a href="#" class="font-bold text-18 text-primary">Learn more <i class="fas fa-arrow-right text-14 ml-8"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  </div>
</template>


<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";

export default {
  name: "testing",
  data() {
    return {};
  },
  created() {},

  methods: {},
  components: {
    UAnimateContainer,
    UAnimate
  }
};
</script>

<style lang="scss" scoped>
//  @import "../assets/css/bootstrap.min.css";
//  @import "../assets/css/fontawesome/fontawesome.min.css";
//  @import "../assets/css/fontawesome/solid.min.css";
//  @import "../assets/css/fontawesome/brands.min.css";
//  @import "../assets/css/fontawesome/regular.min.css";
//  @import "../assets/css/bootstrap-select.min.css";
 @import "../assets/css/animate.css";
 @import "../assets/css/main.css";

</style>