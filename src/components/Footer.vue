<template>
<div class="container-fluid bg-dark">
    <div class="row p-5">
        <div class="col-md-4">
          <a href="https://instagram.com/kanten_esbjerg?igshid=MzRlODBiNWFlZA=="  target="_blank">  <img src="../assets/icons/ig.png"  class="iconsZoomn" id="icon"/></a>
        </div>
        <div class="col-md-4">
          <a href="https://www.facebook.com/kanten.esbjerg"  target="_blank">  <img src="../assets/icons/fb.png"  class="iconsZoomn" id="icon"/></a>
        </div>
        <div class="col-md-4">
          <a href="https://discord.gg/ENgQWWsk"  target="_blank">  <img src="../assets/icons/discord.png"  class="iconsZoomn" id="icon"/></a>
        </div>
      </div>
      <div class="row">
        <div class="bg-dark">
                <div class="text-white text-center mx-auto">
                  <a href="https://www.google.com/maps/place/Gl+Novrupvej+14,+6705+Esbjerg+Kommune/@55.4769721,8.4895869,17z/data=!4m2!3m1!1s0x464b2145d7c77159:0x2bc63adfd5ed6add">
                    <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">GL NOVRUPVEJ 14, 6705 ESBJERG Ø</font>
                  </font>
                </a>
                <p class="pt-2">PHONE: +45 28 97 11 85</p>
                <p>EMAIL:
                  <a href="mailto:MUSIKFORENINGENKANTEN@GMAIL.COM">MUSIKFORENINGENKANTEN@GMAIL.COM</a></p>
                  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">COPYRIGHT ©KANTEN 2023 By Daniel</font></font></p>
              </div>
            </div>
      </div>
</div>
    
  </template>
  
  <script>
  export default {
    name: 'FooterBar'
  }
  </script>
  
 
  <style scoped>
  .iconsZoomn {
    transition: transform .2s;
    margin: 0 auto;
    background-color: transparent;
  }
  
  .iconsZoomn:hover {
    transform: scale(1.5);
  }

  #icon{
    width: 15%;
  }

  
  </style>