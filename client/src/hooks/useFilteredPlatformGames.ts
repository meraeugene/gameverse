import { useEffect, useState } from "react";
import { gamesData } from "../data/localdata";
import { SelectedGame } from "../types/types";

export const useFilteredPlatformGames = (
  platformCategory: string
): SelectedGame[] => {
  const [filteredGames, setFilteredGames] = useState<SelectedGame[]>([]);

  useEffect(() => {
    const filtered = gamesData
      .filter((game) =>
        game.platforms.some(
          (platform) =>
            platform.name.toLowerCase() === platformCategory.toLowerCase()
        )
      )
      .map((game) => ({
        ...game,
        platforms: game.platforms.filter(
          (platform) =>
            platform.name.toLowerCase() === platformCategory.toLowerCase()
        ),
      }));

    setFilteredGames(filtered);
  }, [platformCategory]);

  return filteredGames;
};
