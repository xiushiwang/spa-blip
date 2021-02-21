<template>
  <div>
    <banner></banner>
    <b-container class="t-center m-t-0">
      <b-row class="we t-center m-t-0">
<!--        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="right t-left m-l-0 p-l-0">-->
        <h2 class="h2 w-100p c-254B77 wed">We’d love to hear from you</h2>
          <b-row class="w-100p m-l-0 m-b-12 p-l-0">
            <p class="p3 t-left c-000000">Name*</p>
          </b-row>
          <b-row class="w-100p m-l-0 m-b-32 p-l-0">
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="first p-l-0">
              <b-form-input class="input" type="string" v-model="name" placeholder="First"></b-form-input>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="last p-r-0">
              <b-form-input class="input m-l-0" type="string" v-model="name" placeholder="Last"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="w-100p m-l-0 m-b-12 p-l-0">
            <p class="p3 t-left c-000000">Email*</p>
          </b-row>
          <b-row class="w-100p m-l-0 m-b-32 p-l-0">
            <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="p-l-0 p-r-0">
              <b-form-input class="input" type="string" v-model="email"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="w-100p m-l-0 m-b-12 p-l-0">
            <p class="p3 t-left c-000000">Message*</p>
          </b-row>
          <b-row class="w-100p m-l-0 m-b-58 p-l-0">
            <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="p-l-0 p-r-0">
              <b-form-textarea class="input message" type="string" v-model="messages"></b-form-textarea>
            </b-col>
          </b-row>

          <b-row class="w-100p m-l-0 m-b-12 p-l-0">
            <b-button
              class="btn btn-outline-4F9BC1"
              variant="outline-primary"
              v-on:click
              :disabled="isDisabled"
            >Submit</b-button>
          </b-row>
     </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import Footer from "../shared/components/Footer.vue";

export default {
  name: "contact-us",
  data() {
    return {
      // center: { lat: 42.056432, lng: -87.674835 },
      // markers: [
      //   {
      //     position: { lat: 42.056432, lng: -87.674835 }
      //   }
      // ],
      messages: ""
    };
  },
  mounted() {},

  methods: {},
  components: {
    banner,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_contact_us.scss";
</style>


