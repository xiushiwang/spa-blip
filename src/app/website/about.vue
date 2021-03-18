<template>
  <div>
    <banner></banner>
    <div class="main">
      <!--start:Our Mission-->
      <section class="FFFFFF">
        <div class="hero">
          <div class="container">
            <div class="row">
              <div class="content text-center">
                <h2 class="h2 two54B77 t-center">Our Mission</h2>
                <p class="p2 one83B56 t-center">blip aims to democratize energy storage while lowering your carbon footprint - one renter at a time. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--end:Our Mission-->

      <!--start:Our Goal-->
      <section class="DEF5FF">
        <div class="hero">
          <div class="container">
            <div class="row">
                <div class="content text-center">
                  <h2 class="h2 two54B77 t-center">Our Goal</h2>
                  <p class="p2 one83B56 t-center">
                    blip gives you access to electricity bill savings by storing energy when it is cheap.
                    Other energy storage systems require professional installation,
                    are designed only for homeowners,
                    and cost five times more than blip.
                    <!--                  </p>-->
                    <br>
                    <!--                  <p class="p2 one83B56 t-center">-->
                    With blip, those concerned about energy savings can finally access them,
                    no matter where you live.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <!--end:Our Goal-->

      <!--start:We care deeply about our environment-->
      <section class="oneD3755">
        <div class="hero">
          <div class="container">
            <div class="row" style="width: 100%">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="picOnLeft flyFromLeft">
                  <img src="../../assets/geran-de-klerk-qzgN45hseN0-unsplash.jpg" alt="" class="w-100p">
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="textOnRight flyFromRight">
                  <div class="contentCenter">
                    <h2 class="h2 c-B0E7FF t-left">We care deeply about our environment</h2>
                    <p class="p2 c-FFFFFF t-left">
                      blip is designed to keep dirty power plants offline by shifting your energy usage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--end:We care deeply about our environment-->

      <!--start:You save money-->
      <section class="DEF5FF">
        <div class="hero">
          <div class="container h-536">
            <div class="row">
                <div class="content text-center">
                  <p class="p1 one83B56 t-center">You save money. You help the planet.</p>
                  <p class="p1 one83B56 t-center">And we are excited to provide the tools to make it happen.</p>
                  <br>
                  <p class="p1 one83B56 t-center">If we each help a little, we can all do a lot.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <!--end:You save money-->

      <!--start:Meet the Team-->
      <section class="FFFFFF">
        <div class="team">
          <div class="container">
            <div class="insider">
              <div class="rowI">
                <h2 class="h2 two54B77 t-center">Meet the Team</h2>
                <p class="p2 one83B56 t-center">
                  We are passionate about limiting our collective impact on the environment.
                </p>
              </div>

              <div class="content">
                <div class="row" style="width: 100%">
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card-f flex text-center wow fadeInUp">
                      <div class="card-f-heading">
                          <img src="../../assets/images/team/BWSophia.jpg" alt="" class="members">
                      </div>
                      <div class="card-f-body">
                        <h4 class="h4 one83B56 t-center">Sophia Wennstedt</h4>
                        <p class="p3 one83B56 t-center">Co-Founder</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card-f flex text-center wow fadeInUp">
                      <div class="card-f-heading">
                          <img src="../../assets/images/team/BWChance.jpg" alt="" class="members">
                      </div>
                      <div class="card-f-body">
                        <h4 class="h4 one83B56 t-center">Chance Cobb</h4>
                        <p class="p3 one83B56 t-center">Co-Founder</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card-f flex text-center wow fadeInUp">
                      <div class="card-f-heading">
                          <img src="../../assets/images/team/BWDennis.jpg" alt="" class="members">
                      </div>
                      <div class="card-f-body">
                        <h4 class="h4 one83B56 t-center">Dennis Kontorovich</h4>
                        <p class="p3 one83B56 t-center">Co-Founder</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-12">
                    <div class="card-f flex text-center wow fadeInUp">
                      <div class="card-f-heading">
                          <img src="../../assets/images/team/BWThibaut.jpg" alt="" class="members">
                      </div>
                      <div class="card-f-body">
                        <h4 class="h4 one83B56 t-center">Thibaut Feremans</h4>
                        <p class="p3 one83B56 t-center">Co-Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-pricing-footer">
                <button type="button" class="contactUsButton btn btn-outline-254B77" onclick="window.location.href='../contact-us'">
                  <!--                      <a href="./contact-us" class="btn btn-primary">-->
                  Contact Us
                  <!--                        </a>-->
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>

  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import Footer from "../shared/components/Footer.vue";

export default {
  name: "about",
  data() {
    return {
    };
  },
  mounted() {


  },

  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
            'style',
            'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 100
    }
  },
  components: {
    banner,
    Footer//added
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_about.scss";
@import "src/scss/animate";


</style>


