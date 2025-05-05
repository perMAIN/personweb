<template>
  <!-- Font Awesome CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <!-- Tailwind CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  
  <div class="cardBack">
    <div class="shell">
      <!-- 标题-start -->
      <div class="title">
        <h4>渡月橘.编程世界.com</h4>
      </div>
      <!-- 标题-end -->
      
      <!-- 滚动标志-start -->
      <div class="slide">
        <div class="top">
          <div class="arrow-container">
            <i class="fas fa-chevron-up"></i>
            <div class="arrow-line"></div>
          </div>
        </div>
        <div class="bottons">
          <div class="botton one">
            <div class="line"></div>
            <span>1</span>
          </div>
          <div class="botton two">
            <div class="line"></div>
            <span>2</span>
          </div>
        </div>
        <div class="bottom">
          <div class="arrow-container">
            <div class="arrow-line"></div>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <!-- 滚动标志-end -->
      
      <!-- 主要内容-start -->
      <div class="main">
        <h2 class="hello">HELLO.</h2>
        <h2>Hi, It's <span>Orange Of DY</span></h2>
        <h3 class="typing-text">I'm a <span class="multiple-text"></span></h3>
        <div class="circle"></div>
      </div>
      <!-- 主要内容-end -->
      
      <!-- 导航栏-start -->
      <nav>
        <a href="https://github.com/perMAIN" target="_blank"> @</a>
        <a href="#article" @click.prevent="scrollToElement('article')"> article</a>
        <a href="#work" @click.prevent="scrollToElement('work')"> work</a>
        <a href="#me" @click.prevent="scrollToElement('me')" class="ss"> me</a>
      </nav>
      <!-- 导航栏-end -->
      
      <!-- 介绍-start -->
      <div class="content">
        <div class="flex flex-row">
          <div class="profile-section w-1/3">
            <h3 class="text-2xl font-bold mb-2">张 丹云</h3>
            <div class="text-gray-400 mb-2">
              <div class="flex flex-wrap items-center">
                <span class="badge">22届广航计应</span>
                <span class="badge">计算机爱好者</span>
                <span class="badge">专注软件开发</span>
              </div>
            </div>
          </div>
          
          <div class="info-section w-2/3 ml-6">
            <div class="text-sm leading-relaxed">
              <p class="intro-text mb-2">
                独立开发项目、社区协助搭建，也在其他项目上积累一些经验，并写入个人文章
              </p>
              <p class="intro-text">
                希望通过该网页，使更多人认识到我，交流讨论~
              </p>
            </div>
            <div class="flex items-center justify-between mt-3">
              <div class="contact-info flex items-center">
                <a href="mailto:1094977906@qq.com" class="contact-item flex items-center mr-3" title="1094977906@qq.com">
                  <i class="fas fa-envelope transition-colors duration-300"></i>
                </a>
                <a href="https://github.com/perMAIN" target="_blank" class="contact-item flex items-center" title="GitHub">
                  <i class="fab fa-github transition-colors duration-300"></i>
                </a>
              </div>
              <button class="btn transform hover:scale-105 transition-transform duration-300" @click="showPicture()">荣誉墙GO</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 介绍-end -->
      
      <!-- 照片墙模态窗口 - 移至shell级别 -->
      <PictureWindow ref="modalWindow" @close="handleClose"></PictureWindow>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Typed from "typed.js";
import PictureWindow from "./PictureWindow.vue";

export default {
  name: "ZDYCard",
  components: {
    PictureWindow,
  },
  mounted() {
    // 设置初始状态
    $(".shell .title h4").css({
      left: "50%",
      width: "140px",
      fontSize: "12.5px",
    });
    $(".shell").css({
      "background-color": "var(--card-color)",
      color: "var(--supple-font-color)",
    });
    $(".shell .slide .arrow-line").css({
      background: "var(--supple-font-color)",
    });
    $(".shell .slide i").css({
      color: "var(--supple-font-color)",
    });
    $(".shell .slide .bottons .one").css({
      width: "4.5px",
      height: "4.5px",
      "background-color": "var(--card-color)",
      "box-shadow": "0 0 0 3px var(--supple-font-color)",
    });
    $(".shell .slide .bottons .two").css({
      width: "6.5px",
      height: "6.5px",
      "background-color": "var(--supple-font-color)",
      "box-shadow": "0 0 0 3px var(--card-color)",
    });
    $(".shell nav a").css({
      color: "var(--supple-font-color)",
    });
    $(".shell nav .ss").css({
      borderBottomColor: "var(--supple-font-color)",
    });
    $(".shell .main .circle").css({
      border: "5px solid var(--supple-font-color)",
      boxShadow:
        "0px 0px 7.5px 4px var(--shard-color) inset,0px 0px 7.5px 5px rgba(0, 0, 0, 0.25)",
      transform: "translate(-200%, 70%)",
    });
    $(".shell .main h2,.shell .main h3").css({
      display: "block",
      opacity: 1,
      transform: "translate(-15%, 280%) scale(1)",
    });
    $(".shell .main .hello").css({
      display: "none",
      opacity: 0,
    });
    $(".shell .content").css({
      display: "none",
      opacity: 0,
      transform: "translateX(-30%) scale(0.95)",
    });

    this.setupScrollEvents();
    
    var typed = new Typed(".multiple-text", {
      strings: [
        "Web Design",
        "Developer",
        "DevOps Engineer",
        "AI Hobbyist",
        "Data Analyst",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  },
  methods: {
    showPicture() {
      // 在打开模态窗口前，确保内容区域显示并为模态窗口腾出空间
      $(".shell .content").css({
        opacity: 0.6, // 减少不透明度使其看起来变暗
        transform: "translateX(-30%) scale(0.98)" // 轻微缩小
      });
      
      // 打开模态窗口
      this.$refs.modalWindow.openModal();
      
      // 防止滚轮事件干扰模态窗口
      document.onmousewheel = null;
    },
    handleClose() {
      // 模态窗口关闭后，恢复原来的内容区域样式
      $(".shell .content").css({
        opacity: 1,
        transform: "translateX(-30%) scale(1)"
      });
      
      // 恢复滚轮事件处理
      this.setupScrollEvents();
    },
    scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    // 添加向上滚动效果的函数
    scrollUp() {
      $(".shell .title h4").css({
        left: "50%",
        width: "140px",
        fontSize: "12.5px",
      });
      $(".shell").css({
        "background-color": "var(--card-color)",
        color: "var(--supple-font-color)",
      });
      $(".shell .slide .arrow-line").css({
        background: "var(--supple-font-color)",
      });
      $(".shell .slide i").css({
        color: "var(--supple-font-color)",
      });
      $(".shell .slide .bottons .one").css({
        width: "4.5px",
        height: "4.5px",
        "background-color": "var(--card-color)",
        "box-shadow": "0 0 0 3px var(--supple-font-color)",
      });
      $(".shell .slide .bottons .two").css({
        width: "6.5px",
        height: "6.5px",
        "background-color": "var(--supple-font-color)",
        "box-shadow": "0 0 0 3px var(--card-color)",
      });
      $(".shell nav a").css({
        color: "var(--supple-font-color)",
      });
      $(".shell nav .ss").css({
        borderBottomColor: "var(--supple-font-color)",
      });
      $(".shell .main .circle").css({
        border: "5px solid var(--supple-font-color)",
        boxShadow:
          "0px 0px 7.5px 4px var(--shard-color) inset,0px 0px 7.5px 5px rgba(0, 0, 0, 0.25)",
        transform: "translate(-200%, 70%)",
      });
      $(".shell .main .banana").css({
        left: "-30px",
        width: "195px",
        height: "97.5px",
        top: "27.5px",
      });
      $(".shell .main h2,.shell .main h3").css({
        display: "block",
        opacity: 1,
        transform: "translate(-15%, 280%) scale(1)",
      });
      $(".shell .main .hello").css({
        display: "none",
        opacity: 0,
      });
      $(".shell .content").css({
        display: "none",
        opacity: 0,
        transform: "translateX(-30%) scale(0.95)",
      });
    },
    // 添加向下滚动效果的函数
    scrollDown() {
      $(".shell .title h4").css({
        left: "3%",
        width: "37.5px",
        fontSize: "8.75px",
      });
      $(".shell").css({
        "background-color": "var(--supple-font-color)",
        color: "var(--card-color)",
      });
      $(".shell .slide .arrow-line").css({
        background: "var(--card-color)",
      });
      $(".shell .slide i").css({
        color: "var(--card-color)",
      });
      $(".shell .slide .bottons .two").css({
        width: "4.5px",
        height: "4.5px",
        "background-color": "var(--supple-font-color)",
        "box-shadow": "0 0 0 3px var(--card-color)",
      });
      $(".shell .slide .bottons .one").css({
        width: "6.5px",
        height: "6.5px",
        "background-color": "var(--card-color)",
      });
      $(".shell nav a").css({
        color: "var(--card-color)",
      });
      $(".shell nav .ss").css({
        borderBottomColor: "var(--card-color)",
      });
      $(".shell .main .circle").css({
        border: "5px solid var(--card-color)",
        boxShadow:
          "0px 0px 7.5px 4px var(--shard-black-color) inset,0px 0px 7.5px 5px rgba(255, 255, 255, 0.25)",
        transform: "translate(-200%, 70%)",
      });
      $(".shell .main .banana").css({
        left: "152.5px",
        width: "50px",
        height: "25px",
        top: "105px",
      });
      $(".shell .main h2,.shell .main h3").css({
        display: "none",
        opacity: 0,
      });
      $(".shell .main .hello").css({
        display: "block",
        opacity: 1,
        transform: "translate(-150%, 150%) scale(1)",
      });
      $(".shell .content").css({
        display: "block",
        opacity: 1,
        height: "auto",
        transform: "translateX(-30%) scale(1)",
      });
    },
    setupScrollEvents() {
      const self = this;
      // 添加点击事件监听
      $(".shell .slide .top").click(function() {
        self.scrollUp();
      });
      $(".shell .slide .bottom").click(function() {
        self.scrollDown();
      });
      // 滚轮事件
      document.onmousewheel = function () {
        if (event.wheelDelta > 0) {
          self.scrollUp();
        }
        if (event.wheelDelta < 0) {
          self.scrollDown();
        }
      };
    }
  },
};
</script>

<style scoped>
@import url("@/assets/css/zdy/zdyCard.less");

.btn {
  position: relative;
  width: 70px;
  height: 22px;
  border-radius: 3px;
  border: 0.75px solid var(--but-color);
  font: 300 11px "banana";
  color: var(--but-color);
  letter-spacing: 0.75px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  padding: 0 8px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.btn:hover:before {
  left: 100%;
}

.btn:hover {
  background-color: var(--but-color);
  color: var(--card-color);
  box-shadow: 0 0 6.25px var(--but-color);
  transform: translateY(-2px);
}
</style>