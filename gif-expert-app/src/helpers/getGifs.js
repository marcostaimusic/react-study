export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&offset=0&rating=g&lang=en&api_key=UJwNSl1q9P8VEui6qvHI1UMqY1cFXKUH`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.fixed_height_small.url,
    };
  });
  return gifs;
};
