<script setup>
import { useRoute, useRouter } from "vue-router";
import { remoteObject } from "../strapi";
import Panorama from "@/components/Panorama.vue";
import "@/assets/item.css";

const props = defineProps(["imageType"]);
const { params } = useRoute();
const { go } = useRouter();
const image = remoteObject(`images/${params.id}`);

const personName = (person) =>
  [person.firstname, person.lastname].filter(Boolean).join(" ");
</script>

<template>
  <div v-if="image.id">
    <div id="item-top-image" style="display: none"></div>
    <div id="item-top-video" style="display: none"></div>

    <div v-if="props.imageType == 'panorama'" id="item-top-pano">
      <Panorama :src="'https://sodrarada.dh.gu.se/api' + image.image.url" />
    </div>
    <img
      v-else
      :src="'https://sodrarada.dh.gu.se/api' + image.image.url"
      :alt="image.image.alt"
      style="width: 100%"
    />

    <div id="metadata">
      <div id="item-back" @click="go(-1)"></div>

      <div class="section-title">{{ image.subject }}</div>

      <div class="meta-article-solo" style="margin-top: 20px">
        {{ image.description }}
      </div>

      <div class="section-title">Specifikationer</div>

      <div class="meta-container">
        Datering: <span>{{ image.date && image.date.year }}</span> <br />
        Upplösning:
        <span>{{ image.image.width }} x {{ image.image.height }}</span> <br />
        Skapare: <span>{{ image.creator.map(personName).join(", ") }}</span>
        <br />
        Licens: <span>Creative Commons 4.0 / PD</span> <br />
      </div>

      <div id="filter-container">
        <div
          v-for="keyword in image.keywords"
          :key="keyword.id"
          class="filtertag"
        >
          {{ keyword.label }}
        </div>
      </div>

      <a :href="'https://sodrarada.dh.gu.se/api' + image.image.url">
        <div class="download-container">
          <div class="download-button"></div>
          <div class="download-label">Ladda ner bild</div>
        </div>
      </a>
      <br />

      <div class="section-title" style="margin-top: 70px">Relaterat</div>

      <div class="related-gallery"></div>
    </div>
  </div>
</template>

<style></style>
