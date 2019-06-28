<template>
    <section class="login container">
        <div class="card border-primary mb-3" style="max-width: 20rem;">
            <b-form @submit.prevent="login" class="m-3">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email Address</label>
                    <input type="email" v-model="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="password" v-model="password" class="form-control" aria-describedby="emailHelp" placeholder="Password">
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </b-form>
        </div>
  </section>
</template>

<script>
 export default {
    layout: 'empty',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        if(this.email && this.password) {
            console.log(this.email)
            this.$store.dispatch('users/userSignIn', {
                email: this.email,
                password: this.password
            }).then(() => {
                console.log('mandou pro store/user')
            })
        } else {
            console.log('errou')
          }
      }
    }
  }
</script>

<style>
.login {
    max-width: 400px;
    margin-top: 60px;
}
.login h2 {
    font-size: 2.4em;
}
.login .field {
    margin-top: 10px;
}
.fluid-form {
    padding: 10px;
}
</style>
