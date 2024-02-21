const urlParams = new URLSearchParams(window.location.search);
const landscapeParam = urlParams.get("landscape");

if (landscapeParam === "coniferous forest") {
  console.log("Coniferous forest");
  document.querySelector(".whichForest").textContent = "Coniferous forest";
  document.querySelector(".forestText").textContent =
    "Coniferous trees are able to grow in sandy soil without much nutrition. The many needles that fall from the trees create a special environment- They contain acid, which makes it impossible for earthworms to survive and take care of decomposing the dead plant material on the forest floor. This means that mushrooms take care of it instead - and therefore the coniferous forest is a very good place for finding mushrooms. ";
  document.querySelector(".forestImg1").src =
    "https://vildmad.dk/application/files/8314/9096/3662/sankested_naleskov-squashed.jpg";
  /*document.querySelector(".underImg").src = item.prof_img; */
} else {
  console.log("Deciduous forest");
  document.querySelector(".whichForest").textContent = "Deciduous forest";
  document.querySelector(".forestText").textContent =
    "Deciduous forests have trees that lose leaves in winter, and in summer, the tree crowns block sunlight from reaching the forest floor. This makes it challenging to find edible items in summer. However, in spring, you can find herbs like chives and fennel, while at the end of summer, there are berries and edible flowers. Autumn brings mushrooms, fruits, and nuts for harvesting.";
  document.querySelector(".forestImg1").src =
    "https://vildmad.dk/application/files/1314/9096/4038/sankested_lovskov-squashed.jpg";
}

const url = `https://zspprnvzxkuipvppeudr.supabase.co/rest/v1/ingredients?landscapes=cs.["${landscapeParam}"]`;

fetch(url, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcHBybnZ6eGt1aXB2cHBldWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NDY4MzQsImV4cCI6MjAyMzMyMjgzNH0.ej-pnIWcXh8mQo5PvnqV9FXMajNdyzeRjOM5FYHDzlQ"
  }
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log("items er: ", items);
  items.forEach(showItems);
}

function showItems(item) {
  console.log(item);
  const template = document.querySelector("#templateItems").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".gridItem").src = item.prof_img;
  copy.querySelector(".title").textContent = item.titel;
  copy.querySelector(".description").textContent = item.description;
  copy.querySelector(".landscape").textContent = item.landscape;
  const parentElement = document.querySelector(".grid_2-2-2-2");
  parentElement.appendChild(copy);

  /* if (item.landscapes == "deciduous forest") {
    copy.querySelector(".grid_2-2-2-2").remove();
} */
}
/*  
   document.querySelector("#popupHeader").textContent = item.titel;
   document.querySelector("?").textContent = product.productdisplayname;
    copy.querySelector("?").textContent = product.brandname;
    copy.querySelector("?").textContent = product.price; */
