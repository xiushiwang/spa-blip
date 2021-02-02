<template>
  <div>
    <b-container>
      <b-row v-if="!email" class="w-100p">
        <b-row class="w-100p t-center">
          <b-row class="frame t-center">
            <h1 class="h1 c-254B77 owner">Who is the owner of this blip?</h1>
            <b-form-input
                class="enter"
                v-model="firstName"
                placeholder="Enter your first name"
                @keyup.enter="checkName()"
                :disabled="isDisabled"
            >
            </b-form-input>
            <b-form-input
                class="enter"
                v-model="lastName"
                placeholder="Enter your last name"
                @keyup.enter="checkName()"
            >
            </b-form-input>
            <p v-if="warnning" class="p4 t-left">Please enter both first name and last name</p>
            <b-button
                class = "submit nextButton"
                variant="outline-primary"
                v-on:click="checkName(); "
            >Next</b-button>
          </b-row>
        </b-row>
      </b-row>

      <b-row v-if="email && !password">
        <b-row class="w-100p t-center">
          <b-row class="frame t-center">
            <h1 class="h1 c-254B77 owner">What is your email address?</h1>
            <b-form-input
                novalidate="true"
                class="enter"
                v-model="emailAddress"
                type="email"
                placeholder="Enter your email"
                @keyup.enter="checkEmail()"
            >
            </b-form-input>
            <b-button
                class = "submit nextButton"
                variant="outline-primary"
                v-on:click="checkEmail();"
            >Next</b-button>
          </b-row>
        </b-row>
      </b-row>

      <b-row v-if="password && !confirm">
        <b-row class="w-100p t-center">
          <b-row class="frame t-center">
            <h1 class="h1 c-254B77 owner">Choose a password</h1>
            <b-form-input
                class="enter"
                v-model="passwordI"
                placeholder="Enter password"
                @keyup.enter="checkPassword()"
            >
            </b-form-input>
            <b-form-input
                class="enter"
                v-model="passwordII"
                placeholder="Confirm password"
                @keyup.enter="checkPassword()"
            >
            </b-form-input>
            <b-button
                class = "submit nextButton"
                variant="outline-primary"
                v-on:click="checkPassword(); password=true;"
            >Next</b-button>
          </b-row>
        </b-row>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import banner from "../shared/components/banner.vue";
// import name from "./register.vue"
// import Footer from "../shared/components/Footer.vue";

import axios from 'axios';

export default {
  name: "name",
  data() {
    return {
      firstName: '',
      lastName: '',
      email: false,
      warnning: false,
      emailAddress: '',
      password: false,
      confirm: false,
      errors: [],
      passwordI: '',
      passwordII: '',
    };
  },
  mounted() {
  },

  methods: {
    checkName(){
      this.warnning = false
      if (this.firstName !== '' && this.lastName !== ''){
        this.email = true
      }else{
        this.warnning = true
      }
    },

    checkEmail(){
      // if (this.emailAddress !== ""){
      //   this.password = true
      // }
      this.errors = []

      if (!this.emailAddress) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.emailAddress)) {
        this.errors.push('Valid email required.');
      }

      console.log(this.errors)

      if (!this.errors.length) {
        // return true;
        this.password = true
      }
    },

    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    checkPassword(){
      if (this.passwordI === this.passwordII){
        console.log('posting')
        this.post()
      }
    },

    post(){
      // const article = {'email': 'zz19921003@gmail.com' , password: '121316'};
      // axios.post("https://170276b6ab7d.ngrok.io/user/login",
      //     {email: 'zz19921003@gmail.com' , password: '121316'})
      //     .then(function (response) {
      //       console.log(response);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });

      // let param = new URLSearchParams()
      // param.append('email', 'zz19921003@gmail.com')
      // param.append('password', '121316')
      // axios({
      //   method: 'post',
      //   url: 'https://170276b6ab7d.ngrok.io/user/login',
      //   data: param
      // })

      console.log('posting...',this.emailAddress, this.passwordI, this.lastName, this.firstName)

      let param = new URLSearchParams()
      // param.append('email', 'xiushiwang2020@u.northwestern.edu')
      // param.append('password', '121316')
      // param.append('first_name', 'Xiushi')
      // param.append('last_name', 'Wang')
      param.append('email', this.emailAddress)
      param.append('password', this.passwordI)
      param.append('first_name', this.firstName)
      param.append('last_name', this.lastName)
      axios({
        method: 'post',
        url: 'https://170276b6ab7d.ngrok.io/user/register',
        data: param
      })


      // console.log(this.articleMsg)

      // this.address = this.address + this.zipcode
      // // const address = './src/assets/JSONforTesting/'
      // // this.address = address + this.zipcode + '.json'
      // axios.post(this.address)
      //     .then(response => {
      //       // JSON responses are automatically parsed.
      //       this.posts = response.data.data
      //       if (response.data.data.length === 0){
      //         this.showNoData = true
      //         this.sendNoData(true)
      //       }else{
      //         this.sendNoData(false)
      //       }
      //     })
      //     .catch(e => {
      //       this.errors.push(e)
      //     })
      // this.address = 'https://170276b6ab7d.ngrok.io/v1/get_utilities_and_rates_by_zip_code/'
      // // './src/assets/JSONforTesting/'
    },

  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/pages/on_boarding";
</style>
