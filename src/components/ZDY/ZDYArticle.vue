<template>
  <div class="article">
    <!-- 卡片头部-start -->
    <div class="head">
      <!-- <div class="ocean-text">GOAT</div> -->
      <rains></rains>
    </div>
    <!-- 卡片头部-end -->
    <!-- 卡片内容-start -->
    <div class="content">
      <div class="left" @click="desc()">
        <i class="arrow-icon arrow-left"></i>
      </div>
      <div class="right" @click="add()">
        <i class="arrow-icon arrow-right"></i>
      </div>
      <!-- 主要内容-start -->
      <div class="main">
        <div class="article-box">
          <!-- 左侧列：标题和副标题 -->
          <div class="left-column">
            <div class="page" style="position: absolute; top: -25%; color: var(--card-color); margin-bottom: 10px; display: flex; align-items: flex-end;">
              <h2 style="font-weight: 900; font-size: 62px; color: var(--supple-font-color); margin: 0; line-height: 1;">{{ num }}</h2>
              <span style="font-weight: 400; font-size: 42px; position: relative; margin-left: 10px; margin-bottom: 10px; color: var(--streng-font-clolor);"> / {{ total - 1 }}</span>
            </div>
            <div class="title" key="title-display">
              <h4>{{ articles[index].sub_title }}</h4>
              <h1>{{ articles[index].main_title }}</h1>
              <h5>{{ articles[index].explain }}</h5>
            </div>
          </div>
          
          <!-- 右侧列：内容和图片 -->
          <div class="right-column">
            <div class="article" :key="index">
              <h2>{{ articles[index].sum_content }}</h2>
              <p>
                {{ articles[index].main_content }}
                <br />
                <img :src="articles[index].img_src" alt="" v-if="articles[index].img_src" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 主要内容-end -->
    </div>
    <!-- 卡片内容-end -->
  </div>
</template>

<script>
import rains from "./rains.vue";

export default {
  name: "ZDYArticle",
  components: {
    rains,
  },
  data() {
    return {
      index: 0,
      images: {
        lqtzs: null,
        qx: null,
        dx: null,
        jx: null,
        xyms: null,
        jqsj1: null,
        sf: null,
        dgb: null,
        sm: null,
        twm: null,
        lqb: null,
        oneplusx: null,
        jz: null,
        xm: null,
        jd: null,
        sj: null
      },
      articles: [
        {
          sub_title: "2025年1月至6月",
          main_title: "半年实习",
          explain: "深航 周周冥想 自学JAVA",
          sum_content: "坚持加入IT大队！",
          main_content:
            "为了积累原始资金和扎实基础，选择半年的深航行政文员，我探索工作流，提高工作效率，为能多出空余时间学习巩固JAVA，此外也加入周周冥想公司兼职web开发，学习收获当下一些流行技术，颇有收获，也收集整理个人知识库。可以访问togetsu.online了解更多！在此为纪念！",
          img_src: "",
        },
        {
          sub_title: "2022至2025",
          main_title: "大学三年",
          explain: "机器视觉 全栈开发（JAVA） 云计算 数据分析",
          sum_content: "写点有趣的代码，做点好玩的程序",
          main_content:
            "从了解到研究，从新奇到烧脑，编程语法与计算机基础掌握下慢慢解开这本天书。刚开始作为兴趣培养，主要靠着东找西摸，拼拼凑凑制定未来发展方向。起初作为兴趣主要学习python与机器视觉的相关内容，再者基于python更好了解算法等，到了时机专学java全栈开发，基于前期掌握下前开开发，偶尔做些demo，已了解一些主流开发框架适应需求，当然专业课与日常了解，学习云计算、公有云、容器云等内容，此外，基于excel和python的数据分析处理、爬虫也更便利个人所需。",
          img_src: "",
        },
        {
          sub_title: "2022-10-30",
          main_title: "计协编程部",
          explain: "机协 编程部 学习",
          sum_content: "与他人一起探讨学习编程",
          main_content:
            "在老师的推荐，也加入相应的兴趣类社团，计算机协会。在这里可以收获学长学姐一些经验之谈，或与其他同学一起探讨学习，且基于我们的学习进度，接受应对竞赛的相应培训。",
          img_src: "",
        },
        {
          sub_title: "2022-11-30",
          main_title: "校园毛叔",
          explain: "金点子 项目申报书",
          sum_content: "初次独立完成项目计划书",
          main_content:
            "为准备“互联网+”打下基础举办的“金点子”创新赛，完成得还不够成熟，只是完成项目功能说明与团队环境等申报。",
          img_src: "",
        },
        {
          sub_title: "2023-3-1",
          main_title: "机器视觉考核",
          explain: "机器视觉 大模型项目",
          sum_content: "独立完成基础学习与判卷系统",
          main_content:
            "研究机器视觉老师招收学员，在自学python和opencv-python，完成基础图像处理如噪点处理等，再独立完成判卷系统；再之后老师的带领下研究如何精确读取薄布厚度，再到后来研究DeepLabv3读表获取读数。",
          img_src: "",
        },
        {
          sub_title: "2023-4-20",
          main_title: "算法培训",
          explain: "算法 数模 计协",
          sum_content: "通过选拔进入算法和数模培训",
          main_content:
            "在前期学长学姐帮助下，完成基础语法学习，通过人员筛选选拔制度，进入竞赛部，完成算法与数模的学习，准备之后的蓝桥杯与数学建模。",
          img_src: "",
        },
        {
          sub_title: "2023-6-20",
          main_title: "电工杯数模",
          explain: "电工杯 数据分析",
          sum_content: "人工智能对大学生学习影响的评价",
          main_content:
            "为准备之后的大学生数模，参加近期的“电工杯”赛，3人一组，但由于疫情感染，由我负责建模与模型分析，另一位成员负责论文撰写与资料整理。本次题目为“人工智能对大学生学习影响的评价”，就收集的数千数据的调差问卷做数据处理、辨析与预判。采用层次分析法计算权重选取客观系统的评价指标；模糊综合评价法（FCE）对评价指标数据整合构建评价指标体系；经过数据预处理、分析特征提取、基于回归分析等方法来建立模型；通过渗透度完成影响分析报告。获得省三。",
          img_src: "",
        },
        {
          sub_title: "2023-7-1",
          main_title: "FBDL",
          explain: "动作判别计数 互联网+",
          sum_content: "热身模块的动作判别与计数",
          main_content:
            "在机器视觉老师推荐下，加入了前届牵头的足球项目，“FBDL”足球数智化项目——四大板块分别是基于机器视觉的足球智能培训系统，基于自适应的数据分析系统，基于运动积分的足球O2O商城平台，基于足球市场和赛事组织的足球战略联盟平台，主要负责热身模块如俯卧撑等的动作判别与计数。获得“互联网+”职教校二。",
          img_src: "",
        },
        {
          sub_title: "2023-9-20",
          main_title: "数模省赛",
          explain: "数模 数据分析",
          sum_content: "数模黄河水沙监测数据分析",
          main_content:
            "大学生数模选题——黄河水沙监测数据分析，3人一组，主负责建模之一，完成问题2与问题4的解决建模，问题2基于数据的长时间序列顺序标准变量特性，构建Mann−Kendall非参数检验分析数学模型；问题4先指数平滑法数据预处理，SARMIA模型效果分析，线性回归模型预测状态。获得省一。",
          img_src: "",
        },
        {
          sub_title: "2023-11-30",
          main_title: "软件设计",
          explain: "软设 摊维码设计",
          sum_content: "摊维码软件与UI设计",
          main_content:
            "自学软件设计，备战软考软件设计中级。且学以致用，协同他人完成了“摊维码”的功能需求分析、数据库设计、UML模型设计、UI设计等。完成ppt制作与项目书，在学院“起航杯”中获得银奖，“挑战杯”大学生创业赛校赛优秀奖，参加省赛。",
          img_src: "",
        },
        {
          sub_title: "2024-5-30",
          main_title: "蓝桥杯",
          explain: "算法 JAVA程序设计",
          sum_content: "蓝桥杯JAVA程序设计省赛",
          main_content:
            "在前期的算法基础下，基于自身的就业规划，加深java程序编写，报名了“蓝桥杯”的程序设计，整个寒假的备战过程，完成官网代表性题目。获得省级二等。",
          img_src: "",
        },
        {
          sub_title: "2024-6-30",
          main_title: "1+x中级",
          explain: "web网页开发 前端",
          sum_content: "1+x网页程序中级开发师",
          main_content:
            "在大一通过1+x初级下，因前期六级与中级时间冲突，拖延至大二下学期1+x中级考试，主要考查php、myslq、axios等模块。",
          img_src: "",
        },
        {
          sub_title: "2024-9-20",
          main_title: "金砖云计算",
          explain: "docker容器 k8s编排",
          sum_content: "备战金砖云计算B模块",
          main_content:
            "2人一组报名了金砖职业技能大赛云计算赛项，我主要负责B模块的学习(前期也尝试A模块的解答)但只受限opensyack开课，主要通过自学，以解决样题问题为主要学习目标，深入较浅，比赛结果以25/50的排名获得省三。",
          img_src: "",
        },
        {
          sub_title: "2024-10-1",
          main_title: "完善项目",
          explain: "毕设 个人网页 java项目",
          sum_content: "丰富自身项目实战经验",
          main_content:
            "为丰富自身简历或更让面试官了解自己，完善“摊维码”评论功能积攒java实战经验入springboot与mybatis等的使用；着手“锦观世界”完成毕设工作，基于机器视觉完成八段锦的跟练服务；vue完善个人网页展现自己。同时利用所选的数据爬取分析，筛选适合自己的岗位，倾注工作准备。",
          img_src: "",
        },
        {
          sub_title: "2022-2024",
          main_title: "课程学习",
          explain: "大学三年 总结",
          sum_content: "验收课程学习报告",
          main_content:
            "在自学除关注的内容外，也不落下在校课程学习，在校期以全方面发展为主，工作期以某个研究发现前进；如下为个人绩点，包括office、c语言、linux基础、web、python、大英高数、java、网络基础、mysql、php、数据结构与算法、VMware云平台运维、opstack、vue、excel数据分析、容器运维、网络爬虫、python数据分析、计算机英语等学科学习。",
          img_src: "",
        },
        {
          sub_title: "2022-9-5",
          main_title: "大学生活",
          explain: "广航 青协宣传部 电信业务办理",
          sum_content: "22届广航职校云计算方向计应生",
          main_content:
            "我的开篇，32分段的专插本制度与计算机专业，在之后学习规划，选择放弃了升本计划，更注重提升编程水平。大学生活下加入青年志愿协会的网宣部，在高中并在校内的网络服务站的技术部工作影响下，有一定的实践经验和兴趣，如ps海报制作或pr的视频处理。还有兼职的电信业务服务，推销工作、业务处理、数据整合，赚钱man",
          img_src: "",
        },
        {
          sub_title: "2022-2024",
          main_title: "丰富life",
          explain: "其他 设计 游玩",
          sum_content: "学习之外是休息",
          main_content:
            "值得一提，高中起有设计方面的兴趣，以下呈现曾经做过的设计；日常也希望游玩，了解其他地域的风土人情；运动偏爱羽毛球，日常跑步或瑜伽等有氧运动提高身体素质；同时欣赏一些优秀文艺作品，包括影视、动漫、音乐；热爱且积极生活。",
          img_src: "",
        },
      ],
    };
  },
  created() {
    // 预加载图片
    this.loadImages();
  },
  computed: {
    total() {
      const result = this.articles.length;
      return result < 10 ? "0" + result : result;
    },
    num() {
      return this.index < 10 ? "0" + this.index : this.index;
    },
  },
  methods: {
    loadImages() {
      try {
        // 在这里预加载所有图片
        this.images.lqtzs = require("@/assets/img/article/lqtzs.jpg");
        this.images.qx = require("@/assets/img/article/qx.jpg");
        this.images.dx = require("@/assets/img/article/dx.png");
        this.images.jx = require("@/assets/img/article/jx.jpg");
        this.images.xyms = require("@/assets/img/article/xyms.gif");
        this.images.jqsj1 = require("@/assets/img/article/jqsj1.gif");
        this.images.sf = require("@/assets/img/article/sf.gif");
        this.images.dgb = require("@/assets/img/article/dgb.gif");
        this.images.sm = require("@/assets/img/article/sm.gif");
        this.images.twm = require("@/assets/img/article/twm.gif");
        this.images.lqb = require("@/assets/img/article/lqb.gif");
        this.images.oneplusx = require("@/assets/img/article/1+x.gif");
        this.images.jz = require("@/assets/img/article/jz.gif");
        this.images.xm = require("@/assets/img/article/xm.jpg");
        this.images.jd = require("@/assets/img/article/jd.jpg");
        this.images.sj = require("@/assets/img/article/sj.jpg");
        this.images.daxue = require("@/assets/img/article/daxue.png");
        this.images.sx = require("@/assets/img/article/sx.jpg");
        
        // 为文章设置图片路径
        this.articles[0].img_src = this.images.sx;
        this.articles[2].img_src = this.images.jx;
        this.articles[3].img_src = this.images.xyms;
        this.articles[4].img_src = this.images.jqsj1;
        this.articles[5].img_src = this.images.sf;
        this.articles[6].img_src = this.images.dgb;
        this.articles[8].img_src = this.images.sm;
        this.articles[9].img_src = this.images.twm;
        this.articles[10].img_src = this.images.lqb;
        this.articles[11].img_src = this.images.oneplusx;
        this.articles[12].img_src = this.images.jz;
        this.articles[13].img_src = this.images.xm;
        this.articles[14].img_src = this.images.jd;
        this.articles[15].img_src = this.images.daxue;
        this.articles[16].img_src = this.images.sj;
      } catch (error) {
        console.error('图片加载失败:', error);
      }
    },
    add() {
      this.index++;
      if (this.index >= this.articles.length) {
        this.index = 0;
      }
    },
    desc() {
      this.index--;
      if (this.index < 0) {
        this.index = this.articles.length - 1;
      }
    },
  },
};
</script>

<style scoped>
@import url("@/assets/css/zdy/zdyArticle.css");
</style>