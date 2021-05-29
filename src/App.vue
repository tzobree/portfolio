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
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  background: rgba(13, 21, 34, 0.884);

  a {
    font-weight: 500;
    // color: #2c3e50;
    color: rgba(248, 248, 248, 0.767);
    transition: all 0.2s;
    &:hover {
      color: rgba(255, 255, 255, 0.897);
    }
    margin: 0 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: rgb(255, 255, 255);
      // color: #42b983;
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


@mixin max-w($maxW){
  @media only screen and (max-width: $maxW) {
    @content;
  }
}
.projects {
  // background: rgb(230, 226, 243);
  .container {
    width: 960px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 6rem 30px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
