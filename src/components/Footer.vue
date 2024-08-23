<template>

  <div id="footer">
      <div id="developer-info">
        <div class="links-stack border-style">
          <a class="site-link link" href="https://www.gu.se/hantverkslaboratoriet" target="_blank">
            Hantverkslaboratoriet</a>
          <a class="site-link link" href="https://sodrarada.se/"
            target="_blank">Södra Råda Akademien</a>
        </div>
        <div class="links-stack">
          <a class="site-link link" href="https://www.gu.se/forskning/sodra-rada-gamla-kyrka-0" target="_blank">
            Projektet <i>Södra Råda Gamla Kyrka</i></a>
  
            <a class="download-link" href="" target="_blank">
              Texter: CC BY 4.0 |  Bilder: CC0 1.0</a>
  
        </div>
      </div>
      <div class="partners">
        <div class="partner partner-1">
          <a href="https://sodrarada.se/">
            <div class="PartnerLogo" id="">SÖDRA RÅDA KYRKA</div>
          </a>
        </div>
     
        <div class="partner partner-2">
        <a href="https://www.gu.se/hantverkslaboratoriet">
          <div class="PartnerLogo" id="">HANTVERKSLABORATORIET</div>
        </a>
      </div>
      <div class="partner partner-3">
        <a href="https://dh.gu.se/">
          <div class="GRIDHLogo" id="">GU / GRIDH</div>
        </a>
      </div>
      </div>
    </div>
  
  
   
  
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  #footer {
    background-color: #222;
    color: white;
    line-height: 1;
    height: 80px;
    width: calc(100% + 2px);
    font-size: 12px;
    position: fixed;
    z-index: 3000;
    bottom: 0px;
    font-family: "Barlow Condensed", sans-serif;
  }
  
  @media screen and (max-width: 950px) {
  #footer {
   display:none;
  }
  }
  
  a {
    font-weight: normal;
    color:white!important;
  }
  
  a:visited{
    color:white!important;
  }
  
  
  
    a:link {
      font-weight: bold;
      color: white !important;
      text-decoration: none;
    }
  
    a:visited {
      color: white !important;
    }
  
    a:hover {
      color: white !important;
    }
  
    a:hover {
      color: white !important;
    }
  
  
  
    .partners {
  
      position: fixed;
  display:flex;
  flex-direction:row;
      bottom: 0px;
      right: 0px;
      height: 80px;
    }
  
    @media screen and (max-width: 1250px) {
      .partner-1 {
   display:none;
  }
  }
  
    .GRIDHLogo {
      float: right;
      margin-top: 30px;
      width: auto;
      height: auto;
      text-align: left;
      font-weight: 100;
      font-style: normal;
      font-size: 30px;
      line-height: 0.8;
      padding: 0px 50px 5px 30px;
      vertical-align: middle;
    }
  
    .PartnerLogo {
      float: right;
      margin-top: 30px;
      width: auto;
      height: auto;
      text-align: left;
      font-weight: 100;
      font-style: normal;
      font-size: 30px;
      line-height: 0.8;
      padding: 0px 30px 5px 30px;
      vertical-align: middle;
      border-width: 0px 0.5px 0px 0px;
      border-color: white;
      border-style: solid;
    }
  
    #developer-info {
      display: flex;
      align-items: flex-end;
      margin-left: 40px;
      margin-top: 15px;
      font-size: 1.5em;
      line-height: 1.4;
      font-weight: 200;
    }
  
    .border-style {
      border-width: 0 0.5px 0 0px;
      border-color: white;
      border-style: dashed;
      padding-left: 10px;
      padding-right: 20px;
  
    }
  
    .link {
      color: white;
    }
  
    .link:hover {
      opacity: 0.8;
    }
  
    .download-link {
      background: url("https://data.dh.gu.se/ui-icons/download_white.png");
      background-size: 18px;
      background-position: 0px 50%;
      background-repeat: no-repeat;
      padding-left: 25px;
      margin-left: 0px;
    }
  
    .site-link {
      background: url("@/assets/graphics/interface/linkbuttonwhite.png");
      background-size: 18px;
      background-position: 0px 50%;
      background-repeat: no-repeat;
      padding-left: 25px;
  
    }
  
    .links-stack {
      margin-right: 20px;
    }
  
    .links-stack a {
      display: block;
    }
  
    #developer-info a:link {
      font-weight: 200;
    }
  </style>
  