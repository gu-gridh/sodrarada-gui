<script setup>
  import Footer from "@/components/Footer.vue";

  const scrollToSites = () => {
    const element = document.querySelector('.timeline-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<template>
  <div id="site-container" style="overflow-x: hidden; width: 100%">
    <div id="topgraphics-bg" style="pointer-events: none">
      <div id="topgraphics" style="pointer-events: none"></div>
    </div>

    <div id="srlogotype" style=""></div>

    <div class="intro-container" style="">
      <div class="articletext" style="margin-top: 30px">


        Under tidig medeltid fanns i Södra Råda en liten stavkyrka med långhus och kor.

        I början av 1300-talet fälldes träden till det som skulle bli stommen till en ny timmerkyrka.
        Kyrkan bemålades invändigt på väggar och tak, från början i koret och senare under 1400-talet även i långhuset.

        <p>Under 1800-talet revs många äldre medeltida träkyrkor.
          Befolkningstillväxt och kyrkoidealen efterfrågade nya och större kyrkobyggnader.
          På 1840-talet var det aktuellt även i Södra Råda att ersätta den gamla träkyrkan med en modern kyrka i sten.
          Timmerkyrkans och inte minst målningarnas kulturvärden fick samtidigt nationell och
          internationell uppmärksamhet genom den svenske folkloristen och konstnären Nils Månsson Mandelgren.
          En ny stenkyrka invigdes i Södra Råda 1859, och den gamla timmerkyrkan köptes året därpå av Kungliga
          Vitterhetsakademien,
          avkonsekrerades och kom så att bli Sveriges första museikyrka.
          1975 överlät Kungliga Vitterhetsakademien Södra Råda gamla kyrka till staten, att förvaltas genom
          Riksantikvarieämbetet. </p>

        <p>2001 brann timmerkyrkan ned till grunden i ett pyromandåd.
          Kyrkans dåvarande ägare Riksantikvarieämbetet beslutade att den skulle rekonstrueras
          ”som ett pedagogiskt exempel för att ge nytt hantverkskunnande och kunskap om vår medeltida historia.”
          Efter branden gjordes utgrävningar och förundersökningar innan byggnadsarbetet startade 2006.
          Rekonstruktionen har drivits som ett forskningsprojekt med den centrala frågan:
          Hur gick det till att bygga en kyrka i trä på medeltiden?</p>




      </div>
    </div>

    <router-link to="/archive">
      <div class="label-image" style=""></div>
    </router-link>
    <div class="label" style="margin-top: 5px; cursor: pointer">
      <router-link to="/archive">G&aring; till arkivet</router-link>
    </div>

    <div class="label" style="margin-top: 10px; cursor: pointer" @click="scrollToSites">
      Rekonstruktionen
    </div>

    <div class="scroll bounce" style=""></div>

    <div class="timeline-container" style="margin-top: 50px">
      <div class="timeline-leftside">
        <div class="timeline-date">1323</div>
      </div>
      <div class="timeline-main">
        <div class="timeline-circle-container">
          <div class="timeline-circle" id="timeline-circle-1326" style="">
            <video width="500" height="500" autoplay loop muted playsinline>
              <source src="@/assets/graphics/1300animation.mp4" type="video/mp4" />
              <!-- <source src="@/assets/graphics/1326.webm" type="video/webm" /> -->
            </video>
          </div>
        </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info lowered">
          De historiska omständigheterna kring kyrkan är oklara.
          Timrets fällningsår är daterat med dendrokronologi till perioden 1302–1309.
          Kormålningarna är från 1323 enligt en inskription på den västra korväggen.

          <p>Kyrkorummet var ursprungligen sparsmakat inrett, enligt vår tids uppfattning.
            Det fanns en ingång från söder, en portal med dekor skuren direkt i timmerväggen.
            Ett par högt sittande fönster mot söder gav ljus i långhuset.
            Både långhus och kor hade rumstäckande treklövervalv men endast koret var bemålat.
            En liten öppning förband rummen, och församlingen som höll till i långhuset kunde endast ana vad som
            företogs i koret. </p>

        </div>
        <div class="timeline-infographics-container">
          <div class="timeline-infographics">
            <router-link to="/panorama/109">
              <img src="@/assets/graphics/1300navepanorama.jpg" alt="Panorama: Navet"
                class="timeline-infographics-image-secondary" />
            </router-link>
            <div class="timeline-infographics-label" style="">Långskeppet</div>
          </div>

          <div class="timeline-infographics">
            <router-link to="/panorama/108">
              <img src="@/assets/graphics/1300chancelpanorama.jpg" alt="Panorama: Koret"
                class="timeline-infographics-image-secondary" />
            </router-link>
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
      
      <div class="timeline-main" style="height: 150px">
        <img src="@/assets/graphics/amundicon.jpg" class="timeline-infographics-image" />
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          Under senmedeltiden bemålades även långhusets väggar och valv med religiösa motiv.
          Målningarna är signerade Mäster Amund med dateringen 1494. Hur konstruktionen och
          rummet i övrigt förändrades går inte att belägga med historiska källor.
          De äldsta kyrkoräkenskaperna är från 1683. Ytterväggarna hade sannolikt klätts med långa stavspån.
          Invid kyrka fanns troligtvis en klockstapel i trä och kyrkogården avgränsades av en timrad bogårdsmur.
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
      <div class="timeline-main" style="height: 130px">
        <img src="@/assets/graphics/painting2.jpg" class="timeline-infographics-image" />
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          Det är osäkert när öppningen mellan långhus och kor förstoras,
          men de abrupt avkapade motiven i Mäster Amunds målningar antyder att det skedde efter 1494.
          Förändringarna under 1600-talet följer ett programenligt mönster för protestantismen,
          med fast bänkinredning och fler och större fönster.
          En predikstol byggdes upp i långhusets nordöstra hörn 1689 med en smal passage från sakristian.
          Sydportalen sattes igen och huvudingången genom vapenhuset placerades i stället mot väster. En vinkällare
          grävdes under sakristian.
        </div>
      </div>
      <div></div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="margin-top: 0px">
      <div class="timeline-leftside">
        <div class="timeline-date">1700</div>
      </div>
      <div class="timeline-main">
        <div class="timeline-circle-container">
        <div id="timeline-circle-1750" class="timeline-circle">
          <video width="500" height="500" autoplay loop muted playsinline>
            <source src="@/assets/graphics/1700animation.mp4" type="video/mp4" />
            <!-- <source src="@/assets/graphics/1326.webm" type="video/webm" /> -->
          </video>
        </div>
      </div>
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info" style="">
          På 1700-talet skedde flera förändringar. En ny altaruppsats tar plats 1707.
          En läktare uppförs 1723 i långhusets bakre del för att skapa mer plats åt en växande församling.
          Ytterligare fönster tas upp, och 1728 även en direktingång till koret som förses med ett eget litet vapenhus.
        </div>
        <div class="timeline-infographics-container">
          <div class="timeline-infographics">
            <router-link to="/panorama/111">
              <img src="@/assets/graphics/1700navepanorama.jpg" alt="Panorama: Navet"
                class="timeline-infographics-image-secondary" />
            </router-link>
            <div class="timeline-infographics-label" style="">Långskeppet</div>
          </div>

          <div class="timeline-infographics" style="">
            <router-link to="/panorama/110">
              <img src="@/assets/graphics/1700chancelpanorama.jpg" alt="Panorama: Koret"
                class="timeline-infographics-image-secondary" />
            </router-link>
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
        <img src="@/assets/graphics/painting3.jpg" alt="" class="timeline-infographics-image" />
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          <p>
          </p>
          Vid en renovering 1893 lades kyrkan på ny stenfot och vinkällaren i sakristian fylldes igen.
          Tak och fönster reparerades. De största ingreppen gjordes med motiv att återskapa ett medeltida
          utseende genom att korportalen sattes igen och det lilla vapenhuset revs liksom den bakre läktare.
        </div>
      </div>
      <div></div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="margin-top: 0px">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="">1913</div>
      </div>
      <div class="timeline-main" style="height: 260px">
        <img src="@/assets/graphics/1913ikon.jpg" alt="" class="timeline-infographics-image" />
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">


          1908 stod Nordiska museet i färd att flytta kyrkan till Skansen i Stockholm.
          Folkopinionen i Södra Råda gjorde motstånd och tog hjälp av självaste kungen.
          Kyrkan skulle inte flyttas, utan bevaras på plats.
          Ägaren gick lokalbefolkningen tillmötes och 1913 genomförde i stället en omfattande restaurering.
          Från 1922 tillåts församlingen att använda kyrkan för religiösa ändamål, först för en midsommargudstjänst och
          senare även för dop och bröllop.


        </div>
      </div>
      <div></div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" style="">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="">1981</div>
      </div>
      <div class="timeline-main" style="height: 150px">
        <img src="@/assets/graphics/1995still.jpg" alt="" class="timeline-infographics-image" />
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented" style="">
          Kormålningarna konserverades 1981-83 av konservator Hans-Peter Hedlund för Riksantikvarieämbetet.
          Målningarnas motiv och pigment dokumenteras ingående.
        </div>
        <div class="timeline-infographics-container-indented" style="width: 150px">
          <div class="timeline-infographics">
            <router-link to="/panorama/107">
              <img src="@/assets/graphics/1995hedlundpanorama.jpg" alt=""
                class="timeline-infographics-image-secondary" />
            </router-link>
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
        <div class="timeline-circle-container">
        <div class="timeline-circle" id="timeline-circle-2001">
          <video width="500" height="500" autoplay loop muted playsinline>
            <!-- <source src="@/assets/graphics/1326.mp4" type="video/mp4" /> -->
            <!-- <source src="@/assets/graphics/1326.webm" type="video/webm" /> -->
          </video>
        </div>
      </div>
    </div>
      <div class="timeline-rightside">
        <div class="timeline-info" style="">
          Södra Råda gamla kyrka brann ner till grunden den 11 november 2001 i ett pyromandåd.
          Kyrkans dåvarande ägare Riksantikvarieämbetet beslutade att den skulle rekonstrueras ”som ett pedagogiskt
          exempel för att ge nytt hantverkskunnande och kunskap om vår medeltida historia.”
          En gärningsman dömdes senare till mordbrand, ”enär kyrkan var en ovärderlig kulturbyggnad och del av det
          svenska kulturarvet”.
        </div>
      </div>
    </div>

    <div class="timeline-container">
      <div class="timeline"></div>
    </div>

    <div class="timeline-container" id="reconstruction" style="margin-top: 0px">
      <div class="timeline-leftside" style="">
        <div class="timeline-date-indented" style="margin-right: -100px">
          2006-2021
        </div>
      </div>
      <div class="timeline-main" style="height: auto">
        <img src="@/assets/graphics/rek1.jpg" alt="" class="timeline-infographics-image" />
      </div>
      <div class="timeline-rightside">
        <div class="timeline-info-indented lowered">
          Efter branden 2001 företogs arkeologiska utgrävningar och förundersökningar.
          Bevarade träbyggnader från medeltiden och museisamlingar med byggnadsmaterial och historiska verktyg
          studerades i detalj.
          Rekonstruktionen startade 2006 och har bedrivits som ett forskningsprojekt vid Göteborgs universitet. Skogen
          och byggarbetsplatsen har fungerat som ett laboratorium för praktiska försök.
          Antaganden om arbetsmetoder, verktyg och konstruktioner har prövats i full skala.
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
        <div class="timeline-circle-container">
        <div class="timeline-circle" id="timeline-circle-2021" style="">
          <video width="500" height="500" autoplay loop muted playsinline>
            <!-- <source src="@/assets/graphics/1326.mp4" type="video/mp4" /> -->
            <!-- <source src="@/assets/graphics/1326.webm" type="video/webm" /> -->
          </video>
        </div>
      </div>
    </div>
      <div class="timeline-rightside">
        <div class="timeline-info" style="">
          Södra Råda Timmerkyrka invigdes den fjärde juni 2022.
        </div>
        <div class="timeline-infographics-container">
          <div class="timeline-infographics">
            <router-link to="/panorama/109">
              <img src="@/assets/graphics/1300navepanorama.jpg" alt="" class="timeline-infographics-image-secondary" />
            </router-link>
            <div class="timeline-infographics-label" style="">Långskeppet</div>
          </div>

          <div class="timeline-infographics" style="">
            <router-link to="/panorama/108">
              <img src="@/assets/graphics/1300chancelpanorama.jpg" alt=""
                class="timeline-infographics-image-secondary" />
            </router-link>
            <div class="timeline-infographics-label" style="">Koret</div>
          </div>
        </div>
      </div>
    </div>

    <div class="archive-link" style="margin-top: 50px; margin-bottom: 100px">
      <router-link to="/archive">Arkivet</router-link>
    </div>
  </div>
  <Footer />
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