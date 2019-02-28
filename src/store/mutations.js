export default {
  changeCity(state, city) {
    console.log('changeCity Mutations invoke');
    state.currentCity = city;
    try {
      localStorage.setItem('city', city);
    } catch (error) {
      console.error(error);
    }
  }
}