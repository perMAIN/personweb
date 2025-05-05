<template>
  <div class="work">
    <div class="box img1">
      <!-- <img src="../../assets/img/1.jpg" /> -->
      <div class="text">
        <header>
          <span class="title">NO.</span>
          <span class="num">1</span>
        </header>
        <p>初步完成功能需求分析、数据库设计、UML设计和扫码demo</p>
        <!-- <img src="@/assets/img/works/twm.gif" alt="" /> -->
        <!-- <video src="@/assets/img/works/twm.mp4" controls></video> -->
      </div>
    </div>
    <div class="box img2">
      <!-- <img src="../../assets/img/2.jpg" /> -->
      <div class="text">
        <header>
          <span class="title">NO.</span>
          <span class="num">2</span>
        </header>
        <p>
          初步完成功能与流程分析、整个服务架构成型、初步做了用户与提高界面交互、打包完成0.0.1版本
        </p>
        <!-- <video
          src="@/assets/img/works/bdj.mp4"
          controls
          ref="videoElement"
        ></video> -->
      </div>
    </div>
    <div class="box main">
      <div class="textbox">
        <h1>摊维码</h1>
        <hr />
        顾客或商家可通过扫描支付二维码，会生成基础的云店框架，可通过填写店铺信息或评价，即会生成于云店界面中，生成的云店信息可由通过扫描此码获取，实现大众互联。
        <br />
        后端：Spring Boot、MyBatis、MySQL<br />
        前端：UniApp + Vue.js、Axios (uniapp适配器)、微信小程序组件<br />
        demo功能：<br />
        （1）店铺管理：通过二维码获取店铺信息、店铺展示<br />
        （2）评价系统：用户评分与评价、回复与点赞功能、评分统计与热门标签<br />
        （3）界面功能：首页、店铺详情页、评价详情页<br />
        <img src="@/assets/img/works/twmUML.png" alt="" />
        <br />
        <br />
        <h1>锦观视界</h1>
        <hr />
        结业毕设研究课题是基于机器视觉，促进八段锦陪练智能化。
        <br />
        后端：Python、Flask、MediaPipe姿态检测、OpenCV视频处理、NumPy数据处理<br>
        前端：Electron、Vue.js、Element Plus、Vue Router<br>
        功能：8种动作评估、摄像头实时捕获分析、前后端通过HTTP通信、Electron打包Python后端为可执行程序<br />
        <img src="@/assets/img/works/bdjUML.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "ZDYWork",
  setup() {
    const videoElement = ref(null);

    onMounted(() => {
      // 设置固定音量，例如设置为0.4（40%音量）
      if (videoElement.value) {
        videoElement.value.volume = 0.4;
      }
    });

    return {
      videoElement,
    };
  },
};
</script>
 

<style scoped>
@import url("@/assets/css/zdy/zdyWork.less");
</style>