let randomWordUrl = "https://random-word-api.herokuapp.com/word?number=1";
let gifhyAPI = "https://api.giphy.com/v1/gifs/search?api_key=y6RItKzRDlOaXoFEFvpy83sIE0XSQPPp";


async function getData() {
  let res = await fetch(randomWordUrl);
  let data = await res.json();
  let div = document.createElement('div');
  div.innerHTML = `Word:  <span>${data[0]} </span>`;
  document.body.append(div);
  console.log(data[0]);
  let resGifhy = await fetch(gifhyAPI + `&q=${data[0]}&limit=25`);
  let dataGifhy = await resGifhy.json();
  console.log(dataGifhy.data[0]);
  let object = document.createElement("object");
  object.data = dataGifhy.data ? dataGifhy.data[0].images.original.url : null;
  document.body.append(object);
}

getData();
