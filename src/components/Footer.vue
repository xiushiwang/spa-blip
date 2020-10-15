<template>
  <div>
    <!--start:Contact-->
    <div class="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="content text-center">
              <h3 class="text-white mb-24 wow fadeInUp">Contact</h3>
              <p class="text-gray mt-8 mb-24">hello@blipenergy.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end:Contact-->

<!--  <b-navbar class="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom">-->
<!--    <b-navbar-nav class="collapse navbar-collapse" id="navbarCollapse">-->
<!--      <b-row>-->
<!--        <b-col sm="3" md="3" lg="3" xl="3">-->
<!--          <b-nav-item>-->
<!--            <router-link :to="'factSheet'">-->
<!--              <book-icon />-->
<!--              <div>Gallery</div>-->
<!--            </router-link>-->
<!--          </b-nav-item>-->
<!--        </b-col>-->
<!--        <b-col sm="3" md="3" lg="3" xl="3">-->
<!--          <b-nav-item>-->
<!--            <map-marker-icon />-->
<!--            <div>New</div>-->
<!--          </b-nav-item>-->
<!--        </b-col>-->
<!--        <b-col sm="2" md="2" lg="2" xl="2">-->
<!--          <b-nav-item>-->
<!--            <router-link :to="'keyPhrases'">-->
<!--              <message-text-outline-icon />-->
<!--              <div>Profile</div>-->
<!--            </router-link>-->
<!--          </b-nav-item>-->
<!--             <GoogleLogin :params="params" :logoutButton="true">Logout</GoogleLogin>-->
<!--        </b-col>-->
<!--      </b-row>-->
<!--    </b-navbar-nav>-->
<!--  </b-navbar>-->
  </div>
</template>
<!--&lt;!&ndash;Gallery , New, Account &ndash;&gt;-->

<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "footer",
  data() {
    return {};
  },
  created() {},

  methods: {
    // onSuccess(googleUser) {
    //   this.$router.push({ name: "/" });
    //   console.log(googleUser);
    //   // This only gets the user information: id, name, imageUrl and email
    //   console.log(googleUser.getBasicProfile());
  },
  components: {}
};
</script>

<!--<script>-->
<!--// import BookIcon from "mdi-vue/Book";-->
<!--// import MapMarkerIcon from "mdi-vue/MapMarker";-->
<!--// import MessageTextOutlineIcon from "mdi-vue/MessageTextOutline";-->

<!--export default {-->
<!--  name: "footer",-->
<!--  data() {-->
<!--    return {};-->
<!--  },-->
<!--  created() {},-->

<!--  methods: {-->
<!--    // onSuccess(googleUser) {-->
<!--    //   this.$router.push({ name: "/" });-->
<!--    //   console.log(googleUser);-->
<!--    //   // This only gets the user information: id, name, imageUrl and email-->
<!--    //   console.log(googleUser.getBasicProfile());-->
<!--  },-->
<!--  components: {-->
<!--    // BookIcon,-->
<!--    // MapMarkerIcon,-->
<!--    // MessageTextOutlineIcon,-->
<!--    // msg: 'Welcome to Your Vue.js App'-->
<!--  }-->
<!--};-->
<!--</script>-->

 
<style lang="scss" scoped>
$page-color: #333;
$text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
  0px -0px 0px rgba(0, 0, 0, 0.7);

* {
  font-family: "Montserrat", sans-serif;
  color: $page-color;
  text-shadow: $text-shadow;
}

.bg-dark {
  background-color: white !important;
  -webkit-box-shadow: 0px -4px 14px -14px rgba(201, 201, 201, 1);
  -moz-box-shadow: 0px -4px 14px -14px rgba(201, 201, 201, 1);
  box-shadow: 0px -4px 14px -14px rgba(201, 201, 201, 1);
  bottom: 0;
  margin-top: calc(10% + 20px);
  position: relative;
  bottom: 0;
}

.navbar-nav {
  justify-content: center;
  text-decoration: none;
}
</style>
