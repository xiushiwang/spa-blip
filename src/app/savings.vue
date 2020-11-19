<template>
  <div>
    <b-container class="zipcode_container t-left m-l-0 p-0" v-if="seen" >
      <b-row class = "w-100p m-l-0 p-l-0" >
        <p class="how p2 c-000000 t-left m-l-0" style="margin-left: 0px">How do rates in your area compare to your possible blip savings?</p>
        <b-row class="zipcode_input t-left w-100p m-l-0">
          <b-col xs="12" sm="12" md="7" lg="7" xl="7" class="t-left m-tb-a p-l-0" style="">
<!--            <b-input-group>-->
<!--              <b-input-group-prepend>-->
<!--                <span class="input-group-text">hhhhhhh<font-awesome-icon icon="arrow-right" style="color: #000000" /></span>-->
<!--              </b-input-group-prepend>-->
            <b-form-input
                class="zip-input absolute-mid"
                type="number"
                v-model="zipcode"
                placeholder="zipcode">
<!--              <font-awesome-icon icon="arrow-right" style="color: #000000" />-->
<!--              <font-awesome-icon icon="fa-map-marker-alt"/>-->
            </b-form-input>
<!--            </b-input-group>-->
            <!--              <p>{{zipcode.length}}</p>-->
          </b-col>
          <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="i-a-c p-l-0">
            <b-button
                class = "submit search-button"
                variant="outline-primary"
                v-on:click="checkZipcode()"
                :disabled="isDisabled"
            >Search  <font-awesome-icon icon="map-marker-alt"/></b-button>
          </b-col>
        </b-row>
        <b-row class = "w-100p m-l-0 p-l-0" >
          <bcol xs="12" sm="12" md="8" lg="8" xl="8" class="t-left m-tb-a p-l-0">
          <p v-show="!showValidZipcodeError" class="validZipcodeError p4 c-FF0000 t-center">Please enter a valid zip code.</p>
          </bcol>
        </b-row>
      </b-row>
    </b-container>



    <b-row class="utility_container t-left m-l-0 p-0" v-if="!seen">
      <b-row class="zipcode_input t-left w-100p m-l-0 p-l-0">
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="h-52px t-left m-l-0 p-l-0">
<!--          <b-input-group class = "input_not_seen">-->
<!--            <b-input-group-prepend>-->
<!--              <span class="input-group-text"><font-awesome-icon icon="search" style="color: #4F9BC1" /></span>-->
<!--            </b-input-group-prepend>-->

          <b-form-input v-model="zipcode" class = "input_not_seen absolute-mid" placeholder="Enter your zipcode"></b-form-input>

<!--          </b-input-group>-->
        </b-col>
        <b-col xs="12" sm="12" md="3" lg="3" xl="3" class="t-center i-a-c">
          <b-button variant="outline-primary" v-on:click="checkZipcodeAfter()" class = "enter_button submit">Enter
<!--            <font-awesome-icon icon="search"/>-->
          </b-button>
        </b-col>
        <b-row class="t-left w-100p m-l-0 p-l-0">
          <p v-show="!showValidZipcodeError" class="validZipcodeError p4 c-FF0000 t-center">Please enter a valid zip code.</p>
        </b-row>
      </b-row>

      <b-row class="utility_provider t-left w-100p m-l-0 p-l-0">
        <b-col xs="12" sm="12" md="12" lg="12" xl="12" class="t-left m-l-0 p-l-0">
          <h4 class = "h-40px">Choose your utility provider:</h4>
          <b-row class="utility_select w-100p m-l-0 p-l-0" v-if="posts && posts.length">
<!--            Start: add-->
            <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="t-left p-l-0" v-for="post of posts">
              <div class="card" >
<!--                <button v-if="post.userId == 1"><strong>{{post.title}}</strong></button>-->
                <b-button
                    class="utilityProviderPic"
                    variant="outline-primary"
                    v-if="post.logo !== ''"
                    v-on:click="list(post); sendUtility(post)"
                >
                  <img :src= "'http://'+post.logo" class = "utilityLogo">
                </b-button>

                <b-button
                    class="utilityProviderLetter"
                    variant="outline-primary"
                    v-if="post.logo == ''"
                    v-on:click="list(post); sendUtility(post)"
                >
                  <p class="p4 t-center">{{post.utilityName}}</p>
                </b-button>

<!--                <div class="card" v-for="post.plans of post">-->

<!--                <div class="card" v-for="plans of post">-->
<!--                  <b-button-->
<!--                      variant="outline-primary"-->
<!--                      v-on:click="list(post.utilities.utility_name)"-->
<!--                  >-->
<!--                    {{post.utilities.plans.plan_name}}-->
<!--                  </b-button>-->
<!--                </div>-->
              </div>
            </b-col>
<!--            End: add-->

<!--            <b-col xs="12" sm="12" md="6" lg="6" xl="4">-->
<!--              <div class="card">-->
<!--                <div class="card-body">ComEd</div>-->
<!--              </div>-->
<!--            </b-col>-->
<!--            <b-col xs="12" sm="12" md="4" lg="4" xl="4">-->
<!--              <div class="card">-->
<!--                <div class="card-body">Edison International</div>-->
<!--              </div>-->
<!--            </b-col>-->
<!--            <b-col xs="12" sm="12" md="4" lg="4" xl="4">-->
<!--              <div class="card">-->
<!--                <div class="card-body">PG&E</div>-->
<!--              </div>-->
<!--            </b-col>-->
          </b-row>
        </b-col>
      </b-row>

      <b-row class="rate_plan t-left w-100p m-l-0 p-l-0">
<!--        <b-col xs="12" sm="12" md="12" lg="12" xl="12" >-->
          <h4 class="c-000000">Choose your rate plan:</h4>
          <a href=""><p class="p4 zeroB46DC t-left">(I don’t know my rate plan)</p></a> <!--!!!!!!!!!!!!!!!!!!!Empty!!!!!!!!!!!!!!!!!!-->
          <b-row class="plan_select t-left w-100p m-l-0 p-l-0">
<!--            <b-col xs="12" sm="12" md="12" lg="12" xl="12">-->

              <b-dropdown
                  split
                  split-variant="outline-primary"
                  variant="primary"
                  :text="selectedPlan"
                  class="m-2 m-l-0"
              >
<!--                <b-dropdown-item-->
<!--                    href="#"-->
<!--                    v-for="(i, index1) in planNum"-->
<!--                    :key='index1'-->
<!--                    @click=-->
<!--                        "selectedPlan = utilityPicked.planList[index1].planName;-->
<!--                        sendPlan(index1);-->
<!--                        countPlan(utilityPicked.planList[index1])"-->
<!--                >{{utilityPicked.planList[index1].planName}}</b-dropdown-item>-->
<!--              </b-dropdown>-->
                <b-dropdown-item
                    href="#"
                    v-for="plan of utilityPicked.planList"
                    @click=
                        "selectedPlan = plan.planName;
                        countPlan(plan);
                        sendPlan(plan)"
                >{{plan.planName}}</b-dropdown-item>
              </b-dropdown>
<!--            </b-col>-->
          </b-row>
          <b-row class="plan_select t-left w-100p m-l-0 p-l-0">
            <b-button
                class="submit"
                variant="outline-primary"
                @click="savings = !savings; displaySavings(); "
            >
              <p>See Your Savings</p>
            </b-button>
<!--              add: savings = !savings-->
          </b-row>
<!--        </b-col>-->
      </b-row>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'; //add
// import VueDropdown from 'vue-dynamic-dropdown'; //add

export default {
  name: "savings",
  data: function() {
    return {
      dataHere:'display this!',
      seen: true,
      zipcode: "",
//Start: add
      showValidZipcodeError: true,
      posts: [],
      errors: [],
      utilityPicked: [],
      planNum: 0,
      address: './src/assets/JSONforTesting/',
      selectedPlan: 'Choose your Plan',
      planClickd: true,
      numOfGraphLoaded: 0
//End: add
    };
  },
  created() {

  },
  computed: {
    isDisabled: function() {
      return !this.zipcode;
    }
  },

  mounted() {},

  methods: {
    entered_zipcode(zipcode) {
      console.log(zipcode);
    },

    displaySavings() {
      const data = this.dataHere;
       this.$emit('display-savings', data)
       console.log('data', data);
       this.numOfGraphLoaded = 1
    },

//Start: add
    checkZipcode(){
      // console.log(this.zipcode.length)
      if (this.zipcode.length === 5 ){
        this.seen = !this.seen;
        this.showValidZipcodeError = true;
        this.loadJSON();
      }else{
        // alert('!!!');
        this.showValidZipcodeError = false;
      }
    },

    checkZipcodeAfter(){
      if (this.zipcode.length === 5 ){
        // this.seen = !this.seen;
        this.showValidZipcodeError = true;
        this.loadJSON();
      }else{
        // alert('!!!');
        this.showValidZipcodeError = false;
      }
    },

    loadJSON(){
      // const address = './src/assets/JSONforTesting/60201.json'
      this.address = this.address + this.zipcode + '.json'
      axios.get(this.address)
          .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      this.address = './src/assets/JSONforTesting/'
    },

    list(utility) {
      // const utilityPlans = '{{post.utilities.' + utility + '.plans.plan_name}}'
      this.utilityPicked = utility
      this.planNum = this.utilityPicked.planList.length
      this.selectedPlan = 'Choose your Plan'
    },

    sendUtility(utility){
      // console.log('hah', utility.utilities.utility_name)
      this.$emit('pickedUtility', utility)
    },

    countPlan(plan){
      // console.log(plan.highPrice)
      const savings = (plan.highPrice - plan.lowPrice) * 900
      const saving = savings.toFixed(2)

      this.$emit('savePerYear', saving)
      console.log(savings, 'in Savings.vue')
    },

    sendPlan(plan){
      this.$emit('planPicked',plan)
      this.$emit('planClickd', this.planClickd)
      if (this.numOfGraphLoaded > 0) {
        this.$emit('refreshGraph')
      }
      // console.log('sendPlan', plan)
    },

//End: add
  },
  components: {
    // VueDropdown
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_calculator.scss";

//$button-color: #e7eff9;
//
//.blip-area {
//  margin: 3em 0 0 0;
//}
//
//.zipcode_input {
//  margin: 3em 0 0 0;
//}
//
//.utility_select{
//  h3 {
//    margin: 2em 0 0 0;
//  }
//}
//
//.rate_plan, .utility_provider {
//  h3{
//    margin: 2em 0 0 0;
//  }
//}
//
//.buttons {
//  position: relative;
//  // top: 25%;
//  transform: translateY(-25%);
//  // display: inline;
//}
//
//.btn-warning {
//  background: rgba(76, 175, 80, 0.33);
//  // opacity:0.3;
//  // background-image: linear-gradient(315deg, #e7eff9 0%, #cfd6e6 30%);
//  border-color: darken($button-color, 15%);
//  color: darken(black, 100%);
//  font-style: bold;
//  font-size: 15px;
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


