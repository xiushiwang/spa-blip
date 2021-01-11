<template>
  <div class="all">
    <b-container class="zipcode_container t-left m-l-0 p-0" v-if="seen" >
<!--      <b-row class="seeHow row w-100p">-->
<!--        <h1 class="h1 c-000000 t-left f-Avenir see">See how blip can save you money</h1>-->
<!--      </b-row>-->

      <b-row class = "w-100p m-l-0 p-l-0" >
        <h1 class="h1 c-000000 t-left see">See how blip can save you money</h1>
        <p class="p2 c-000000 t-left m-l-0 how" style="margin-left: 0px">How do rates in your area compare to your possible blip savings?</p>
        <b-row class="zipcode_input t-left w-100p m-l-0">
          <b-col xs="12" sm="12" md="7" lg="7" xl="7" class="t-left m-tb-a p-l-0">
<!--            <b-input-group>-->
<!--              <b-input-group-prepend>-->
<!--                <span class="input-group-text">hhhhhhh<font-awesome-icon icon="arrow-right" style="color: #000000" /></span>-->
<!--              </b-input-group-prepend>-->
            <b-form-input
                class="zip-input absolute-mid"
                v-model="zipcode"
                placeholder="enter zipcode"
                @keyup.enter="checkZipcode()">
<!--              <font-awesome-icon icon="arrow-right" style="color: #000000" />-->
<!--              <font-awesome-icon icon="fa-map-marker-alt"/>-->
            </b-form-input>
<!--            </b-input-group>-->
            <!--              <p>{{zipcode.length}}</p>-->
          </b-col>
          <b-col xs="12" sm="12" md="5" lg="5" xl="5" class="i-a-c p-0">
            <b-button
                class = "submit search-button"
                variant="outline-primary"
                v-on:click="checkZipcode()"
                :disabled="isDisabled"
            >Search </b-button>
<!--            <font-awesome-icon icon="map-marker-alt"/>-->
          </b-col>
        </b-row>
        <b-row class = "w-100p m-l-0 p-l-0" >
          <bcol xs="12" sm="12" md="8" lg="8" xl="8" class="t-left m-tb-a p-l-0">
          <p v-show="!showValidZipcodeError" class="validZipcodeError p4 c-FF0000 t-center">Please enter a valid zip code.</p>
          </bcol>
        </b-row>
      </b-row>
    </b-container>



    <div  v-if ="showNoData === false">
      <b-row class="utility_container t-left m-l-0" v-if="!seen">
        <h2 class="c-254B77 t-left m-l-0 seeAfterNotSeen">See how blip can save you money</h2>
        <b-row class="zipcode_input t-left w-100p m-l-0 p-l-0">
          <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="h-52px t-left m-l-0 p-l-0">
            <!--          <b-input-group class = "input_not_seen">-->
            <!--            <b-input-group-prepend>-->
            <!--              <span class="input-group-text"><font-awesome-icon icon="search" style="color: #4F9BC1" /></span>-->
            <!--            </b-input-group-prepend>-->

            <b-form-input
                v-model="zipcode"
                class = "input_not_seen absolute-mid"
                placeholder="Enter your zipcode"
                @keyup.enter="checkZipcodeAfter()"
            ></b-form-input>

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
            <h4 class = "h-40px c-254B77">Choose your utility provider:</h4>
            <b-row class="utility_select w-100p m-l-0 p-l-0" v-if="posts && posts.length">
              <!--            Start: add-->
              <b-col xs="12" sm="12" md="4" lg="4" xl="4" class="t-left p-l-0" v-for="post of posts">
                <div class="card" >
                  <!--                <button v-if="post.userId == 1"><strong>{{post.title}}</strong></button>-->
                  <b-button
                      class="utilityProviderPic"
                      id="tooltip-target-1"
                      variant="outline-primary"
                      v-if="post.logo !== ''"
                      v-on:click="list(post); sendUtility(post); countOverallPlan(post)"
                      v-b-tooltip.hover="{title: post.utilityName}"
                  >
                    <img :src= "'http://'+post.logo" class = "utilityLogo">
                  </b-button>

                  <b-button
                      class="utilityProviderLetter"
                      variant="outline-primary"
                      v-if="post.logo === ''"
                      v-on:click="list(post); sendUtility(post); countOverallPlan(post)"
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
          <h4 class="c-254B77">Choose your rate plan:</h4>
          <b-button
              v-on:click="findMaxSaving()"
              class="iDont"
          ><p class="p4 c-4F9BC1 t-left">(I don’t know my rate plan)</p></b-button> <!--!!!!!!!!!!!!!!!!!!!Empty!!!!!!!!!!!!!!!!!!-->
          <b-row class="plan_select t-left w-100p m-l-0 p-l-0">
            <!--            <b-col xs="12" sm="12" md="12" lg="12" xl="12">-->

            <b-dropdown
                :text="selectedPlan"
                class="m-l-0 dropdown"
                block
                split
                split-variant="light"
                variant="light"
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
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item
                  href="#"
                  v-for="plan of utilityPicked.planList"
                  @click=
                      "selectedPlan = plan.planName;
                       countPlan(plan);
                       sendPlan(plan)"
                  class="dropdown-item"
              >{{plan.planName}}</b-dropdown-item>
            </b-dropdown>
            <!--            </b-col>-->
          </b-row>
          <b-row class="plan_select t-left w-100p m-l-0 p-l-0">
            <b-button
                class="submit seeSavings"
                variant="outline-primary"
                @click="savings = !savings; displaySavings(); "
            >
              See Your Savings
            </b-button>
            <!--              add: savings = !savings-->
          </b-row>
          <!--        </b-col>-->
        </b-row>
      </b-row>
    </div>

    <div v-else class="dontSupport p-l-0 t-left">
      <button @click="refresh()" class="goBack w-100p">
        <p class="p4 c-254B77 t-left m-l-0">< Go back</p>
      </button>

      <h2 class="h2 c-254B77 t-left m-l-0">We currently do not support that zip code.</h2>
      <h4 class="h4 c-254B77 t-left m-l-0">blip is expanding fast, please check back soon!</h4>
      <button class="btn btn-outline-254B77">Sign up for Updates</button>

      <h4 class="h4 c-254B77 t-left m-l-0">Not sure if blip is the right fit for you? </h4>
      <p class="weCanHelp p4 c-254B77 t-left m-l-0">We can help you figure that out. </p>

      <b-button
          @click="contactUs()"
          class="sendUsANote submit m-l-0"
      >Send us a note</b-button>
    </div>




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
      zipcode:
          // '10009',
          "",
//Start: add
      showValidZipcodeError: true,
      showNoData: false,
      posts: [],
      errors: [],
      utilityPicked: [],
      planNum: 0,
      address: 'https://170276b6ab7d.ngrok.io/v1/get_utilities_and_rates_by_zip_code/',
      localAddress: './src/assets/JSONforTesting/',
      overallPlan:[],
      selectedPlan: '',
      planClickd: true,
      capacity: 2.2,
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
        this.selectedPlan = '';
        this.loadJSON();
      }else{
        // alert('!!!');
        this.showValidZipcodeError = false;
      }
    },

    loadJSON(){
      this.address = this.address + this.zipcode
      // const address = './src/assets/JSONforTesting/'
      // this.address = address + this.zipcode + '.json'
      axios.get(this.address)
          .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data.data
            if (response.data.data.length === 0){
              this.showNoData = true
              this.sendNoData(true)
            }else{
              this.sendNoData(false)
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
      this.address = 'https://170276b6ab7d.ngrok.io/v1/get_utilities_and_rates_by_zip_code/'
          // './src/assets/JSONforTesting/'
    },

    list(utility) {
      // const utilityPlans = '{{post.utilities.' + utility + '.plans.plan_name}}'
      this.utilityPicked = utility
      this.planNum = this.utilityPicked.planList.length
      this.selectedPlan = ''
      this.sendPlan(this.selectedPlan)
      this.countPlan(this.selectedPlan)
    },

    countOverallPlan(provider){
      this.overallPlan = [];
      for ( var i=0; i<provider.planList.length; i++ ){
        this.overallPlan.push(provider.planList[i].saving)
            // ((provider.planList[i].highPrice - provider.planList[i].lowPrice)*this.capacity*365).toFixed(2))
      }
      console.log(this.overallPlan)
      this.$emit('overAllSavings', this.overallPlan)
    },

    findMaxSaving(){
      for (var i = 0; i < this.overallPlan.length; i++) {
        if (this.overallPlan[i] === Math.max(...this.overallPlan)){
          break;
        }
      }
      var plan = this.utilityPicked.planList[i]
      this.selectedPlan = plan.planName;
      this.countPlan(plan);
      this.sendPlan(plan)
    },

    sendNoData(nData){
      this.$emit('noData', nData)
    },

    sendUtility(utility){
      // console.log('hah', utility.utilities.utility_name)
      this.$emit('pickedUtility', utility)
    },

    countPlan(plan){
      // console.log(plan.highPrice)
      // const savings = (plan.highPrice - plan.lowPrice) * this.capacity * 365
      // const savings = 0.0
      //
      // for (var i = 0; i < plan.savingList.length; i++) {
      //   savings = savings + plan.savingList[i]
      // }
      // const saving = savings.toFixed(2)
      const saving = plan.saving
      this.$emit('savePerYear', saving)
      // console.log(savings, 'in Savings.vue')
    },

    sendPlan(plan){
      this.$emit('planPicked',plan)
      this.$emit('planClickd', this.planClickd)
      if (this.numOfGraphLoaded > 0) {
        this.$emit('refreshGraph')
      }
      // console.log('sendPlan', plan)
    },

    refresh(){
      this.$router.go(0)
    },

    contactUs(){
      this.$router.push({path: '/contact-us'})
    }

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


