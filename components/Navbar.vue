<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Auth Hero</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Sign In</b-nav-item>
        <b-nav-item><n-link to="/auth/login">Login</n-link></b-nav-item>
        <b-button size="sm" class="my-2 my-sm-0" @click="logout">Logout</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { auth } from '~/plugins/firebase.js'

export default {
    data() {
      return {
        name: 'Navbar'
      }
    }, 
    methods: {
      logout() {
        firebase.auth().signOut().then(function() {
          this.app.router.push('/')
        }).catch(function(error) {
          console.log(error)
        });
      }
    }
}
</script>

