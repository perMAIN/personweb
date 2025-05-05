<!-- ModalWindow.vue -->  
<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-window">
      <button @click="closeModal">X</button>
      <slot><PictureShow></PictureShow></slot>
      <!-- 用于插入窗口内容 -->
    </div>
  </div>
</template>  
  
<script>
import PictureShow from "./PictureShow.vue";
export default {
  name: "PictureWindow",
  components: {
    PictureShow,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    openModal() {
      this.isVisible = true;
    },
    closeModal() {
      this.isVisible = false;
      this.$emit("close"); // 触发关闭事件，通知父组件
    },
  },
};
</script>  
  
<style scoped>
@import url("@/assets/css/zdy/public.css");
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}
.modal-window {
  width: 90%;
  height: 90%;
  max-width: 1200px;
  max-height: 800px;
  margin: auto;
  background: rgba(75, 99, 96, 0.85);
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 2px 40px 10px var(--shard-color);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.modal-window button {
  position: absolute;
  top: 15px;
  right: 30px;
  background-color: rgba(75, 99, 96, 0);
  color: var(--card-color);
  font-weight: bold;
  font-size: 40px;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: color 0.3s, transform 0.3s;
}
.modal-window button:hover {
  color: var(--but-color);
  transform: scale(1.1) rotate(5deg);
  text-shadow: 0 0 10px var(--but-color);
}
</style>