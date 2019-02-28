export default {
  changeCity(context, city) {
    console.log('changeCity Actions invoke');
    context.commit('changeCity', city);
  }
}