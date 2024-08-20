<script setup>
import { useRoute, useRouter } from "vue-router";
import { watchEffect, onUnmounted, ref } from 'vue';
import OpenSeadragon from 'openseadragon';
import useStrapi from "@/composables/strapi";
import Footer from "@/components/Footer.vue";
import useStore from "@/store";
import Panorama from "@/components/Panorama.vue";
import "@/assets/item.css";

const props = defineProps(["imageType"]);
const { params } = useRoute();
const { remoteObject } = useStrapi();
const store = useStore();
const { go } = useRouter();
const image = remoteObject(`images/${params.id}`, {
  populate: "date,image,creator",
});

const personName = (person) =>
  [person.firstname, person.lastname].filter(Boolean).join(" ");

const getCreators = (creator) => {
  if (Array.isArray(creator)) {
    return creator.map(personName).join(", ");
  } else if (creator && typeof creator === "object") {
    return personName(creator);
  } else {
    return "";
  }
};

const viewerElement = ref(null); //DOM element
const viewer = ref(null); //openSeadragon instance

watchEffect(() => {
  if (image.image && props.imageType !== 'panorama' && viewerElement.value) {
    if (viewer.value) {
      viewer.value.destroy();
    }

    viewer.value = OpenSeadragon({
      element: viewerElement.value,
      zoomInButton: "zoom-in",
      zoomOutButton: "zoom-out",
      fullPageButton: "full-page",
      showHomeControl: false,
      tileSources: {
        type: 'image',
        url: image.image.url ? "https://sodrarada.dh.gu.se/backend" + image.image.url : null
      },
    });
  }
});

onUnmounted(() => {
  if (viewer.value) {
    viewer.value.destroy();
    viewer.value = null;
  }
});
</script>

<template>
  <div v-if="image.id">
    <div id="item-top-image" style="text-align: center">
    <div v-if="props.imageType == 'panorama'" id="item-top-pano">
      <Panorama :src="'https://sodrarada.dh.gu.se/backend' + image.image.url" />
    </div>
    <template v-else>
      <div ref="viewerElement" id="openseadragon-viewer" style="height: 100%"></div>
      <div id="ToolbarVertical">
        <a id="full-page" href="#full-page">
          <div id="FullPage" class="NavButton"></div>
        </a>
        <a id="zoom-in" href="#zoom-in">
          <div id="ZoomIn" class="NavButton"></div>
        </a>
        <a id="zoom-out" href="#zoom-out">
          <div id="ZoomOut" class="NavButton"></div>
        </a>
      </div>
    </template>
    </div>
    <div id="item-top-video" style="display: none"></div>

    <div id="metadata">
      <div id="item-back" @click="go(-1)"></div>

      <div class="section-title">{{ image.subject }}</div>

      <div class="meta-article-solo" style="margin-top: 20px">
        {{ image.description }}
      </div>

      <div class="meta-section-title">Specifikationer</div>

      <div class="meta-container">
        Datering: <span>{{ image.date && image.date.year }}</span> <br />
        Upplösning:
        <span>{{ image.image.width }} x {{ image.image.height }}</span> <br />
      </div>
      <div class="meta-container">
        Skapare:
        <span>{{ getCreators(image.creator) }}</span>
        <br />
        Licens: <span>Creative Commons 4.0 / PD</span> <br />
      </div>

      <div id="filter-container" style="width: 100%; float: left; margin-bottom: 30px">
        <div v-for="keyword in image.keywords" :key="keyword.id" class="filtertag">
          {{ keyword.label }}
        </div>
      </div>

      <a :href="'https://sodrarada.dh.gu.se/backend' + image.image.url">
        <div class="download-container" style="width: 100%; float: left">
          <div class="download-button"></div>
          <div class="download-label">Ladda ner bild</div>
        </div>
      </a>
      <br />

      <div class="section-title" style="margin-top: 70px; width: 100%; float: left">
        Relaterat
      </div>

      <div class="related-gallery"></div>
    </div>
  </div>
  <Footer />
</template>

<style>
#ZoomIn {
  background: url(@/assets/graphics/plus.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(35, 35, 35, 0.9);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-top: 10px;
  cursor: pointer;
  overflow: hidden;
}

#ZoomOut {
  background: url(@/assets/graphics/minus.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(35, 35, 35, 0.9);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-top: 10px;
  cursor: pointer;
  overflow: hidden;
}

#FullPage {
  background: url(@/assets/graphics/expand.svg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(35, 35, 35, 0.9);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  margin-top: 10px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.NavButton {
  width: 35px;
  height: 35px;
  color: white;
  opacity: 1;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

.NavButton:hover {
  opacity: 0.8;
  cursor: pointer;
}

#ToolbarVertical {
  position: absolute;
  top: 10px;
  width: 60px;
  margin-left: 10px;
  z-index: 1000;
  cursor: pointer;
}
</style>
