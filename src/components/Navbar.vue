<template>
  <div class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name: 'Home' }">
          <img src="../assets/R.jpg" />
          <!-- Rayne Desserts -->
        </router-link>
      </h1>
      <div class="links">
        <router-link :to="{ name: 'Home' }"> Menu </router-link>
        <router-link :to="{ name: 'Flavors' }"> Flavors </router-link>
        <router-link :to="{ name: 'Weddings' }"> Weddings </router-link>
        <router-link :to="{ name: 'Gallery' }"> Gallery </router-link>
        <router-link :to="{ name: 'Reviews' }"> Reviews </router-link>
        <router-link :to="{ name: 'Contact' }"> Contact </router-link>
        <!-- <span>Hi there, {{ user.displayName }} </span>
          <button @click="onLogout">Logout</button> -->
        <!-- <div v-if="!user">
          <router-link class="btn" :to="{ name: 'Signup' }"
            >Sign Up</router-link
          >
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div> -->
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: #C8AFD3;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav img {
  max-height: 60px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
  color: black;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
span{
  text-transform: capitalize;
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
}
</style>
