<template>
  <div>
    <banner></banner>
    <b-container>   
        <b-row>
           <b-col xs="12" sm="12" md="6" lg="6" xl="6">
              <h1 class="blip-headline">See how blip can save you money</h1>
             <div class="zipcode-container">
             <savings></savings>
             </div>
           </b-col>
          <b-col xs="12" sm="12" md="6" lg="6" xl="6">
            <img class="blip-pig" src="../assets/exploding_blip_pig.png">
          </b-col>
        </b-row>
    </b-container>                   

  </div>
</template>

<script>
import banner from "./banner.vue";
import savings from "./savings.vue";

export default {
  name: "calculator",
  data() {
    return {
    };
  },
  mounted() {


  },

  methods: {
  },
  components: {
    banner,
    savings

  }
};
</script>

<style lang="scss" scoped>
$button-color: #e7eff9;

.blip-pig {
  // background-image: url("../assets/exploding_blip_pig.png");
   max-width: 100%;
  // max-width: 400px;
  height: auto;
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-attachment: fixed;
  // background-size: cover;
  // min-height: 100%;
}
.blip-headline {
  margin: 5em 0 0 0;
}
//find a better way to vertically align

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


