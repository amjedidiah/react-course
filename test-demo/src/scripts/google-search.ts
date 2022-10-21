export enum Sites {
  Cats = "cats.com",
  Souprecipes = "souprecipes.com",
  Flowers = "flowers.com",
  Animals = "animals.com",
  Catpictures = "catpictures.com",
  Myfavouritecats = "myfavouritecats.com",
  Myfavouritecats2 = "myfavouritecats2.com",
}

export default function googleSearch(query: string, sites: Sites) {
  return query
    ? Object.values(sites)
        .filter((site) => site.includes(query))
        .slice(0, 3)
    : [];
}
