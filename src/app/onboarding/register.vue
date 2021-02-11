<template xmlns="http://www.w3.org/1999/html">
    <b-container>
      <b-row v-if="!email" class="w-100p">
        <b-row class="bigReplace">
          <b-row class="frame t-center">
            <b-row class="upper t-center">
            <h1 class="h1 c-254B77 owner">Who is the owner of this blip?</h1>
            <b-form-input
                class="enter I"
                v-model="firstName"
                placeholder="Enter your first name"
                @keyup.enter="checkName()"
                :disabled="isDisabled"
            >
            </b-form-input>
            <b-form-input
                class="enter II"
                v-model="lastName"
                placeholder="Enter your last name"
                @keyup.enter="checkName()"
            >
            </b-form-input>
            <p v-if="warnning" class="warnning p4">Please enter both first name and last name</p>
            <b-button
                class = "submit nextButton"
                variant="outline-primary"
                v-on:click="checkName(); "
            >Next</b-button>
            </b-row>


            <b-row class="bar w-100p">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number one m-lr-a">1</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center FFFFFF">
                <div class="progressBar">
                  <div id="progressBarName"></div>
                </div>
              </b-col>
<!--              <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="FFFFFF t-center" xs="1" sm="1" md="1" lg="1" xl="1">-->
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number two">2</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center  FFFFFF">
                <div class="progressBar">
                  <!--                <div id="progressBarFull"></div>-->
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
               <div class="number three">3</div>
              </b-col>
            </b-row>
            <b-row class="explaination">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center p-l-0">
                <div class="letter one">Account Setup</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter two">Utility Plan</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter three">Connect and Finish</div>
              </b-col>
            </b-row>

          </b-row>
        </b-row>
      </b-row>

      <b-row v-if="email && !password">
        <b-row class="w-100p t-center">
          <b-row class="frame t-center">
            <b-row class="upper t-center">
            <h1 class="h1 c-254B77 owner">What is your email address?</h1>
            <b-form-input
                novalidate="true"
                class="enter I_V"
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

            <b-row class="bar w-100p">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number one m-lr-a">1</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center FFFFFF">
                <div class="progressBar">
                  <div id="progressBarEmail"></div>
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number two">2</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center  FFFFFF">
                <div class="progressBar">
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number three">3</div>
              </b-col>
            </b-row>
            <b-row class="explaination">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center p-l-0">
                <div class="letter one">Account Setup</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter two">Utility Plan</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter three">Connect and Finish</div>
              </b-col>
            </b-row>

          </b-row>
        </b-row>
      </b-row>

      <b-row v-if="password && !term">
        <b-row class="w-100p t-center">
          <b-row class="frame t-center">
            <b-row class="upper t-center">
            <h1 class="h1 c-254B77 owner">Choose a password</h1>
<!--            <div v-if="!pswWarning" class="t-center">-->
            <h4 v-if="!pswWarning" class="h4 c-C4C4C4 notification">To keep your data secure, passwords must be at least 6 characters long and include one number.</h4>
            <h4 v-if="pswWarning" class="h4 c-E30000 notification">To keep your data secure, passwords must be at least 6 characters long and include one number.</h4>
            <b-form-input
                v-if="!pswWarning"
                class="enter I"
                v-model="passwordI"
                placeholder="Enter password"
                @keyup.enter="checkPassword()"
            >
            </b-form-input>
            <b-form-input
                v-else
                class="enter I"
                style="border: 2px solid #FF0000;"
                v-model="passwordI"
                placeholder="Enter password"
                @keyup.enter="checkPassword()"
            ></b-form-input>
            <b-form-input
                v-if="!pswWarning"
                class="enter II"
                v-model="passwordII"
                placeholder="Confirm password"
                @keyup.enter="checkPassword()"
            >
            </b-form-input>
            <b-form-input
                v-else
                class="enter II"
                style="border: 2px solid #FF0000;"
                v-model="passwordII"
                placeholder="Confirm password"
                @keyup.enter="checkPassword()"
            >
            </b-form-input>
<!--            </div>-->
<!--              <h4 class="h4 c-E30000 notification">To keep your data secure, passwords must be at least 6 characters long and include one number.</h4>-->
            <b-button
                class = "submit nextButton"
                variant="outline-primary"
                v-on:click="checkPassword(); password=true;"
            >Next</b-button>
            </b-row>

            <b-row class="bar w-100p">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number one m-lr-a">1</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center FFFFFF">
                <div class="progressBar">
                  <div class="progressBarFull"></div>
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number two">2</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center  FFFFFF">
                <div class="progressBar">
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number three">3</div>
              </b-col>
            </b-row>
            <b-row class="explaination">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center p-l-0">
                <div class="letter one">Account Setup</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter two">Utility Plan</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter three">Connect and Finish</div>
              </b-col>
            </b-row>

          </b-row>
        </b-row>
      </b-row>

      <b-row v-if="term && !confirm">
        <b-row class="w-100p t-center">
          <b-row class="frame t-center">
            <b-row class="upper t-center">
            <h2 class="h2 c-254B77 owner w-100p">
              By creating an account,
              <br>
              you agree to the terms and conditions.
            </h2>
            <b-row class="Iagree">
<!--              <b-col xs="1" sm="1" md="1" lg="1" xl="1" class="t-center">-->
                <input type="checkbox" class="checkBox" id="checkbox" v-model="termChecked">
<!--              </b-col>-->
<!--              <b-col xs="11" sm="11" md="11" lg="11" xl="11" class="t-center">-->
                <label for="checkbox">
                  <b-button class = "agree" v-on:click="showTermCons = true; term = false;">
                    I agree to the Terms and Conditions
                  </b-button>
                </label>
<!--              </b-col>-->
            </b-row>

            <b-button
                class = "submit nextButton"
                variant="outline-primary"
                v-on:click="checkCheckbox();"
            >Next</b-button>
            </b-row>

            <b-row class="bar w-100p">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number one m-lr-a">1</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center FFFFFF">
                <div class="progressBar">
                  <div class="progressBarFull"></div>
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number two">2</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center  FFFFFF">
                <div class="progressBar">
                  <div id="progressBarTerm"></div>
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number three">3</div>
              </b-col>
            </b-row>
            <b-row class="explaination">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center p-l-0">
                <div class="letter one">Account Setup</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter two">Utility Plan</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter three">Connect and Finish</div>
              </b-col>
            </b-row>

          </b-row>
        </b-row>
      </b-row>

      <b-row v-if="showTermCons && !confirm">
        <b-row class="w-100p t-center">
          <b-row class="frame t-center">
            <b-row class="terms t-center">
              <p class="termTitle p3 t-left">Privacy Statement</p>
              <p class="termsContennt p3 t-left">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat ssimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessi tatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </b-row>

            <b-button
                class = "submit nextButton accept"
                variant="outline-primary"
                v-on:click="termChecked = true; checkCheckbox();"
            >Accept terms</b-button>

            <b-button
                class = "previousButton"
                variant="outline-primary"
                v-on:click="showTermCons = false; term = true;"
            >go previous</b-button>

          </b-row>
        </b-row>
      </b-row>

      <b-row v-if="confirm">
        <b-row class="w-100p t-center">
          <b-row class="frame t-center">
            <b-row class="upper t-center">
            <h1 class="h1 c-254B77 owner">
              Please confirm your email
            </h1>
            <p class="sendAnEmail p2 c-254B77 t-center">
              We sent an email to your inbox.
              Once confirmed, you’ll be able to continue setting up your blip.
              Haven’t received an email yet?
            </p>
            <b-button
                class="resend"
                v-on:click="resend()"
            >Resend confirmation email</b-button>
            </b-row>

            <b-row class="bar w-100p">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number one m-lr-a">1</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center FFFFFF">
                <div class="progressBar">
                  <div class="progressBarFull"></div>
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number two">2</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class="p-l-0 t-center  FFFFFF">
                <div class="progressBar">
                  <div id="progressBarConfirm"></div>
                </div>
              </b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="number three">3</div>
              </b-col>
            </b-row>
            <b-row class="explaination">
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center p-l-0">
                <div class="letter one">Account Setup</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter two">Utility Plan</div>
              </b-col>
              <b-col xs="3" sm="3" md="3" lg="3" xl="3" class=""></b-col>
              <b-col xs="2" sm="2" md="2" lg="2" xl="2" class="t-center">
                <div class="letter three">Connect and Finish</div>
              </b-col>
            </b-row>

          </b-row>
        </b-row>
      </b-row>

<!--      </b-row>-->
    </b-container>
<!--  </div>-->
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
      pswWarning: false,
      term:false,
      showTermCons: false,
      termChecked: false,
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
        this.pswRequirement()
        if(!this.pswWarning){
          this.term = true
        }
      }else{
        alert("Please check you passwords, they look different")
      }
    },
    pswRequirement(){
      var len = this.passwordI.length
      console.log(len)
      if (len < 6){
        this.pswWarning = true
      }else{
        this.pswWarning = true
        var outputs = this.passwordI.split('');
        console.log(outputs)
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        // const keyPressed: string = evt.key;
        for(var i = 0; i < len; ++i ) {
          if (numbers.includes(outputs[i])) {
            this.pswWarning = false
            break
          }
        }
      }
    },

    checkCheckbox(){
      if(this.termChecked){
        this.post()
        this.confirm = true
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
//@import "https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css";
</style>
