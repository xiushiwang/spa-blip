<template>
  <div class="navbar-nav" style="background: #FFFFFF;">
    <!--start:blip is launching soon-->
    <section class="DEF5FF launching"  id="sign-up">
      <div class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div class="content text-center">
                <h2 class="h2 two54B77 t-center" style="margin-bottom: 80px">blip is launching soon</h2>
<!--                <p class="p2 two54B77 t-center">get notified</p>-->
                <form>
                  <div class="form-group">
                    <b-row class="form-row">
                      <!--                      <div class="form-group col-md-6">-->
                      <b-col xs="6" sm="6" md="6" lg="6" xl="6" style="padding-left: 0; padding-right: 17px; ">
                        <p class="p3 two54B77 t-left" style="margin-bottom: 8px">First Name*</p>
                        <b-form-input type="text"
                                      id="first"
                                      class="form-control-name-left"
                                      aria-describedby="int2"
                                      v-model="firstName"
                                      placeholder=""
                        ></b-form-input>
                      <!--                        <p class="text-gray mt-8 mb-24">First Name</p>-->
                      </b-col>
                      <!--                      </div>-->
                      <!--                      <div class="form-group col-md-6">-->
                      <b-col xs="6" sm="6" md="6" lg="6" xl="6" style="padding-left: 17px; padding-right: 0; ">
                        <p class="p3 two54B77 t-left" style="margin-bottom: 8px">Last Name*</p>
                        <b-form-input type="text"
                                      id="last"
                                      class="form-control-name-right"
                                      aria-describedby="int2"
                                      v-model="lastName"
                                      placeholder=""
                        ></b-form-input>
                      <!--                        <p class="text-gray mt-8 mb-24">Last Name</p>-->
                      </b-col>
                      <!--                      </div>-->
                    </b-row>
                  </div>

                  <b-row class="form-group">
                    <b-col xs="8" sm="8" md="8" lg="8" xl="8" class="leftEmail" style="padding-left: 0; padding-right: 17px; ">
                      <p class="p3 two54B77 t-left" style="margin-bottom: 8px">Email*</p>
                      <b-form-input type="email"
                                    id="email"
                                    class="form-control-email"
                                    aria-describedby="emailHelp"
                                    placeholder=""
                                    v-model="email"
                      ></b-form-input>
                    </b-col>

                    <b-col xs="4" sm="4" md="4" lg="4" xl="4" class="rightZipcode" style="padding-left: 17px; padding-right: 0; ">
                      <p class="p3 two54B77 t-left" style="margin-bottom: 8px">Zip Code*</p>
                      <b-form-input type="text"
                                    id="zipcode"
                                    class="form-control-zipcode"
                                    aria-describedby="areaCode"
                                    placeholder=""
                                    v-model="zipCode"
                                    @keyup.enter="submit()"
                      ></b-form-input>
                    </b-col>

                  </b-row>

<!--                  <div class="form-group">-->
<!--&lt;!&ndash;                    <p id="areaCode">please</p>&ndash;&gt;-->
<!--                  </div>-->

                  <div class="form-group mb-0 mt-80 t-center">
                    <b-button class="btn btn-B0E7FF takeTheSurvey"
                              v-on:click="submit()"
                              :disabled="!submitButton"
                    >{{submitButtonMsg}}</b-button>
                    <p id="submitMsg" class="c-FF0000 m-t-0">{{alertMsg}}</p>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--end:blip is launching soon-->

    <!--start:Contact-->
    <div class="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12" >
            <div class="content text-center" style="background: #faad13">
              <b-row class="onLine">
                <b-col xs="7" sm="7" md="7" lg="7" xl="7" class="t-left" style="background: #B0E7FF; padding-left: 0px">
                  <img src="../../../assets/blip_logo.png" class="logoOnLeft"/>
                </b-col>
                <b-col xs="5" sm="5" md="5" lg="5" xl="5" class = "textOnRight">
                  <b-row class="txt">
                    <b-col xs="4" sm="4" md="4" lg="4" xl="4" class = "FFFFFF txtIn t-left p-l-0">
                      <p class="h5 two54B77 m-l-0"><strong>Company</strong></p>
                      <p class="h5 two54B77" onclick="window.location.href='../about'">About</p>
                      <p class="h5 two54B77" onclick="window.location.href='../contact-us'">Contact us</p>
                      <p class="h5 two54B77" onclick="window.location.href='../faqs'">FAQs</p>
                    </b-col>
                    <b-col xs="4" sm="4" md="4" lg="4" xl="4" class = "txtIn t-left">
                      <p class="h5 two54B77"><strong>Product</strong></p>
                      <p class="h5 two54B77" onclick="window.location.href='../blip-one'">blip One</p>
                      <p class="h5 two54B77" onclick="window.location.href='../utilities'">Utilities</p>
                    </b-col>
                    <b-col xs="4" sm="4" md="4" lg="4" xl="4" class = "FFFFFF txtIn t-left">
                      <p class="h5 two54B77"><strong>Legal</strong></p>
                      <p class="h5 two54B77" onclick="window.location.href='privacy-policy'">Privacy Policy</p>
                    </b-col>
                  </b-row>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end:Contact-->
  </div>
</template>
<!--&lt;!&ndash;Gallery , New, Account &ndash;&gt;-->

<script>
// import GoogleLogin from "vue-google-login";

import axios from "axios";

export default {
  name: "footer",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
      submitButtonMsg: "Get Notified",
      submitButton: false,
      alertMsg: "",
    };
  },
  created() {},
  watch: {
    firstName:{
      handler (newVal, oldVal){
        if (this.submitButtonMsg === "Success!"){
          this.submitButton = false
        }else{
          if (newVal.length > 30){
            this.submitButton = false
            this.alertMsg = "Please don't use more than 30 characters in first name"
          }else if (oldVal.length > 30 && newVal.length <= 30){
            this.alertMsg = ""
          }
          if (newVal === "") {
            this.submitButton = false
            this.alertMsg = "Please don't forget your first name"
          }
          if (newVal !== "" && this.alertMsg === ("Oops, you forgot your first name" || "Please don't forget your first name")){
            this.alertMsg = ""
          }
          if (this.validFirst(newVal) && this.validLast(this.lastName) && this.validEmail(this.email) && this.checkZipcode()) {
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
          }else if (this.firstName !== "" && this.alertMsg === ("Oops, you forgot your first name" || "Please don't forget your first name")){
            this.alertMsg = ""
          }
          if (newVal.length > 30){
            this.submitButton = false
            this.alertMsg = "Please don't use more than 30 characters in last name"
          }else if (oldVal.length > 30 && newVal.length <= 30){
            this.alertMsg = ""
          }
          if (newVal === "") {
            this.submitButton = false
            this.alertMsg = "Please don't forget your last name"
          }
          if (newVal !== "" && this.alertMsg === ("Oops, you forgot your last name" || "Please don't forget your last name")){
            this.alertMsg = ""
          }
          if ( this.validFirst(this.firstName) && this.validLast(newVal) && this.validEmail(this.email) && this.checkZipcode()) {
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
          }else if(this.lastName !== "" && this.alertMsg === ("Oops, you forgot your last name" || "Please don't forget your last name")){
            this.alertMsg = ""
          }
          if (this.validEmail(oldVal) && !this.validEmail(newVal)) {
            this.submitButton = false
            this.alertMsg = "Please enter a valid email address"
          }
          if (this.validEmail(newVal) && this.alertMsg === "Please enter a valid email address") {
            this.alertMsg = ""
          }
          if (this.validFirst(this.firstName) && this.validLast(this.lastName) && this.validEmail(newVal) && this.checkZipcode()) {
            this.submitButton = true
            this.alertMsg = ""
          }else{
            this.submitButton = false
          }
        }
      },
    },
    zipCode:{
      handler (newVal, oldVal){
        if (this.submitButtonMsg === "Success!"){
          this.submitButton = false
        }else{
          if (!this.validEmail(this.email)){
            this.alertMsg = "Please enter a valid email address"
          }else if (this.validEmail(this.email) && this.alertMsg === "Please enter a valid email address") {
            this.alertMsg = ""
          }
          if (this.checkZipcode()){
            this.alertMsg = ""
          }
          if (newVal.length > 3){
            if (!this.checkZipcode()){
              this.alertMsg = "Please enter a valid zipcode"
            }
          }
          if (oldVal !== "" && newVal === "") {
            this.submitButton = false
            this.alertMsg = "Please don't forget your zipcode"
          }
          if (this.checkZipcode() && this.alertMsg === ("Please don't forget your zipcode" || "Please enter a valid zipcode")){
            this.alertMsg = ""
          }
          if (this.validFirst(this.firstName) && this.validLast(this.lastName) && this.validEmail(this.email) && this.checkZipcode()) {
            this.submitButton = true
            this.alertMsg = ""
          }else{
            this.submitButton = false
          }
        }
      },
    }
  },

  methods: {
    submit(){
      if (this.validFirst(this.firstName)) {
        // console.log("!")
        if (this.validLast(this.lastName))  {
          // console.log("!!")
          if (this.validEmail(this.email)) {
            // console.log("!!!")
            if (this.checkZipcode()) {
              this.alertMsg = ""
              this.post();
              document.getElementById("submitMsg").className -= "c-FF0000"
              document.getElementById("submitMsg").className += " " + "two54B77"
              this.alertMsg = "Thank you for signing up"
              this.submitButtonMsg = "Success!"
              this.submitButton = false
              // console.log("!!!!")
              // document.getElementById("zipcode").className -= "c-FF0000";
              // document.getElementById("email").className -= " c-FF0000";
              // document.getElementById("last").className -= " c-FF0000";
              // document.getElementById("first").className -= " c-FF0000";
            }else{
              // alert("Please enter a valid zipcode")
              this.alertMsg = "Please enter a valid zipcode"
              // document.getElementById("zipcode").className += " " + "c-FF0000";
            }
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
    validFirst(name){
      if (name.length > 0 && name.length <= 30){
        return true
      }
      return false
    },
    validLast(name){
      if (name.length > 0 && name.length <= 30){
        return true
      }
      return false
    },
    validEmail(email) {
      var re = /^([a-z0-9A-Z]+[-_|.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
          // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    // checkZipcode(){
    //   var re = /^[1-9][0-9]{3,5}$/
    //   return re.test(this.zipCode);
    // },
    checkZipcode(){
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
        url: 'https://www.api.blipenergy.com/user/subscribe',
        data: param
      })
    },
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
.c-E5E5E5{color: #E5E5E5;}
.c-FFFFFF{color: #FFFFFF}

.t-center{text-align: center;}
.t-left{text-align: left;}
.text-center{text-align: center};
.upperCase{text-transform: uppercase;}
.mt-80{margin-top: 80px;}
.p-l-0{padding-left: 0px}

h2{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 62px;
  margin: 20px;
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
.h5{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */

  letter-spacing: -0.015em;
  margin: 0;
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
  font-size: 16px;
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

button.btn.btn-B0E7FF{
  font-family: 'Montserrat', Avenir;
  width: 215px;
  height: 44px;
  //left: 608px;
  //top: 263px;

  //border: 2px solid #B0E7FF;
  //box-sizing: border-box;
  //border-radius: 24px;
  border: none;
  border-radius: 30px;

  text-align: center;
  background-color: #B0E7FF;

  font-family: 'Montserrat', Avenir;;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
  color: #254B77;
}
button.btn.btn-B0E7FF:hover {
  background-color: #254B77;
  color: #B0E7FF;
}

input{
  //width: ;
  height: 44px;
  //left: 318px;
  //top: 251px;
  background: #FFFFFF;
  //box-sizing: border-box;
  //border-radius: 30px;
  //border: transparent;
  border: 2px solid #D3D3D3;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  margin-right:0px;
  margin-bottom: 25px;
  padding-left: 20px;
  padding-top: 2%;
  padding-bottom: 2%;
}
input::placeholder{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 111%;
  color: #8E8E8E;
}

//.full{width: 100%}

.hero{
  width: 100%;
  //background: #6f42c1;
  .container{
    width: 100%;
    height: 536px;
    padding-right: 0;
    padding-left: 0;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    text-align: center;
    //background: #869791;
    .row {
      width: 100%;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin:0 auto;
      align-items: center;
      text-align: center;
      //background: #F2607B;
      .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        //background: #6f42c1;
        //border: #3cb582 0.2cm;
        .picOnLeft{
          text-align: center;
          //display: flex;
          //align-items: center;
          margin-left: auto;
          margin-right: auto;
          img{
            width: 470px;
            height: 373px;
            //position: absolute;
            //left: 15%;
          }
        }

        .textOnRight{
          width: 90%;
          height: 444px;
          //background: #F2607B;
          text-align: center;
          display: flex;
          align-items: center;
          //flex-direction: column;
          .contentCenter{
            position: absolute;
            //width: 488px;
            //height: 186px;
            //left: 98px;
            //top: 78px;
            width: 70%;
            left: 10%;
            //background: #3cb582;
          }
        }
      }
      //.offset-lg-2{
      //  height: 536px;
      //}
      .content{
        //width: 940px;

      }
    }
  }
}

.launching{
  height: 694px;
  display: flex;
  align-items: center;
  form{
    text-align: left;
    .form-group{
      //background: #faad13;
      //.leftEmail{
      //  padding-left: 0;
      //  padding-right: 17px;
      //}
      //.rightZipcode{
      //  padding-left: 17px;
      //  padding-right: 0;
      //}
      .form-row{
        display: flex;
        flex-direction: row;
        padding: 0;
        //background: #6f42c1;
        margin-bottom: -18px;
        .form-control-name-left{
          //position: absolute;
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
        .form-control-name-right{
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
        .form-control-email{
          //position: absolute;
          width: 100%;
          margin-left: 0px;
          margin-right: 0px;
        }
      }

      .form-control-zipcode{
        width: 100%;
      }
      .mb-0{
        width: 100%;
        text-align: center;
      }
    }

  }

}
.takeTheSurvey{
  margin-bottom: 50px;
}

#submitMsg{
  margin-top: -40px;
}

.logo{
  background: url(../../../assets/blip_logo.png);
}

.onLine{
  //background: #faad13;
  width: 82%;
  height: 292px;
  left: 130px;
  top: 292px;

  border-bottom: 1px solid #D3D3D3;

  .logoOnLeft{
    height: 55px;
    width: 88px;
    //left: 129px;
    //top: 105px;
    margin-left: 0px;
    border-radius: 0px;
  }
  .textOnRight{
    .txt{
      .txtIn{
        //margin-top: 0px;
        padding: 0;
      }
    }
  }
}

.copyright{
  position: absolute;
  height: 22px;
  //left: 45.35%;
  //right: 45.35%;
  left: 40%;
  right: 40%;
  top: calc(50% - 22px/2 + 150px);
  margin-top:-12px;
      //20px;
  text-align: center;

  font-family: 'Montserrat', Avenir;;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */
  color: #5A7184;
}



.navbar-nav{
  justify-content: center;
  text-decoration: none;
  width: 100%;
}
</style>
