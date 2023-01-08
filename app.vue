<script setup>
const state = reactive({
  images: [],
});

const res = await fetch("http://localhost:3000/api/gallery");

res.json().then((images) => {
  state.images = images;
});
</script>

<template>
  <main>
    <h1>ヽ(♡‿♡)ノ</h1>
    <div v-for="(image, index) in state.images" :key="index">
      <img :src="image" />
    </div>
  </main>
</template>

<style>
* {
  font-weight: normal;
}
body {
  padding: 0;
  margin: 0;
  font-family: monospace;
  color: white;
}
h1 {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 64px;
}
img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
main {
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(black, #111);
}
</style>
