<template>
  <div>
    <banner></banner>
    <b-container>
        <b-row class = "container portal" style="padding-top: 0px; margin-top: 0px">

<!--          <b-row class="seeHow row w-100p">-->
<!--            <b-col xs="12" sm="12" md="6" lg="6" xl="6">-->
<!--              <h1 class="h1 c-000000 t-left f-Avenir see">See how blip can save you money</h1>-->
<!--            </b-col>-->
<!--          </b-row>-->
<!--          v-if="noData === false"-->
           <b-col  xs="12" sm="12" md="5" lg="5" xl="5" class = "saving_enter">
             <b-row class = "row" >
               <div class = "t-left m-l-0">
<!--                 <h1 class="see h1 c-000000 t-left f-Avenir">See how blip can save you money</h1>-->
                 <savings
                     @display-savings="displaySavings"
                     v-on:noData="getNoData"
                     v-on:pickedUtility="getUtility"
                     v-on:planPicked="getPlan"
                     v-on:overAllSavings="getOverAllSavings"
                     v-on:planClickd="getPlanClicked"
                     v-on:savePerYear="getSaving"
                     @refreshGraph = "refreshGraph"
                 ></savings>
               </div>
             </b-row>
           </b-col>

<!--          <b-col v-if="noData === true" xs="12" sm="12" md="5" lg="5" xl="5" class = "saving_enter">-->
<!--            hhhhhhh-->
<!--          </b-col>-->

          <b-col xs="12" sm="12" md="7" lg="7" xl="7" class = "graph_enter">
            <img class="blip-pig" src="../../assets/Savings Calculator Graphic/Main Graphic/blip-savings-calculator-graphic-F-taller.png" v-if='savings'>
<!--            <h3 v-if='!savings'>Savings will be displayed here</h3>-->
            <div v-if='!savings'>
              <graph
                  :pickedUtility = "pickedUtility"
                  :planPicked = "planPicked"
                  :planClickd = "planClickd"
                  :save-per-year="savePerYear"
                  :overAllSavings="overAllSavings"
                  ref = "graphContainer"
              ></graph>
            </div>
          </b-col>
        </b-row>
    </b-container>                   

  </div>
</template>

<script>
import banner from "../shared/components/banner.vue";
import savings from "../savings.vue";
import graph from "./graph.vue";
import utility from "./utility.vue"

export default {
  name: "calculator",
  data() {
    return {
      savings: true,
      noData: false,
      pickedUtility: [],
      overAllSavings: [],
      planPicked: [],
      planClickd: false,
      savePerYear: 0,
      numOfGraphLoaded: 0
    };
  },
  mounted() {
  },

  methods: {
    displaySavings(value) {
      console.log('waht', value);
      this.savings = false;
      // console.log('plan',this.planPicked)
    },
//add start
    getNoData(nData){
      this.noData = nData
      console.log('NNNNNNNNNNNNNdata',this.noData)
      this.savings = true
    },
    getUtility(utility){
      this.pickedUtility = utility
      // console.log('hhhhhhhh',this.pickedUtility)
    },
    getOverAllSavings(allSavings){
      this.overAllSavings = allSavings
      // console.log('here',this.overAllSavings)
    },
    getPlan(plan){
      this.planPicked = plan
      // console.log('hhhhhhhh',this.pickedUtility)
    },
    getPlanClicked(planClicked){
      this.planClickd = planClicked
    },
    getSaving(saving){
      this.savePerYear = saving
      console.log('saving in father', this.savePerYear)
      // console.log(this.numOfGraphLoaded)
      // this.numOfGraphLoaded = this.numOfGraphLoaded + 1
    },
    refreshGraph(){
      // if (this.numOfGraphLoaded > 0){
      //   console.log("ha")
      this.$refs.graphContainer.reDrawChart();
      // }
    }
//add end
  },
  components: {
    banner,
    savings,
    graph
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_calculator.scss";
</style>


