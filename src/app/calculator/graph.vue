<template>
  <div>
    <b-container class="zipcode_container" v-if="seen">
      <b-row>
        <b-col xs="12" sm="12" md="12" lg="12" xl="12">
<!--          <h4 class="blip-area">{{pickedUtility.utilities.utility_name}}</h4>-->
          <h4 class="blip-area">Your savings with blip: </h4>
          <h4 class = "perYear fourF9BC1">${{savePerYear}}/year</h4>
          <router-link :to="'/'">
            <img src="../../assets/blip_logo.png"/>
          </router-link>
          <p class = "p3 zeroB45DC t-center">Learn more how you can save money with blip <br> > </p>

          <p class = "p3 zero00000 t-center">
            Congratulations! With your time of use plan, you are on track to having the biggest savings.
          </p>

          <b-row class="zipcode_input">
            <b-col xs="12" sm="12" md="4" lg="4" xl="4">
              <p class = "p3 zero00000 t-center">Savings after 1 year</p>
              <p class = "p3 fourF9BC1 t-center">${{ (savePerYear * 3).toFixed(2)}}</p>
            </b-col>

            <b-col xs="12" sm="12" md="4" lg="4" xl="4">
              <p class = "p3 zero00000 t-center">Savings after 10 year</p>
              <p class = "p3 fourF9BC1 t-center">${{ (savePerYear * 30).toFixed(2)}}</p>
            </b-col>
          </b-row>


          <b-row class="zipcode_input">
            <b-col xs="12" sm="12" md="4" lg="4" xl="4">
              <b-button
                  variant="outline-primary"
                  v-on:click="drawOverallSavings()"
                  :disabled="showOverallSavings"
              >Overall Savings
              </b-button>
            </b-col>
            <b-col xs="12" sm="12" md="4" lg="4" xl="4">
              <b-button
                  variant="outline-primary"
                  v-on:click="drawSeasonalSavings()"
                  :disabled="!showOverallSavings"
              >Seasonal Savings
              </b-button>
            </b-col>
          </b-row>

          <b-row class="zipcode_input">
            <div v-if="planClickd" id="chartOne" class="chart" style="width: 520px;height: 423px;"></div>
          </b-row>

          <b-row class="zipcode_input">
            <button variant="outline-primary"><a ref="">Sign up for Updates</a></button>
          </b-row>




          <!--<b-row class="zipcode_input">-->
          <!--  <b-col xs="12" sm="12" md="8" lg="8" xl="8">-->
          <!--    <b-form-input type="number" v-model.number="zipcode" placeholder="Enter your zipcode"></b-form-input>-->
          <!--  </b-col>-->
          <!--  <b-col xs="12" sm="12" md="4" lg="4" xl="4">-->
          <!--    <b-button-->
          <!--        variant="outline-primary"-->
          <!--        v-on:click="seen = !seen; loadJSON()"-->
          <!--        :disabled="isDisabled"-->
          <!--    >Search</b-button>-->
          <!--  </b-col>-->
          <!--</b-row>-->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import echarts from "echarts";
require('echarts/theme/shine');

export default {
  name: "graph",
  props:['pickedUtility','planPicked','planClickd','savePerYear'],
  data: function() {
    return {
      data:'display this!',
      seen: true,
      zipcode: "",
//Start: add
      overallSavings: null,
      seasonalSavings: null,
      chartOne: null,
      overallSavingsButtonAbled: false,
      xAxisMark: ['Year 1', '', '', '', 'Year 5', '', '', '', '', 'Year 10'],
      xAxisMark4Overall: ['Year 1', '', '', '', 'Year 5', '', '', '', '', 'Year 10'],
      xAxisMark4Seasonal: ['Spring','','','Summer','','','Fall','','','Winter','',''],
//End: add
    };
  },
  created() {

  },
  computed: {
    isDisabled: function() {
      return !this.zipcode;
    },
    showOverallSavings: function() {
      return !this.overallSavingsButtonAbled;
    },
    savingsForChart: function(){
      var savings = []
      for (var i = 0; i < 10; i++) {
        savings[i] = (this.savePerYear * 3 * (i + 1)).toFixed(2);
      }
      return savings;
    }
  },

  mounted() {
    this.$nextTick(function() {
      this.drawChartOne('chartOne')
    })
  },

  methods: {
    entered_zipcode(zipcode) {
      console.log(zipcode);
    },

    displaySavings() {
      const data = this.data;
      this.$emit('display-savings', data)
      console.log('data', data);
    },

//Start: add
    drawChartOne(id){
      // console.log('array', this.savingsForChart);
      this.charts = echarts.init(document.getElementById(id))
      // this.charts.setOption({
      this.charts.setOption({
        color: ['#4F9BC1'],
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
              rotate: 45 //If the label names are too long you can manage this by rotating the label.
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '${value}'
            },
          }
        ],
        series: [
          {
            name: 'Saving',
            type: 'bar',
            barWidth: '60%',
            data: this.savingsForChart
          }
        ]
      })

    },
    drawSeasonalSavings(){
      this.overallSavings = this.savingsForChart
      var seasonal = [2, 3, 4, 6, 7, 8, 9, 8, 5, 4, 3, 2]
      for (var i = 0; i < seasonal.length; i++) {
        this.savingsForChart[i] = (this.savePerYear * 3 * seasonal[i]).toFixed(2);
      }
      this.xAxisMark = this.xAxisMark4Seasonal
      this.drawChartOne('chartOne')
      this.overallSavingsButtonAbled = true
    },
    drawOverallSavings(){
      this.savingsForChart = this.overallSavings
      this.xAxisMark = this.xAxisMark4Overall
      this.drawChartOne('chartOne')
      this.overallSavingsButtonAbled = false
    }
//End: add
  },
  components: {
    echarts
  }
};
</script>