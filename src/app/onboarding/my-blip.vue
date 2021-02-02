<template>
  <div>
    <banner></banner>
    <b-container class="t-center">
<!--      <b-row class="contactUs w-100p m-l-0 p-l-0">-->
<!--        <h2 class="c-254B77 t-left m-l-0">Contact Us</h2>-->
<!--      </b-row>-->
      <b-row class = "container big" v-if = "!chosen">

        <b-col xs="12" sm="12" md="6" lg="6" xl="6">
          <b-row>
            <img class="image" src="../../assets/onBoarding/myblip-connect.png">
          </b-row>
          <p class="p3 gray c-C4C4C4">Are you new?</p>
          <h2 class="h2 c-254B77 titleMyBlip">Connect my blip</h2>
          <b-button
              class="submit myBlip"
              @click="chosen = true; register = true"
          >Get started</b-button>
        </b-col>

        <b-col xs="12" sm="12" md="6" lg="6" xl="6">
          <b-row>
            <img class="image" src="../../assets/onBoarding/myblip-dashboard.png">
          </b-row>
          <p class="p3 gray c-C4C4C4">Already registered</p>
          <h2 class="h2 c-254B77 titleMyBlip">Log in to dashboard</h2>
          <b-button
              class="submit myBlip"
              @click="chosen = true; signIn = true"
          >Sign in</b-button>
        </b-col>

      </b-row>

      <b-row class = "container bigReplace w-100p t-center" v-if = "chosen && register">
        <register></register>
      </b-row>

      <b-row class = "container" v-if = "chosen && signIn">
        siiiiiiiiiiign in
      </b-row>


    </b-container>

<!--    <Footer></Footer>-->

  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import register from "./register.vue"
import Footer from "../shared/components/Footer.vue";

export default {
  name: "my-blip",
  data() {
    return {
      chosen: false,
      register: false,
      signIn: false,
    };
  },
  mounted() {
  },

  methods: {
    // choose(){
    //   this.chose
    // }

  },
  components: {
    banner,
    register,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/pages/on_boarding";
</style>


