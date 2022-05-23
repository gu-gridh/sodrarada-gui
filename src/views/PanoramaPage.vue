<script setup>
import { remoteObject } from "../strapi";
import "@/assets/item.css";
import "@/assets/pannellum/pannellum.js";
import "@/assets/pannellum/pannellum.css";

const props = defineProps(["id"]);

const image = remoteObject(`images/${props.id}`);

const pannellum = window.pannellum;

const personName = (person) =>
  [person.firstname, person.lastname].filter(Boolean).join(" ");
</script>

<template>
  <div v-if="image.id">
    <div id="item-top-image" style="display: none"></div>
    <div id="item-top-video" style="display: none"></div>

    <div id="item-top-pano">
      <div id="panorama">
        <img :src="'https://sodrarada.dh.gu.se/api' + image.image.url" alt="" />
      </div>
      <!-- {{
        pannellum.viewer("panorama", {
          type: "equirectangular",
          autoLoad: true,
          autoRotate: false,
          yaw: -0,
          pitch: 30,
          showZoomCtrl: false,
          panorama: "https://sodrarada.dh.gu.se/api" + image.image.url,
        })
      }} -->
    </div>

    <div v-if="pannellum" id="metadata">
      <a href="../snowhill.html">
        <div id="item-back"></div>
      </a>

      <div class="section-title">{{ image.subject }}</div>

      <div class="meta-article-solo" style="margin-top: 20px">
        {{ image.description }}
      </div>

      <div class="section-title">Specifikationer</div>

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

      <div id="filter-container" style="width:100%; float:left;">
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
      <br>
       <br>

      <div class="section-title" style="margin-top: 70px; width:100%; float:left;">Relaterat</div>

      <div class="related-gallery"></div>
    </div>
  </div>
</template>

<style></style>
