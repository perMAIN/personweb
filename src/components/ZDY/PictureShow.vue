<template>
  <div class="pictures">
    <div v-for="index in indices" :key="index" class="picture-item">
      <img :src="getImagePath(index + 1)" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureShow",
  data() {
    return {
      indices: Array.from({ length: 8 }, (_, i) => i),
    };
  },
  methods: {
    getImagePath(index) {
      return require(`@/assets/img/img/${index}.jpg`);
    },
  },
};
</script>

<style scoped>
@import url("@/assets/css/zdy/pictureShow.less");

.pictures {
  position: relative;
  width: 100%;
  height: 90%; /* 高度从100%减小到90%，给关闭按钮留出空间 */
  /* 设置两边阴影 */
  -webkit-mask-image: linear-gradient(to right, #0000, #000, #000, #0000);
  display: flex;
  /* 设置间距 */
  gap: 50px; /* 间距从100px减小到50px */
  align-items: center; /* 从start改为center，使图片垂直居中 */
  padding: 1vh;
  overflow-x: auto;
  
  .picture-item {
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;
    width: calc(25% - 25px); /* 宽度从30%减小到25% */
    height: 90%; /* 高度从100%减小到90% */
    background-color: var(--card-color);
    /* 设置宽高比 */
    aspect-ratio: 1;
    border-radius: 5px; /* 边框半径从2px增加到5px */
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
    transition: transform 0.3s; /* 添加过渡效果 */
    
    &:hover {
      transform: scale(1.05); /* 添加悬停放大效果 */
    }
  }
  
  img {
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover; /* 保持图片比例 */
    border: none;
    border-radius: 5px; /* 添加圆角与外层div一致 */
  }
  
  /* 设置滚动条的高度 */
  &::-webkit-scrollbar {
    height: 8px; /* 从16px减小到8px */
  }
  
  /* 设置滚动条的背景色 */
  &::-webkit-scrollbar-track {
    background-color: var(--card-color);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--but-color);
    border-radius: 4px; /* 从10px减小到4px */
  }
}
</style>