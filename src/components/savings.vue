<template>
  <div>
    <b-container class="zipcode_container" v-if="seen">
      <b-row>
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">

          <h4 class="blip-area">How do rates in your area compare to your possible blip savings?</h4>

          <b-row class="zipcode_input">
            <b-col xs="12" sm="12" md="8" lg="8" xl="8">
              <b-form-input v-model="zipcode" placeholder="Enter your zipcode"></b-form-input>
            </b-col>
            <b-col xs="12" sm="12" md="4" lg="4" xl="4">
              <b-button variant="outline-primary" v-on:click="seen = !seen">Search</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="utility_container">
      <b-row>
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">

          <h4 class="blip-area">How do rates in your area compare to your possible blip savings?</h4>

          <b-row class="zipcode_input">
            <b-col xs="12" sm="12" md="8" lg="8" xl="8">
              <b-form-input v-model="zipcode" placeholder="Enter your zipcode"></b-form-input>
            </b-col>
            <b-col xs="12" sm="12" md="4" lg="4" xl="4">
              <b-button variant="outline-primary">Search</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "savings",
  data() {
    seen: true
    return {};
  },
  mounted() {},

  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
$button-color: #e7eff9;

.blip-area {
  margin: 3em 0 0 0;
}

.zipcode_input {
  margin: 3em 0 0 0;
}

.buttons {
  position: relative;
  // top: 25%;
  transform: translateY(-25%);
  // display: inline;
}

.btn-warning {
  background: rgba(76, 175, 80, 0.33);
  // opacity:0.3;
  // background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 30%);
  border-color: darken($button-color, 15%);
  color: darken(black, 100%);
  font-style: bold;
  font-size: 15px;
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


