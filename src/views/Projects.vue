<template>
  <div class="projects">
    <div class="container">
      <h3 class="headline">Projekti</h3>
		<transition name="fade">
      <div class="list" v-show="show">
        <div class="project">
          <div class="img-wrap">
            <img src="img/fitbrry.jpg" alt="">
          </div>
          <div class="info">
            <router-link to="/gym" class="project-link">
              <h5 class="title">gym.fitbrry</h5>
            </router-link>
            <p class="desc">Web aplikacija za administraciju u teretanama i fitnes centrima. Laravel,  inertia.js, Vue i Vuetify, 50+ stranica i komponenti.</p>
          </div>
        </div>
        <div class="project">
          <div class="img-wrap">
            <img src="img/startups-africa.jpg" alt="">
          </div>
          <div class="info">
            <a href="https://startuplist.africa/ecosystem" target="_blank" class="project-link">
              <h5 class="title">startuplist.africa</h5>
            </a>
            <p class="desc">Baza startup-ova u Africi, za klijenta iz Nigerije, ostvaruje dosta poseta pa se više ne razvija u izradi je druga verzija. Oba su rađena u Vue, u drugoj je dodat Quasar.</p>
          </div>
        </div>
        <div class="project">
          <div class="img-wrap">
            <img src="img/bitbata.jpg" alt="">
          </div>
          <div class="info">
            <a href="https://bitbata.com/" target="_blank" class="project-link">
              <h5 class="title">bitbata</h5>
            </a>
            <p class="desc">Dokumentacija za kripto API, frontend je Gridsome (Vue) i Tailwind.css.</p>
          </div>
        </div>
        <div class="project">
          <div class="img-wrap">
            <img src="img/brainbox.jpg" alt="">
          </div>
          <div class="info">
            <a href="https://brainboxnigeria.netlify.app/" target="_blank" class="project-link">
              <h5 class="title">brainbox</h5>
            </a>
            <p class="desc">Web app, platforma za postavljanje diplomskih radova. Frontend je Vue.js.</p>
          </div>
        </div>
        <div class="project">
          <div class="img-wrap">
            <img src="img/kreveti.jpg" alt="">
          </div>
          <div class="info">
            <a href="http://kreveti.com/" target="_blank" class="project-link">
              <h5 class="title">kreveti</h5>
            </a>
            <p class="desc">Sajt kompanije koja proizvodi krevete rađen u Wordpress-u. Prilagođena tema, dorađen CSS, 3 jezika...</p>
          </div>
        </div>
      </div>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
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
.projects {
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
      margin: 0 0 2rem;
      // @include max-w(767px) {
      //   text-align: center;
      // }
    }
    .list {
      .project {
        display: grid;
        grid-template-columns: 2fr 3fr;
        column-gap: 40px;
        border-bottom: 1px solid rgba(236,236,236,0.8);
        &:last-child {
          border: none;
        }
        margin: 0;
        padding: 30px 0;
        min-height: 260px;
        @include max-w(767px) {
          grid-template-columns: 1fr;
          // .info {
          //   text-align: center;
          //   padding: 0 20px;
          // }
        }
        .img-wrap {
          max-height: 260px;
          margin: 0 auto;
          @include max-w(767px) {
            margin: 0 auto 0 0;
          }
          img {
            width: 400px;
            max-width: 100%;
            height: 100%;
            min-height: 260px;
            object-fit: contain;
          }
        }
        .info {
          // min-height: 260px;
          .project-link {
            text-decoration: none;
            color: black;
            &:hover {
              .title {
                color: #42b983;
              }
            }
            .title {
              margin: 30px 0;
              font-size: 1rem;
              transition: all 0.2s;
            }
          }
          .desc {
            font-size: 0.875rem;
          }
        }
      }
    }
  }
}
</style>
