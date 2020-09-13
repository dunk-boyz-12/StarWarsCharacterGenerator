const baseUrl = "https://swapi.dev/api/";

const starWarsCall = async function Call(endUrl) {
  try {
    const response = await fetch(`${baseUrl}${endUrl}`);
    const p = await response.json();
    return p;
  } catch (e) {
    console.log(e);
  }
};

export default starWarsCall;
