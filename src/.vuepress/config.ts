import { defineUserConfig } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import theme from "./theme.js";


export default defineUserConfig({
  // 如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。
  base: "/",
  locales: {

    "/zh/": {

      lang: "zh-CN",
      title: "肇庆回龙全域旅游",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/": {
      lang: "en-US",
      title: "Zhaoqing Huilong",
      description: "A blog demo for vuepress-theme-hope",
    },

  },
  head: [
    // ...

    // 导入相应链接
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  theme,
});
