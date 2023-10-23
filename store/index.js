import STATUS_TYPES from "./config/statusTypes";
import { parsesJSON } from "./utils";

const state = () => ({
  games: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: [],
  },
  game: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: {},
  },
  prevNext: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: {},
  },
  readMore: {
    status: STATUS_TYPES.INIT,
    error: null,
    data: [],
  },
});
/* All states mutations */
const mutations = {
  GET_GAMES(state, payload) {
    state.games.data = payload;
    state.games.status = STATUS_TYPES.SUCCESS;
  },
  GET_GAME(state, payload) {
    state.game.data = payload;
    state.game.status = STATUS_TYPES.SUCCESS;
  },
  GET_READ_MORE(state, payload) {
    state.readMore.data = payload;
    state.readMore.status = STATUS_TYPES.SUCCESS;
  },
  GET_PREV_NEXT(state, payload) {
    state.prevNext.data = payload;
    state.prevNext.status = STATUS_TYPES.SUCCESS;
  },
};
/* All states getters */
const getters = {
  getGames: (state) => parsesJSON(state.games),
  getGame: (state) => parsesJSON(state.game),
  getPrevNext: (state) => parsesJSON(state.prevNext),
  getReadMore: (state) => parsesJSON(state.readMore),
};
/* All states actions */
const actions = {
  async getGames({ commit }, params, callback) {
    const storeGames = await this.$content("games").limit(12).fetch();
    commit("GET_GAMES", storeGames.items);
  },
  async getGame({ commit }, params, callback) {
    const storeGames = await this.$content("games").fetch();
    const storeGame = storeGames.items.find(game => game.ID == params.slug)
    commit("GET_GAME", storeGame);
  },
  async getPrevNext({ commit }, params, callback) {
    const [prev, next] = await this.$content("games")
      .surround(params.slug)
      .fetch();
    commit("GET_PREV_NEXT", { prev, next });
  },
  async getReadMore({ commit }, params, callback) {
    const storeReadMore = await this.$content("games")
      .where({
        slug: { $ne: params.slug },
      })
      .limit(3)
      .fetch();
    commit("GET_READ_MORE", storeReadMore);
  },
};
/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions,
};
