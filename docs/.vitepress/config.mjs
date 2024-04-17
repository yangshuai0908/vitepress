import { defineConfig } from "vitepress";
import { nav } from "./navbar";
import { sidebar } from "./sidebar";
export default defineConfig({
  base: '/vitepress/', // 如果项目页的话
  // 站点级选项
  title: "Yangshaui", // 站点标题
  description: "A Technical Site",
  // 主题级选项
  themeConfig: {
    logo: "../icon.ico", // 导航栏左上角的logo
    nav: nav, // 导航栏
    sidebar: sidebar, // 侧边栏
    socialLinks: [{ icon: "github", link: "https://github.com" }],
    i18nRouting: true,
    search: {
      provider: "local", // 本地搜搜
      // provider: "algolia", // algolia搜索
      // options: {
      //   appId: "CIWYO73ZTA",
      //   apiKey: "5a83364c2d4b95974b59862b7ea6d2c3",
      //   indexName: "CIWYO73ZTA",
      //   placeholder: "请输入关键词",
      //   translations: {
      //     button: {
      //       buttonText: "请输入关键词",
      //     },
      //   },
      // },
    },
  },
});
