<template lang="html">
  <div class="row">
    <div class="col-sm-12 text-center" id='home'>
      <div class="background">
        <h1>欢迎大家品尝PIZZA!</h1>
        <h2>Welcome to this website!</h2>
        <button @click='goToMenu' class="btn btn-success">Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios'
export default {
  data() {
    return {

    }
  },
  methods: {
    goToMenu() {
      this.$router.push('/menu')
    },
    // post() {
    //   axios.post('https://glgkkyip.api.lncld.net/1.1/classes/myapp', {
    //     data: this.person
    //   }, {
    //     headers: {
    //       'X-LC-Id': 'glgkkyipyC9rILlMgDATQp7J-gzGzoHsz',
    //       'X-LC-Key': 'YqKSkQAQI6p8b4oxdhmiHqP5',
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => {
    //     console.log(res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // }
    // get() {
    //   axios.get('https://glgkkyip.api.lncld.net/1.1/classes/myapp', {
    //     headers: {
    //       'X-LC-Id': 'glgkkyipyC9rILlMgDATQp7J-gzGzoHsz',
    //       'X-LC-Key': 'YqKSkQAQI6p8b4oxdhmiHqP5',
    //       'Content-Type': 'application/json'
    //     }
    //   }).then(res => {
    //     console.log(res.data.results[0].data);
    //   })
    // }
    // postTwo() {
    //   axios.post('', {
    //     data: this.person
    //   }).then(res => {
    //     console.log(res);
    //   })
    // }
  }
}
</script>

<style scoped>
#home {
  background: url('../assets/timg.jpg');
  height: 85vh;
  padding: 10%;
}

h1,
h2 {
  margin: 6%;
}

.background {
  max-width: 75vm;
  background: #eee;
  margin: 0 auto;
  opacity: 0.8;
  padding: 20px 0;
}
</style>
