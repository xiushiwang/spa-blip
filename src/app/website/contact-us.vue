<template>
  <div>
    <banner></banner>
    <b-container class="t-center m-t-0">

      <b-row class="others w-100p t-center">
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="left t-left m-l-0 p-l-0">
          <img src="../../assets/contact-illo-v02.png" style="width: 671px; margin-top: 89px; margin-left: -50px;">
        </b-col>

        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="t-left m-l-0 p-l-0">
          <b-row class="we t-center m-t-0">
            <!--        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="right t-left m-l-0 p-l-0">-->
            <h2 class="h2 w-100p c-254B77 wed">We’d love to hear from you</h2>
            <b-row class="w-100p m-l-0 m-b-12 p-l-0">
              <p class="p3 t-left c-000000">Name*</p>
            </b-row>
            <b-row class="w-100p m-l-0 m-b-32 p-l-0">
              <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="first p-l-0">
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
                  class = "submitButton"
                  variant="outline-primary"
                  v-on:click="submitMessage()"
              >Submit</b-button>
            </b-row>


            <!--        </b-col>-->
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <Footer></Footer>

  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import Footer from "../shared/components/noneInputFooter.vue";

export default {
  name: "contact-us",
  data() {
    return {
      center: {lat: 42.056432, lng: -87.674835},
      markers: [{
        position: {lat: 42.056432, lng: -87.674835}
      }],
      firstName: "",
      lastName: "",
      email: "",
      messages: "",
    };
  },
  mounted() {
  },

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
  components: {
    banner,
    Footer
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_contact_us.scss";
</style>


