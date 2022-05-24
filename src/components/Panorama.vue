<script setup>
import { ref, watch } from "vue";
import "pannellum";
import "pannellum/build/pannellum.css";

const props = defineProps(["src"]);
const panoramaRef = ref(null);

// Postpone panorama until the container div is created.
watch(panoramaRef, () => {
  window.pannellum.viewer(panoramaRef.value, {
    type: "equirectangular",
    autoLoad: true,
    autoRotate: false,
    yaw: -0,
    pitch: 30,
    showZoomCtrl: false,
    panorama: props.src,
  });
});
</script>

<template>
  <div id="panorama" ref="panoramaRef"></div>
</template>
