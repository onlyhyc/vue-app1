<template lang="html">
  <div class="row mt-3">
    <div class="col-lg-12 col-md-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/logo.jpg" alt="" class="mx-auto d-block">
          <form @submit.prevent="onLogin">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class='form-control' v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class='form-control' v-model="password">
            </div>
            <br>
            <button class="btn btn-success btn-block" type="submit
            ">确认登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $axios from '../axios'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  //组件内的路由守卫
  beforeRouteEnter: (to, from, next) => {
    // this.$store.dispatch("setUser",null)
    next(vm => vm.$store.dispatch("setUser", null))
  },
  methods: {
    onLogin() {
      $axios.get().then(res => {
        let temp = res.data.results;
        let users = [];
        for (let i in temp) {
          // console.log(temp[i]);
          let user = temp[i]
          users.push(user);
        }
        // console.log(typeof users);
        let result = users.filter((user) => {
          return user.email === this.email && user.password === this.password
        })

        if (result != null && result.length > 0) {
          this.$store.dispatch("setUser", result[0].email)
          this.$router.push('/home')
        } else {
          alert('您输入的账号或者密码有误！')
          this.$store.dispatch("setUser", null)
        }
      })
    }
  }
}
</script>

<style>
img {
  width: 1070px;
  height: 510px;
}
</style>
