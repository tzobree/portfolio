<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t('navHome') }}</router-link> |
      <router-link to="/projects">{{ $t('navProjects') }}</router-link>
      <div class="lang">
        <a @click="changeLocale('sr')" class="btn" :class="{ 'active' : $i18n.locale==='sr' }">Sr</a>
        <a @click="changeLocale('en')" class="btn" :class="{ 'active' : $i18n.locale==='en' }">En</a>
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
import i18n from '@/plugins/i18n'
export default {
  methods: {
    changeLocale(lang) {
      i18n.locale = lang
    }
  }
}
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

@mixin max-w($maxW){
  @media only screen and (max-width: $maxW) {
    @content;
  }
}

#nav {
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  background: rgba(13, 21, 34, 0.884);
  color: rgba(60, 81, 114, 0.932);
  position: relative;
  @include max-w(639px) {
    justify-content: flex-start;
    padding: 20px 15px;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: rgba(248, 248, 248, 0.767);
    transition: all 0.2s;
    &:hover {
      color: rgba(255, 255, 255, 0.897);
    }
    margin: 0 10px;
    @include max-w(639px) {
      margin: 0 10px 0 0;
    }

    &.router-link-exact-active {
      color: rgb(255, 255, 255);
      // color: #42b983;
    }
  }

  .lang {
    position: absolute;
    right: 20px;
    top: 20px;
    .btn {
      cursor: pointer;
      font-size: 0.875rem;
      margin: 0 0 0 10px;
      transition: all 0.2s;
      &:hover {
        color: rgba(255, 255, 255, 0.897);
      }
      &.active {
        color: #FFFFFF;
      }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
