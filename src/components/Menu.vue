<template lang="html">
  <div class="row">
    <!-- 菜单 -->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td><button class="btn btn-sm btn-outline-success" @click='addToList(item,option)'>+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-md-4 col-sm-12">
      <div v-if="basket.length>0">
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody v-for="item in basket">
            <tr>
              <td>
                <button class="btn btn-sm" @click='countMinus(item)'>-</button>
                <span>{{item.count}}</span>
                <button class="btn btn-sm" @click='countPlus(item)'>+</button>
                <td>{{item.name}}{{item.size}}</td>
                <td>{{item.price * item.count}}</td>
              </td>
            </tr>
          </tbody>
        </table>
        <p>总价: {{total + 'RMB'}}</p>
        <button class="btn btn-success btn-block">提交</button>
      </div>
      <div v-else>
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      basket: [],
      message: '购物车内没有任何商品！',
      // getMenuItems: {}
    }
  },
  created() {
    axios.get('https://glgkkyip.api.lncld.net/1.1/classes/appmenu', {
      headers: {
        'X-LC-Id': 'glgkkyipyC9rILlMgDATQp7J-gzGzoHsz',
        'X-LC-Key': 'YqKSkQAQI6p8b4oxdhmiHqP5',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res.data.results;
    }).then(data => {
      // this.getMenuItems = data;
      //将请求下来的数据存储到store
      this.$store.commit('setMenuItems', data)
    })
  },
  computed: {
    getMenuItems() {
      //在vuex中获取数据
      return this.$store.getters.getMenuItems
    },
    total() {
      let totalPrice = 0;
      for (let key in this.basket) {
        totalPrice += this.basket[key].price * this.basket[key].count
      }
      return totalPrice;
    }
  },
  methods: {
    addToList(item, option) {
      let temp = {
        name: item.name,
        size: option.size,
        price: option.price,
        count: 1
      }
      if (this.basket.length >= 1) {
        let arr = this.basket.filter(data => {
          return data.name === item.name && data.price === option.price
        })
        if (arr.length > 0 && arr != null) {
          arr[0].count++;
        } else {
          this.basket.push(temp)
        }
      } else {
        this.basket.push(temp)
      }

    },
    countPlus(item) {
      item.count++;
    },
    countMinus(item) {
      item.count--;
      if (item.count < 1) {
        this.removeList(item)
      }
    },
    removeList(item) {
      this.basket.splice(this.basket.indexOf(item), 1)
    }
  },
  // beforeRouteEnter: (to, from, next) => {
  //   next(vm => {
  //     alert(`hello ${vm.name}`);
  //   })
  // },
  // beforeRouteLeave: (to, from, next) => {
  //   if (confirm('确定离开吗？') == true) {
  //     next()
  //   } else {
  //     next(false)
  //   }
  // }
}
</script>

<style lang="css">
</style>
