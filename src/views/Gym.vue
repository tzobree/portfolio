<template>
	<div class="gym">
		<div class="container">
			<h3 class="headline">Administracija za teretane i fitnes centre</h3>
			<p class="sub">MVP aplikacije je završen, stranica je u izradi. Backend je Laravel i Inertia.js, frontend je Vue i Vuetify</p>
			<div class="grid">
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
		</div>
	</div>
</template>

<script>
export default {

}
</script>


<style lang="scss">
.gym {
  // background: rgb(230, 226, 243);
  .container {
    width: 960px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 6rem 30px;
    .headline {
      margin: 0 0 4rem;
    }
		.grid {
			.row {
				margin: 4rem 0;
			}
		}
	}
}
</style>