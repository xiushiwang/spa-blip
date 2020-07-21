<template >
  <div id="app">
    <router-view></router-view>
    <!-- <div v-if="travel=='Tokyo'">
      <h2>
        <br />Travelling to Tokyo ...Here is what you need to know
        <br />
        <br />
      </h2>
      <b-list-group style="opacity:.8" id="card">
        <b-list-group-item class="text-center">
          <SafetyRating :country="country" />
        </b-list-group-item>
        <b-list-group-item class="text-center">
          <KeyPhrases v-bind:phrases="phrases" />
        </b-list-group-item>
        <b-list-group-item title="Emergency Numbers" id="card">
          <h1 align="left">
            <b>Emergency</b> Numbers
          </h1>
          <h3>911</h3>
        </b-list-group-item>
        <b-list-group-item title="Tap Water">
          <h1 align="left">
            <b>Tap Water</b>
          </h1>
          <h3>Safe</h3>
        </b-list-group-item>
        <b-list-group-item title="Languages">
          <h1 align="left">
            <b>Languages</b>
          </h1>
          <h3>Japanese</h3>
        </b-list-group-item>
        <b-list-group-item title="Outlets">
          <h1 align="left">
            <b>Outlets</b>
          </h1>
          <h3>Type A or B</h3>
        </b-list-group-item>
        <b-list-group-item>
          <Vaccinations v-bind:vaccination="vaccination" />
        </b-list-group-item>
        <b-list-group-item title="Pag List">
          <h1 align="left">
            <b>Packing List</b>
          </h1>
          <h3>Toothbrush</h3>
        </b-list-group-item>
        <b-list-group-item title="Local Healthcare Expert Tips" class="text-center">
          <h1 align="left">
            <b>Local Healthcare Expert Tips</b>
          </h1>
          <h3>Try some sushi!</h3>
        </b-list-group-item>
        <b-list-group-item class="text-center">
          <DrugSearch v-bind:drugs="drugs" />
        </b-list-group-item>
      </b-list-group>
    </div>-->
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      vaccination: [
        { id: 1, vacc: "Hepatitis A" },
        { id: 2, vacc: "Hepatitis B" },
        { id: 3, vacc: "Japanese encephalitis" },
        { id: 4, vacc: "Rabies" },
        { id: 5, vacc: "Polio" },
        { id: 6, vacc: "Measels" },
        { id: 7, vacc: "Shingles" } // "hepatitis B", "typhoid", "Japanese encephalitis", "rabies", "meningitis", "polio", "measles", "mumps and rubella (MMR)", "Tdap (tetanus, diphtheria and pertussis)", "chickenpox", "shingles", "pneumonia" ,"influenza"]
      ],
      drugs: [
        {
          id: 1,
          drug: "advil",
          Generic_Name: "ibuprofen",
          Strength: "200 mg",
          Availability: "Rx and/or OTC",
          Drug_Class: "Nonsteroidal anti-inflammatory drugs",
          Alternate: "イブ (Eve): ibuprofen tablets"
        },
        { id: 2, vacc: "hepatitis B" },
        { id: 3, vacc: "Japanese encephalitis" },
        { id: 4, vacc: "rabies" },
        { id: 5, vacc: "polio" },
        { id: 6, vacc: "measels" },
        { id: 7, vacc: "shingles" }
      ],
      phrases: [
        { id: 1, eng_phrase: "Hello", trans_phrase: "Konnichiwa" },
        { id: 2, eng_phrase: "Goodbye", trans_phrase: "Sayonara" },
        { id: 3, eng_phrase: "Yes", trans_phrase: "Hai" },
        { id: 4, eng_phrase: "No", trans_phrase: "Lie" },
        { id: 5, eng_phrase: "Please", trans_phrase: "Onegaishimasu" },
        { id: 6, eng_phrase: "Thank You", trans_phrase: "Domo Arigato" }
      ],
      country: "Japan",
      travel: ""
    };
  },
  components: {
  }
};
</script>

<style >
html, body, #app, #app>div {
  height: 100%;
  background-color: #F8F8F8;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
   padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}

</style>
