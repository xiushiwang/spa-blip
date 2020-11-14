<template>
  <div>
    <b-container class="zipcode_container" v-if="seen">
      <b-row>
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h4 class="blip-area">How do rates in your area compare to your possible blip savings?</h4>

          <b-row class="zipcode_input">
            <b-col xs="12" sm="12" md="8" lg="8" xl="8">
              <b-form-input type="number" v-model="zipcode" placeholder="Enter your zipcode"></b-form-input>
<!--              <p>{{zipcode.length}}</p>-->
              <p v-show="!showValidZipcodeError" class="p4 FF0000 t-center" id="validZipcodeError">Please enter a valid zip code.</p>
            </b-col>
            <b-col xs="12" sm="12" md="4" lg="4" xl="4">
              <b-button
                variant="outline-primary"
                v-on:click="checkZipcode()"
                :disabled="isDisabled"
              >Search</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="utility_container" v-if="!seen">
      <b-row class="zipcode_input">
        <b-col xs="12" sm="12" md="8" lg="8" xl="8">
          <b-form-input v-model="zipcode" placeholder="Enter your zipcode"></b-form-input>
          <p v-show="!showValidZipcodeError" class="p4 FF0000 t-center" id="validZipcodeError">Please enter a valid zip code.</p>
        </b-col>
        <b-col xs="12" sm="12" md="3" lg="3" xl="3">
          <b-button variant="outline-primary" v-on:click="checkZipcodeAfter()">Search</b-button>
        </b-col>
      </b-row>
      <b-row class=utility_provider>
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h3>Your utility provider:</h3>
          <b-row class="utility_select">
<!--            Start: add-->
            <b-col xs="12" sm="12" md="6" lg="6" xl="4" v-if="posts && posts.length">
              <div class="card" v-for="post of posts">
<!--                <button v-if="post.userId == 1"><strong>{{post.title}}</strong></button>-->
                <b-button
                    variant="outline-primary"
                    v-if="post.logo !== ''"
                    v-on:click="list(post); sendUtility(post)"
                >
                  <img :src= "'http://'+post.logo" class = "utilityLogo">
                </b-button>

                <b-button
                    variant="outline-primary"
                    v-if="post.logo == ''"
                    v-on:click="list(post); sendUtility(post)"
                >
                  {{post.utilityName}}
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
      <b-row class="rate_plan">
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">
          <h3>Choose your Rate Plan</h3>
          <a href="" class = "p4 zeroB46DC t-left">(I don’t know my rate plan)</a>
          <b-row class="plan_select">
            <b-col xs="12" sm="12" md="12" lg="12" xl="12">

              <b-dropdown
                  split
                  split-variant="outline-primary"
                  variant="primary"
                  :text="selectedPlan"
                  class="m-2"
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
                        sendPlan(plan);
                        countPlan(plan)"
                >{{plan.planName}}</b-dropdown-item>
              </b-dropdown>

<!--              <b-dropdown-->
<!--                split-->
<!--                split-variant="outline-primary"-->
<!--                variant="primary"-->
<!--                text="Choose your Plan"-->
<!--                class="m-2"-->
<!--              >-->
<!--                <b-dropdown-item href="#">Time of Use</b-dropdown-item>-->
<!--                <b-dropdown-item href="#">Plan 1</b-dropdown-item>-->
<!--                <b-dropdown-item href="#">Plan2</b-dropdown-item> &lt;!&ndash;REMEMBER TO MAKE THIS DYNAMIC&ndash;&gt;-->
<!--              </b-dropdown>-->
            </b-col>
          </b-row>
          <b-row class="plan_select">
            <b-col xs="12" sm="12" md="12" lg="12" xl="12">
               <b-button
                variant="outline-primary"
                @click="savings = !savings; displaySavings(); "
              >Search</b-button>
<!--              add: savings = !savings-->
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'; //add

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
      planClickd: true
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

    sendPlan(plan){
      this.$emit('planPicked',plan)
      this.$emit('planClickd', this.planClickd)
      // console.log('sendPlan', plan)
    },

    countPlan(plan){
      // console.log(plan.highPrice)
      const savings = (plan.highPrice - plan.lowPrice) * 900
      const saving = savings.toFixed(2)

      this.$emit('savePerYear', saving)
      console.log(savings, 'in Savings.vue')
    }

//End: add
  },
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

.utility_select{
  h3 {
    margin: 2em 0 0 0;
  }
}

.rate_plan, .utility_provider {
  h3{
    margin: 2em 0 0 0;
  }
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


