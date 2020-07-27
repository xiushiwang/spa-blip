<template>
  <b-navbar class="navbar">
    <b-navbar-brand class="bene-logo">
      <router-link :to="'/'">
        <img src="../assets/blip_logo.png" />
      </router-link>
    </b-navbar-brand>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item class="navigation" right>
        <router-link :to="'about'">
          <div>About</div>
        </router-link>
      </b-nav-item>
      <b-nav-item class="navigation" right>
        <router-link :to="'product'">
          <div>Product</div>
        </router-link>
      </b-nav-item>
      <b-nav-item class="navigation" right>
        <router-link :to="'/'">
          <div>Calculator</div>
        </router-link>
      </b-nav-item>

      <b-nav-item class="navigation" right>
        <div class="google-logout">
          <!-- <router-link :to="'keyPhrases'"> -->
          <!-- <GoogleLogin :params="params" :logoutButton="true">Logout</GoogleLogin> -->
        </div>
        <!-- </router-link> -->
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>


<script>
import GoogleLogin from "vue-google-login";

export default {
  name: "banner",
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

<style lang="scss" scoped>
.navbar {
  background-color: #ffffff;
  height: 4em !important;
  .bene-logo {
    padding-bottom: 0.5em;
    a {
      display: flex;
      align-items: center;
    }
  }
  img {
    height: 60%;
    width: 50%;
  }
  .navigation div {
    color: black;
  }
  .typewriter {
    font-family: Courier, monospace;
    margin: 1em 0 0 0;
  }
  .typewriter-text {
    display: inline-block;
    overflow: hidden;
    letter-spacing: 2px;
    animation: typing 2s steps(60, end), blink 0.75s step-end infinite;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 400;
    color: white;
    // border-right: 4px solid orange;
    box-sizing: border-box;
  }
  @keyframes typing {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  @keyframes blink {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
}
/* DEMO-SPECIFIC STYLES */
::selection {
  background: black;
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1400px) {
  img {
    position: relative;
    // margin-left: -80px !important; /* 50% of your logo width */
    display: block;
    // height: 60%;
    // width: 50%;
  }
  .typewriter-text {
    display: inline-block;
    overflow: hidden;
    letter-spacing: 2px;
    animation: typing 2s steps(60, end), blink 0.75s step-end infinite;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 400;
    color: white;
    // border-right: 4px solid orange;
    box-sizing: border-box;
  }
  #google-signin-btn-0 {
    input,
    button,
    submit {
      border: none !important;
    }
  }
}
</style>