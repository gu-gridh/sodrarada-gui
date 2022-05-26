<script setup>
import { useRoute, useRouter } from "vue-router";
import useStrapi from "@/composables/strapi";
import useStore from "@/store";
import Panorama from "@/components/Panorama.vue";
import "@/assets/item.css";

const props = defineProps(["imageType"]);
const { params } = useRoute();
const { remoteObject } = useStrapi();
const store = useStore();
const { go } = useRouter();
const image = remoteObject(`images/${params.id}`);

const personName = (person) =>
  [person.firstname, person.lastname].filter(Boolean).join(" ");
</script>

<template>
  <div v-if="image.id">
    <div id="item-top-image" style="text-align:center">
    <div v-if="props.imageType == 'panorama'" id="item-top-pano">
      <Panorama :src="'https://sodrarada.dh.gu.se/api' + image.image.url" />
    </div>
    <img
      v-else
      :src="'https://sodrarada.dh.gu.se/api' + image.image.url"
      :alt="image.image.alt"
      style="height:100%;"
    />
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
        Skapare: <span>{{ image.creator.map(personName).join(", ") }}</span>
        <br />
        Licens: <span>Creative Commons 4.0 / PD</span> <br />
      </div>


      <div id="filter-container" style="width:100%; float:left; margin-bottom:30px;">
        <div
          v-for="keyword in image.keywords"
          :key="keyword.id"
          class="filtertag"
        >
          {{ keyword.label }}
        </div>
      </div>

      <a :href="'https://sodrarada.dh.gu.se/api' + image.image.url">
        <div class="download-container" style="width:100%; float:left;">
          <div class="download-button"></div>
          <div class="download-label">Ladda ner bild</div>
        </div>
      </a>
      <br />

      <div class="section-title" style="margin-top: 70px; width:100%; float:left;">Relaterat</div>

      <div class="related-gallery"></div>
    </div>
  </div>
</template>

<style></style>
