const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      allContent: [],
    },
    actions: {
      getAllContent: (url) => {
        // const store = getStore();
        // const actions = getActions();
        fetch(url)
          .then((response) => response.json())
          .then((data) => setStore({ allContent: data }));
      },

      deleteFavorite: (key, item) => {
        const store = getStore();
        let filtered = store.favorites.filter((item) => item !== key);
        setStore({
          favorites: [filtered],
        });
      },
    },
  };
};

export default getState;
