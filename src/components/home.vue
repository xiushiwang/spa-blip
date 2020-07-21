<template>
  <div>
    <banner></banner>
    <b-container fluid class="home-container">
      <div class="enter-dest" id="mydiv" ref="myImage">
        <b-row>
          <b-col xs="12" sm="12" md="9" offset-md="2" lg="6" offset-lg="3" xl="6" offset-xl="3">
            <div class="content">
              <h1>WHERE ARE YOU GOING ?</h1>

              <b-form-select v-model="travel" :options="options"></b-form-select>
              <!-- <div class="mt-3">
                Selected:
                <strong>{{ travel }}</strong>
              </div>-->
              <!-- <b-form-input
                type="text"
                v-model="travel"
                align="center"
                placeholder="Enter City Name Here"
                class="input"
              ></b-form-input>-->
            </div>
          </b-col>
        </b-row> 
        <br><br>
        <b-row no-gutters>
          <b-col xs="12" sm="12" md="9" offset-md="2" lg="6" offset-lg="3" xl="6" offset-xl="3">
            <div class="buttons">
                <router-link :to="'Game'">
                  <b-button
                    variant="warning"
                    @click="destEntered"
                    class="game-buttons"
                  >Play Bene Travel Game</b-button>
                </router-link>
            </div>
          </b-col>
        </b-row>
      </div>
      <!-- <div class="buttons">
        <b-row no-gutters>
          <b-col xs="6" sm="6" md="6" lg="3" xl="3">
            <router-link :to="'drugSearch'">
              <b-button
                variant="success"
                @click="destEntered"
                class="nav-buttons"
                :disabled="!travel"
              >Find OTC Medicine Equivalent</b-button>
            </router-link>
          </b-col>
          <b-col xs="6" sm="6" md="6" lg="3" xl="3">
            <b-button variant="info" disabled>Find Pharmacies</b-button>
          </b-col>
          <b-col xs="6" sm="6" md="6" lg="3" xl="3">
            <router-link :to="'factSheet'">
              <b-button
                variant="info"
                @click="destEntered"
                :disabled="!travel"
              >Traveler Factsheet</b-button>
            </router-link>
          </b-col>
          <b-col xs="6" sm="6" md="6" lg="3" xl="3">
            <router-link :to="'keyPhrases'">
              <b-button
                variant="info"
                @click="destEntered"
                :disabled="!travel"
              >Medical Phrasebook</b-button>
              
            </router-link>
          </b-col>
        </b-row>
      </div> -->
                                <button id="start-togetherjs">Start TogetherJS</button>

    </b-container>
  </div>
</template>

<script>
import banner from "./banner.vue";
import { MarkerArea } from 'markerjs';
import $ from 'jquery';

export default {
  name: "home",
  data() {
    return {
      travel: null,
      options: [
        { value: null, text: "Please select a destination" },
        { value: "Tokyo", text: "Tokyo" }
      ]
    };
  },
  mounted() {
    let togetherScript = document.createElement('script')
    togetherScript.setAttribute('src', 'https://togetherjs.com/togetherjs-min.js')
    togetherScript.async = true
    document.head.appendChild(togetherScript)
    console.log('togetherScript', togetherScript);

    $(function () {
      $("#start-togetherjs").click(TogetherJS);
    });

    const mark = new MarkerArea(this.$refs.myImage)
    console.log('mark', mark);
    mark.show((dataUrl) => {
      const res = this.$ref.resultImage
      res.src = dataUrl
      console.log('is it reaching here?')
    });
  },

  methods: {
    destEntered() {
      console.log("is it even reaching");
      this.$root.$emit("destWasEntered", this.travel);
    },
      clickFunction() {
      console.log("is it even reaching");
    },
  },
  components: {
    banner
  }
};
</script>

<style lang="scss" scoped>
$button-color: #e7eff9;

.home-container {
  background-image: url("../assets/background.jpg");
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


