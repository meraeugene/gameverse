import { gamesData, gamingPeripheralsData } from "../data/localdata";

export const searchUtil = (query: string) => {
  const peripheralsResults = gamingPeripheralsData
    .filter(
      (item) =>
        item.brand.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    )
    .map((item) => ({ ...item, category: "Gaming Peripherals" }));

  const gamesResults = gamesData
    .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
    .map((item) => ({ ...item, category: "Games" }));

  // Organize results by category
  const categorizedResults = [
    {
      category: "Gaming Peripherals",
      items: peripheralsResults,
    },
    {
      category: "Games",
      items: gamesResults,
    },
  ];

  return categorizedResults;
};
