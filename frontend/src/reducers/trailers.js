const trailer = {
  banner: [],
  today: [],
  fav: [],
  born: [],
  watchlist: [],
};

export default (state = trailer, { type, payload }) => {
  switch (type) {
    case "fetchbanner":
      return {
        ...state,
        watchlist: payload.wl.list,
        banner: payload.pp,
        today: payload.ff,
        fav: payload.yy,
        born: payload.aa,
      };
    case "userWatchlist":
      const data = state.watchlist.findIndex((i) => i._id === payload._id);
      return data.toString() === "-1"
        ? { ...state, watchlist: [...state.watchlist, payload] }
        : {
            ...state,
            watchlist: [
              ...state.watchlist.slice(0, data),
              ...state.watchlist.slice(data + 1),
            ],
          };

    default:
      return trailer;
  }
};
