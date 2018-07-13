export const actions = store => ({
  // for count
  increment(state) {
    return { count: state.count + 1 };
  },
  // for secondcount
  decrement(state) { return { count: state.count - 1 } },
  // adds a todo item to the list array
  getData(state,data) {
   
    const url = "https://facebook.github.io/react-native/movies.json"

    let result = fetch(url)
    return result.then((dataJson) => {
      return dataJson.json().then((data) => {
         
        return { list: data.movies }
      })
    })
  }

}); 