<template>
  <div class="home">
    <div class="container">
      <h3 class="headline">Nebojša Berber, frontend web developer</h3>
		<transition name="fade">
      <div v-show="show">
        <section class="section">
          <h5 class="section-headline"># {{ $t('general') }}</h5>
          <ul class="list">
            <li class="item">{{ $t('general1') }}</li>
            <li class="item">{{ $t('general2') }}</li>
          </ul>
        </section>
        <section class="section">
          <h5 class="section-headline"># CSS</h5>
          <ul class="list">
            <li class="item">{{ $t('css1') }}</li>
            <li class="item">{{ $t('css2') }}</li>
            <li class="item">{{ $t('css3') }}</li>
            <li class="item">{{ $t('css4') }}</li>
            <li class="item">{{ $t('css5') }}</li>
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
            <li class="item">imam i nekoliko urađenih Wordpress sajtova</li>
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
    </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
	data() {
		return {
			show: false
		}
	},
	mounted() {
		this.show = true
	}
}
</script>

<style lang="scss">
@mixin max-w($maxW){
  @media only screen and (max-width: $maxW) {
    @content;
  }
}
.home {
  .container {
    width: 960px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 6rem 30px;
    @include max-w(639px) {
      padding: 6rem 15px;
    }
    .headline {
      margin: 0 0 4rem;
    }
    .section {
      margin-bottom: 3rem;
      .section-headline {
        margin-bottom: 1rem;
      }
      .list {
        list-style: none;
        padding-left: 0;
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
