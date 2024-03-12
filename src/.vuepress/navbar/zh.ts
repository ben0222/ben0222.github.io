import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
  {
    text: "资讯",
    link: "/zh/intro.html"
  },
  {
    text: "智述",
    children:
      [

        // {
        //   text: "数字非遗博物馆",
        //   link: "/zh/intro.html"
        // },

        // {
        //   text: "古村落语音讲解",
        //   link: "/zh/intro.html",
        //   children:
        //     [
        //       {
        //         text: "黎槎古村八卦景区",
        //         link: "/zh/intro.html"
        //       },
        //       {
        //         text: "赤水塘村",
        //         link: "/zh/intro.html"
        //       },
        //       {
        //         text: "澄湖村",
        //         link: "/zh/intro.html"
        //       },
        //     ]
        // }
        {
          text: "黎槎古村八卦景区",
          link: "/zh/intro.html"
        },
        {
          text: "赤水塘村",
          link: "/zh/intro.html"
        },
        {
          text: "澄湖村",
          link: "/zh/intro.html"
        },
      ]

  },
  {
    text: "数字非遗博物馆",
    link: "/zh/intro.html"
  },
  {
    text: "参观",
    link: "/zh/intro.html"
  },
  {
    text: "关于",
    link: "/zh/intro.html",
  },
]);
