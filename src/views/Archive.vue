<script setup>
import { ref, computed } from "vue";
import useStore from "@/store";
import useStrapi from "@/composables/strapi";
import "@/assets/archive.css";
import ThreeDViewer from "@/components/ThreeDViewer.vue";
import Footer from "@/components/Footer.vue";

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
  "filters[type][$eq]": "photograph",
  populate: "date,image",
});
const historical_photograph = remoteFilteredCollection("images", {
  "filters[type][$eq]": "historical_photograph",
  populate: "date,image",
});
const photosMix = computed(() => [...historical_photograph, ...photos]);

// Painting collections
const paintings = remoteFilteredCollection("images", {
  "filters[type][$eq]": ["sketch", "painting"],
  populate: "date,image",
});
const blueprints = remoteFilteredCollection("images", {
  "filters[type][$eq]": "blueprint",
  populate: "date,image",
});
const drawingsMix = computed(() => [...paintings, ...blueprints]);

// Other collections
const videos = remoteFilteredCollection("videos", {
  populate: "date,image",
});
const models = remoteFilteredCollection("models", {
  populate: "date,image",
});
const documents = remoteFilteredCollection("documents", {
  populate: "date,image,file",
});

/** Order items by "about date" or creation date. */
function orderByDate(items) {
  const dateStr = (item) =>
    `${item.date.year || 3000} ${item.creation || "3000-01-01"}`;
  return [...items].sort((a, b) => dateStr(a).localeCompare(dateStr(b)));
}

/** Which column is expanded to full width. */
const expanded = ref("");
</script>

<template>
  <div id="top-container" style="padding-left: 100px; overflow: hidden">
    <div id="archive-model" style="z-index: 0">
      <ThreeDViewer />
    </div>
    <div id="archive-title">S&ouml;dra R&aring;da Arkiv</div>
  </div>
  <div id="main-container" style="padding: 0px 30px 30px 100px">
    <router-link to="/"> <div id="back"></div></router-link>
    <div id="archive-article-short">
      Arkivet samlar och gör tillgängligt digitiserat<br />
      material rörande Södra Råda gamla kyrka, samt dokumentation <br />
      i form av fotografier, filmer och rapporter som beskriver den process
      <br />
      som ligger bakom rekonstruktionen. Filtrera materialet med hjälp av
      nyckelorden<br />
      nedan, eller klicka på ”Visa alla" för att utforska allt material i en
      särskild kategori.
    </div>

    <div id="filter-section" style="width: 100%; float: left; height: auto">
      <div id="filter-container" style="float: left; height: auto; z-index: 2">
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

    <div style="min-height: 800px">
      <div
        v-show="!expanded"
        id="archive-container"
        style="
          padding: 30px 50px 0 0;
          margin-top: 0px;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          max-height: 2300px;
          overflow: hidden;
          margin-bottom: 50px;
        "
      >
      <div class="gradient-overlay"></div>
        <div class="archive-column" id="photomoderncolumn">
          <div class="archive-column-top">
            <div class="archive-column-title">Fotografier</div>
            <div class="all-button" @click="expanded = 'reconstruction'">
              Visa alla
            </div>
          </div>

          <div
            v-for="image in photos.slice(0, LIMIT)"
            class="archive-column-item"
          >
            <router-link :to="'/image/' + image.id">
              <img
                :src="`https://sodrarada.dh.gu.se/backend${image.image.formats.small.url}`"
                :alt="image.description"
              />
            </router-link>
          </div>
        </div>

        <div class="archive-column" id="photohistcolumn">
          <div class="archive-column-top">
            <div class="archive-column-title">Äldre fotografier</div>

            <div class="all-button" @click="expanded = 'historical'">
              Visa alla
            </div>
          </div>

          <div
            v-for="image in orderByDate(historical_photograph).slice(0, LIMIT)"
            class="archive-column-item"
          >
            <router-link :to="'/image/' + image.id">
              <img
                :src="`https://sodrarada.dh.gu.se/backend${image.image.formats.small.url}`"
                :alt="image.description"
              />
            </router-link>
          </div>
        </div>

        <div class="archive-column" id="photomixcolumn">
          <div class="archive-column-top">
            <div class="archive-column-title">Fotografier</div>
            <div class="all-button" @click="expanded = 'photos'">Visa alla</div>
          </div>

          <div
            v-for="image in orderByDate(photosMix).slice(0, LIMIT)"
            class="archive-column-item"
          >
            <router-link :to="'/image/' + image.id">
              <img
                :src="`https://sodrarada.dh.gu.se/backend${image.image.formats.small.url}`"
                :alt="image.description"
              />
            </router-link>
          </div>
        </div>

        <div class="archive-column" id="drawingcolumn">
          <div class="archive-column-top">
            <div class="archive-column-title">Avbildningar</div>
            <div class="all-button" @click="expanded = 'drawings'">
              Visa alla
            </div>
          </div>
          <div
            v-for="image in orderByDate(paintings).slice(0, LIMIT)"
            class="archive-column-item"
          >
            <router-link :to="'/image/' + image.id">
              <img
                :src="`https://sodrarada.dh.gu.se/backend${image.image.formats.small.url}`"
                :alt="image.description"
              />
            </router-link>
          </div>
        </div>

        <div class="archive-column" id="blueprintcolumn">
          <div class="archive-column-top">
            <div class="archive-column-title">Uppritningar</div>
            <div class="all-button" @click="expanded = 'blueprints'">
              Visa alla
            </div>
          </div>

          <div
            v-for="image in orderByDate(blueprints).slice(0, LIMIT)"
            class="archive-column-item"
          >
            <router-link :to="'/image/' + image.id">
              <img
                :src="`https://sodrarada.dh.gu.se/backend${image.image.formats.small.url}`"
                :alt="image.description"
              />
            </router-link>
          </div>
        </div>

        <div class="archive-column" id="blueprint-drawingcolumn">
          <div class="archive-column-top">
            <div class="archive-column-title">Uppritningar</div>
            <div class="all-button" @click="expanded = 'blueprint-drawing'">
              Visa alla
            </div>
          </div>
          <div
            v-for="image in orderByDate(drawingsMix).slice(0, LIMIT)"
            class="archive-column-item"
          >
            <router-link :to="'/image/' + image.id">
              <img
                :src="`https://sodrarada.dh.gu.se/backend${image.image.formats.small.url}`"
                :alt="image.description"
              />
            </router-link>
          </div>
        </div>

        <div
          class="archive-column"
          id="dividercolumn"
          style="min-width: 20px; max-width: 20px"
        ></div>

        <div class="archive-column" id="filmcolumn">
          <div class="archive-column-top">
            <div class="archive-column-title">Filmer</div>
            <div class="all-button" @click="expanded = 'videomodels'">
              Visa alla
            </div>
          </div>
          <div
            v-for="video in orderByDate(videos).slice(0, LIMIT * 2)"
            class="archive-column-item-videomodel"
          >
            <a :href="video.url" target="_blank">
              <img
                v-if="video.image"
                :src="'https://sodrarada.dh.gu.se/backend' + video.image.url"
                alt="video.title"
              />
            </a>
            <div class="archive-column-item-label">{{ video.title }}</div>
            <div class="archive-column-item-label-small">7 minuter</div>
          </div>

          <div class="archive-column-top" style="margin-top: 30px">
            <div class="archive-column-title">Modeller</div>
          </div>

          <div
            v-for="model in orderByDate(models).slice(0, LIMIT * 2)"
            class="archive-column-item-videomodel"
          >
            <router-link :to="'/model/' + model.id">
              <img
                v-if="model.image"
                :src="'https://sodrarada.dh.gu.se/backend' + model.image.url"
                alt="model.title"
              />
            </router-link>
            <div class="archive-column-item-label">{{ model.title }}</div>
            <div class="archive-column-item-label-small">
              Texturerad trådmodell
            </div>
          </div>
        </div>

        <div class="archive-column-documents" id="documentcolumn">
          <div class="archive-column-top">
            <div class="archive-column-title">Projektdokument</div>
            <div class="all-button" @click="expanded = 'documents'">
              Visa alla
            </div>
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
                v-for="document in orderByDate(documents).slice(0, LIMIT * 2)"
                :href="`https://sodrarada.dh.gu.se/backend${document.file.url}`"
              >
                <div class="archive-column-document-item">
                  <div class="archive-column-document-icon">
                    <img
                      v-if="document.image"
                      :src="
                        'https://sodrarada.dh.gu.se/backend' +
                        document.image.url
                      "
                      alt="Miniatyrbild"
                    />
                    <img
                      v-else
                      src="@/assets/graphics/article1icon.jpg"
                      alt="Defaultminiatyr för dokument"
                    />
                  </div>
                  <div class="archive-column-document-info">
                    <div class="archive-column-document-title">
                      {{ document.title }}
                    </div>
                    <div
                      class="archive-column-item-label-small"
                      style="margin-top: 5px"
                    >
                      PDF - 1.2mb
                    </div>
                    <!-- <div class="archive-column-document-author">
                    F&ouml;rfattarnamn
                  </div> -->
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--  Below are the expanded galleries -->

      <div
        v-show="expanded"
        id="expanded"
        style="clear: both; padding: 30px 80px 0 0"
      >
        <div v-if="expanded === 'reconstruction'">
          <div class="archive-column-top">
            <div class="archive-column-title">Fotografier</div>
            <div class="all-button" @click="expanded = ''">Fäll ihop</div>
            <div class="info-button">i</div>
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
                    :src="`https://sodrarada.dh.gu.se/backend${item.image.formats.small.url}`"
                    :alt="item.description"
                  />
                </router-link>
              </div>
            </template>
          </masonry-wall>
        </div>

        <div v-if="expanded === 'historical'">
          <div class="archive-column-top">
            <div class="archive-column-title">Äldre fotografier</div>
            <div class="all-button" @click="expanded = ''">Fäll ihop</div>
            <div class="info-button">i</div>
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
                    :src="`https://sodrarada.dh.gu.se/backend${item.image.formats.small.url}`"
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
            <div class="info-button">i</div>
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
                    :src="`https://sodrarada.dh.gu.se/backend${item.image.formats.small.url}`"
                    :alt="item.description"
                  />
                </router-link>
              </div>
            </template>
          </masonry-wall>
        </div>

        <div v-if="expanded === 'drawings'">
          <div class="archive-column-top">
            <div class="archive-column-title">Avbildningar</div>
            <div class="all-button" @click="expanded = ''">Fäll ihop</div>
            <div class="info-button">i</div>
          </div>

          <masonry-wall
            :items="orderByDate(paintings)"
            :column-width="200"
            :gap="16"
          >
            <template #default="{ item, index }">
              <div class="archive-column-item">
                <router-link :to="'/image/' + item.id">
                  <img
                    :src="`https://sodrarada.dh.gu.se/backend${item.image.formats.small.url}`"
                    :alt="item.description"
                  />
                </router-link>
              </div>
            </template>
          </masonry-wall>
        </div>

        <div v-if="expanded === 'blueprints'">
          <div class="archive-column-top">
            <div class="archive-column-title">Avbildningar</div>
            <div class="all-button" @click="expanded = ''">Fäll ihop</div>
            <div class="info-button">i</div>
          </div>

          <masonry-wall
            :items="orderByDate(blueprints)"
            :column-width="200"
            :gap="16"
          >
            <template #default="{ item, index }">
              <div class="archive-column-item">
                <router-link :to="'/image/' + item.id">
                  <img
                    :src="`https://sodrarada.dh.gu.se/backend${item.image.formats.small.url}`"
                    :alt="item.description"
                  />
                </router-link>
              </div>
            </template>
          </masonry-wall>
        </div>

        <div v-if="expanded === 'blueprint-drawing'">
          <div class="archive-column-top">
            <div class="archive-column-title">Avbildningar</div>
            <div class="all-button" @click="expanded = ''">Fäll ihop</div>
            <div class="info-button">i</div>
          </div>

          <masonry-wall
            :items="orderByDate(paintings)"
            :column-width="200"
            :gap="16"
          >
            <template #default="{ item, index }">
              <div class="archive-column-item">
                <router-link :to="'/image/' + item.id">
                  <img
                    :src="`https://sodrarada.dh.gu.se/backend${item.image.formats.small.url}`"
                    :alt="item.description"
                  />
                </router-link>
              </div>
            </template>
          </masonry-wall>

          <masonry-wall
            :items="orderByDate(blueprints)"
            :column-width="200"
            :gap="16"
          >
            <template #default="{ item, index }">
              <div class="archive-column-item">
                <router-link :to="'/image/' + item.id">
                  <img
                    :src="`https://sodrarada.dh.gu.se/backend${item.image.formats.small.url}`"
                    :alt="item.description"
                  />
                </router-link>
              </div>
            </template>
          </masonry-wall>
        </div>

        <div v-if="expanded === 'videomodels'">
          <div class="archive-column-top">
            <div class="archive-column-title">Filmer och modeller</div>
            <div class="all-button" @click="expanded = ''">Fäll ihop</div>
            <div class="info-button">i</div>
          </div>

          <masonry-wall
            :items="orderByDate(video)"
            :column-width="200"
            :gap="16"
          >
            <template #default="{ item, index }">
              <div class="archive-column-item">
                <router-link :to="'/video/' + video.id">
                  <img
                    v-if="video.image"
                    :src="
                      'https://sodrarada.dh.gu.se/backend' + video.image.url
                    "
                    alt="video.title"
                  />
                </router-link>
                <div class="archive-column-item-label">{{ video.title }}</div>
                <div class="archive-column-item-label-small">7.37 minuter</div>
              </div>
            </template>
          </masonry-wall>

          <masonry-wall
            :items="orderByDate(model)"
            :column-width="200"
            :gap="16"
          >
            <template #default="{ item, index }">
              <div class="archive-column-item">
                <router-link :to="'/model/' + model.id">
                  <img
                    v-if="model.image"
                    :src="
                      'https://sodrarada.dh.gu.se/backend' + model.image.url
                    "
                    alt="model.title"
                  />
                </router-link>
                <div class="archive-column-item-label">{{ model.title }}</div>
                <div class="archive-column-item-label-small">
                  Texturerad trådmodell
                </div>
              </div>
            </template>
          </masonry-wall>
        </div>

        <div v-if="expanded === 'documents'">
          <div class="archive-column-top">
            <div class="archive-column-title">Projektdokument</div>
            <div class="all-button" @click="expanded = ''">Fäll ihop</div>
            <div class="info-button">i</div>
          </div>

          <div class="archive-column-documents-expanded">
            <a
              v-for="document in orderByDate(documents)"
              :href="`https://sodrarada.dh.gu.se/backend${document.file.url}`"
            >
              <div class="archive-column-document-expanded-item">
                <div class="archive-column-document-icon">
                  <img
                    v-if="document.image"
                    :src="
                      'https://sodrarada.dh.gu.se/backend' + document.image.url
                    "
                    alt="Miniatyrbild"
                  />
                  <img
                    v-else
                    src="@/assets/graphics/article1icon.jpg"
                    alt="Defaultminiatyr för dokument"
                  />
                </div>
                <div class="archive-column-document-info">
                  <div class="archive-column-document-title" style="">
                    {{ document.title }}
                  </div>
                  <div
                    class="archive-column-item-label-small"
                    style="margin-top: 5px"
                  >
                    PDF - 1.2mb
                  </div>
                  <div class="archive-column-document-author"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
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

.archive-column-item-videomodel {
  min-height: 10px;
  height: auto;
}
.archive-column-item-videomodel img {
  display: block;
  width: 100%;
}

.gradient-overlay {
  height: 200px;
  width: 90%;
  z-index: 100;
  margin-top: 2100px;
  position: absolute;
  background: linear-gradient(0deg, rgba(252, 249, 240, 1) 0%, rgba(252, 249, 240, 0) 90%);
  pointer-events: none;
}

</style>
