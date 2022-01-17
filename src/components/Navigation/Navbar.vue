<template>
  <header>
    <div class="navbar">
      <nav>
        <div>
          <router-link :to="{ name: 'Home' }">
            <img class="logo" src="../../assets/R.jpg" />
            <!-- Rayne Desserts -->
          </router-link>
        </div>
        <div class="links">
          <router-link :to="{ name: 'Menu' }"> Menu </router-link>
          <router-link :to="{ name: 'Flavors' }"> Flavors </router-link>
          <router-link :to="{ name: 'Weddings' }"> Weddings </router-link>
          <router-link :to="{ name: 'Gallery' }"> Gallery </router-link>
          <router-link :to="{ name: 'Reviews' }"> Reviews </router-link>
          <router-link :to="{ name: 'Contact' }"> Contact </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  font-family: "Nunito Sans", sans-serif;
  width: 75vw;
  background: #c8afd3;
  padding: 10px;
  margin: 40px auto;
  margin-bottom: 60px;
  border-radius: 10px;
  top: 0px;
}
nav {
  display: flex;
  align-items: center;
  border: #a575ba 2px dashed;
  max-width: 1250px;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
nav .logo {
  display: block;
  max-height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  margin-top: -6px;
  margin-left: 20px;
  z-index: 1;
  top: 30px;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin: auto;
}
nav .links a {
  margin-left: 24px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  padding: 22px 20px;
}
.links a:hover,
.links a:active,
.links a.router-link-active {
  color: #a575ba;
}
</style>
