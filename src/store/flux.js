const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      allContent: [],
      favorites: [],
    },
    actions: {
      getAllContent: (url) => {
        // const store = getStore();
        // const actions = getActions();
        fetch(url)
          .then((response) => response.json())
          .then((data) => setStore({ allContent: data }));
      },
      addFavorites: (heart, item) => {
        const store = getStore();
        setStore({
          favorites: [...store.favorites, { heart: heart, item: item }],
        });
      }
    },
  };
};

export default getState;
