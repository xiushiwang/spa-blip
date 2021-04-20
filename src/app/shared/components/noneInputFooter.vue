<template>
  <div class="navbar-nav">
    <!--start:Contact-->
    <div class="hero b-F1FAFF">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="content text-center">
<!--              <h2 class="h2 zero000000 t-center">Contact</h2>-->
<!--              <p class="p2 zero000000 t-center">hello@blipenergy.com</p>-->
              <div class="w-100p m-l-0 p-l-0">
<!--                <a href="https://twitter.com/BlipEnergy" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" class="font-awesome-icon one83B56"/></a>-->
<!--                <a href="https://www.facebook.com/blipenergy/" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" class="font-awesome-icon one83B56"/></a>-->
<!--                <a href="https://www.linkedin.com/company/blip-energy" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="font-awesome-icon one83B56"/></a>-->
                <a href="https://twitter.com/BlipEnergy" target="_blank"><font-awesome-icon :icon="['fab', 'twitter-square']" class="font-awesome-iconI boxOver c-F1FAFF"/></a>
                <a href="https://www.facebook.com/blipenergy/" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-square']" class="font-awesome-iconI boxOver c-F1FAFF"/></a>
                <a href="https://www.linkedin.com/company/blip-energy" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" class="font-awesome-iconI boxOver c-F1FAFF"/></a>

                <!--                <p class="circle">-->
<!--                  <a href="https://twitter.com/BlipEnergy"><font-awesome-icon :icon="['fab', 'twitter']" class="font-awesome-icon one83B56"/></a>-->
<!--                </p>-->
<!--                <p class="circle">-->
<!--                  <a href="https://www.facebook.com/blipenergy/"><font-awesome-icon :icon="['fab', 'facebook-f']" class="font-awesome-icon one83B56"/></a>-->
<!--                </p>-->
<!--                <p class="circle">-->
<!--                  <a href="https://www.linkedin.com/company/blip-energy"><font-awesome-icon :icon="['fab', 'linkedin-in']" class="font-awesome-icon one83B56"/></a>-->
<!--                </p>-->
              </div>
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
    <!--end:Contact-->
  </div>
</template>
<!--&lt;!&ndash;Gallery , New, Account &ndash;&gt;-->

<script>

export default {
  name: "noneInputFooter",
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&display=swap');

section{
  width: 100%;
  font-family: 'Montserrat', Avenir;}
//.h-536{height: 536px;}

//.E5E5E5{background: #E5E5E5;}
.FFFFFF{background: #FFFFFF;}
.DEF5FF{background: #DEF5FF;}
.oneD3755{background: #1D3755;}
.b-F1FAFF{background: #F1FAFF;}

.two54B77{color: #254B77;}
.one83B56{color: #183B56;}
.zero000000{color: #000000;}
.c-F1FAFF{color: #F1FAFF;}

.t-center{text-align: center;}
.t-left{text-align: left;}
.text-center{text-align: center};

h2{
  font-family: 'Montserrat', Avenir;
  font-style: normal;
  font-weight: 200;
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

input{
  //width: ;
  height: 49px;
  //left: 318px;
  //top: 251px;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 30px;
  border: transparent;
  outline: none;
  margin-right:0px;
  margin-bottom: 25px;
  ::placeholder{
    font-family: 'Montserrat', Avenir;
    font-style: normal;
    font-weight: 300;
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
    height: 341px;
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
    .form-control-name-left{
      //position: absolute;
      width: 47%;
      margin-left: 0.6%;
      margin-right: 2.4%;
    }
    .form-control-name-right{
      width: 47%;
      margin-left: 2.5%;
      margin-right: 0.5%;
    }
    .form-control-email{
      //position: absolute;
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
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
.font-awesome-icon{
  font-size: 32px;
  line-height: 34px;

  width: 64px;
  height: 64px;
  padding: 16px 16px;
  margin-left: 14px;
  margin-right: 5px;
  margin-bottom: -10px;

  border: 2px solid #254B77;
  border-radius: 50px;
}
.font-awesome-iconI{
  font-size: 28px;
  //margin: 15px;
  //margin-top: 13px;

  width: 64px;
  height: 64px;
  padding: 12px 12px 12px 12px;
  margin-left: 9px;
  margin-right: 10px;
  margin-bottom: 10px;

  border: 2px solid #183B56;
  border-radius: 50px;

  background: #183B56;
}
.boxOver{
  box-shadow:  inset 15px 0 #F1FAFF, inset 0 15px #F1FAFF, inset -15px 0 #F1FAFF, inset 0 -15px #F1FAFF;
}
.circle{
  width: 64px;
  height: 64px;
  border: 2px solid #254B77;
  border-radius: 50px;
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
  top: calc(50% - 22px/2 + 80px);
  margin-top: 25px;
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
  //height: 341px;
}
</style>
