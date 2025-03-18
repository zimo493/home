import bgOne from "@/assets/images/background/bgOne.png";
import bgTwo from "@/assets/images/background/bgTwo.jpg";
import bgThree from "@/assets/images/background/bgThree.jpg";
import bgFour from "@/assets/images/background/bgFour.jpg";

import avatar from "@/assets/images/avatar.jpg";
import love from "@/assets/images/contact/love.svg";
import menu from "@/assets/images/contact/menu.svg";

import github from "@/assets/images/contact/github.svg";
import gitee from "@/assets/images/contact/gitee.svg";
import juejin from "@/assets/images/contact/juejin.svg";

export default {
  // 标题
  title: "Vite + Vue3 + TS",
  // 版权和备案信息
  copyright: {
    time: "2022-2024",
    use: "huzimo",
    url: "https://github.com/zimo493",
    name: "zimo",
    icp: "",
    recordNum: "",
    recordUrl: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34102302000062",
  },
  apiKey: "c3f08926d89b10d5c1e7679008c74a22",
  /* 个人首页信息 */
  carousel: [bgOne, bgTwo, bgThree, bgFour], // 首页轮播
  // 联系方式
  contacts: [
    {
      icon: gitee,
      tip: "Gitee",
      link: "https://gitee.com/zimo493",
      qrCode: undefined,
    },
    {
      icon: github,
      tip: "GitHub",
      link: "https://github.com/zimo493",
      qrCode: undefined,
    },
    {
      icon: juejin,
      tip: "掘金",
      link: "https://juejin.cn/user/2071906083942184",
      qrCode: undefined,
    },
  ],
  dropdownMenu: [
    {
      title: "WeChatPush",
      url: "https://github.com/zimo493/WeChatPush",
    },
    {
      title: "Cron表达式生成器",
      url: "https://github.com/zimo493/vue-cron-generate",
    },
    // {
    //   title: 'Vue3后台管理系统',
    //   url: 'https://admin.huzimo.vip'
    // }
  ],
  name: "胡子陌",
  avatar,
  love,
  menu,
  emojis: [
    "💐",
    "🌈",
    "😉",
    "🍸",
    "💞",
    "🍹",
    "📸",
    "❤‍🔥",
    "🌸",
    "🌻",
    "📬",
    "☕",
    "💌",
    "🍻",
    "🌷",
    "🌞",
  ],
  mottos: [
    "明天不一定会更好，但更好的明天一定会来",
    "最好的偷懒就是一次完成",
    "我们的故事由我们自己来决定",
    "如果总是在意别人怎么想，你将一事无成",
    "你怕不怕这辈子就是你上辈子所说的下辈子",
    "有智者立长志，无志者长立志",
    "方向错了，停下就是进步",
    "那些过去的眼泪终将风干在记忆里",
    "难道笑声不是最好的良药吗？",
    "唯一要紧的是现在，是此时此刻",
    "业精于勤，荒于嬉；行成于思，毁于随",
    "珍惜的记忆与时光同在，且日益珍贵",
    "满怀希望，就会所向披靡",
    "差之毫厘，谬以千里",
    "盛年不重来，一日难再晨",
    "每每旭日东升，都是崭新的开始",
    // "我们要迈向未来，而不是沉湎于过去",
    "Do all things with love.",
    "有些人因罪恶而升迁，有些人因美德而没落",
    "森林中有两条路，我选择了人迹罕至的那条",
    "如果没有黑暗，我们永远看不到繁星",
    "三人行，必有我师焉，择其善者而从之，其不善者而改之",
    "人谁无过，过而能改，善莫大焉",
    "我们都在负重前行",
    "千经万典，孝悌为先",
    "不怨天，不尤人",
    "学而不化，非学也",
    "一寸光阴一寸金，寸金难买寸光阴",
    "毋意，毋必，毋固，毋我",
    "路曼曼其修远兮，吾将上下而求索",
  ],
  clause_zh: "我们要迈向未来，而不是沉湎于过去",
  clause_en: "We are going forward to the future, not back into the past",
};
