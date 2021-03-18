<template>
  <div>
    <banner></banner>
    <div class="main">
      <!--start: Saving Renters Money-->
      <section class="SavingRentersMoney">
        <div class="crop">
          <img src="../../../assets/website_photo.jpg" class="card-img" alt="...">
        </div>
        <div class="fog">
          <b-row class="insider m-tb-a t-left">
<!--            <b-col  xs="12" sm="12" md="5" lg="5" xl="5" class ="insideInsider">-->
              <h1 class="c-FFFFFF">Saving Renters Money</h1>
            <p class="p2 c-FFFFFF t-left p-l-0 aSustainable">
              A sustainable energy storage solution focused on saving you money on your electricity bill
            </p>
            <button type="button" class="btn btn-outline-FFFFFF" onclick="window.location.href='../about'">
              Learn more &nbsp;&nbsp;<font-awesome-icon icon="arrow-right" style="font-size: 18px"/>
            </button>
<!--            </b-col>-->
          </b-row>
        </div>
      </section>
      <!--end: Saving Renters Money-->

      <!--start: About blip-->
      <section class="AboutBlip b-FFFFFF i-a-c">
        <b-row class="w-80p insider">
          <b-col  xs="12" sm="12" md="5" lg="5" xl="5" class ="leftImg">
            <img src="../../../assets/blip-mockup-update.png" alt="" class="w-100p">
          </b-col>
          <b-col  xs="12" sm="12" md="7" lg="7" xl="7" class ="rightText t-left">
            <h2 class="c-254B77 m-l-0 p-l-0">About blip</h2>
            <p class="p2 c-183B56 m-l-0 p-l-0">
              blip is a residential energy storage product focused on saving you money on your monthly electric bill by capturing the value of electricity price changes throughout the day,
              and delivering that value back to you as savings. By offering blip at a fraction of the price our competitors charge,
              we aim to widely expand access to the savings and benefits energy storage can provide.
            </p>
          </b-col>
        </b-row>
      </section>
      <!--end: About blip-->

      <!--start: Clean energy is no longer just for homeowners-->
      <section class="cleanEnergy b-DEF5FF i-a-c t-center">
        <b-row class="w-80p insider t-center">
          <b-row class="w-100p t-center">
            <h2 class="c-254B77 t-center m-lr-a">
              Clean energy is no longer just for homeowners</h2>
          </b-row>

          <b-row class="w-100p">
            <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="oneThird">
              <img class="imgIn" src="../../../assets/blip-icon-home.png" alt="">
              <h3 class="c-254B77 t-center">the where</h3>
              <p class="p2 c-254B77 t-center">blip works in any home or apartment, and due to its portable design, you can bring it with you wherever you live</p>
            </b-col>

            <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="oneThird">
              <img class="imgIn" src="../../../assets/blip-icon-piggy.png" alt="">
              <h3 class="c-254B77 t-center">the what</h3>
              <p class="p2 c-254B77 t-center">blip charges overnight, when electricity is cheap, and dispenses power during the day, when electricity is expensive</p>
            </b-col>

            <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="oneThird">
              <img class="imgIn" src="../../../assets/blip-icon-plug.png" alt="">
              <h3 class="c-254B77 t-center">the how</h3>
              <p class="p2 c-254B77 t-center">Set it and forget it: plug blip into any standard outlet and any appliance into blip. No professional installation required.</p>
            </b-col>
          </b-row>

          <b-row class="w-100p t-center">
            <button type="button" class="btn btn-outline-254B77 m-lr-a" onclick="window.location.href='../about'">
              Learn More
            </button>
          </b-row>
        </b-row>
      </section>
      <!--end: Clean energy is no longer just for homeowners-->

      <!--start: blip helps the planet too-->
      <section class="blipHelps b-1D3755 i-a-c">
        <b-row class="w-80p insider">
          <b-row class="w-100p t-center m-lr-a m-b-30">
            <h2 class="c-FFFFFF m-lr-a">blip helps the planet too</h2>
          </b-row>
          <b-row class="w-100p">
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="oneHalf">
              <p class="p2 c-B0E7FF t-left" data-wow-duration="3s">
                Imagine a world where dirty plants are shut down because consumers control their power consumption without sacrificing their quality of life.
                <!--                  </p>-->
                <br>
                <br>
                <!--                  <p class="text-black-mt-24-mb-16-wow-fadeInUp" data-wow-duration="3s">-->
                By offering a way to store power, and using it during peak demand times, blip reduces our reliance on dirty energy from peaker plants.
                <!--                  </p>-->
                <br>
                <br>
                <!--                  <p class="text-black-mt-24-mb-16-wow-fadeInUp" data-wow-duration="3s">-->
                We can work together to decommission dirty plants by shifting demand away from those peak hours, one home at a time. If we each help a little, we can all do a lot.
              </p>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="oneHalf i-a-c">
              <img src="../../../assets/alain_duchateau_QvZj7r3efC4_unsplash_lighterblue_Copy.jpg" alt="">
            </b-col>
          </b-row>
        </b-row>
      </section>
      <!--end: blip helps the planet too-->

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import banner from "./banner.vue";
import Footer from "./Footer.vue";

export default {
  name: "home",
  data() {
    return {
    };
  },
  mounted() {

  },

  methods: {

  },
  computed: {
  },
  components: {
    banner,
    // FontAwesomeIcon,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "./src/scss/components/_home.scss";
</style>


