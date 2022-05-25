<script setup>
import { computed } from "vue";
import useStore from "@/store";
import useStrapi from "@/composables/strapi";
import "@/assets/archive.css";

const { remoteCollection, remoteFilteredCollection } = useStrapi();
const store = useStore();

const keywords = remoteCollection("keywords");
const keywordsSorted = computed(() =>
  [...keywords].sort((a, b) => a.label.localeCompare(b.label, "sv"))
);
const videos = remoteFilteredCollection("videos");
const models = remoteFilteredCollection("models");
const photos = remoteFilteredCollection("images", {
  type: "photograph",
});
const sketches = remoteFilteredCollection("images", {
  type: "sketch",
});
const blueprints = remoteFilteredCollection("images", {
  type: "blueprint",
});
const paintings = remoteFilteredCollection("images", {
  type: "painting",
});
const historical_photograph = remoteFilteredCollection("images", {
  type: "historical_photograph",
});
const documents = remoteFilteredCollection("documents");
</script>

<template>
  <div id="top-container" style="margin-left: 100px; overflow: hidden">
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
    <div id="filter-section" style="width: 100%; float: left">
      <div id="filter-container">
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
      id="archive-container"
      style="
        padding: 30px 50px 0 0;
        margin-top: 30px;
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
          <div class="all-button">Se alla</div>
        </div>

        <div v-for="image in photos" class="archive-column-item">
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
          <div class="all-button">Se alla</div>
        </div>

        <div v-for="image in historical_photograph" class="archive-column-item">
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
          <div class="all-button">Se alla</div>
        </div>

        <div v-for="image in historical_photograph" class="archive-column-item">
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>
        <div v-for="image in photos" class="archive-column-item">
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
        <div v-for="image in paintings" class="archive-column-item">
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>

        <div v-for="image in sketches" class="archive-column-item">
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

        <div v-for="image in blueprints" class="archive-column-item">
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
        <div v-for="image in paintings" class="archive-column-item">
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>

        <div v-for="image in sketches" class="archive-column-item">
          <router-link :to="'/image/' + image.id">
            <img
              :src="`https://sodrarada.dh.gu.se/api/${image.image.formats.small.url}`"
              :alt="image.description"
            />
          </router-link>
        </div>
        <div v-for="image in blueprints" class="archive-column-item">
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
        <div v-for="video in videos" class="archive-column-item"></div>

        <div class="archive-column-top" style="margin-top: 30px">
          <div class="archive-column-title">Digitala modeller</div>
        </div>

        <div v-for="model in models" class="archive-column-item"></div>
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
              v-for="document in documents.slice(0, documents.length / 2)"
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
