import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/msharbaji.github.io/",

  lang: "en-US",
  title: "DevJourney - With Mo Alsharbaji",
  description: "Join Mo Alsharbaji on a captivating journey through the world of development. Explore insightful articles and step-by-step documentation of projects, unveiling the secrets of successful development. From concept to completion, gain valuable knowledge, tips, and inspiration to empower your own coding endeavors.",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
