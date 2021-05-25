<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Početna</router-link> |
      <router-link to="/projects">Projekti</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


#nav {
  padding: 30px;
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  margin: 0;
  min-height: 100vh;
  overflow-y: scroll;
}
#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;;
  // a {
  //   text-decoration: none;
  //   color: #2c3e50;
  //   transition: all 0.2s;
  //   &:hover {
  //     color: #42b983;
  //   }
  // }
}
</style>
