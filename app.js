const select = document.querySelector("#priceSelect");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const cheapTier = {
  mcdonalds: {
    name: "McDonald's",
    url: "https://www.mcdonalds.com/us/en-us.html",
  },
  burgerKing: {
    name: "Burger King",
    url: "https://www.bk.com/",
  },
  subway: {
    name: "Subway",
    url: "https://www.subway.com/en-US",
  },
  whataburg: {
    name: "WHATABURGER",
    url: "https://whataburger.com/home",
  },
  tacoBell: {
    name: "Taco Bell",
    url: "https://www.tacobell.com",
  },
  wiener: {
    name: "Wienerschnitzel",
    url: "https://www.wienerschnitzel.com/",
  },
  wendy: {
    name: "Wendy's",
    url: "https://www.wendys.com/",
  },
};

const midTier = {
  dions: {
    name: "Dion's",
    url: "https://www.dions.com/",
  },
  takoTen: {
    name: "Tako Ten",
    url: "https://www.selflane.com/bizs/tako-ten_albuquerque_nm",
  },
  chickFilA: {
    name: `Chick-fil-A`,
    url: "https://www.chick-fil-a.com/",
  },
  teriyaki: {
    name: "Teriyaki Chicken Bowl",
    url: "https://teriyakichickenbowl.com/",
  },
  tacoCabana: {
    name: "Taco Cabana",
    url: "https://www.tacocabana.com/",
  },
  pandaExpress: {
    name: "Panda Express",
    url: "https://www.pandaexpress.com",
  },
  chipotle: {
    name: "Chipotle",
    url: "https://www.chipotle.com/",
  },
  bobsBurgers: {
    name: "Bob's Burgers",
    url: "https://www.bobsburgersnewmexico.com/",
  },
  goodFellas: {
    name: "Goodfellas",
    url: "https://www.goodfellaspizzaalbuquerque.com/",
  },
  laPlaya: {
    name: "Mariscos La Playa",
    url: "https://www.facebook.com/Mariscoslaplayaabq/",
  },
  Delicias: {
    name: "Delicias Cafe",
    url: "http://orderdeliciascafe.com/",
  },
  jerseyMike: {
    name: "Jersey Mike's",
    url: "https://www.jerseymikes.com/",
  },
};

const highTier = {
  sushi: {
    name: "Sprouts Sushi",
    url: "https://www.sprouts.com/",
  },
  tds: {
    name: "Teds Diner",
    url: "https://www.tdsnorth.com",
  },
};

const allTiers = {
  mcdonalds: {
    name: "McDonald's",
    url: "https://www.mcdonalds.com/us/en-us.html",
  },
  burgerKing: {
    name: "Burger King",
    url: "https://www.bk.com/",
  },
  subway: {
    name: "Subway",
    url: "https://www.subway.com/en-US",
  },
  whataburg: {
    name: "WHATABURGER",
    url: "https://whataburger.com/home",
  },
  tacoBell: {
    name: "Taco Bell",
    url: "https://www.tacobell.com",
  },
  dions: {
    name: "Dion's",
    url: "https://www.dions.com/",
  },
  takoTen: {
    name: "Tako Ten",
    url: "https://www.selflane.com/bizs/tako-ten_albuquerque_nm",
  },
  chickFilA: {
    name: `Chick-fil-A`,
    url: "https://www.chick-fil-a.com/",
  },
  teriyaki: {
    name: "Teriyaki Chicken Bowl",
    url: "https://teriyakichickenbowl.com/",
  },
  tacoCabana: {
    name: "Taco Cabana",
    url: "https://www.tacocabana.com/",
  },
  pandaExpress: {
    name: "Panda Express",
    url: "https://www.pandaexpress.com",
  },
  sushi: {
    name: "Sprouts Sushi",
    url: "https://www.sprouts.com/",
  },
  tds: {
    name: "Teds Diner",
    url: "https://www.tdsnorth.com",
  },
};

const urlLinks = (name, url) => {
  const link = document.createElement("a");
  const li = document.createElement("li");
  link.innerText = name;
  link.href = url;
  ul.append(li);
  li.append(link);
};

const cheap = (value) => {
  if (parseInt(select.value) === value) {
    for (let name in cheapTier) {
      urlLinks(cheapTier[name].name, cheapTier[name].url);
    }
  }
};

const mid = (value) => {
  if (parseInt(select.value) === value) {
    for (let name in midTier) {
      urlLinks(midTier[name].name, midTier[name].url);
    }
  }
};

const high = (value) => {
  if (parseInt(select.value) === value) {
    for (let name in highTier) {
      urlLinks(highTier[name].name, highTier[name].url);
    }
  }
};

let entries;
const array = [];
let ranNum = Math.floor(Math.random() * 13) + 1;

const rand = (value) => {
  if (parseInt(select.value) === value) {
    for (let all in allTiers) {
      array.push(allTiers[all]);
      ranNum = Math.floor(Math.random() * 13) + 1;
    }
    urlLinks(array[ranNum].name, array[ranNum].url);
  }
};

button.addEventListener("click", () => {
  ul.innerHTML = "";
  rand(4);
  high(3);
  mid(2);
  cheap(1);
});
