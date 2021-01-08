<template >
  <div id="app">
    <router-view></router-view>
  
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      
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
