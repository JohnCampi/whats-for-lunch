const select = document.querySelector("#priceSelect");
const button = document.querySelector("button");
const restList = document.querySelector("#restList");

const mcdonalds = {
  name: "McDonald's",
  url: "https://www.mcdonalds.com/us/en-us.html",
};

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

const ul = document.querySelector("ul");

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
  ul.innerHTML = "";
  if (parseInt(select.value) === value) {
    for (let name in highTier) {
      urlLinks(highTier[name].name, highTier[name].url);
    }
  }
};

button.addEventListener("click", () => {
  high(3);
  mid(2);
  cheap(1);
});
