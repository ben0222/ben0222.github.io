import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // {
  //   text: "资讯",
  //   link: "/zh/news/index.html"
  // },
  {
    text: "智述",
    children:
      [
        {
          text: "黎槎古村八卦景区",
          link: "/zh/guide/licha/index.html"
        },
        // {
        //   text: "赤水塘村",
        //   link: "/zh/guide/chishuitang/index.html"
        // },
        // {
        //   text: "澄湖村",
        //   link: "/zh/guide/chenghu/index.html"
        // },
        {
          text: "蒋家村",
          link: "/zh/guide/jiangjia/index.html"
        },

      ]

  },
  // {
  //   text: "数字非遗博物馆",
  //   link: "/zh/museum/index.html"
  // },
  // {
  //   text: "参观",
  //   link: "/zh/visit/index.html"
  // },
  {
    text: "关于",
    link: "/zh/intro.html",
  },
]);
