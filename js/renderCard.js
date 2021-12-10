const listCard = document.querySelector(".other-films__list");

const renderCard = async (data) => {
  listCard.textContent = ""; //очищаем список карточек с фильмами
  // перебираем все карточки и формируем каждую карточку
  const cards = data.map((item) => {
    const card = document.createElement("li");
    card.className = "other-films__item";
    const link = document.createElement("a");
    link.className = "other-films__link";

    if (item.vote_average) link.dataset.rating = item.vote_average;
    const img = document.createElement("img");
    img.className = "other-films__img";
    img.alt = `постер ${item.name || item.title}`;
    img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`;

    link.append(img);
    card.append(link);

    return card;
  });
  // получаем карточки и выводим каждую отдельно, доставая из массива
  listCard.append(...cards);
};

export default renderCard;
