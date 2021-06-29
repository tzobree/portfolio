<template>
  <div class="home">
    <div class="container">
      <h3 class="headline">Nebojša Berber, frontend web developer</h3>
		<transition name="fade">
      <div v-show="show">
        <section class="section">
          <h5 class="section-headline"># {{ $t('home.general') }}</h5>
          <ul class="list">
            <li class="item">{{ $t('home.general1') }}</li>
            <li class="item">{{ $t('home.general2') }}</li>
          </ul>
        </section>
        <section class="section">
          <h5 class="section-headline"># CSS</h5>
          <ul class="list">
            <li class="item">{{ $t('home.css1') }}</li>
            <li class="item">{{ $t('home.css2') }}</li>
            <li class="item">{{ $t('home.css3') }}</li>
            <li class="item">{{ $t('home.css4') }}</li>
            <li class="item">{{ $t('home.css5') }}</li>
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
          <h5 class="section-headline"># {{ $t('home.other') }}</h5>
          <ul class="list">
            <li class="item">Git, Github, Bitbucket, Jira, Slack</li>
            <li class="item">{{ $t('home.other2') }}</li>
            <li class="item">{{ $t('home.other3') }}</li>
          </ul>
        </section>
        <section class="section">
          <h5 class="section-headline"># {{ $t('home.plan') }}</h5>
          <ul class="list">
            <li class="item">Vue3, Typescript, React, React Native, GraphQL, Laravel, Node.js, JAMstack, E-Commerce</li>
          </ul>
        </section>
        <section class="section">
          <h5 class="section-headline"># {{ $t('home.more') }}</h5>
          <ul class="list">
            <li class="item">{{ $t('home.more1') }}</li>
            <li class="item">{{ $t('home.more2') }}</li>
            <li class="item">{{ $t('home.more3') }}</li>
          </ul>
        </section>
        <section class="section">
          <h5 class="section-headline"># {{ $t('home.contact') }}</h5>
          <ul class="list">
            <li class="item">nebojsaberber@gmail.com</li>
            <li class="item">063/8937308</li>
            <li class="item"><a href="https://www.linkedin.com/in/nebojsa-berber-a943a4132/" class="link" target="_blank">{{ $t('home.contact2') }}</a></li>
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
