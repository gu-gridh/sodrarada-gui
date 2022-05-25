<template>
  <div id="top-container" style="margin-left: 100px; overflow: hidden">
    <div class="archive-model">
      <ThreeDViewer />
    </div>
    <div id="archive-title">S&ouml;dra R&aring;da Arkiv</div>
  </div>
  <div id="main-container" style="padding: 0px 30px 30px 100px">
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
    <div id="filter-section" style="width: 100%; float: left; height:auto">
      <div id="filter-container" style="float: left; height:auto">
        <div
          class="filtertag"
          :class="{ activeTag: !store.keywordFilter }"
          @click="store.filterByKeywordId(null)"
        >
          Hela arkivet
        </div>
        <div
          v-for="keyword in keywordsSorted"
          class="filtertag"
          :class="{ activeTag: store.keywordFilter == keyword.id }"
          @click="store.filterByKeywordId(keyword.id)"
        >
          #{{ keyword.label }}
        </div>
      </div>
    </div>

    <div
      v-show="!expanded"
      id="archive-container"
      style="
        padding: 30px 50px 0 0;
        margin-top: 0px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
      "
    >
      <div
        class="archive-column"
        style="min-width: 170px"
        id="photomoderncolumn"
      >
        <div class="archive-column-top">
          <div class="archive-column-title">Rekonstruktion</div>
          <div class="all-button" @click="expanded = 'reconstruction'">
            Se alla
          </div>
        </div>

        <div
          v-for="image in photos.slice(0, LIMIT)"
          class="archive-column-item"
        >
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>
      </div>

      <div class="archive-column" style="min-width: 160px" id="photohistcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Historisk</div>
          <div class="all-button" @click="expanded = 'historical'">Se alla</div>
        </div>

        <div
          v-for="image in orderByDate(historical_photograph).slice(0, LIMIT)"
          class="archive-column-item"
        >
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>
      </div>

      <div class="archive-column" style="min-width: 160px" id="photomixcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Fotografier</div>
          <div class="all-button" @click="expanded = 'photos'">Se alla</div>
        </div>

        <div
          v-for="image in orderByDate(photosMix).slice(0, LIMIT)"
          class="archive-column-item"
        >
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>
      </div>

      <div class="archive-column" id="drawingcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Avbildningar</div>
        </div>
        <div
          v-for="image in orderByDate(paintings).slice(0, LIMIT)"
          class="archive-column-item"
        >
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>
      </div>

      <div class="archive-column" id="blueprintcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Uppritningar</div>
        </div>

        <div
          v-for="image in orderByDate(blueprints).slice(0, LIMIT)"
          class="archive-column-item"
        >
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>
      </div>

      <div
        class="archive-column"
        style="min-width: 180px"
        id="blueprint-drawingcolumn"
      >
        <div class="archive-column-top">
          <div class="archive-column-title">Uppritningar</div>
        </div>
        <div
          v-for="image in orderByDate(drawingsMix).slice(0, LIMIT)"
          class="archive-column-item"
        >
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>
      </div>

      <div class="archive-column" id="filmcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Filmer</div>
        </div>
        <div
          v-for="video in orderByDate(videos).slice(0, LIMIT / 2)"
          class="archive-column-item"
        >
          <router-link :to="'/video/' + video.id">
            <img
              v-if="video.image"
              :src="'https://sodrarada.dh.gu.se/api' + video.image.url"
              alt="video.title"
            />
          </router-link>
        </div>

        <div class="archive-column-top" style="margin-top: 30px">
          <div class="archive-column-title">Digitala modeller</div>
        </div>

        <div
          v-for="model in orderByDate(models).slice(0, LIMIT / 2)"
          class="archive-column-item"
        >
          <router-link :to="'/model/' + model.id">
            <img
              v-if="model.image"
              :src="'https://sodrarada.dh.gu.se/api' + model.image.url"
              alt="video.title"
            />
          </router-link>
        </div>
      </div>

      <div class="archive-column-documents" id="documentcolumn">
        <div class="archive-column-top">
          <div class="archive-column-title">Projektdokument</div>
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
              v-for="document in orderByDate(documents)"
              :href="`https://sodrarada.dh.gu.se/api${document.file.url}`"
            >
              <div class="archive-column-document-item">
                <div class="archive-column-document-icon"></div>
                <div class="archive-column-document-info">
                  <div class="archive-column-document-title">
                    {{ document.title }}
                  </div>
                  <!-- <div class="archive-column-document-author">
                    F&ouml;rfattarnamn
                  </div> -->
                </div>
              </div>
            </a>
          </div>

          <!-- <div
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
          </div> -->
        </div>
      </div>
    </div>

<div style="padding:30px 50px 0 0; float:left; min-height:400px;">
    <div v-show="expanded" id="expanded" style="clear: both">
      <div v-if="expanded === 'reconstruction'">
        <div class="archive-column-top" >
          <div class="archive-column-title">Rekonstruktion</div>
          <div class="all-button" @click="expanded = ''">Fäll ihop</div>
        </div>

        <masonry-wall
          :items="orderByDate(photos)"
          :column-width="200"
          :gap="16"
        >
          <template #default="{ item, index }">
            <div class="archive-column-item">
              <router-link :to="'/image/' + item.id">
                <img
                  :src="`https://sodrarada.dh.gu.se/api/${item.image.formats.small.url}`"
                  :alt="item.description"
                />
              </router-link>
            </div>
          </template>
        </masonry-wall>
      </div>

      <div v-if="expanded === 'historical'">
        <div class="archive-column-top">
          <div class="archive-column-title">Historisk</div>
          <div class="all-button" @click="expanded = ''">Fäll ihop</div>
        </div>

        <masonry-wall
          :items="orderByDate(historical_photograph)"
          :column-width="200"
          :gap="16"
        >
          <template #default="{ item, index }">
            <div class="archive-column-item">
              <router-link :to="'/image/' + item.id">
                <img
                  :src="`https://sodrarada.dh.gu.se/api/${item.image.formats.small.url}`"
                  :alt="item.description"
                />
              </router-link>
            </div>
          </template>
        </masonry-wall>
      </div>

      <div v-if="expanded === 'photos'">
        <div class="archive-column-top" style="">
          <div class="archive-column-title">Fotografier</div>
          <div class="all-button" @click="expanded = ''">Fäll ihop</div>
        </div>

        <masonry-wall
          :items="orderByDate(photosMix)"
          :column-width="200"
          :gap="16"
        >
          <template #default="{ item, index }">
            <div class="archive-column-item">
              <router-link :to="'/image/' + item.id">
                <img
                  :src="`https://sodrarada.dh.gu.se/api/${item.image.formats.small.url}`"
                  :alt="item.description"
                />
              </router-link>
            </div>
          </template>
        </masonry-wall>
      </div>
    </div>
  </div>
    </div>

  <div id="foot" style="float: left; width: 100%"></div>
</template>

<script setup>
import { ref, computed } from "vue";
import useStore from "@/store";
import useStrapi from "@/composables/strapi";
import "@/assets/archive.css";

const ThreeDViewer = () =>
  import(/* webpackChunkName: "3d" */ "@/components/ThreeDViewer.vue");

const LIMIT = 15;

const { remoteCollection, remoteFilteredCollection } = useStrapi();
const store = useStore();

// Keywords
const keywords = remoteCollection("keywords");
const keywordsSorted = computed(() =>
  [...keywords].sort((a, b) => a.label.localeCompare(b.label, "sv"))
);

// Photo collections
const photos = remoteFilteredCollection("images", {
  type: "photograph",
});
const historical_photograph = remoteFilteredCollection("images", {
  type: "historical_photograph",
});
const photosMix = computed(() => [...historical_photograph, ...photos]);

// Painting collections
const paintings = remoteFilteredCollection("images", {
  type: ["sketch", "painting"],
});
const blueprints = remoteFilteredCollection("images", {
  type: "blueprint",
});
const drawingsMix = computed(() => [...paintings, ...blueprints]);

// Other collections
const videos = remoteFilteredCollection("videos");
const models = remoteFilteredCollection("models");
const documents = remoteFilteredCollection("documents");

/** Order items by "about date" or creation date. */
function orderByDate(items) {
  const dateStr = (item) =>
    `${item.date.year || 3000} ${item.creation || "3000-01-01"}`;
  return [...items].sort((a, b) => dateStr(a).localeCompare(dateStr(b)));
}

/** Which column is expanded to full width. */
const expanded = ref("");
</script>



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
