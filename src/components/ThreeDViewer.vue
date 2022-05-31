<template>
  <model-viewer
    class="model-viewer"
    reveal="interaction"
    loading="auto"
    :src="baseUrl + 'scene.gltf'"
    alt="3d-modell av Södra Råda"
   
    camera-controls
    disable-zoom
    camera-orbit="40deg 65deg 26.5m"
    exposure="1.0"
    skyboxangle="0"
    shadows="false"
    shadow-intensity="0"
    shadow-softness="0"
    ar-status="not-presenting"
  >
    <div id="lazy-load-poster" slot="poster"></div>
    <div id="button-load" slot="poster">
      <div id="button-load-label">
        Klicka här <br />
        för att ladda in modellen
      </div>
    </div>
  </model-viewer>
</template>

<script setup>
import "@google/model-viewer";
import "focus-visible";

const baseUrl = import.meta.env.BASE_URL;
</script>

<style scoped>
.model-viewer {
  height: 100%;
  width: 100%;
  z-index:1;
  --progress-bar-color: rgba(0, 0, 0, 1);
  --progress-bar-height: 10px;
  --progress-mask: fff;
  --poster-color: transparent;
  --progress-mask: transparent;
}

#lazy-load-poster {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: url("@/assets/graphics/3dplaceholder.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#button-load {
  background-color: rgba(255, 255, 255, 0.8);
  height: 150px;
  width: 150px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: calc(50% - 75px);
  top: calc(50% - 75px);
  transform: translate3d(-50%, -50%, 0);
  z-index: 100;
  transition: all 0.2s ease-in-out;
  animation: pulse 2s infinite;
}

#button-load-label {
   font-family: 'Teko', sans-serif;
  color: black;
  padding: 10px;
  font-size: 30px;
  text-align: center;
  font-weight: 300;
  margin-top: 12%;
   line-height: 1.0;
   padding: 20px 10px 50px 10px;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.95);
  }
}
</style>
