const url = "https://api.rawg.io/api/games?key=0237e5a6702346d7b12a6d31c075294b";

const getProducts = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export { getProducts };