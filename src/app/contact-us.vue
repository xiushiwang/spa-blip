<template>
  <div>
    <banner></banner>
<<<<<<< HEAD
    <b-container>
      <b-row class="contactUs w-100p m-l-0 p-l-0">
        <h2 class="c-254B77 t-left m-l-0">Contact Us</h2>
      </b-row>

      <b-row class="others w-100p m-l-0 p-l-0">
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="left t-left m-l-0 p-l-0">
          <b-row class="w-100p m-l-0 p-l-0">
            <p class="p2 c-183B56 t-left m-l-0 p-l-0">
              hello@blipenergy.com
              <br />Evanston, IL 60028
            </p>
          </b-row>

          <b-row class="w-100p m-l-0 p-l-0">
            <a href="https://www.linkedin.com/company/blip-energy">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" class="font-awesome-icon c-183B56" />
            </a>
          </b-row>
          <b-row class="w-100p m-l-0 p-l-0">
            <!-- <gmap-map :center="center" :zoom="12" style=" width: 524px; height: 669px;">
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="center=m.position"
              ></gmap-marker>
            </gmap-map> -->
          </b-row>
        </b-col>

        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="right t-left m-l-0 p-l-0">
=======
    <b-container class="t-center m-t-0">
<!--      <b-row class="contactUs w-100p m-l-0 p-l-0">-->
<!--        <h2 class="c-254B77 t-left m-l-0">Contact Us</h2>-->
<!--      </b-row>-->

      <b-row class="others w-100p t-center">
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="left t-left m-l-0 p-l-0">
<!--          <b-row class="w-100p m-l-0 p-l-0" >-->
<!--            <p class="p2 c-183B56 t-left m-l-0 p-l-0">-->
<!--              hello@blipenergy.com-->
<!--              <br>-->
<!--              Evanston, IL 60028-->
<!--            </p>-->
<!--          </b-row>-->

<!--          <b-row class="w-100p m-l-0 p-l-0">-->
<!--            <a href="https://www.linkedin.com/company/blip-energy"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="font-awesome-icon c-183B56"/></a>-->
<!--          </b-row>-->
<!--          <b-row class="w-100p m-l-0 p-l-0">-->
<!--            <gmap-map-->
<!--                :center="center"-->
<!--                :zoom="12"-->
<!--                style=" width: 524px; height: 669px;"-->
<!--            >-->
<!--              <gmap-marker-->
<!--                  :key="index"-->
<!--                  v-for="(m, index) in markers"-->
<!--                  :position="m.position"-->
<!--                  :clickable="true"-->
<!--                  :draggable="true"-->
<!--                  @click="center=m.position"-->
<!--              ></gmap-marker>-->
<!--            </gmap-map>-->
<!--          </b-row>-->
<!--        </b-col>-->

<<<<<<< HEAD
      <b-row class="we t-center m-t-0">
<!--        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="right t-left m-l-0 p-l-0">-->
        <h2 class="h2 w-100p c-254B77 wed">We’d love to hear from you</h2>
>>>>>>> 4a6e9d428966328a3505deb089e69f2a0e6f162d
=======
<!--      <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="t-left m-l-0 p-l-0">-->
        <img src="../assets/contact-illo-v02.png" style="width: 671px; margin-top: 89px; margin-left: -50px;">
      </b-col>

      <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="t-left m-l-0 p-l-0">
        <b-row class="we t-center m-t-0">
          <!--        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="right t-left m-l-0 p-l-0">-->
          <h2 class="h2 w-100p c-254B77 wed">We’d love to hear from you</h2>
>>>>>>> a6b62ff7995158fd43dd1ddc2606ac61fadc56e5
          <b-row class="w-100p m-l-0 m-b-12 p-l-0">
            <p class="p3 t-left c-000000">Name*</p>
          </b-row>
          <b-row class="w-100p m-l-0 m-b-32 p-l-0">
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="first p-l-0">
<<<<<<< HEAD
              <b-form-input class="input" type="string" v-model="name" placeholder="First"></b-form-input>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="last p-r-0">
              <b-form-input class="input m-l-0" type="string" v-model="name" placeholder="Last"></b-form-input>
=======
              <b-form-input
                  class="input"
                  type="string"
                  v-model="firstName"
                  placeholder="First"
              >
              </b-form-input>
            </b-col>
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="last p-r-0">
              <b-form-input
                  class="input m-l-0"
                  type="string"
                  v-model="lastName"
                  placeholder="Last"
              >
              </b-form-input>
>>>>>>> a6b62ff7995158fd43dd1ddc2606ac61fadc56e5
            </b-col>
          </b-row>

          <b-row class="w-100p m-l-0 m-b-12 p-l-0">
            <p class="p3 t-left c-000000">Email*</p>
          </b-row>
          <b-row class="w-100p m-l-0 m-b-32 p-l-0">
            <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="p-l-0 p-r-0">
              <b-form-input
                  novalidate="true"
                  class="input"
                  type="email"
                  v-model="email"
                  @keyup.enter="submitMessage()"
              ></b-form-input>
            </b-col>
          </b-row>

          <b-row class="w-100p m-l-0 m-b-12 p-l-0">
            <p class="p3 t-left c-000000">Message*</p>
          </b-row>
          <b-row class="w-100p m-l-0 m-b-58 p-l-0">
            <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="p-l-0 p-r-0">
              <b-form-textarea
                  class="input message"
                  type="string"
                  v-model="messages"
                  @keyup.enter="submitMessage()"
              ></b-form-textarea>
            </b-col>
          </b-row>

          <b-row class="w-100p m-l-0 m-b-12 p-l-0">
            <b-button
<<<<<<< HEAD
              class="btn btn-outline-4F9BC1"
              variant="outline-primary"
              v-on:click
              :disabled="isDisabled"
=======
                class = "btn btn-outline-4F9BC1"
                variant="outline-primary"
                v-on:click="submitMessage()"
>>>>>>> a6b62ff7995158fd43dd1ddc2606ac61fadc56e5
            >Submit</b-button>
          </b-row>

<<<<<<< HEAD
        </b-col>
=======

<<<<<<< HEAD
<!--        </b-col>-->
>>>>>>> 4a6e9d428966328a3505deb089e69f2a0e6f162d
=======
          <!--        </b-col>-->
        </b-row>
      </b-col>
>>>>>>> a6b62ff7995158fd43dd1ddc2606ac61fadc56e5
      </b-row>
    </b-container>

    <Footer></Footer>
  </div>
</template>

<script>
import banner from "./shared/components/banner.vue";
import Footer from "./shared/components/noneInputFooter.vue";

export default {
  name: "contact-us",
  data() {
    return {
<<<<<<< HEAD
      // center: { lat: 42.056432, lng: -87.674835 },
      // markers: [
      //   {
      //     position: { lat: 42.056432, lng: -87.674835 }
      //   }
      // ],
      messages: ""
=======
      center: {lat: 42.056432, lng: -87.674835},
      markers: [{
        position: {lat: 42.056432, lng: -87.674835}
      }],
      firstName: "",
      lastName: "",
      email: "",
      messages: "",
>>>>>>> a6b62ff7995158fd43dd1ddc2606ac61fadc56e5
    };
  },
  mounted() {},

<<<<<<< HEAD
  methods: {},
=======
  methods: {
    submitMessage(){
      if (this.firstName !== ''){
        if (this.lastName !== ''){
          if (this.email !== "" && this.validEmail(this.email)){
            if (this.messages !== ""){
              console.log(this.messages);
            }else{
              alert("Please leave your message")
            }
          }else{
            alert("Please enter a valid email address")
          }
        }else{
          alert("Oops, you forget your last name")
        }
      }else{
        alert("Oops, you forget your first name")
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

  },
>>>>>>> a6b62ff7995158fd43dd1ddc2606ac61fadc56e5
  components: {
    banner,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_contact_us.scss";
</style>


