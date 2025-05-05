<template>
  <div class="back">
    <div id="me">
      <ZDYCard></ZDYCard>
    </div>
    <div id="work">
      <ZDYWork></ZDYWork>
    </div>
    <div id="article">
      <ZDYArticle></ZDYArticle>
    </div>
  </div>
</template>

<script setup>
import ZDYCard from "@/components/ZDY/ZDYCard.vue";
import ZDYWork from "@/components/ZDY/ZDYWork.vue";
import ZDYArticle from "@/components/ZDY/ZDYArticle.vue";
</script>

<style scoped>
@import url("@/assets/css/zdy/public.css");
.back {
  position: relative;
  background-color: var(--back-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* 垂直排列子元素 */
  min-height: 200vh;
  scroll-behavior: smooth; /* 添加平滑滚动效果 */
}

#me, #work, #article {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-margin-top: 2rem; /* 添加滚动边距，防止内容被遮挡 */
}
</style>