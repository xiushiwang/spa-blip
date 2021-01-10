<template>
  <div>
    <banner></banner>
    <b-container>
      <h2>Learn more about our team</h2>
      <!-- Start embed -->
      <div id="retainable-rss-embed"
           data-rss="https://medium.com/feed/@xiushiwang09"
           data-maxcols="2"
           data-layout="grid"
           data-poststyle="inline"
           data-readmore="Read the rest"
           data-buttonclass="btn btn-primary"
           data-offset="-200">&#160;</div>
      <!-- End embed -->
    </b-container>
<!--    <script src="https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js"></script>-->
    <Footer></Footer>
  </div>
</template>

<script>
import banner from "./shared/components/banner.vue";
import Footer from "./shared/components/Footer.vue";

export default {
  name: "articles",
  data() {
    return {
    };
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', '' + 'https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js')
        // 'https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js')
    document.head.appendChild(externalScript)
  },

  methods: {
  },
  components: {
    banner,
    Footer//added
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_about.scss";
@import "src/scss/animate";

//$button-color: #e7eff9;
//
//.home-container {
//  background-image: url("../assets/images/background.jpg");
//  background-repeat: no-repeat;
//  background-position: center center;
//  background-attachment: fixed;
//  background-size: cover;
//  min-height: 100%;
//
//  .enter-dest {
//    position: relative;
//    top: 20%;
//    transform: translateY(-50%);
//
//    .content {
//      margin: 20em 0 0 0;
//    }
//
//    .input {
//      margin: 1em 0 0 0;
//    }
//  }
//}
//
// .buttons {
//    position: relative;
//    // top: 25%;
//    transform: translateY(-25%);
//    // display: inline;
//  }
//
//.btn-warning {
//   background: rgba(76, 175, 80,0.33);
//  // opacity:0.3;
//  // background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 30%);
//  border-color: darken($button-color, 15%);
//  color: darken(black, 100%);
//  font-style:bold;
//  font-size:15px;
//  height: 8em;
//  word-break: break-word;
//  width: 50%;
//  width: 50%;
//}
//.btn-success,
//.btn-info {
//  background-color: $button-color;
//  background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
//  border-color: darken($button-color, 15%);
//  color: darken($button-color, 50%);
//  height: 8em;
//  word-break: break-word;
//  width: 50%;
//}
</style>


