<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light"  style="background-color: #4C9900;">
      <div class="container collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" id="anaul">
          <li class="nav-item" id="logo">
            <router-link class="nav-link" to="/"><font-awesome-icon icon='bicycle' /></router-link>
          </li>
          <li class="nav-item" id="giris">
            <router-link class="nav-link" to="/"><div id="rect">Anasayfa</div></router-link>
          </li>
          <li class="nav-item" id="paylasimlar">
            <router-link class="nav-link" to="/"><div id="rect">Paylasimlar</div></router-link>
          </li>
          <li class="nav-item" id="tartismalar">
            <router-link class="nav-link" to="/"><div id="rect">Tartismalar</div></router-link>
          </li>
          <li class="nav-item" id="etkinlikler">
            <router-link class="nav-link" to="/"><div id="rect">Etkinlikler</div></router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto" id="profilul">
          <li class="nav-item" id="profil">
            <router-link class="nav-link" to="/profil"><div id="rect">Profil</div></router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'Anasayfa',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
anaul{
  float: left;
}
#profil{
  list-style: none;
}
#rect{
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(196, 196, 196, 0.7);
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
}
#rect:hover{
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background: rgba(196, 196, 196, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
}





</style>


/* MacBook - 1 */

position: relative;
width: 1440px;
height: 1024px;

background: #FFFFFF;


/* Rectangle 1 */

position: absolute;
width: 1440px;
height: 100px;
left: 0px;
top: 0px;

/* Purple 1 */
background: #9B51E0;
mix-blend-mode: normal;


/* Rectangle 2 */

position: absolute;
width: 160px;
height: 56px;
left: 1263px;
top: 22px;

background: rgba(196, 196, 196, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


/* Ellipse 1 */

position: absolute;
width: 46px;
height: 46px;
left: 1275px;
top: 29px;

background: #C4C4C4;


/* Murat Bilgin @muratb1lg1n */

position: absolute;
width: 89px;
height: 42px;
left: 1324px;
top: 27px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Ellipse 2 */

position: absolute;
width: 46px;
height: 46px;
left: 48px;
top: 27px;

background: #C4C4C4;


/* Rectangle 3 */

position: absolute;
width: 127px;
height: 56px;
left: 130px;
top: 22px;

background: rgba(196, 196, 196, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


/* Anasayfa */

position: absolute;
width: 127px;
height: 46px;
left: 130px;
top: 27px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Rectangle 6 */

position: absolute;
width: 127px;
height: 56px;
left: 293px;
top: 22px;

background: rgba(196, 196, 196, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


/* Paylaşımlar */

position: absolute;
width: 127px;
height: 46px;
left: 293px;
top: 27px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Rectangle 4 */

position: absolute;
width: 160px;
height: 56px;
left: 456px;
top: 22px;

background: rgba(196, 196, 196, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


/* Tartışma Konuları */

position: absolute;
width: 127px;
height: 46px;
left: 473px;
top: 27px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Rectangle 5 */

position: absolute;
width: 100px;
height: 56px;
left: 652px;
top: 22px;

background: rgba(196, 196, 196, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


/* Etkinlikler */

position: absolute;
width: 127px;
height: 46px;
left: 638px;
top: 27px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Rectangle 8 */

position: absolute;
width: 200px;
height: 72px;
left: 0px;
top: 464px;

background: #C4C4C4;
border: 2px solid #000000;


/* Rectangle 9 */

position: absolute;
width: 200px;
height: 72px;
left: 0px;
top: 722px;

background: #C4C4C4;
border: 2px solid #000000;


/* Rectangle 10 */

position: absolute;
width: 200px;
height: 72px;
left: 0px;
top: 593px;

background: #C4C4C4;
border: 2px solid #000000;


/* Tartismalar */

position: absolute;
width: 200px;
height: 72px;
left: 0px;
top: 593px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Line 1 */

position: absolute;
width: 1440px;
height: 0px;
left: 0px;
top: 462px;

border: 1px solid #000000;
transform: rotate(-0.12deg);


/* Paylasimlar */

position: absolute;
width: 200px;
height: 72px;
left: 0px;
top: 464px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Etkinlikler */

position: absolute;
width: 200px;
height: 72px;
left: 0px;
top: 722px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Ellipse 3 */

position: absolute;
width: 222px;
height: 222px;
left: 71px;
top: 135px;

background: #C4C4C4;


/* Rectangle 12 */

position: absolute;
width: 127px;
height: 63px;
left: 1275px;
top: 289px;

background: rgba(196, 196, 196, 0.7);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
transform: matrix(1, 0, 0, -1, 0, 0);


/* Arkadas Ekle */

position: absolute;
width: 127px;
height: 63px;
left: 1275px;
top: 226px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Rectangle 11 */

position: absolute;
width: 127px;
height: 63px;
left: 1275px;
top: 198px;




/* Takip Et */

position: absolute;
width: 127px;
height: 63px;
left: 1275px;
top: 135px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Murat Bilgin @muratb1lg1n */

position: absolute;
width: 222px;
height: 81px;
left: 69px;
top: 357px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* Hakkinda: Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik */

position: absolute;
width: 860px;
height: 192px;
left: 356px;
top: 135px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;

color: #000000;



/* #tenis #bisiklet #amerikanfutbolu */

position: absolute;
width: 860px;
height: 111px;
left: 356px;
top: 327px;

font-family: .SF NS Display Condensed;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;

color: #000000;


