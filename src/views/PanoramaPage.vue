<script setup>
import { remoteObject } from "../strapi";

const props = defineProps(["id"]);

const image = remoteObject(`images/${props.id}`);
</script>

<template>
  <div v-if="image.id">
    <div>
      <img
        :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.large.url}`"
        alt=""
      />
    </div>
    <div>{{ image.subject }}</div>
    <div>{{ image.description }}</div>
    <div>{{ image.creation }}</div>
    <div>{{ image.stage }}</div>
    <div>{{ image.source }}</div>
    <div>{{ image.type }}</div>
    <div>{{ image.iiif }}</div>
    <div>{{ image.isPanorama }}</div>
    <div>
      {{ image.date.year }}, {{ image.date.approximate }},
      {{ image.date.uncertain }}
    </div>
    <div>{{ image.image.name }}</div>
    <div>{{ image.image.alternativeText }}</div>
    <div>{{ image.image.width }}</div>
    <div>{{ image.image.height }}</div>
  </div>
</template>

<style></style>
