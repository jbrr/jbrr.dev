import { ALT_TITLES } from "@config";

const getRandomTitle = () => {
  return ALT_TITLES[Math.floor(Math.random() * ALT_TITLES.length)];
};

export default getRandomTitle;
