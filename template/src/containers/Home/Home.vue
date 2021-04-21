<template>

  <div id="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "../../components/HelloWorld"
import {getHomeInfo} from "../../services/default"
  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    created() {
      // getHomeInfo()
      //   .then(data => {
      //     console.log(data)
      //   })
      //   .catch().
      //   finally()
    },
    mounted() {
      //this.$auth.services.fetchUserInfo();
      //console.log(this.$auth)
    }
  }
</script>
