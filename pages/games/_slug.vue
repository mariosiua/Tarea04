<script>
import { mapState } from 'vuex'

export default {
  async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
    await dispatch('getGame', params)
  },
  computed: {
    ...mapState({
      game: (state) => state.game.data,
    })
  }
}
</script>

<template>
  <div>
    <HeaderView />
    <main>
      <div class="container my-4">
        <div class="text-center">
          <h1 class="mb-4">{{ game.title }}</h1>
          <div class="row m-1">
            <div class="col bg-info border rounded-start-4">
              Platform:
            </div>
            <div class="col border rounded-end-4">
              <i class="fa-solid fa-gamepad"></i> {{ game.platform }}
            </div>
          </div>
          <div class="row m-1">
            <div class="col bg-info border rounded-start-4">
              Genre:
            </div>
            <div class="col border rounded-end-4">
              <i class="fa-solid fa-server"></i> {{ game.genre }}
            </div>
          </div>
          <div class="row m-1">
            <div class="col bg-info border rounded-start-4">
              Release Date:
            </div>
            <div class="col border rounded-end-4">
              <i class="fa-solid fa-calendar-days"></i> {{ game.release_year }}/{{ game.release_month }}/{{
                game.release_day }}
            </div>
          </div>
          <div class="row m-1">
            <div class="col bg-info border rounded-start-4">
              Score:
            </div>
            <div class="col border rounded-end-4">
              <i class="text-warning fa-solid fa-star" v-for="n in game.score"></i>
              <i class="text-warning fa-regular fa-star" v-for="n in 10 - game.score"></i>
            </div>
          </div>
        </div>
        <utteranc />
      </div>
    </main>
    <FooterView />
  </div>
</template>