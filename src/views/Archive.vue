<script setup>
import "@/assets/archive.css";
import { reactive } from "vue";

const range = (n) => [...Array(n).keys()];

async function getVideos() {
  const response = await fetch("https://sodrarada.dh.gu.se/api/videos");
  return await response.json();
}
const videos = reactive([]);
getVideos().then((items) => videos.push(...items));

async function getModels() {
  const response = await fetch("https://sodrarada.dh.gu.se/api/models");
  return await response.json();
}
const models = reactive([]);
getModels().then((items) => models.push(...items));

async function getImages(type) {
  const params = new URLSearchParams({ type });
  const response = await fetch(
    "https://sodrarada.dh.gu.se/api/images?" + params
  );
  return await response.json();
}

const photos = reactive([]);
getImages("photograph").then((items) => photos.push(...items));

const sketches = reactive([]);
getImages("sketch").then((items) => sketches.push(...items));

const blueprints = reactive([]);
getImages("blueprint").then((items) => blueprints.push(...items));

async function getDocuments() {
  const response = await fetch("https://sodrarada.dh.gu.se/api/documents");
  return await response.json();
}
const documents = reactive([]);
getDocuments().then((items) => documents.push(...items));

async function getKeywords() {
  const response = await fetch("https://sodrarada.dh.gu.se/api/keywords");
  return await response.json();
}
const keywords = reactive([]);
getKeywords().then((items) => keywords.push(...items.slice(0, 10)));
</script>

<template>
  <div
    id="top-container"
    style="margin-left: 100px; overflow: hidden; width: 100%"
  >
    <div id="archive-model">
      <div id="archive-model-loader">
        <div id="archive-model-loader-label">
          Klicka h&auml;r<br />
          f&ouml;r att ladda in <br />
          modellen<br />
        </div>
      </div>
    </div>
    <div id="archive-title">S&ouml;dra R&aring;da Arkiv</div>
  </div>
  <div id="main-container" style="margin-left: 100px">
    <router-link to="/"> <div id="back"></div></router-link>
    <div id="archive-article-short">
      Lorem ipsum dolor sit amet, consectetur <br />
      adipiscing elit. Pellentesque vel consectetur <br />
      odio, vel semper felis. Quisque pharetra laoreet <br />
      magna sed luctus. Etiam ultricies vehicula leo, at <br />
      molestie eros consectetur a. Vivamus vestibulum consequat <br />
      ex, sit amet lobortis felis gravida id. Vestibulum suscipit, augue<br />
      vitae rutrum sodales, ex nunc dignissim nunc, non suscipit <br />
      eros velit vestibulum mauris.
    </div>

    <div id="archive-article-long" style="display: none">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel
      consectetur odio, vel semper felis. Quisque pharetra laoreet magna sed
      luctus. Etiam ultricies vehicula leo, at molestie eros consectetur a.
      Vivamus vestibulum consequat ex, sit amet lobortis felis gravida id.
      Vestibulum suscipit, augue vitae rutrum sodales, ex nunc dignissim nunc,
      non suscipit eros velit vestibulum mauris. Morbi blandit nisl eu sagittis
      fringilla. Pellentesque a augue at libero blandit iaculis. Proin ornare
      fringilla nunc, in accumsan lectus lobortis at. Pellentesque in purus at
      augue rutrum ultricies.
    </div>

    <div id="filter-container">
      <div class="filtertag activeTag">Hela arkivet</div>
      <div v-for="keyword in keywords" class="filtertag">
        #{{ keyword.label }}
      </div>
    </div>

    <div
      id="archive-container"
      style="
        margin-right: 30px;
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
      "
    >
      <div class="archive-column" id="filmcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Filmer</div>
          <div class="info-button">i</div>
        </div>
        <div v-for="video in videos" class="archive-column-item"></div>

        <div class="archive-column-top" style="margin-top: 30px">
          <div class="archive-column-title">Digital modell</div>
          <div class="info-button">i</div>
        </div>

        <div v-for="model in models" class="archive-column-item"></div>
      </div>

      <div class="archive-column" id="blueprintcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Ritningar</div>
          <div class="info-button">i</div>
        </div>

        <div v-for="image in blueprints" class="archive-column-item">
          <img
            :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
            :alt="image.description"
          />
        </div>
      </div>

      <div class="archive-column" id="drawingcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Teckningar</div>
          <div class="info-button">i</div>
        </div>

        <div v-for="image in sketches" class="archive-column-item">
          <img
            :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
            :alt="image.description"
          />
        </div>
      </div>

      <div class="archive-column" id="photocolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Fotografier</div>
          <div class="info-button">i</div>
        </div>

        <div v-for="image in photos" class="archive-column-item">
          <img
            :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
            :alt="image.description"
          />
        </div>
      </div>

      <div class="archive-column-documents">
        <div class="archive-column-top">
          <div class="archive-column-title">
            Rapporter, artiklar och dokument
          </div>
          <div class="info-button">i</div>
        </div>

        <div
          class="archive-column-documents-subcolumns"
          style="display: flex; flex-direction: row; flex-wrap: nowrap"
        >
          <div
            class="archive-column-documents-subcolumn"
            style="flex-grow: 1; flex-basis: 0"
          >
            <a
              v-for="document in documents.slice(0, documents.length / 2)"
              :href="`https://sodrarada.dh.gu.se/api${document.file.url}`"
            >
              <div class="archive-column-document-item">
                <div class="archive-column-document-icon"></div>
                <div class="archive-column-document-info">
                  <div class="archive-column-document-title">
                    {{ document.title }}
                  </div>
                  <div class="archive-column-document-author">
                    F&ouml;rfattarnamn
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div
            class="archive-column-documents-subcolumn"
            style="flex-grow: 1; flex-basis: 0"
          >
            <div
              v-for="document in documents.slice(documents.length / 2)"
              class="archive-column-document-item"
            >
              <div class="archive-column-document-icon"></div>
              <div class="archive-column-document-info">
                <div class="archive-column-document-title">
                  {{ document.title }}
                </div>
                <div class="archive-column-document-author">
                  F&ouml;rfattarnamn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="foot" style="float: left; width: 100%"></div>
</template>

<style scoped>
.archive-column-item {
  min-height: 10px;
  height: auto;
}
.archive-column-item img {
  display: block;
  width: 100%;
}
</style>
