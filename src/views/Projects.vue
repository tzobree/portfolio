<template>
  <div class="projects">
    <div class="container">
      <h3 class="headline">Projekti</h3>
      <div class="list">
        <div class="project">
          <div class="img-wrap">
            <img src="img/kreveti.jpg" alt="">
          </div>
          <div class="info">
            <a href="http://kreveti.com/" target="_blank" class="project-link">
              <h5 class="title">Wordpress Kreveti</h5>
            </a>
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, expedita soluta ex atque dicta dolores eveniet veritatis omnis debitis incidunt.</p>
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
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, expedita soluta ex atque dicta dolores eveniet veritatis omnis debitis incidunt.</p>
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
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, expedita soluta ex atque dicta dolores eveniet veritatis omnis debitis incidunt.</p>
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
            <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, expedita soluta ex atque dicta dolores eveniet veritatis omnis debitis incidunt.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
    padding: 4rem 30px;
    .headline {
      margin: 0 0 4rem;
    }
    .list {
      .project {
        display: grid;
        grid-template-columns: 2fr 3fr;
        column-gap: 40px;
        row-gap: 20px;
        margin: 60px 0;
        min-height: 260px;
        @include max-w(767px) {
          grid-template-columns: 1fr;
          .info {
            text-align: center;
            padding: 0 20px;
          }
        }
        .img-wrap {
          max-height: 260px;
          margin: 0 auto;
          img {
            width: 100%;
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
        }
      }
    }
  }
}
</style>
