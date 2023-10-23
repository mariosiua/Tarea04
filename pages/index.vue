<script>
import { mapState } from 'vuex'

export default {
	async fetch({ params, store: { dispatch, getters } }) {
		await dispatch('getGames')
	},
	computed: {
		...mapState({
			games: (state) => state.games.data,
		})
	}
}
</script>

<template>
	<div>
		<HeaderView />
		<main>
			<div class="container my-4">
				<h3 style="margin-top: 15px">Amazon Top 50 Bestselling Games 2009 - 2019</h3>
				<p>Dataset on Amazon's Top 50 bestselling games from 2009 to 2019. Contains 550 games, data has been
					categorized
					into fiction and non-fiction using Goodreads</p>
				<ul>
					<li v-for="game in games" :key="game.slug">
						<NuxtLink :to="{ name: 'games-slug', params: { slug: game.ID } }">{{ game.title }}</NuxtLink>
					</li>
				</ul>
			</div>
		</main>
		<FooterView />
	</div>
</template>