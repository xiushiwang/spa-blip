<template>
  <div>
    <banner></banner>
    <b-container>
      <h4>We're currently still working. Check out our savings calculator to learn more about your savings with blip.</h4>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import banner from "./shared/components/banner.vue";
import Footer from "./shared/components/Footer.vue";

export default {
  name: "utilities",
  data() {
    return {
    };
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

</style>


