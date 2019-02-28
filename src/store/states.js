let deafultCity = '上海';
try {
  deafultCity = localStorage.getItem('city') ? localStorage.getItem('city') : deafultCity;
} catch (error) {
  console.error(error);
}

export default {
  currentCity: deafultCity
}