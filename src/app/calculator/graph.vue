<template>
  <div>
    <b-container class="saving_container t-center w-100p m-r-0 p-l-0" v-if="seen">

      <b-row class="topButton t-center p-0">
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">
          <b-button
              class="buttonIn"
              v-on:click="showResiliency()"
              :disabled="dollarSign"
          >$</b-button>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">
          <b-button
              class="buttonIn"
              v-on:click="showResiliency()"
              :disabled="!dollarSign"
          ><font-awesome-icon icon="bolt"/></b-button>
        </b-col>
      </b-row>
      <b-row class="topButtonExplanation t-center p-0">
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="t-center m-l-0 m-t-0 p-0">
          <div class="explanation dollarEx">Cash Savings</div>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="t-center m-l-0 m-t-0 p-0">
          <div class="explanation boltEx">Resiliency Planning</div>
        </b-col>
      </b-row>

      <b-container v-if="dollarSign" class = "shadow t-center w-100p">
        <b-container v-if="!hasMaxSaving">
          <b-row class="notBiggest_box t-center">
            <p class="current p4 t-center c-FFFFFF">
              You won't see any savings with this utility provider.
            </p>
            <p class = "currentBottom t-center c-FFFFFF">
              All plans provided are 0 savings.
            </p>
            <b-button class="contactUtilityProvider">
              <a :href="'http://' + this.pickedUtility.website" target="_blank" class="about C-4F9BC1 w-100p p4">
                <p class = "p4 C-4F9BC1 t-center">Contact Your Provider</p>
              </a>
            </b-button>
          </b-row>
        </b-container>

        <b-container v-else>
          <b-container v-if="checkMaxSaving">
            <b-row class="withBlip_box t-center">
              <router-link :to="'/home'" class="logo w-100p">
                <img src="../../assets/blip_logo.png"/>
              </router-link>
              <!--          <h4 class="blip-area">{{pickedUtility.utilities.utility_name}}</h4>-->
              <p class="blip-area p4 t-center c-FFFFFF w-100p">Your savings with blip</p>
              <p class = "savePerYear t-center c-B0E7FF w-100p">${{savePerYear}}</p>
              <p class = "perYear t-center c-B0E7FF w-100p">per year</p>
              <router-link :to="'/about'" class="about C-4F9BC1 w-100p">
                <p class = "p4 C-4F9BC1 t-center">Learn more how you can save money with blip</p>
              </router-link>
            </b-row>

            <b-row class="congrs">
              <p class = "p3 c-254B77 t-center">
                Congratulations! With your time of use plan, you are on track to having the biggest savings.
              </p>
            </b-row>
          </b-container>

          <b-container v-else>
            <b-container v-if="checkSaving">
              <b-container v-if="zeroSaving">
                <b-row class="notBiggest_box t-center">
                  <p class="current p4 t-center c-FFFFFF">
                    You won't see any savings with this plan.
                  </p>
                  <p class = "currentBottom t-center c-FFFFFF">
                    Please check other plan.
                  </p>
                  <b-button class="contactUtilityProvider">
                    <a :href="'http://' + this.pickedUtility.website" target="_blank" class="about C-4F9BC1 w-100p p4">
                      <p class = "p4 C-4F9BC1 t-center">Contact Your Provider to Switch</p>
                    </a>
                  </b-button>
                </b-row>
              </b-container>
              <b-container v-else>
                <b-row class="notBiggest_box t-center">
                  <!--          <router-link :to="'/home'" class="logo w-100p">-->
                  <!--            <img src="../../assets/blip_logo.png"/>-->
                  <!--          </router-link>-->
                  <!--          <h4 class="blip-area">{{pickedUtility.utilities.utility_name}}</h4>-->
                  <p class="current p4 t-center c-FFFFFF">
                    You are currently not on the plan that can get you the biggest savings.
                  </p>
                  <p class = "currentBottom t-center c-FFFFFF">
                    We recommend the {{maxSavingPlan}} plan
                    <b-button @click="askWhy = true; drawChartTwo()" class="iDont">(here’s why)</b-button>.
                    <br><br>
                    ———————————————
                    <br><br>
                    It’s easy to switch! Contact your provider below!
                  </p>

                  <b-button class="contactUtilityProvider">
                    <a :href="'http://' + this.pickedUtility.website" target="_blank" class="about C-4F9BC1 w-100p p4">
                      <p class = "p4 C-4F9BC1 t-center">Contact Your Provider to Switch</p>
                    </a>
                  </b-button>
                </b-row>

                <b-row class="inBetween t-center" style="margin-bottom: 40px">
                  <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="t-right">
                    <router-link :to="'/home'" class="logoInBtw">
                      <img src="../../assets/blip_logo.png"/>
                    </router-link>
                  </b-col>
                  <b-col xs="6" sm="6" md="6" lg="6" xl="6" class="rightInBtw t-left m-tb-a">
                    <p class="p4 c-254B77">Your savings with blip:</p>
                    <h4 class="c-4F9BC1">${{savePerYear}}/year</h4>
                  </b-col>
                </b-row>
              </b-container>

            </b-container>

            <b-container v-show="!askWhy">
              <b-row class="thisIs c-4F9BC1">
                <h4>This is what you would save with the {{maxSavingPlan}} plan:</h4>
              </b-row>


              <b-row class="withBlip_box t-center">
                <!--          <h4 class="blip-area">{{pickedUtility.utilities.utility_name}}</h4>-->
                <p class="yourSaving p4 t-center c-FFFFFF w-100p">Your savings with blip</p>
                <p class = "savePerYear t-center c-B0E7FF w-100p">${{maxSaving}}</p>
                <p class = "perYear t-center c-B0E7FF w-100p">per year</p>
                <router-link :to="'/about'" class="about C-4F9BC1 w-100p">
                  <p class = "p4 C-4F9BC1 t-center">Learn more how you can save money with blip</p>
                </router-link>
              </b-row>
            </b-container>

            <!--          <b-container v-show="askWhy">-->
            <!--            <b-row class="savingsDifYears" style="margin-top: 40px">-->
            <!--              <b-col xs="12" sm="12" md="6" lg="6" xl="6" class = "left">-->
            <!--                <p class = "p3 c-254B77 t-center">Savings after 3 years</p>-->
            <!--                <h4 class = "c-4F9BC1 t-center">${{ (savePerYear * 3).toFixed(2)}}</h4>-->
            <!--              </b-col>-->

            <!--              <b-col xs="12" sm="12" md="6" lg="6" xl="6" class = "right">-->
            <!--                <p class = "p3 c-254B77 t-center">Savings after 5 years</p>-->
            <!--                <h4 class = "p3 c-4F9BC1 t-center">${{ (savePerYear * 5).toFixed(2)}}</h4>-->
            <!--              </b-col>-->
            <!--            </b-row>-->

            <!--            <b-row class="graph w-100p t-center">-->
            <!--              <b-row class="graphButton w-100p t-center p-0">-->
            <!--                <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">-->
            <!--                  <b-button-->
            <!--                      variant="outline-primary"-->
            <!--                      v-on:click="drawOverallSavings('chartTwo')"-->
            <!--                      :disabled="showOverallSavings"-->
            <!--                  >Overall Savings-->
            <!--                  </b-button>-->
            <!--                </b-col>-->
            <!--                <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">-->
            <!--                  <b-button-->
            <!--                      variant="outline-primary"-->
            <!--                      v-on:click="drawSeasonalSavings('chartTwo')"-->
            <!--                      :disabled="!showOverallSavings"-->
            <!--                  >Seasonal Savings-->
            <!--                  </b-button>-->
            <!--                </b-col>-->
            <!--              </b-row>-->

            <!--              <b-row class="graphSaving">-->
            <!--                <div v-if="planClickd" id="chartTwo" class="chart" style="width: 520px;height: 423px;"></div>-->
            <!--              </b-row>-->
            <!--            </b-row>-->
            <!--          </b-container>-->

          </b-container>
        </b-container>

        <b-container v-show="checkMaxSaving || askWhy">
          <b-row class="savingsDifYears">
            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class = "left">
              <p class = "p3 c-254B77 t-center">Savings after 3 years</p>
              <h4 class = "c-4F9BC1 t-center">${{ (savePerYear * 3).toFixed(2)}}</h4>
            </b-col>

            <b-col xs="12" sm="12" md="6" lg="6" xl="6" class = "right">
              <p class = "p3 c-254B77 t-center">Savings after 5 years</p>
              <h4 class = "p3 c-4F9BC1 t-center">${{ (savePerYear * 5).toFixed(2)}}</h4>
            </b-col>
          </b-row>

          <b-row class="graph w-100p t-center">
            <b-row class="graphButton w-100p t-center p-0">
              <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">
                <b-button
                    variant="outline-primary"
                    v-on:click="drawOverallSavings('chartOne')"
                    :disabled="showOverallSavings"
                >Overall Savings
                </b-button>
              </b-col>
              <b-col xs="12" sm="12" md="6" lg="6" xl="6" class="m-l-0 m-t-0 p-0">
                <b-button
                    variant="outline-primary"
                    v-on:click="drawSeasonalSavings('chartOne')"
                    :disabled="!showOverallSavings"
                >Seasonal Savings
                </b-button>
              </b-col>
            </b-row>

            <b-row class="graphSaving">
              <div v-if="planClickd" id="chartOne" class="chart" style="width: 520px;height: 423px;"></div>
            </b-row>
          </b-row>
        </b-container>

<!--        <b-row-->
<!--            class="outage t-center"-->
<!--            v-if="pickedUtility.outage.saifi !== 0 || pickedUtility.outage.caidi !== 0 || pickedUtility.outage.saifi5 !== 0"-->
<!--        >-->
<!--          <b-col xs="1" sm="1" md="1" lg="1" xl="1" class="bolt c-FFFFFF i-a-c">-->
<!--            <font-awesome-icon icon="bolt"/>-->
<!--          </b-col>-->
<!--          <b-col style="padding-left: 8px">-->
<!--            <div class="outageTimes c-FFFFFF t-left w-100p m-tb-a">-->
<!--              <p v-if="pickedUtility.outage.saifi !== 0" class="outageTimes c-FFFFFF t-left w-100p m-tb-a">-->
<!--                This utility has had <u>{{pickedUtility.outage.saifi}}</u> power outages in the past year, each outage lasted on average <u>{{pickedUtility.outage.caidi}}</u> minutes.-->
<!--              </p>-->
<!--              <p v-if="pickedUtility.outage.saifi5 !== 0" class="outageTimes c-FFFFFF t-left w-100p m-tb-a">-->
<!--                Over the past 5 years, this utility has had <u>{{pickedUtility.outage.saifi5}}</u> power outages-->
<!--              </p>-->
<!--            </div>-->
<!--          </b-col>-->
<!--        </b-row>-->
      </b-container>

      <b-container v-else  class = "shadow t-center w-100p">
        <b-row class="outage t-center">
<!--          <b-col xs="1" sm="1" md="1" lg="1" xl="1" class="bolt c-FFFFFF i-a-c">-->
<!--            <font-awesome-icon icon="bolt"/>-->
<!--          </b-col>-->
<!--          <b-col style="padding-left: 8px">-->
          <div class="boltSign c-FFFFFF t-center w-100p m-tb-a"><font-awesome-icon icon="bolt"/></div>
          <div class="outageTimes c-FFFFFF t-center w-100p m-tb-a">
            <!--              <p class="outageTimes c-FFFFFF t-left w-100p m-tb-a">-->
            <p class="p1">{{pickedUtility.utilityName}} Users in Your Area lost</p>
            <p class = "lostToBlackouts">{{computeHours(pickedUtility.outage.saidi)}}</p>
            <p class="p1">to blackouts this year</p>
          </div>
<!--          </b-col>-->
        </b-row>

        <b-row class="outage t-center">
          <div class="outageTimes c-FFFFFF t-center w-100p m-tb-a">
            <p class="p1">This utility has had an average of</p>
            <p class = "emf">{{pickedUtility.outage.saifi}} blackouts</p>
            <p class="p1">this year</p>
          </div>
        </b-row>

        <b-row class="outage t-center">
          <div class="outageTimes c-FFFFFF t-center w-100p m-tb-a">
            <p class="p1">Each blackout lasted</p>
            <p class = "emf">{{computeHours(pickedUtility.outage.caidi)}}</p>
            <p class="p1">on average</p>
          </div>
        </b-row>

      </b-container>

      <b-row class="signUpForUpdates w-100p t-center">
        <b-button class="submit" variant="outline-primary" ><a ref="">Sign up for Updates</a></b-button>
      </b-row>

    </b-container>
  </div>
</template>

<script>
import echarts from "echarts";
require('echarts/theme/shine');

export default {
  name: "graph",
  props:['pickedUtility','overAllSavings','planPicked','planClickd','savePerYear'],
  data: function() {
    return {
      data:'display this!',
      seen: true,
      zipcode: "",
//Start: add
      dollarSign: true,
//       seasonalSavings: null,
      askWhy: false,
      chartOne: null,
      overallSavingsButtonAbled: false,
      xAxisMark: ['Year 1', '', '', '', 'Year 5', '', '', '', '', 'Year 10'],
      xAxisMark4Overall: ['Year 1', '', '', '', 'Year 5', '', '', '', '', 'Year 10'],
      xAxisMark4Seasonal: ['','','Spring','','','Summer','','','Fall','','','Winter'],
//End: add
    };
  },
  created() {

  },
  computed: {
    isDisabled: function() {
      return !this.zipcode;
    },
    zeroSaving: function (){
      if (this.savePerYear === 0){
        this.askWhy = false;
        return true
      }else{
        return false
      }
    },
    checkMaxSaving: function(){
      var max = Math.max(...this.overAllSavings)
      var zero = 0
      // console.log(max)
      // console.log(this.savePerYear)
      if (this.savePerYear === max && max !== zero){
        return true
      }else{
        this.askWhy = false
        return false
      }
    },
    hasMaxSaving: function (){
      var max = Math.max(...this.overAllSavings)
      var zero = 0
      // console.log(max, zero)
      if (max !== zero){
        return true
      }else{
        return false
      }
    },
    checkSaving: function (){
      if (typeof(this.savePerYear) === "undefined"){
        return false
      }else{
        return true
      }
    },
    showOverallSavings: function() {
      return !this.overallSavingsButtonAbled;
    },
    savingsForChart: function(){
      var savings = []
      for (var i = 0; i < 10; i++) {
        savings[i] = (this.savePerYear * (i + 1)).toFixed(2);
      }
      return savings;
    },
    overallSavings: function(){
      var savings = []
      for (var i = 0; i < 10; i++) {
        savings[i] = (this.savePerYear * (i + 1)).toFixed(2);
      }
      return savings;
    },
    seasonalSavings: function() {
      // var seasonal = [2, 3, 4, 6, 7, 8, 9, 8, 5, 4, 3, 2]
      // for (var i = 0; i < seasonal.length; i++) {
      //   seasonal[i] = (this.savePerYear * 3 * seasonal[i]).toFixed(2);
      // }
      var seasonal = this.planPicked.savingList
      return seasonal
    },
    maxSaving: function(){
      return Intl.NumberFormat().format(Math.max(...this.overAllSavings))
    },
    maxSavingPlan: function(){
      var mark
      for (var i = 0; i < this.overAllSavings.length; i++) {
        if (this.overAllSavings[i] === Math.max(...this.overAllSavings)){
          mark = i;
          break;
        }
      }
      return this.pickedUtility.planList[mark].planName
    }
  },

  mounted() {
    this.$nextTick(function() {
      this.drawChartOne(this.overallSavings);
      // this.drawChartOne(this.overallSavings, 'chartTwo')
    })
  },

  // watch:{
  //   pageNo:{
  //     immediate:true,
  //     handler:function(){
  //       console.log('hello world')
  //     }
  //   }
  // },

  methods: {

//Start: add
    showResiliency(){
      // console.log(this.pickedUtility.utilityName)
      this.dollarSign = !this.dollarSign
      this.reDrawChart()
    },

    computeHours(mins){
      if(mins < 60){
        if (mins > 5){
          mins = Math.round(mins)
        }
        let output = String(mins) + ' mins'
        return output
      }else{
        let hours = Math.floor(mins / 60)
        let restMins = Math.round(mins - hours * 60)
        let output = String(hours) + ' hrs ' + String(restMins) + ' mins'
        return output
      }
    },

    drawChartOne(dataHere){
      // console.log('graph', this.planPicked)
      // console.log('graph: ', dataHere)
      // console.log('array', this.savingsForChart);
      // console.log('getElement',document.getElementById(id))
      // this.charts.clear();
      console.log('ask', this.askWhy)
      console.log('checkMax', this.checkMaxSaving)
      this.charts = echarts.init(document.getElementById('chartOne'))
      // this.charts.setOption({
      this.charts.setOption({
        color: ['#B0E7FF'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          },

          formatter: "Saving: <br/> ${c}"
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.xAxisMark,
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0,
              rotate: 45, //If the label names are too long you can manage this by rotating the label.
              textStyle:{color: '#254B77'}
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '${value}',
              textStyle:{color: '#254B77'}
            },
          }
        ],
        series: [
          {
            name: 'Saving',
            type: 'bar',
            barWidth: '60%',
            data: dataHere
            // this.savingsForChart
          }
        ]
      }, {notMerge: true})
    },
    drawSeasonalSavings(){
      // this.overallSavings = this.savingsForChart

      // this.savingsForChart = []
      // console.log('here; ',this.overallSavings)
      // var seasonal = [2, 3, 4, 6, 7, 8, 9, 8, 5, 4, 3, 2]
      // for (var i = 0; i < seasonal.length; i++) {
      //   this.savingsForChart[i] = (this.savePerYear * 3 * seasonal[i]).toFixed(2);
      // }
      console.log('here; ',this.seasonalSavings)
      this.xAxisMark = this.xAxisMark4Seasonal
      this.drawChartOne(this.seasonalSavings)
          // this.savingsForChart)
      // this.savingsForChart = []
      this.overallSavingsButtonAbled = true
    },
    drawOverallSavings(){
      // this.savingsForChart = []
      // this.savingsForChart = this.overallSavings
      // console.log(this.savingsForChart)
      this.xAxisMark = this.xAxisMark4Overall
      this.drawChartOne(this.overallSavings)
      this.overallSavingsButtonAbled = false
      // this.askWhy = false
    },
    reDrawChart(){
      // console.log('reDraw: ', this.savePerYear)
      this.$nextTick(function () {
        // console.log('reDraw: ', this.savePerYear)
        if (this.overallSavingsButtonAbled === false){
          this.drawChartOne(this.overallSavings)
        }else{
          this.drawSeasonalSavings()
        }
      })
    },
    drawChartTwo(){
      console.log('gotHere')
      this.drawOverallSavings()
      // this.drawChartOne(this.overallSavings)
    }
//End: add
  },
  components: {
    echarts
  }
};
</script>

<style lang="scss" scoped>
@import "src/scss/pages/_calculator.scss";
</style>