<template>
<div id="app">
  <div class="container">
    <appHeader></appHeader>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
  <br>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <router-view name='reuseGuide'></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name='reuseDElivery'></router-view>
      </div>
      <div class="col-sm-12 col-md-4">
        <router-view name='reuseHistory'></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>

</style>
