<template>
	<div class="gym">
		<div class="container">
			<h3 class="headline">{{ $t('gym.title') }}</h3>
			<p class="sub">{{ $t('gym.desc') }}</p>
		<transition name="fade">
			<div class="grid" v-show="show">
				<div class="row">
					<div class="screenshot">
						<img src="img/gym/members.jpg" alt="">
					</div>
				</div>
				<div class="row">
					<div class="screenshot">
						<img src="img/gym/booking.jpg" alt="">
					</div>
				</div>
				<div class="row">
					<div class="screenshot">
						<img src="img/gym/trainers.jpg" alt="">
					</div>
				</div>
				<div class="row">
					<div class="screenshot">
						<img src="img/gym/client-portal.jpg" alt="">
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
.gym {
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
		.grid {
			.row {
				margin: 4rem 0;
				min-height: 400px;
				display: flex;
				.screenshot {
					max-width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					img {
						max-width: 100%;
						object-fit: contain;
					}
				}
			}
		}
	}
}
</style>