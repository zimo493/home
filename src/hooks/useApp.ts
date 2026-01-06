import config from "@/utils/config";
import ghs from "@/assets/images/ghs.png";
import "@/styles/app.scss";
import axios from "axios";

interface IPowerword {
  caption: string;
  content: string;
  dateline: string;
  fenxiang_img: string;
  love: string;
  note: string;
  picture: string;
  picture2: string;
  picture3: string;
  picture4: string;
  s_pv: string;
  sid: string;
  sp_pv: string;
  tags: [];
  translation: string;
  tts: string;
}

export const useApp = () => {
  // 粒子特效数据
  const options = reactive({
    /* background: {
    color: {
      value: '#000' // 粒子颜色
    }
  }, */
    fpsLimit: 100,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse", // 可用的click模式有: "push", "remove", "repulse", "bubble"
        },
        onHover: {
          enable: true,
          mode: "grab", // 可用的hover模式有: "grab", "repulse", "bubble"
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff", // '#dedede'线条颜色
        distance: 150, // 线条长度
        enable: true, // 是否有线条
        opacity: 0.5, // 线条透明度
        width: 1, // 线条宽度
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2, // 粒子运动速度
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 50, // 粒子数量
      },
      opacity: {
        value: 0.5, // 粒子透明度
      },
      shape: {
        type: "star", // 可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  });

  // 获取词霸
  const getWord = async () => {
    const res = await axios.get<IPowerword>("/power-word/dsapi/");

    zh.value = res.data.note;
    en.value = res.data.content;
  };

  void getWord();

  /* 随机取出元素 */
  const randomValue = () => config.emojis[Math.floor(Math.random() * config.emojis.length)];

  const zh = ref<string>(config.clause_zh + randomValue());
  const en = ref<string>(config.clause_en + randomValue());

  onMounted(() => init());

  const motto = ref<string>("");
  /* 页面初始化 */
  const init = async () => {
    config.mottos.sort(() => Math.random() - 0.5);
    for (let i = 0; i < config.mottos.length; i++) {
      const item = config.mottos[i];

      await start(item);
      await back(item);
    }
  };

  /* 输入文字 */
  const start = (item: string) =>
    new Promise<void>((resolve) => {
      let index = 0;
      const start_timer = setInterval(() => {
        motto.value += item.charAt(index);
        if (index++ === item.length) {
          clearInterval(start_timer);
          resolve();
        }
      }, 200);
    });

  /* 删除文字 */
  const back = (item: string) =>
    new Promise<void>((resolve) => {
      const time = setTimeout(() => {
        const it = item;
        const del_timer = setInterval(() => {
          item = item.slice(0, -1);
          motto.value = item;
          if (motto.value.toString().length === 0) {
            clearInterval(del_timer);
            clearTimeout(time);
            if (config.mottos.indexOf(it) === config.mottos.length - 1) {
              void init();
            }
            resolve();
          }
        }, 80);
      }, 1000);
    });

  /* 打开新页面 */
  const open = (url: string) => window.open(url);

  return {
    options,
    config,
    ghs,
    zh,
    en,
    motto,
    open,
  };
};
