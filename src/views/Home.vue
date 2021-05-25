<template>
  <div class="home">
    <div class="container">
      <h3 class="headline">Nebojša Berber, frontend web developer</h3>
      <section class="section">
        <h5 class="section-headline"># opšte</h5>
        <ul class="list">
          <li class="item">Septembar 2018 / Oktobar 2020 - freelancing | HTML / CSS / JS (Vue) / Wordpress</li>
          <li class="item">Oktobar 2020 / do sad - frontend developer u Treeshaker d.o.o. | Vue</li>
        </ul>
      </section>
      <section class="section">
        <h5 class="section-headline"># CSS</h5>
        <ul class="list">
          <li class="item">potpuno responzivno i za najmanje ekrane</li>
          <li class="item">od dizajna (PDF, Invision, Figma...) do gotovog interfejsa</li>
          <li class="item">uvek koristim SASS(SCSS)</li>
          <li class="item">radio sam sa Vuetify, Quasar, Bulma/Buefy, Tailwind.css, Bootstrap, UIkit...</li>
          <li class="item">CSS3, Flexbox, Grid, Tranzicije...</li>
        </ul>
      </section>
      <section class="section">
        <h5 class="section-headline"># JS</h5>
        <ul class="list">
          <li class="item">VanillaJS, jQuery</li>
          <li class="item">Vue2 (Nuxt, Gridsome), VueRouter, Vuex, Vue-cli</li>
          <li class="item">NPM, Webpack, REST API, Axios</li>
        </ul>
      </section>
      <section class="section">
        <h5 class="section-headline"># ostalo</h5>
        <ul class="list">
          <li class="item">Git, Github, Bitbucket, Jira, Slack</li>
          <li class="item">radio sam na Laravel|Vue projektima</li>
          <li class="item">imam i nekoliko uradjenih Wordpress sajtova</li>
        </ul>
      </section>
      <section class="section">
        <h5 class="section-headline"># u planu</h5>
        <ul class="list">
          <li class="item">Vue3, Typescript, React, React Native, GraphQL, Laravel, JAMstack, E-Commerce</li>
        </ul>
      </section>
      <section class="section">
        <h5 class="section-headline"># još nešto</h5>
        <ul class="list">
          <li class="item">radio sam u timu i samostalno, za domaće i inostrane klijente</li>
          <li class="item">engleski odličan</li>
          <li class="item">slobodno vreme trošim uglavnom na biciklizam i planinarenje</li>
        </ul>
      </section>
      <section class="section">
        <h5 class="section-headline"># kontakt</h5>
        <ul class="list">
          <li class="item">nebojsaberber@gmail.com</li>
          <li class="item"><a href="https://www.linkedin.com/in/nebojsa-berber-a943a4132/" class="link" target="_blank">LinkedIn profil</a></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style lang="scss">
.home {
  // background: rgb(230, 226, 243);
  .container {
    width: 960px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 4rem 30px;
    .headline {
      margin: 0 0 4rem;
    }
    .section {
      margin-bottom: 3rem;
      .section-headline {
        margin-bottom: 1rem;
      }
      .list {
        .item {
          .link {
            text-decoration: underline;
            color: #42b983;
          }
        }
      }
    }
  }
}
</style>
