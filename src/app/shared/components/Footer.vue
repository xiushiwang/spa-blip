<template>
  <div class="navbar-nav">
    <!--start:blip is launching soon-->
    <section class="DEF5FF launching">
      <div class="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div class="content text-center">
                <h2 class="h2 two54B77 t-center">blip is launching soon</h2>
                <p class="p2 two54B77 t-center">get notified</p>
                <form>
                  <p class="p3 two54B77 t-left">Name*</p>
                  <div class="form-row">
                    <!--                      <div class="form-group col-md-6">-->
                    <input type="text" class="form-control-name" aria-describedby="int2" placeholder="First">
                    <!--                        <p class="text-gray mt-8 mb-24">First Name</p>-->
                    <!--                      </div>-->
                    <!--                      <div class="form-group col-md-6">-->
                    <input type="text" class="form-control-name" aria-describedby="int2" placeholder="Last">
                    <!--                        <p class="text-gray mt-8 mb-24">Last Name</p>-->
                    <!--                      </div>-->
                  </div>

                  <div class="form-group">
                    <p class="p3 two54B77 t-left">Email*</p>
                    <input type="email" class="form-control-email" aria-describedby="emailHelp" placeholder="">
                  </div>

                  <div class="form-group">
                    <p class="p3 two54B77 t-left">Zip Code*</p>
                    <input type="text" class="form-control-zipcode" aria-describedby="areaCode" placeholder="">
                  </div>

                  <!-- <div class="form-group mb-0">
                    <button type="submit" class="btn btn-outline-4F9BC1">Take the Survey</button>
                  </div> -->
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
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="content text-center">
              <h2 class="h2 zero000000 t-center">Contact</h2>
              <p class="p2 zero000000 t-center">hello@blipenergy.com</p>
              <br>
              <br>
              <!--              <div class="logo w-88h-55"></div>-->
              <img src="../../../assets/blip_logo.png" class="w-88h-55"/>
              <p class="copyright">Copyright © 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<!--&lt;!&ndash;Gallery , New, Account &ndash;&gt;-->

<script>
// import GoogleLogin from "vue-google-login";

export default {
  name: "footer",
  data() {
    return {};
  },
  created() {},

  methods: {
    
  },
  components: {}
};
</script>


<style lang="scss" scoped>
@font-face {
  font-family: "MarkPro-TestFont";
  src:local("./assets/fonts/MarkPro-TestFont.otf/MarkPro-TestFont.otf");
}


section{width: 100%;}
//.h-536{height: 536px;}

//.E5E5E5{background: #E5E5E5;}
.FFFFFF{background: #FFFFFF;}
.DEF5FF{background: #DEF5FF;}
.oneD3755{background: #1D3755;}

.two54B77{color: #254B77;}
.one83B56{color: #183B56;}
.zero000000{color: #000000;}

.t-center{text-align: center;}
.t-left{text-align: left;}
.text-center{text-align: center};

h2{
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 62px;
  margin: 20px;
  /* identical to box height, or 129% */
}
h4{
  font-family: Avenir, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
}

p.p1{
  //font-family: FF Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 125%;
  /* or 40px */
}
p.p2{
  //font-family: FF Mark Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  margin: 20px;
}
p.p3{
  //font-family: FF Mark Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */
}

//img{background: #C4C4C4;}

button.btn.btn-outline-4F9BC1{
  //position: absolute;
  width: 230px;
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

  //font-family: "MarkPro-TestFont";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #4F9BC1;
}

input{
  //width: ;
  height: 49px;
  //left: 318px;
  //top: 251px;
  background: #FFFFFF;
  box-sizing: border-box;
  border: none;
  outline: none;
  margin-right:0px;
  margin-bottom: 25px;
  ::placeholder{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 111%;
    color: #8E8E8E;
  }
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
    .form-row{
      display: flex;
      flex-direction: row;
      padding: 0;
      //background: #6f42c1;
      margin-bottom: 15px;
    }
    .form-control-name{
      //position: absolute;
      width: 334px;
      margin-left: 5px;
      margin-right: 30px;

    }
    .form-control-email{
      //position: absolute;
      width: 704px;
    }
    .form-control-zipcode{
      width: 173px;
    }
    .mb-0{
      width: 100%;
      text-align: center;
    }
  }
}
.logo{
  background: url(../../../assets/blip_logo.png);
}
.w-88h-55{
  //position: absolute;
  width: 88px;
  //height: 55px;
  //left: 676px;
  //top: 231px;
}
.copyright{
  position: absolute;
  height: 22px;
  //left: 45.35%;
  //right: 45.35%;
  left: 40%;
  right: 40%;
  top: calc(50% - 22px/2 + 130px);
  margin-top: 14px;
  text-align: center;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
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
