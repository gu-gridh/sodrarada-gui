<script setup></script>

<template>
  <div id="site-container" style="overflow-x: hidden; width: 100%">
    <div id="topgraphics-bg" style="">
      <div id="topgraphics" style=""></div>
    </div>

    <div id="srlogotype" style=""></div>

    <div class="intro-container" style="">
      <div class="articletext" style="margin-top: 30px">
        Södra Råda church was one of approximately twelve medieval log timber churches still preserved in Scandinavia, and was recognised foremost for its distinctive wall paintings, making it an important destination point for tourism in the region. 
        By the late nineteenth century the church had already been deconsecrated and transformed from a place of worship into a heritage museum. As such the building continued to serve the local community for events like concerts, weddings, and baptisms. 
        <p>Being an important node in the local community, the National Heritage Board took a decision that the church should be reconstructed as a pedagogical example to enhance craft practice and historical knowledge of medieval churches. The full-scale reconstruction of the timber building now  erected on the site focuses on the potential benefits of advancing research and developing skills in historical woodcraft procedures. </p>
      </div>
    </div>

    <a href="/archive">
      <div class="label-image" style=""></div>
    </a>
    <div class="label" style="margin-top: 5px; cursor: pointer">
      <a href="archive.html">G&aring; till arkivet</a>
    </div>

    <div
      class="label"
      style="margin-top: 10px; cursor: pointer"
      onclick="scrollToSites()"
    >
      Rekonstruktionen
    </div>

    <div class="scroll bounce" style=""></div>

    <div class="timeline-container" style="margin-top: 50px">
      <div class="timeline-leftside">
        <div class="timeline-date">1326</div>
      </div>
      <div class="timeline-main">
        <div class="timeline-circle" id="timeline-circle-1326">
          <video width="500" height="500" autoplay loop muted playsinline>
            <!-- <source src="@/assets/graphics/1326.mp4" type="video/mp4" /> -->
            <!-- <source src="@/assets/graphics/1326.webm" type="video/webm" /> -->
          </video>
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info" style="margin-top: 40px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel consectetur odio, vel semper felis. Quisque pharetra laoreet magna
          sed luctus. Etiam ultricies vehicula leo, at molestie eros
          consectetur.
        </div>
        <div class="timeline-infographics-container">
          <div class="timeline-infographics">
            <img
              src="@/assets/graphics/panorama3.jpg"
              alt="Panorama: Navet"
              class="timeline-infographics-image-secondary"
            />
            <div class="timeline-infographics-label" style="">Navet</div>
          </div>

          <div class="timeline-infographics">
            <img
              src="@/assets/graphics/panorama3.jpg"
              alt="Panorama: Koret"
              class="timeline-infographics-image-secondary"
            />
            <div class="timeline-infographics-label" style="">Koret</div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="margin-top: 0px">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="">1400</div>
      </div>
      <div class="timeline-main" style="height: 100px">
        <div class="timeline-picture">
          <img
            src="@/assets/graphics/panorama3.jpg"
            class="timeline-infographics-image"
          />
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel consectetur odio, vel semper felis. Quisque pharetra laoreet magna
          sed luctus.
        </div>
      </div>
      <div></div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="margin-top: 0px">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="">1600</div>
      </div>
      <div class="timeline-main" style="height: 150px">
        <div class="timeline-picture">
          <img
            src="@/assets/graphics/painting2.jpg"
            alt=""
            class="timeline-infographics-image"
          />
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          Pellentesque vel consectetur odio, vel semper felis. Quisque pharetra
          laoreet magna sed luctus.
        </div>
      </div>
      <div></div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="margin-top: 0px">
      <div class="timeline-leftside">
        <div class="timeline-date">1750</div>
      </div>
      <div class="timeline-main">
        <div id="timeline-circle-1750" class="timeline-circle">
          <video width="500" height="500" autoplay loop muted playsinline>
            <!-- <source src="@/assets/graphics/1326.mp4" type="video/mp4" /> -->
            <!-- <source src="@/assets/graphics/1326.webm" type="video/webm" /> -->
          </video>
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info" style="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel consectetur odio, vel semper felis. Quisque pharetra laoreet magna
          sed luctus. Etiam ultricies vehicula leo, at molestie eros
          consectetur.
        </div>
        <div class="timeline-infographics-container">
          <div class="timeline-infographics">
            <img
              src="@/assets/graphics/panorama3.jpg"
              alt="Panorama: Navet"
              class="timeline-infographics-image-secondary"
            />
            <div class="timeline-infographics-label" style="">Navet</div>
          </div>

          <div class="timeline-infographics" style="">
            <img
              src="@/assets/graphics/panorama3.jpg"
              alt="Panorama: Koret"
              class="timeline-infographics-image-secondary"
            />
            <div class="timeline-infographics-label" style="">Koret</div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="margin-top: 00px">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="">1800</div>
      </div>
      <div class="timeline-main" style="height: 150px">
        <div class="timeline-picture">
          <img
            src="@/assets/graphics/painting3.jpg"
            alt=""
            class="timeline-infographics-image"
          />
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          Phasellus et sapien auctor mi bibendum sagittis. Fusce magna dolor,
          fringilla nec orci at, suscipit luctus eros. Mauris fringilla, diam
          sit amet faucibus vehicula, orci est efficitur justo, tristique tempor
          ipsum ante congue orci.
        </div>
      </div>
      <div></div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="margin-top: 0px">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="">1909</div>
      </div>
      <div class="timeline-main" style="height: 100px">
        <div class="timeline-picture">
          <img
            src="@/assets/graphics/painting4.jpg"
            alt=""
            class="timeline-infographics-image"
          />
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          In tortor erat, facilisis sit amet metus non, lobortis tempor risus.
          Cras pretium venenatis nisi, at eleifend lacus iaculis eget.
        </div>
      </div>
      <div></div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="">1995</div>
      </div>
      <div class="timeline-main" style="height: 150px">
        <div class="timeline-picture">
          <img
            src="@/assets/graphics/1995still.jpg"
            alt=""
            class="timeline-infographics-image"
          />
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          Quisque pharetra laoreet magna sed luctus. Etiam ultricies vehicula
          leo, at molestie eros consectetur.
        </div>
        <div
          class="timeline-infographics-container-indented"
          style="width: 150px"
        >
          <div class="timeline-infographics">
            <img
              src="@/assets/graphics/panorama3.jpg"
              alt=""
              class="timeline-infographics-image-secondary"
            />
            <div class="timeline-infographics-label" style="">Koret</div>
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="margin-top: 0px">
      <div class="timeline-leftside">
        <div class="timeline-date">2001</div>
      </div>
      <div class="timeline-main">
        <div class="timeline-circle" id="timeline-circle-2001">
          <video width="500" height="500" autoplay loop muted playsinline>
            <!-- <source src="@/assets/graphics/1326.mp4" type="video/mp4" /> -->
            <!-- <source src="@/assets/graphics/1326.webm" type="video/webm" /> -->
          </video>
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info" style="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel consectetur odio, vel semper felis. Quisque pharetra laoreet magna
          sed luctus. Etiam ultricies vehicula leo, at molestie eros
          consectetur.
        </div>
      </div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" id="reconstruction" style="margin-top: 0px">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="margin-right: -100px">
          2002-2021
        </div>
      </div>
      <div class="timeline-main" style="height: 200px">
        <div class="timeline-picture">
          <img
            src="@/assets/graphics/2021still.jpg"
            alt=""
            class="timeline-infographics-image"
          />
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="margin-top: -20px">
          Quisque pharetra laoreet magna sed luctus. Etiam ultricies vehicula
          leo, at molestie eros consectetur.
        </div>
        <div
          class="timeline-infographics-container-indented"
          style="margin-bottom: 50px"
        >
          <div class="timeline-infographics">
            <img
              src="@/assets/graphics/2021still.jpg"
              alt=""
              class="timeline-infographics-image-secondary"
            />
          </div>

          <div class="timeline-infographics">
            <img
              src="@/assets/graphics/2021still.jpg"
              alt=""
              class="timeline-infographics-image-secondary"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="">
      <div class="timeline-leftside">
        <div class="timeline-date">2022</div>
      </div>
      <div class="timeline-main">
        <div class="timeline-circle" id="timeline-circle-2021" style="">
          <video width="500" height="500" autoplay loop muted playsinline>
            <!-- <source src="@/assets/graphics/1326.mp4" type="video/mp4" /> -->
            <!-- <source src="@/assets/graphics/1326.webm" type="video/webm" /> -->
          </video>
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info" style="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          vel consectetur odio, vel semper felis. Quisque pharetra laoreet magna
          sed luctus. Etiam ultricies vehicula leo, at molestie eros
          consectetur.
        </div>
        <div class="timeline-infographics-container">
          <div class="timeline-infographics">
            <img
              src="@/assets/graphics/panorama3.jpg"
              alt=""
              class="timeline-infographics-image-secondary"
            />
            <div class="timeline-infographics-label" style="">Navet</div>
          </div>

          <div class="timeline-infographics" style="">
            <img
              src="@/assets/graphics/panorama3.jpg"
              alt=""
              class="timeline-infographics-image-secondary"
            />
            <div class="timeline-infographics-label" style="">Koret</div>
          </div>
        </div>
      </div>
    </div>

    <div class="archive-link" style="margin-top: 100px; margin-bottom: 100px">
      <router-link to="/archive">Arkivet</router-link>
    </div>
  </div>
  <div
    style="
      font-family: 'Teko', sans-serif;
      font-weight: 300;
      color: rgba(0, 0, 0, 0);
      height: 0px;
      overflow: hidden;
    "
  >
    -
  </div>

  <div
    style="
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 100;
      color: rgba(0, 0, 0, 0);
      height: 0px;
      overflow: hidden;
    "
  >
    -
  </div>

  <div id="foot" style="float: left; width: 100%">-</div>
</template>

<style scoped>
img {
  display: block;
}
#timeline-circle-1326 {
  background-image: url(@/assets/graphics/1326still.jpg);
}
#timeline-circle-1750 {
  background-image: url(@/assets/graphics/1750still.jpg);
}
#timeline-circle-2001 {
  background-image: url(@/assets/graphics/2001still.jpg);
}
#timeline-circle-2021 {
  background-image: url(@/assets/graphics/2021still.jpg);
}
.timeline-infographics-image {
  width: 200px;
}
.timeline-infographics-image-secondary {
  width: 150px;
}
</style>
