createCard = (thumbnailImg, title, channelName, views, yearsOld, duration) => {
  const body = document.body;
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  body.append(container);

  const thumbnail = document.createElement("div");
  thumbnail.setAttribute("class", "thumbnail");
  container.append(thumbnail);

  thumbnail.innerHTML = `<p>${duration}</p>`;

  const img = document.createElement("img");
  img.setAttribute("src", thumbnailImg);
  thumbnail.append(img);

  const content_container = document.createElement("div");
  content_container.setAttribute("class", "content-container");
  container.append(content_container);

  content_container.innerHTML = `
  <h1>${title}</h1>
  <span>${channelName}</span>
  <span>${views}</span>
  <span>${yearsOld}</span>
  `;
};

createCard(
  "https://i.ytimg.com/vi/FjxdM4XvAz8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZi5h0-y5clwH2mKZI9OYKM2X0Mg",
  "Unhinged ransomware attack targets hospitals",
  "Fireship",
  "274k views",
  "14 hours ago",
  "4:22"
);

createCard(
  "https://i.ytimg.com/vi/FjxdM4XvAz8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZi5h0-y5clwH2mKZI9OYKM2X0Mg",
  "Unhinged ransomware attack targets hospitals",
  "Fireship",
  "274k views",
  "14 hours ago",
  "4:22"
);
