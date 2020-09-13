export const getCharacterInfo = () => {
  let rand = Math.floor(Math.random() * 82);
  StarWarsCall(`${endUrls.people}${rand}/`).then((res) => isLoaded(res));
};
