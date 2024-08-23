<script setup>
import { useRoute, useRouter } from "vue-router";
import { watchEffect, watch, onUnmounted, ref, nextTick } from 'vue';
import OpenSeadragon from 'openseadragon';
import useStrapi from "@/composables/strapi";
import Footer from "@/components/Footer.vue";
import Panorama from "@/components/Panorama.vue";
import "@/assets/item.css";

const props = defineProps(["imageType"]);
const { remoteObject, remoteFilteredCollection } = useStrapi(); 
const { go } = useRouter();
const route = useRoute();

const relatedImages = ref([]); //store related images
const image = ref(null); //store the image object

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

const fetchImage = () => {
  image.value = remoteObject(`images/${route.params.id}`, {
    populate: "date,image,creator",
  });
};

watch(
  () => route.params.id,
  () => {
    fetchImage();
  },
  { immediate: true }
);

watchEffect(() => {
  if (image.value?.image && props.imageType !== 'panorama') {
    nextTick(() => {
      if (viewerElement.value) {
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
            url: image.value.image.url ? "https://sodrarada.dh.gu.se/backend" + image.value.image.url : null,
          },
        });

        if (image.value.type) {
          relatedImages.value = remoteFilteredCollection("images", {
            "filters[type][$eq]": image.value.type, 
            populate: "date,image",
          });
        }
      } else {
        console.warn('viewerElement is null');
      }
    });
  }
});

const orderByDate = (images) => {
  return [...images].sort((a, b) => new Date(b.date) - new Date(a.date));
};

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
      <div id="item-back" @click="$router.push('/archive')"></div>

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

      <div class="section-title" style="margin-top: 70px; margin-bottom: 40px; width: 100%; float: left">
        Relaterat
      </div>
  

      <div class="masonry-container">
        <masonry-wall
          :items="orderByDate(relatedImages)"
          :column-width="200"
          :gap="16"
        >
        <template #default="{ item, index }">
          <div v-if="item && item.id" class="archive-column-item">
            <router-link :to="'/image/' + item.id">
              <img
                :src="`https://sodrarada.dh.gu.se/backend${item.image?.formats?.small?.url}`"
                :alt="item.description || ''"
              />
            </router-link>
          </div>
        </template>
        </masonry-wall>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.masonry-container {
  width: 100%; 
  height: 800px;
  margin: 0 auto; 
  box-sizing: border-box;
  padding-right: 75px;
  overflow: hidden;
}

.archive-column-item img {
  width: 100%; 
  height: auto;
  display: block;
}

.archive-column-item {
  min-height: 10px;
  height: auto;
 }

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
