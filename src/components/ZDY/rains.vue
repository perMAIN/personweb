<template>
  <div class="rains">
    <div class="cloud"></div>
    <img src="@/assets/img/cloud.gif" alt="" class="xxcloud" />
  </div>
</template>

<script>
// export default {
//   name: "rains",
//   mounted() {
//     function randomText() {
//       const text = "程序员的浪漫";
//       const letter = text[Math.floor(Math.random() * text.length)];
//       return letter;
//     }
//     function rain() {
//       const cloud = document.querySelector(".cloud");
//       const e = document.createElement("div");
//       const left = Math.floor(Math.random() * 480);
//       const size = Math.random() * 1.2 + 0.8;
//       const duration = Math.random() * 0.5 + 1.5;
//       const text = randomText();
//       e.classList.add("text");
//       e.innerText = text;
//       e.style.left = left + "px";
//       e.style.fontSize = 1.6 + size + "em";
//       e.style.animationDuration = duration + "s";
//       cloud.appendChild(e);
//       setTimeout(() => {
//         cloud.removeChild(e);
//       }, 2500);
//     }
//     setInterval(rain, 200);
//   },
// };
</script>

<style scoped>
@import url("@/assets/css/zdy/rains.less");
</style>