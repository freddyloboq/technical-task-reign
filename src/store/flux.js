const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      allContent: [],
      filterSelected: "",
    },
    actions: {
      setFilterSelected: (select) => {
        if (localStorage.getItem("getSelectFilter") !== null) {
          let localSelected = localStorage.getItem("getSelectFilter");
          setStore({
            filterSelected: localSelected,
          });
        } else {
          localStorage.setItem("getSelectFilter", select);
        }
        setStore({
          filterSelected: select,
        });
      },

      getAllContent: (url) => {
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
