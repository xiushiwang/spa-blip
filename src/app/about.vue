<template>
  <div>
    <banner></banner>
    <b-container>   
        <h2>Learn more about our team</h2>
    </b-container>                   

  </div>
</template>

<script>
import banner from "./shared/components/banner.vue";

export default {
  name: "about",
  data() {
    return {
    };
  },
  mounted() {


  },

  methods: {
  },
  components: {
    banner

  }
};
</script>

<style lang="scss" scoped>
$button-color: #e7eff9;

.home-container {
  background-image: url("../assets/images/background.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100%;

  .enter-dest {
    position: relative;
    top: 20%;
    transform: translateY(-50%);

    .content {
      margin: 20em 0 0 0;
    }

    .input {
      margin: 1em 0 0 0;
    }
  }
}

 .buttons {
    position: relative;
    // top: 25%;
    transform: translateY(-25%);
    // display: inline;
  }

.btn-warning {
   background: rgba(76, 175, 80,0.33);
  // opacity:0.3;
  // background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 30%);
  border-color: darken($button-color, 15%);
  color: darken(black, 100%);
  font-style:bold;  
  font-size:15px;
  height: 8em;
  word-break: break-word;
  width: 50%;
  width: 50%;
}
.btn-success,
.btn-info {
  background-color: $button-color;
  background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
  border-color: darken($button-color, 15%);
  color: darken($button-color, 50%);
  height: 8em;
  word-break: break-word;
  width: 50%;
}
</style>


