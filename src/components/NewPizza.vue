<template lang="html">
  <form action="">
    <h3 class="text-muted my-5">添加新的Pizza</h3>
    <div class="form-group row">
      <label class="col-sm-1">品种</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
        <textarea name="name" rows="5" v-model="newPizza.description" class="form-control"></textarea>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size1">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price1">
      </div>
    </div>
    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-1">尺寸</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.size2">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
        <input type="text" class="form-control" v-model="newPizza.price2">
      </div>
    </div>
    <div class="form-group row">
      <button class="btn btn-success btn-block" type="button" @click='addToMenu'>添加</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      newPizza: {}
    }
  },
  methods: {
    addToMenu() {
      let pizza = {
        name: this.newPizza.name,
        description: this.newPizza.description,
        options: [{
            size: this.newPizza.size1,
            price: this.newPizza.price1
          },
          {
            size: this.newPizza.size2,
            price: this.newPizza.price2
          }
        ]
      }
      axios.post('https://glgkkyip.api.lncld.net/1.1/classes/appmenu', pizza, {
        headers: {
          'X-LC-Id': 'glgkkyipyC9rILlMgDATQp7J-gzGzoHsz',
          'X-LC-Key': 'YqKSkQAQI6p8b4oxdhmiHqP5',
          'Content-Type': 'application/json'
        }
      }).then(res =>
        // this.$router.push('/menu')
        // console.log(res);
        // 数据同步
        this.$store.commit('pushToMenuItem', res)
      ).catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<style lang="css">
</style>
