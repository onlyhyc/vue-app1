<template lang="html">
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- 新建pizza -->
      <add-pizza></add-pizza>
    </div>
    <!-- 品种展示 -->
    <div class="col-sm-12 col-md-4">
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenu">
          <tr>
            <td>{{item.name}}</td>
            <td><button class="btn btn-outline-danger btn-sm" @click='deletePizza(item)'>&times;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import newPizza from './NewPizza.vue'
export default {
  data() {
    return {
      // getMenu: []
    }
  },
  components: {
    'add-pizza': newPizza
  },
  computed: {
    getMenu: {
      // 在vuex中获取数据
      get() {
        // return this.$store.state.menuItems
        // 通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      set() {

      }
    }
  },
  methods: {
    deletePizza(item) {
      axios.delete('https://glgkkyip.api.lncld.net/1.1/classes/appmenu/' + item.objectId, {
        headers: {
          'X-LC-Id': 'glgkkyipyC9rILlMgDATQp7J-gzGzoHsz',
          'X-LC-Key': 'YqKSkQAQI6p8b4oxdhmiHqP5',
          'Content-Type': 'application/json'
        }
      }).then(res => {
        // console.log(res);
        // this.$router.push('/menu')
        this.$store.commit('removeMenuItems', item)
      }).catch(e => {
        console.log(e);
      })
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
      this.$store.commit('setMenuItems', data)
      // this.getMenu = data;
    })
  }
}
</script>

<style lang="css">
</style>
