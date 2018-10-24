<template lang="html">
  <div class="row mt-3">
    <div class="col-lg-12 col-md-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/logo.jpg" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input type="email" class='form-control' v-model="email">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input type="password" class='form-control' v-model="password">
            </div>
            <div class="form-group">
              <label for="confirm">确认密码</label>
              <input type="password" class='form-control' v-model="confirm">
            </div>
            <button class="btn btn-success btn-block" type="submit
            ">确认注册</button>
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
      password: '',
      confirm: ''
    }
  },
  methods: {
    onSubmit() {
      if (this.password === this.confirm) {
        const data = {
          email: this.email,
          password: this.password,
          confirm: this.confirm
        }
        $axios.post('', data).then(res => {
          this.$router.push('/login')
        }).catch(e => {
          console.log(e);
        })
      } else {
        alert('两次密码不一致！')
      }
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
