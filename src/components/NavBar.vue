<template>
    <nav id="routers">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="about">About</router-link>
  </nav>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
#routers{
  display: flex;
  margin: auto;
  justify-content: space-between;
  width: 40%;
}

#routers a{
  text-decoration: none;
  color: #eef;
  background: rgb(15,15,15);
  padding: 10px;
}

</style>