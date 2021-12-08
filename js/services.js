const API_KEY = "ca056b3ff04e9b82266c2d26d2a94e00";
const BASE_URL = "https://api.themoviedb.org/3/";
const LANGUAGE = "&language=ru-RU";

// trending/all/day?api_key=<<api_key>>
/* проверяем запрос от API  */
const getData = (url) =>
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw `Что-то пошло не так, ошибка ${response.status}`;
    })
    .catch((err) => console.log(err)); // отлавливаем ошибки в человекопонятном виде

/* ассинхронная функция возвращает запрос */
export const getTriends = async (type = "all", period = "week", page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANGUAGE}&page=${page}`;
  return await getData(url);
};
