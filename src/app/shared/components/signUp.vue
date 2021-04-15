<template>
  <div class="navbar-nav" style="">
    <!--start:blip is launching soon-->
    <section class="launching">
      <div class="hero">
        <div class="container">
          <div class="row">
            <div class="contentContent col-lg-12 offset-lg-12 col-md-12 col-sm-12">
              <div class="content text-center">
                <h2 class="h2point5 two54B77 t-center">blip is launching soon</h2>
                <p class="p2 two54B77 t-center">get notified</p>
                <form>
                  <div class="form-group">
                    <p class="p3 two54B77 t-left">Name*</p>
                    <div class="form-row">
                      <!--                      <div class="form-group col-md-6">-->
  <!--                    <b-col xs="6" sm="6" md="6" lg="6" xl="6">-->
                      <b-form-input type="text"
                                    id="first"
                                    class="form-control-name-left"
                                    aria-describedby="int2"
                                    v-model="firstName"
                                    placeholder="First"
                                    @keyup.enter="submit()"
                      ></b-form-input>
                      <!--                        <p class="text-gray mt-8 mb-24">First Name</p>-->
  <!--                    </b-col>-->
                      <!--                      </div>-->
                      <!--                      <div class="form-group col-md-6">-->
  <!--                    <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="FFFFFF">-->
                      <b-form-input type="text"
                                    id="last"
                                    class="form-control-name-right"
                                    aria-describedby="int2"
                                    v-model="lastName"
                                    placeholder="Last"
                                    @keyup.enter="submit()"
                      ></b-form-input>
                      <!--                        <p class="text-gray mt-8 mb-24">Last Name</p>-->
  <!--                    </b-col>-->
                      <!--                      </div>-->
                    </div>
                  </div>

                  <div class="form-group">
                    <p class="p3 two54B77 t-left">Email*</p>
                    <b-form-input type="email"
                                  id="email"
                                  class="form-control-email"
                                  aria-describedby="emailHelp"
                                  v-model="email"
                                  placeholder="hello@blip.com"
                                  @keyup.enter="submit()"
                    ></b-form-input>
                  </div>

<!--                  <div class="form-group">-->
<!--                    <p class="p3 two54B77 t-left">Zip Code*</p>-->
<!--                    <b-form-input type="text"-->
<!--                                  id="zipcode"-->
<!--                                  class="form-control-zipcode"-->
<!--                                  aria-describedby="areaCode"-->
<!--                                  placeholder=""-->
<!--                                  v-model="zipCode"-->
<!--                                  @keyup.enter="submit()"-->
<!--                    ></b-form-input>-->
<!--&lt;!&ndash;                    <p id="areaCode">please</p>&ndash;&gt;-->
<!--                  </div>-->

                  <div class="form-group mb-0 t-center" style="height: 100px">
                    <b-button class="btn btn-outline-254B77 takeTheSurvey"
                              v-on:click="submit()"
                              :disabled="!submitButton"
                    >{{submitButtonMsg}}</b-button>
                    <p id="submitMsg" class="c-FF0000 m-t-0">{{alertMsg}}</p>
<!--                    <p v-show="!subscriptionEnd" class="closeWindow two54B77 m-t-0" @click="closeWindow">Click me to bring you back</p>-->
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--end:blip is launching soon-->
  </div>
</template>
<!--&lt;!&ndash;Gallery , New, Account &ndash;&gt;-->

<script>
// import GoogleLogin from "vue-google-login";

import axios from "axios";

export default {
  name: "signUp",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "99999",
      submitButtonMsg: "Submit",
      submitButton: false,
      alertMsg: "",
      subscriptionEnd: false,
    };
  },
  created() {},
  watch: {
    firstName:{
      handler (newVal, oldVal){
        if (this.submitButtonMsg === "Success!"){
          this.submitButton = false
        }else{
          if (this.lastName !== "" && this.validEmail(this.email) && this.checkZipcode()) {
            this.submitButton = true
            this.alertMsg = ""
          }else{
            this.submitButton = false
          }
        }

      },
    },
    lastName:{
      handler (newVal, oldVal){
        if (this.submitButtonMsg === "Success!"){
          this.submitButton = false
        }else{
          if (this.firstName === "") {
            // this.submitButton = false
            this.alertMsg = "Oops, you forgot your first name"
          }
          if (this.firstName !== "" && this.validEmail(this.email)) {
            this.submitButton = true
            this.alertMsg = ""
          }else{
            this.submitButton = false
          }
        }

      },
    },
    email:{
      handler (newVal, oldVal){
        if (this.submitButtonMsg === "Success!"){
          this.submitButton = false
        }else{
          if (this.lastName === "") {
            this.alertMsg = "Oops, you forgot your last name"
          }
          // if (this.validEmail(this.email)){
          //   this.alertMsg = ""
          // }
          if (this.firstName !== "" && this.lastName !== "") {
            this.submitButton = true
            this.alertMsg = ""
          }else{
            this.submitButton = false
          }
        }
      },
    },
    submitButtonMsg:{
      handler (newVal, oldVal) {
        if (this.submitButtonMsg === "Success!")
        setTimeout(this.sendSubscriptionEnd, 3000) // == 3 sec 5000 for5 seconds
      }
    },
  },

  methods: {
    submit(){
      if (this.firstName !== "") {
        // console.log("!")
        if (this.lastName !== "")  {
          // console.log("!!")
          if (this.validEmail(this.email)) {
            // console.log("!!!")
            // if (this.checkZipcode()) {
              this.alertMsg = ""
              this.post();
              document.getElementById("submitMsg").className -= "c-FF0000"
              document.getElementById("submitMsg").className += " " + "two54B77"
              this.alertMsg = "Thank you for signing up"
              this.submitButtonMsg = "Success!"
              this.submitButton = false
              this.subscriptionEnd = true

              // this.sendSubscriptionEnd()
              // setTimeout(this.sendSubscriptionEnd,3000) // == 3 sec 5000 for5 seconds

              // document.getElementById("zipcode").className -= "c-FF0000";
            // }else{
            //   // alert("Please enter a valid zipcode")
            //   this.alertMsg = "Please enter a valid zipcode"
            //   // document.getElementById("zipcode").className += " " + "c-FF0000";
            // }
          }else{
            // document.getElementById("email").className += " " + "c-FF0000";
            this.alertMsg = "Please enter a valid email address"
          }
        }else{
          // document.getElementById("last").className += " " + "c-FF0000";
          this.alertMsg = "Oops, you forgot your last name"
        }
      }else{
        // document.getElementById("first").className += " " + "c-FF0000";
        this.alertMsg = "Oops, you forgot your first name"
      }
    },
    validEmail(email) {
      var re = /^([a-z0-9A-Z]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
          // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkZipcode(){
      var re = /^[1-9][0-9]{3,5}$/
      return re.test(this.zipCode);
    },
    lcheckZipcode(){
      if (this.zipCode.length !== 5){
        // console.log("length" + this.zipCode.length)
        // alert("Please enter a valid zipcode")
        return false
      }
      var split = this.zipCode.split("")
      const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      // var allNum = true;
      for(var i=0; i<5; i++){
        if(!numbers.includes(split[i])){
          // allNum = false;
          // console.log("letter" + typeof(this.zipCode))
          // alert("Please enter a valid zipcode")
          return false
        }
      }
      return true
    },
    post(){
      console.log('posting...', this.lastName, this.firstName, this.email, this.zipCode)

      let param = new URLSearchParams()
      param.append('first_name', this.firstName)
      param.append('last_name', this.lastName)
      param.append('email', this.email)
      param.append('zip_code', this.zipCode)
      axios({
        method: 'post',
        url: 'http://ec2-34-228-112-229.compute-1.amazonaws.com:8080/user/subscribe',
        data: param
      })
    },
    sendSubscriptionEnd(){
      // alert("did it")
      this.$emit('subscriptionEnd', this.subscriptionEnd)
      // this.firstName = ""
      // this.lastName = ""
      // this.email = ""
      // this.zipCode = "99999"
      // this.submitButtonMsg = "Submit"
      // this.submitButton = false
      // this.alertMsg = ""
      // this.subscriptionEnd = false
    },
    closeWindow(){
      this.$emit('subscriptionEnd', true)
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap');

section{
  width: 100%;
  font-family: 'Montserrat', Avenir;}
//.h-536{height: 536px;}

.E5E5E5{background: #E5E5E5;}
.FFFFFF{background: #FFFFFF;}
.DEF5FF{background: #DEF5FF;}
.oneD3755{background: #1D3755;}

.two54B77{color: #254B77;}
.one83B56{color: #183B56;}
.zero000000{color: #000000;}
.c-B0E7FF{color: #B0E7FF;}
.c-FF0000{color: #FF0000;}

.t-center{text-align: center;}
.t-left{text-align: left;}
.text-center{text-align: center};
.upperCase{text-transform: uppercase;}

h2{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 200;
  font-size: 48px;
  line-height: 62px;
  margin: 20px;
  /* identical to box height, or 129% */
}
.h2point5{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 128%;
  //margin: 20px;
  /* identical to box height, or 129% */
}
h4{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
}

p.p1{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 125%;
  /* or 40px */
}
p.p2{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  margin: 20px;
}
p.p3{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */
}

//img{background: #C4C4C4;}

button.btn.btn-outline-4F9BC1{
  font-family: 'Montserrat', Avenir;
  width: 250px;
  height: 59px;
  //left: 608px;
  //top: 263px;

  border: 2px solid #4F9BC1;
  box-sizing: border-box;
  border-radius: 24px;

  text-align: center;
  background-color:transparent;
  button:hover {
    background-color: #4F9BC1;
    //color: white;
  }

  font-family: 'Montserrat', Avenir;;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #4F9BC1;
}
button.btn.btn-outline-254B77{
  font-family: 'Montserrat', Avenir;
  width: 167px;
  height: 59px;
  //left: 608px;
  //top: 263px;
  text-align: center;

  background-color:transparent;
  border: 2px solid #254B77;
  box-sizing: border-box;
  border-radius: 50px;

  font-family: 'Montserrat', Avenir;;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: #254B77;
}
button.btn.btn-outline-254B77:hover {
  background-color: #254B77;
  color: #DEF5FF;
}

input{
  //width: ;
  height: 49px;
  //left: 318px;
  //top: 251px;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid #254B77;
  outline: none;
  margin-right:0px;
  margin-bottom: 25px;
  padding-left: 20px;
  padding-top: 3%;
  padding-bottom: 2%;
}
input::placeholder{
  //position: absolute;
  //top: 50%;
  //transform: translate(0, -50%);

  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 111%;
  color: #8E8E8E;
}

//.full{width: 100%}

.launching{
  height: 100%;
  display: flex;
  align-items: center;
  padding: 5% 0%;
  .hero {
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
    h2 {
      margin-left: 30px;
      margin-right: 30px;
    }

    form {
      padding: 0% 10%;
      text-align: left;

      .form-group {
        .p3 {
          margin-bottom: 8px;
        }

        .form-row {
          display: flex;
          flex-direction: row;
          padding: 0;
          //background: #6f42c1;
          margin-bottom: -18px;

          .form-control-name-left {
            //position: absolute;
            width: 47%;
            margin-left: 0.6%;
            margin-right: 2.4%;
          }

          .form-control-name-right {
            width: 47%;
            margin-left: 2.5%;
            margin-right: 0.5%;
          }

          .form-control-email {
            //position: absolute;
            width: 100%;
            margin-left: 0px;
            margin-right: 0px;
          }
        }

        .form-control-zipcode {width: 173px;}

        .mb-0 {
          width: 100%;
          text-align: center;
        }

        .takeTheSurvey{
          margin-top: 10px;
          margin-bottom: 8px;
        }

        #submitMsg{
          margin-top: -3px;
          margin-bottom: 0px;
        }

        .closeWindow{margin-top: 0px;}

        .closeWindow:hover{
          text-decoration: underline;
        }
      }

    }
  }
}


.w-88h-55{
  //position: absolute;
  width: 88px;
  //height: 55px;
  //left: 676px;
  //top: 231px;
  margin-top: -60px;
}

.contentContent{
  padding: 0 18px;
}
.content{
  margin-bottom: 18px;
}

.navbar-nav{
  justify-content: center;
  text-decoration: none;
  width: 100%;

  background: #FFFFFF;

  border: 2px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 50px;
}
</style>
