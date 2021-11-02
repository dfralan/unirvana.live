tellerTag = document.getElementsByTagName("teller")[0]

window.addEventListener('DOMContentLoaded', function(){  
  function executeModel(){
    modeSelected = tellerTag.getAttribute("tellerMode")
    return eval(modeSelected+"()");
  }
  setTimeout(function(){ 
  executeModel()}, 3000);
});

//Main ballon function
function ballon() {

  //Detect browser
  var browserName = '';

  isIE = /*@cc_on!@*/false || !!document.documentMode;
  isEdge = !isIE && !!window.StyleMedia;
  if(navigator.userAgent.indexOf("Chrome") != -1 && !isEdge)
  {
      browserName = 'chrome';
  }
  else if(navigator.userAgent.indexOf("Safari") != -1 && !isEdge)
  {
      browserName = 'safari';
  }
  else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
  {
      browserName = 'firefox';
  }
  else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
  {      
      browserName = 'ie';
  }
  else if(isEdge)
  {
      browserName = 'edge';
  }
  else 
  {
      browserName = 'other-browser';
  }
  //alert(browserName);

  //language trigger
  function byLanguage(en,es){  
    if (lang == 'en') { 
      return en;
      
    }else if(lang == 'es'){}
      return es;
    }

  //Navigator language
  var lang = 'es';

  nativeLang = tellerTag.getAttribute("nativeLang")
  
  if (nativeLang == null)
  {lang = lang;}
  else{lang = nativeLang}

    //Detect language
    function detectLang(){
      var ln = navigator.language || navigator.userLanguage || navigator.browserLanguage;
      if (ln == 'es-419' || ln == 'es') {lang = 'es'}
      else if (ln == 'en') {lang = 'en'}
      else {lang = lang}
    }
    detectLang()

  ballonElement = '<div id="tellerBtn" class="tellerBtn">  \
</div> \
<div id="tellerBox" class="tellerBox"> \
    <button id="closeBtn" class="closeBtn"></button> \
    <h3 id="titleBox" class="titleBox">' + byLanguage("How would you describe your experience?","¿Cómo describiría su experiencia?") + '</h3> \
<div id="iconBoxContainer" class="iconBoxContainer"> \
    <div id="iconBox1" class="iconBox"><svg class="icon" id="Super" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><style>.tellersFace {fill: none;}</style></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z" transform="translate(0)"/><path d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z" transform="translate(0)"/><path d="M25.5,20.89h-11a1,1,0,0,0-.79.37,1,1,0,0,0-.19.85A6.32,6.32,0,0,0,20,26.66c4.44,0,6.18-3,6.49-4.58a1,1,0,0,0-.21-.83A1,1,0,0,0,25.5,20.89Z" transform="translate(0)"/></g></g></svg><h5 id="pSuper" class="pIcon">' + byLanguage("Super","Super") + '</h5><div class="triangle" id="triangle1"></div></div> \
    <div id="iconBox2" class="iconBox"><svg class="icon" id="Good" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><style>.tellersFace {fill: none;}</style></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path d="M25,20.71a8.54,8.54,0,0,1-5,1.34,8.47,8.47,0,0,1-5-1.34,1,1,0,1,0-1.28,1.53A10.17,10.17,0,0,0,20,24.05a10.17,10.17,0,0,0,6.3-1.81A1,1,0,1,0,25,20.71Z"/></g></g></svg><h5 id="pGood" class="pIcon">' + byLanguage("Good","Buena") + '</h5><div class="triangle" id="triangle2"></div></div> \
    <div id="iconBox3" class="iconBox"><svg class="icon" id="Neutral" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><style>.tellersFace {fill: none;}</style></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M12.83,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,12.83,13.58Z"/><path d="M23.47,22.4H16.53a1,1,0,0,0,0,2h6.94a1,1,0,0,0,0-2Z"/></g></g></svg><h5 id="pNeutral" class="pIcon">' + byLanguage("Neutral","Neutral") + '</h5><div class="triangle" id="triangle3"></div></div> \
    <div id="iconBox4" class="iconBox"><svg class="icon" id="Bad" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><style>.tellersFace {fill: none;}</style></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path d="M20,20.47a10.18,10.18,0,0,0-6.3,1.82A1,1,0,1,0,15,23.82a8.46,8.46,0,0,1,5-1.35,8.46,8.46,0,0,1,5,1.35,1,1,0,0,0,.64.23,1,1,0,0,0,.64-1.76A10.18,10.18,0,0,0,20,20.47Z"/></g></g></svg><h5 id="pBad" class="pIcon">' + byLanguage("Bad","Mala") + '</h5><div class="triangle" id="triangle4"></div></div> \
    <div id="iconBox5" class="iconBox"><svg class="icon" id="Furious" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><defs><style>.tellersFace {fill: none;}</style></defs><g><circle class="tellersFace" cx="20" cy="20" r="20"/><g><path d="M27.17,13.58a1.51,1.51,0,1,0,1.51,1.51A1.52,1.52,0,0,0,27.17,13.58Z"/><path d="M14.34,15.09a1.51,1.51,0,1,0-1.51,1.51A1.52,1.52,0,0,0,14.34,15.09Z"/><path d="M20,20.13c-4.44,0-6.18,3-6.49,4.59a1,1,0,0,0,.21.82,1,1,0,0,0,.78.37h11a1,1,0,0,0,.79-.38,1,1,0,0,0,.19-.84A6.32,6.32,0,0,0,20,20.13Z"/></g></g></svg><h5 id="pFurious" class="pIcon">' + byLanguage("Furious","Furiosa") + '</h5><div class="triangle" id="triangle5"></div></div> \
</div>     \
    <textarea id="textAreaBox" class="textAreaBox" placeholder="' + byLanguage("Tell us about your experience...","Cuéntenos sobre su experiencia...") + '"></textarea>     \
    <input id="inputEmailBox" class="inputEmailBox" placeholder="' + byLanguage("email@example.com","correo@ejemplo.com") + '"></input> \
    <h5 id="notificationForInput"></h5> \
    <input readonly id="skipBtn" class="skipBtn" value="' + byLanguage("Skip","Omitir") + '"></input> \
    <input type="submit" name="transfer" readonly id="sendBtn" class="sendBtn" value="' + byLanguage("NEXT","SIG.") + '"></input> \
    <p id="linkBox" class="linkBox">' + byLanguage('Still not using <a target="_blank" href="https://www.unirvana.com/teller">Teller</a>?','¿Todavía no usas <a target="_blank" href="https://www.unirvana.com/teller">Teller</a>?') + '</p> \
</div>';

      //Style content
  const fontTellerURL = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100&display=swap"
  const styleSheetTeller = "@import url("+ fontTellerURL +");teller{position: absolute;z-index: 100000;left: 0px; bottom: 0px}teller .tellerBox{transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;opacity:0;display:none;font-family:Roboto,sans-serif;position:absolute;left:20px;bottom:80px;width:300px;height:220px;padding:20px;background-color:#fff;filter:drop-shadow(0 0 .25rem rgba(0,0,0,.1));border:1px solid rgba(0,0,0,.1);transform:translateY(5px);border-radius:10px}teller .tellerBtn{background-image:url("+ '"' + "data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cdefs%3E%3Cstyle%3E .tellerIconBubble %7B fill: %2360f; %7D %3C/style%3E%3C/defs%3E%3Cpath class='tellerIconBubble' d='M30.11,0C11.65,0-5.29,14.5,1.55,41.69c1.39,5.52.87,12,.66,16.31,12.43-1.5,11.48,2,27.9,2a30,30,0,0,0,0-60ZM45.72,35.74c-3.34,2.79-9.18,4.46-15.61,4.46s-12.28-1.67-15.62-4.46a1.69,1.69,0,0,1-.21-2.38,1.67,1.67,0,0,1,2.37-.22c2.71,2.27,7.87,3.68,13.46,3.68s10.74-1.41,13.45-3.68a1.69,1.69,0,0,1,2.16,2.6Z'/%3E%3C/svg%3E" + '"' +");transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;z-index:1000;position:absolute;left:20px;bottom:20px;width:40px;height:40px;background-size:contain}teller .tellerBtn:active{transform:scale(.95) translateY(3px)}teller .tellerBtn:hover{cursor:pointer;opacity:.8!important}teller .closeBtn{transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transform:rotate(-90deg);position:absolute;right:20px;top:0;width:30px;height:30px;border-radius:50%;border:none;background-color:#8233ff;background-position:center;background-repeat:no-repeat;background-size: 13px 13px;background-image:url("+ '"' + "data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12.43 12.43'%3E%3Cdefs%3E%3Cstyle%3E .tellerIconBubble %7B fill: %23fff; %7D %3C/style%3E%3C/defs%3E%3Cpath class='tellerIconBubble' d='M17.12,15l3.66-3.66a1.5,1.5,0,0,0-2.12-2.12L15,12.88,11.34,9.22a1.5,1.5,0,0,0-2.12,2.12L12.88,15,9.22,18.66a1.49,1.49,0,0,0,1.06,2.55,1.48,1.48,0,0,0,1.06-.43L15,17.12l3.66,3.66a1.48,1.48,0,0,0,1.06.43,1.49,1.49,0,0,0,1.06-2.55Z' transform='translate(-8.79 -8.79)'/%3E%3C/svg%3E" + '"' +")}teller #closeBtn:hover{cursor:pointer;background-color:#8f49ff}teller #closeBtn:active{background-color:#8f49ff}teller .titleBox{opacity:0;transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;font-size:medium;font-weight:400;display:block;text-align:center}teller .textAreaBox{font-family:Roboto,sans-serif;display:none;opacity:0;font-size:medium;resize:none;top:100px;left:0;padding-left:20px;padding-right:20px;padding-top:15px;padding-bottom:15px;width:100%;height:120px;position:absolute;background-color:#eaeaeb;outline:0;box-shadow:none;border:none;transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s}teller .inputEmailBox{font-family:Roboto,sans-serif;display:none;opacity:0;text-align:center;font-size:medium;resize:none;top:140px;left:0;padding-left:20px;padding-right:20px;width:100%;height:40px;position:absolute;background-color:#eaeaeb;outline:0;box-shadow:none;border:none;transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s}teller #notificationForInput{opacity:0;transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;color:#000;text-align:center;font-weight:300;position:absolute;background-color:transparent!important;width:100%;left:0!important;bottom:50px}teller .skipBtn{text-align:center;transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;display:none;opacity:0;color:#8233ff;position:absolute;right:80px;bottom:25px;width:60px;height:30px;border-radius:3px;border:none;background-position:center;background-repeat:no-repeat;transform:translateY(10px);outline:0!important;text-decoration-line:underline;text-decoration:underline}teller .skipBtn:hover{cursor:pointer}teller .sendBtn{transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;opacity:1;text-align:center;display:none;color:#fff;position:absolute;right:20px;bottom:15px;width:60px;height:30px;border-radius:3px;border:none;background:#cecece;background-position:center;background-repeat:no-repeat;transform:translateY(10px);outline:0!important}teller .sendBtn:hover{cursor:pointer;opacity:.8!important}teller .sendBtn:active{opacity:.8!important}teller .iconBoxContainer:hover{cursor: pointer;}teller .iconBoxContainer{opacity:0;transform:translateY(20px);transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;position:absolute;width:auto;height:auto;top:90px;background-color:transparent}teller .iconBox{transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;width:40px;margin:8px;height:40px;display:inline-block;background-color:#ffe137;border-radius:50%}teller .iconBox:hover{transform:translateY(-10px)!important}teller .icon{transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;animation-direction:normal;animation-play-state:paused;animation-duration:2s;animation-timing-function:ease-all;animation-iteration-count:infinite;width:40px;height:40px}teller .iconBox:hover>.triangle{transform:translateX(15px) translateY(-30px);border-bottom:15px solid #eaeaeb}teller .iconBox:hover>.pIcon{opacity:1!important}teller .triangle{transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;opacity:0;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:8px solid #eaeaeb;transform:translateX(15px) translateY(-35px)}teller #Super{animation-name:suspiro}teller #Good{animation-name:yeah}teller #Neutral{animation-name:so}teller #Bad{animation-name:no}teller #Furious{animation-name:anger}@keyframes anger{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@-webkit-keyframes anger{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@-moz-keyframes anger{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@-ms-keyframes anger{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@-o-keyframes anger{0%{transform:translateX(0) translateY(0)}10%{transform:translateX(0) translateY(0)}15%{transform:translateX(4px) translateY(-3px)}20%{transform:translateX(-4px) translateY(-3px)}25%{transform:translateX(4px) translateY(-3px)}30%{transform:translateX(-4px) translateY(-3px)}35%{transform:translateX(4px) translateY(-3px)}40%{transform:translateX(-4px) translateY(-3px)}45%{transform:translateX(0) translateY(-3px)}90%{transform:translateX(0) translateY(0)}}@keyframes no{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@-webkit-keyframes no{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@-moz-keyframes no{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@-ms-keyframes no{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@-o-keyframes no{0%{transform:translateX(0)}10%{transform:translateX(0)}20%{transform:translateX(4px)}30%{transform:translateX(-4px)}40%{transform:translateX(4px)}50%{transform:translateX(-4px)}60%{transform:translateX(4px)}70%{transform:translateX(-4px)}80%{transform:translateX(0)}90%{transform:translateX(0)}}@keyframes so{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-webkit-keyframes so{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-moz-keyframes so{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-ms-keyframes so{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-o-keyframes so{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateX(5px)}40%{transform:translateX(5px)}60%{transform:translateX(-5px)}70%{transform:translateX(-5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@keyframes yeah{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-webkit-keyframes yeah{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-moz-keyframes yeah{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-ms-keyframes yeah{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@-o-keyframes yeah{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(-7px)}40%{transform:translateY(5px)}80%{transform:translateY(0)}90%{transform:translateY(0)}}@keyframes suspiro{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}@-webkit-keyframes suspiro{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}@-moz-keyframes suspiro{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}@-ms-keyframes suspiro{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}@-o-keyframes suspiro{0%{transform:translateY(0)}10%{transform:translateY(0)}30%{transform:translateY(4px)}50%{transform:translateY(4px)}90%{transform:translateY(0)}}teller .pIcon{font-weight:300;transition:.3s;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;opacity:0;position:relative;text-align:center;transform:translateY(-5px);bottom:0}teller .linkBox{font-size:small;position:absolute;bottom:10px;text-align:left}teller .linkBox a{color:#8233ff}"

  //Create UTF
  const utfTeller = document.createElement("meta");
  utfTeller.setAttribute("charset", "UTF-8");
  document.head.appendChild(utfTeller);
  
  //Create style element
  const styleTeller = document.createElement("style");
  styleTeller.textContent = styleSheetTeller;
  document.head.appendChild(styleTeller);




    
  //Create ballon
  tellerTag.innerHTML = ballonElement;

  var w = window.innerWidth;
  var h = window.innerHeight;

  document.getElementsByTagName("teller")[0].innerHTML = ballonElement;

  var entryA = "";//Emotion
  var entryB = "";//Email
  var entryC = "";//Message
  var entryD = "";//Day
  var entryE = "";//Date
  var entryF = "";//Hour
  var entryG = "";//Browser language

  entryA = tellerTag.getAttribute("entryA")
  entryB = tellerTag.getAttribute("entryB")
  entryC = tellerTag.getAttribute("entryC")
  entryD = tellerTag.getAttribute("entryD")
  entryE = tellerTag.getAttribute("entryE")
  entryF = tellerTag.getAttribute("entryF")
  entryG = tellerTag.getAttribute("entryG")

  //Display Box or not
  var displayed = false;
  
  //Ready to fetch
  var emotionSelected= false;
  var messageReady = false;
  var emailReadyTeller = false;
  var lockAndLoudTeller=false;


  //User data
  var emotionTeller = "";
  var messageTeller = "";
  var emailTeller = "";


  //Components
  const tellerBtn = document.getElementById("tellerBtn");
  const tellerBox = document.getElementById("tellerBox");
  const closeBtn = document.getElementById("closeBtn");
  const titleBox = document.getElementById("titleBox");
  const sendBtn = document.getElementById("sendBtn");
  const skipBtn = document.getElementById("skipBtn");
  const pSuper = document.getElementById("pSuper");
  const pGood = document.getElementById("pGood");
  const pNeutral = document.getElementById("pNeutral");
  const pBad = document.getElementById("pBad");
  const pFurious = document.getElementById("pFurious");
  const Super = document.getElementById("Super");
  const Good = document.getElementById("Good");
  const Neutral = document.getElementById("Neutral");
  const Bad = document.getElementById("Bad");
  const Furious = document.getElementById("Furious");
  const tri1 = document.getElementById("triangle1");
  const tri2 = document.getElementById("triangle2");
  const tri3 = document.getElementById("triangle3");
  const tri4 = document.getElementById("triangle4");
  const tri5 = document.getElementById("triangle5");
  const notificationForInput = document.getElementById("notificationForInput")
  const linkBox = document.getElementById("linkBox");

  const textAreaBox = document.getElementById("textAreaBox");
  const inputEmailBox = document.getElementById("inputEmailBox");
  const iconBoxContainer = document.getElementById("iconBoxContainer");
  const iconBox1 = document.getElementById("iconBox1");
  const iconBox2 = document.getElementById("iconBox2");
  const iconBox3 = document.getElementById("iconBox3");
  const iconBox4 = document.getElementById("iconBox4");
  const iconBox5 = document.getElementById("iconBox5");

  
  //Status seer
  function status(){
    setTimeout(function(){    
      console.log("")
      console.log("displayed: "+displayed)
      console.log("emotionSelected: "+emotionSelected)
      console.log("emotionTeller: "+emotionTeller)
      console.log("messageReady: "+messageReady)
      console.log("messageTeller: "+messageTeller)
      console.log("emailReadyTeller: "+emailReadyTeller)
      console.log("emailTeller: "+emailTeller)
      console.log("lockAndLoudTeller: "+lockAndLoudTeller)
      console.log("browserName: "+browserName)
      console.log("browserLang: "+lang)
      console.log("")
    }, 1000);
  }


  function notificationAppear(l,c){
    l.style.opacity = "0";
      l.textContent = "";
      l.textContent = c;
      l.style.opacity = "1";
  }

  //By main button
  tellerBtn.addEventListener("click", function() {
    if(!displayed){
      tellerBox.style.display = "block";
      titleBox.style.opacity = "1";
      setTimeout(function(){tellerBox.style.transform = "translateX(0px)"; tellerBox.style.opacity = "1";closeBtn.style.top = "-15px"; }, 1);
      setTimeout(function(){iconBoxContainer.style.opacity = "1";iconBoxContainer.style.transform = "translateY(0)";}, 150);
      displayed = true;
    }
    else{
      tellerBox.style.transform = "translateY(20px)";
      tellerBox.style.opacity = "0";
      titleBox.style.opacity = "0";
      iconBoxContainer.style.opacity = "0";
      iconBoxContainer.style.transform = "translateY(20px)";
      setTimeout(function(){tellerBox.style.display = "none"; closeBtn.style.top= "0px"; }, 300);      
      displayed = false
    }
  });

  //By x button
  closeBtn.addEventListener("click", function() {
    displayed = false
    tellerBox.style.transform = "translateY(20px)";
    tellerBox.style.opacity = "0";
    titleBox.style.opacity = "0";
    iconBoxContainer.style.opacity = "0";
    iconBoxContainer.style.transform = "translateY(20px)";
    setTimeout(function(){ tellerBox.style.display = "none"; closeBtn.style.top= "0px"; }, 300);
  });  
  
  //Cuando hago click en el icon1
  iconBox1.addEventListener("click", function() {
    emotionSelected = true;
    emotionTeller = "Super";
    tri1.style.opacity = 1;
    tri2.style.opacity = 0;
    tri3.style.opacity = 0;
    tri4.style.opacity = 0;
    tri5.style.opacity = 0;
    iconBoxContainer.style.top = "20px";
    iconBox1.style.opacity ="1";
    iconBox1.style.backgroundColor = "#ffe137";
    tellerBox.style.height = "270px";
    iconBox2.style.backgroundColor = "#E8E8E8"; 
    iconBox3.style.backgroundColor = "#E8E8E8"; 
    iconBox4.style.backgroundColor = "#E8E8E8"; 
    iconBox5.style.backgroundColor = "#E8E8E8";
    iconBox2.style.opacity = "0.5";       
    iconBox3.style.opacity = "0.5";       
    iconBox4.style.opacity = "0.5";       
    iconBox5.style.opacity = "0.5"; 
    textAreaBox.style.display = "block";
    pSuper.style.opacity = "1";
    pSuper.style.transform = "translateY(-15px)";
    pGood.style.opacity = "0";
    pGood.style.transform = "translateY(-5px)";
    pNeutral.style.opacity = "0";
    pNeutral.style.transform = "translateY(-5px)";
    pBad.style.opacity = "0";
    pBad.style.transform = "translateY(-5px)";
    pFurious.style.opacity = "0";
    pFurious.style.transform = "translateY(-5px)";
    titleBox.style.display = "none";
    titleBox.style.opacity = "0";
    sendBtn.style.display = "block";
    setTimeout(function(){ textAreaBox.style.opacity = "1"; sendBtn.style.opacity = "1"; sendBtn.style.transform = "translateY(0px)" }, 1);
  });

  //Cuando hago click en el icon2
  iconBox2.addEventListener("click", function() {
    emotionSelected = true;
    emotionTeller = "Good";
    tri2.style.opacity = 1;
    tri1.style.opacity = 0;
    tri3.style.opacity = 0;
    tri4.style.opacity = 0;
    tri5.style.opacity = 0;
    iconBoxContainer.style.top = "20px";
    iconBox2.style.opacity ="1";
    iconBox2.style.backgroundColor = "#ffe137";
    tellerBox.style.height = "270px";
    iconBox1.style.backgroundColor = "#E8E8E8"; 
    iconBox3.style.backgroundColor = "#E8E8E8"; 
    iconBox4.style.backgroundColor = "#E8E8E8"; 
    iconBox5.style.backgroundColor = "#E8E8E8"; 
    iconBox1.style.opacity = "0.5";       
    iconBox3.style.opacity = "0.5";       
    iconBox4.style.opacity = "0.5";       
    iconBox5.style.opacity = "0.5";  
    textAreaBox.style.display = "block";
    pGood.style.opacity = "1";
    pGood.style.transform = "translateY(-15px)";
    pSuper.style.opacity = "0";
    pSuper.style.transform = "translateY(-5px)";
    pNeutral.style.opacity = "0";
    pNeutral.style.transform = "translateY(-5px)";
    pBad.style.opacity = "0";
    pBad.style.transform = "translateY(-5px)";
    pFurious.style.opacity = "0";
    pFurious.style.transform = "translateY(-5px)";
    titleBox.style.display = "none";
    titleBox.style.opacity = "0";
    sendBtn.style.display = "block";
    setTimeout(function(){ textAreaBox.style.opacity = "1"; sendBtn.style.opacity = "1"; sendBtn.style.transform = "translateY(0px)" }, 1);
  });

  //Cuando hago click en el icon3
  iconBox3.addEventListener("click", function() {
    emotionSelected = true;
    emotionTeller = "Neutral";
    tri3.style.opacity = 1;
    tri1.style.opacity = 0;
    tri2.style.opacity = 0;
    tri4.style.opacity = 0;
    tri5.style.opacity = 0;
    iconBoxContainer.style.top = "20px";
    iconBox3.style.opacity ="1";
    iconBox3.style.backgroundColor = "#ffe137";
    tellerBox.style.height = "270px";
    iconBox1.style.backgroundColor = "#E8E8E8"; 
    iconBox2.style.backgroundColor = "#E8E8E8"; 
    iconBox4.style.backgroundColor = "#E8E8E8"; 
    iconBox5.style.backgroundColor = "#E8E8E8"; 
    iconBox1.style.opacity = "0.5";       
    iconBox2.style.opacity = "0.5";       
    iconBox4.style.opacity = "0.5";       
    iconBox5.style.opacity = "0.5";  
    textAreaBox.style.display = "block";
    pNeutral.style.opacity = "1";
    pNeutral.style.transform = "translateY(-15px)";
    pGood.style.opacity = "0";
    pGood.style.transform = "translateY(-5px)";
    pSuper.style.opacity = "0";
    pSuper.style.transform = "translateY(-5px)";
    pBad.style.opacity = "0";
    pBad.style.transform = "translateY(-5px)";
    pFurious.style.opacity = "0";
    pFurious.style.transform = "translateY(-5px)";
    titleBox.style.display = "none";
    titleBox.style.opacity = "0";
    sendBtn.style.display = "block";
    setTimeout(function(){ textAreaBox.style.opacity = "1"; sendBtn.style.opacity = "1"; sendBtn.style.transform = "translateY(0px)" }, 1);  });

  //Cuando hago click en el icon4
  iconBox4.addEventListener("click", function() {
    emotionSelected = true;
    emotionTeller = "Bad";
    tri4.style.opacity = 1;
    tri2.style.opacity = 0;
    tri3.style.opacity = 0;
    tri1.style.opacity = 0;
    tri5.style.opacity = 0;
    iconBoxContainer.style.top = "20px";
    iconBox4.style.opacity = "1";
    iconBox4.style.backgroundColor = "#ffe137";
    tellerBox.style.height = "270px";
    iconBox1.style.backgroundColor = "#E8E8E8"; 
    iconBox2.style.backgroundColor = "#E8E8E8"; 
    iconBox3.style.backgroundColor = "#E8E8E8"; 
    iconBox5.style.backgroundColor = "#E8E8E8"; 
    iconBox1.style.opacity = "0.5";       
    iconBox2.style.opacity = "0.5";       
    iconBox3.style.opacity = "0.5";       
    iconBox5.style.opacity = "0.5";  
    textAreaBox.style.display = "block";
    pBad.style.opacity = "1";
    pBad.style.transform = "translateY(-15px)";
    pGood.style.opacity = "0";
    pGood.style.transform = "translateY(-5px)";
    pSuper.style.opacity = "0";
    pSuper.style.transform = "translateY(-5px)";
    pNeutral.style.opacity = "0";
    pNeutral.style.transform = "translateY(-5px)";
    pFurious.style.opacity = "0";
    pFurious.style.transform = "translateY(-5px)";
    titleBox.style.display = "none";
    titleBox.style.opacity = "0";
    sendBtn.style.display = "block";
    setTimeout(function(){ textAreaBox.style.opacity = "1"; sendBtn.style.opacity = "1"; sendBtn.style.transform = "translateY(0px)" }, 1);
  });

  //Cuando hago click en el icon5
  iconBox5.addEventListener("click", function() {
    emotionSelected = true;
    emotionTeller = "Furious";
    tri5.style.opacity = 1;
    tri2.style.opacity = 0;
    tri3.style.opacity = 0;
    tri4.style.opacity = 0;
    tri1.style.opacity = 0;
    iconBoxContainer.style.top = "20px";
    iconBox5.style.opacity = "1";
    iconBox5.style.backgroundColor = "#ffe137";
    tellerBox.style.height = "270px";
    iconBox1.style.backgroundColor = "#E8E8E8"; 
    iconBox2.style.backgroundColor = "#E8E8E8"; 
    iconBox3.style.backgroundColor = "#E8E8E8"; 
    iconBox4.style.backgroundColor = "#E8E8E8"; 
    iconBox1.style.opacity = "0.5";       
    iconBox2.style.opacity = "0.5";       
    iconBox3.style.opacity = "0.5";       
    iconBox4.style.opacity = "0.5";  
    textAreaBox.style.display = "block";
    pFurious.style.opacity = "1";
    pFurious.style.transform = "translateY(-15px)";
    pGood.style.opacity = "0";
    pGood.style.transform = "translateY(-5px)";
    pSuper.style.opacity = "0";
    pSuper.style.transform = "translateY(-5px)";
    pNeutral.style.opacity = "0";
    pNeutral.style.transform = "translateY(-5px)";
    pBad.style.opacity = "0";
    pBad.style.transform = "translateY(-5px)";
    titleBox.style.display = "none";
    titleBox.style.opacity = "0";
    sendBtn.style.display = "block";
    setTimeout(function(){ textAreaBox.style.opacity = "1"; sendBtn.style.opacity = "1"; sendBtn.style.transform = "translateY(0px)" }, 1);
  });

  //Icon1 hover
  iconBox1.addEventListener("mouseover", function() {
    Super.style.animationPlayState = "running";
    iconBox1.style.opacity ="1 !important";
    if(!emotionSelected){
    pSuper.style.transform="translateY(-15px)";
    pSuper.style.opacity= "1";
    iconBox2.style.opacity = "0.5";       
    iconBox3.style.opacity = "0.5";       
    iconBox4.style.opacity = "0.5";       
    iconBox5.style.opacity = "0.5";
    }
  });

  iconBox1.addEventListener("mouseout", function() {
    Super.style.animationPlayState = "paused";
    if(!emotionSelected){
    pSuper.style.transform="translateY(-5px)";
    pSuper.style.opacity= "0";
    iconBox1.style.opacity ="1"
    iconBox2.style.opacity = "1";       
    iconBox3.style.opacity = "1";       
    iconBox4.style.opacity = "1";       
    iconBox5.style.opacity = "1";
    }      
  });

  //Icon2 hover
  iconBox2.addEventListener("mouseover", function() {
    Good.style.animationPlayState = "running";
    iconBox2.style.opacity ="1 !important";
    if(!emotionSelected){
    pGood.style.transform="translateY(-15px)";
    pGood.style.opacity= "1";
    iconBox1.style.opacity = "0.5";       
    iconBox3.style.opacity = "0.5";       
    iconBox4.style.opacity = "0.5";       
    iconBox5.style.opacity = "0.5";
    }      
  });

  iconBox2.addEventListener("mouseout", function() {
    Good.style.animationPlayState = "paused";
    if(!emotionSelected){
    pGood.style.transform="translateY(-5px)";
    pGood.style.opacity="0";
    iconBox2.style.opacity ="1"
    iconBox1.style.opacity = "1";       
    iconBox3.style.opacity = "1";       
    iconBox4.style.opacity = "1";       
    iconBox5.style.opacity = "1";
    }     
  });

  //Icon3 hover
  iconBox3.addEventListener("mouseover", function() {
    Neutral.style.animationPlayState = "running";
    iconBox3.style.opacity ="1 !important";
    if(!emotionSelected){
    pNeutral.style.transform="translateY(-15px)";
    pNeutral.style.opacity="1";
    iconBox1.style.opacity = "0.5";       
    iconBox2.style.opacity = "0.5";       
    iconBox4.style.opacity = "0.5";       
    iconBox5.style.opacity = "0.5";
    }      
  });

  iconBox3.addEventListener("mouseout", function() {
    Neutral.style.animationPlayState = "paused";
    if(!emotionSelected){
    pNeutral.style.transform="translateY(-5px)";
    pNeutral.style.opacity="0";
    iconBox3.style.opacity ="1"
    iconBox1.style.opacity = "1";       
    iconBox2.style.opacity = "1";       
    iconBox4.style.opacity = "1";       
    iconBox5.style.opacity = "1";
    }    
  });

  //Icon4 hover
  iconBox4.addEventListener("mouseover", function() {
    Bad.style.animationPlayState = "running";
    iconBox4.style.opacity ="1 !important";
    if(!emotionSelected){
    pBad.style.transform="translateY(-15px)";
    pBad.style.opacity="1";
    iconBox1.style.opacity = "0.5";       
    iconBox2.style.opacity = "0.5";       
    iconBox3.style.opacity = "0.5";       
    iconBox5.style.opacity = "0.5";
    }     
  });

  iconBox4.addEventListener("mouseout", function() {
    Bad.style.animationPlayState = "paused";
    if(!emotionSelected){
    pBad.style.transform="translateY(-5px)";
    pBad.style.opacity="0";
    iconBox4.style.opacity ="1"
    iconBox1.style.opacity = "1";       
    iconBox2.style.opacity = "1";       
    iconBox3.style.opacity = "1";       
    iconBox5.style.opacity = "1";
    }    
  });

  //Icon5 hover
  iconBox5.addEventListener("mouseover", function() {
    Furious.style.animationPlayState = "running";
    iconBox5.style.opacity ="1 !important";
    if(!emotionSelected){
    pFurious.style.transform="translateY(-15px)";
    pFurious.style.opacity="1";
    iconBox1.style.opacity = "0.5";       
    iconBox2.style.opacity = "0.5";       
    iconBox3.style.opacity = "0.5";       
    iconBox4.style.opacity = "0.5";
    }
  });

  iconBox5.addEventListener("mouseout", function() {
    Furious.style.animationPlayState = "paused";
    if(!emotionSelected){
    pFurious.style.transform="translateY(-5px)";
    pFurious.style.opacity="0";
    iconBox5.style.opacity ="1"
    iconBox1.style.opacity = "1";       
    iconBox2.style.opacity = "1";       
    iconBox3.style.opacity = "1";       
    iconBox4.style.opacity = "1";
    }     
  });

  textAreaBox.addEventListener("input", function() {

    
    notificationAppear(notificationForInput, "");
    
    const regexMsg = /^[\a-zA-Z\d\s:\u00C0-\u00FF.,¡!¿?]+$/;
    var isMsg = regexMsg.test(textAreaBox.value);
    
    if(textAreaBox.value == ""){
      messageTeller = "";
      messageReady = false; // Confirm message setted
      messageTeller = ""; //Set message on variable
      sendBtn.style.color = "white";
      sendBtn.style.backgroundColor = "#CECECE";
      notificationAppear(notificationForInput, byLanguage("The message must not be empty","El mensaje no puede estar vacío."));
      }
    else if(isMsg){
      messageTeller = textAreaBox.value;
      messageReady = true; // Confirm message setted
      messageTeller = textAreaBox.value; //Set message on variable
      sendBtn.style.color = "white";
      sendBtn.style.backgroundColor = "#8f49ff";
      notificationAppear(notificationForInput, byLanguage("Thanks for your feedback","Gracias por tu comentario."));
      }
    else if(!isMsg){
      messageTeller = "";
      messageReady = false; // Confirm message setted
      messageTeller = ""; //Set message on variable
      sendBtn.style.color = "white";
      sendBtn.style.backgroundColor = "#CECECE";
      notificationAppear(notificationForInput, byLanguage("Eso no es un mensaje" ,"Utiliza letras de a-z, números de 0-9, y signos especiales admitidos."));
      }    
    return;
  });


  //Check regex email
  function checkEmail(){
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isEmail = regexMail.test(inputEmailBox.value);

    if(inputEmailBox.value==""){
      emailTeller = "";
      emailReadyTeller = false;
      lockAndLoudTeller = false;
      sendBtn.style.color = "white";
      sendBtn.style.backgroundColor = "#CECECE";
      notificationAppear(notificationForInput, byLanguage('The field cannot be empty.' ,'El campo no puede estar vacio.'));
    }

    else if(!isEmail){
      emailTeller = "";
      emailReadyTeller = false;
      lockAndLoudTeller = false;
      sendBtn.style.color = "white";
      sendBtn.style.backgroundColor = "#CECECE";
      notificationAppear(notificationForInput, byLanguage("Not valid email address." ,"Correo electrónico no válido."));
      }
    else if(isEmail){
      emailTeller = inputEmailBox.value;
      emailReadyTeller = true;
      lockAndLoudTeller = true;
      sendBtn.style.color = "white";
      sendBtn.style.backgroundColor = "#8f49ff";
      notificationAppear(notificationForInput, "");
      }
    }

    //Get infoUser and date to submit
    function dayGetTeller(){
      day = new Date().getDay()
      if (day == 0){return "Dom-Sun"}
      else if (day == 1){return "Lun-Mon"}
      else if (day == 2){return "Mar-Tue"}
      else if (day == 3){return "Mie-Wed"}
      else if (day == 4){return "Jue-Thu"}
      else if (day == 5){return "Vie-Fri"}
      else if (day == 6){return "Sab-Sat"}
    }
    
    var dateTeller = new Date().getDate()
    var monthTeller = new Date().getMonth()
    var yearTeller = new Date().getFullYear()
    
    function hourGetTeller(){
      hour = new Date().getHours() 
      if (hour < 10){return ("0" + hour)}
      else {return hour}
    }
    
    function minutesGetTeller(){
      minutes = new Date().getMinutes() 
      if (minutes < 10){return ("0" + minutes)}
      else {return minutes}
    }
    
    inputTimeTeller = hourGetTeller() + ":" + minutesGetTeller();
    
    var dayWeekTeller = dayGetTeller();
    var dateTeller = (yearTeller + "-" + (monthTeller+1) + "-" + dateTeller)
    var zoneTeller = "undefined"

    function entryComposer(entry,resp){
      if (entry==""){return ""}
      else return ('&entry.'+entry+'='+resp)}

    //Submit fetch
    function submit (answer) {      
      if(lockAndLoudTeller){
      answer = encodeURIComponent(answer)

                    'https://docs.google.com/forms/d/e/1FAIpQLSdpgab-bhAdoFrIO7hqw2woqA7dIzxNHZa5sXCoMGfHT7NNCg/formResponse?usp=pp_url&entry.1085830910=So&entry.601918770=abc@abc.com&entry.1067325052=fgfgdgd&entry.52853599=Mar-Tue&entry.1209584779=2021-11-2&entry.185293612=13:40&entry.706864744=es&submit=Submit'
      var fullurl = 'https://docs.google.com/forms/d/e/1FAIpQLSdpgab-bhAdoFrIO7hqw2woqA7dIzxNHZa5sXCoMGfHT7NNCg/formResponse?usp=pp_url'+ 
                    entryComposer(entryA,emotionTeller) +
                    entryComposer(entryB,emailTeller) +
                    entryComposer(entryC,messageTeller) +
                    entryComposer(entryD,dayWeekTeller) +
                    entryComposer(entryE,dateTeller) +
                    entryComposer(entryF,inputTimeTeller) +
                    entryComposer(entryG,lang) +
                    '&submit=Submit'
    
      var opts = {
        method: "POST",
        mode: "no-cors", // Google will only submit a form if "mode" is "no-cors"
        redirect: "follow", 
        referrer: "no-referrer"
      }
      console.log("Making request");
      if(browserName == "ie"){
        skipBtn.style.display = "none";
        inputEmailBox.style.display = "none";
        sendBtn.style.display = "none";
        titleBox.style.transform = "translateY(65px)";
        linkBox.style.width = "100%"
        linkBox.style.left = "0"
        linkBox.style.textAlign= "center";
        linkBox.style.opacity = "1";
        titleBox.textContent = byLanguage('Your browser does not support the request, we will have to redirect it.','Su navegador no admite la solicitud, tendremos que redirigirla.'); 
        titleBox.style.opacity = "1";
        setTimeout(function(){ window.open(fullurl, 'tellerRequest'); }, 1500);        
        setTimeout(function(){ ballon() }, 3300);
        
        
      } 
      else{     
      fetch(fullurl, opts).then(function(response) {
        return response.text();
      })
      .then(function(text) {        
        skipBtn.style.display = "none";
        inputEmailBox.style.display = "none";
        sendBtn.style.display = "none";
        titleBox.style.transform = "translateY(65px)";
        linkBox.style.width = "100%"
        linkBox.style.left = "0"
        linkBox.style.textAlign= "center";
        linkBox.style.opacity = "1";
        titleBox.textContent = byLanguage('We receive the feedback, thanks for your time.','Recibimos su comentario, gracias por su tiempo.'); 
        titleBox.style.opacity = "1";
      })
      .catch(function(error) {
        skipBtn.style.display = "none";
        inputEmailBox.style.display = "none";
        sendBtn.style.display = "none";
        titleBox.style.transform = "translateY(65px)";
        linkBox.style.width = "100%"
        linkBox.style.left = "0"
        linkBox.style.textAlign= "center";
        linkBox.style.opacity = "1";
        titleBox.textContent = byLanguage('Something went wrong, you should try later.','Algo salió mal, no hemos podido cargar su solicitud.'); 
        titleBox.style.opacity = "1";
      });
      setTimeout(function(){tellerBox.style.transform = "translateY(20px)";
      tellerBox.style.opacity = "0";
      titleBox.style.opacity = "0";
      iconBoxContainer.style.opacity = "0";
      iconBoxContainer.style.transform = "translateY(20px)";
      setTimeout(function(){tellerBox.style.display = "none"; closeBtn.style.top= "0px"; }, 300);      
      displayed = false}, 3000);
      setTimeout(function(){ ballon() }, 3300);
      }
    }}

  
  skipBtn.addEventListener("click", function() {
    notificationForInput.style.opacity = "0"
    emailTeller = "none";
    emailReadyTeller = true;
    lockAndLoudTeller = true;
    submit();
  });

  sendBtn.addEventListener("click", function() {

    //Empty message
    if(textAreaBox.value == ""){
      notificationAppear(notificationForInput, byLanguage("The message must not be empty","El mensaje no puede estar vacío."));
    }

    //Emotion, message and email ready to fetch
    else if(emotionSelected == true && messageReady == true && emailReadyTeller == true && lockAndLoudTeller == true){
    notificationAppear(notificationForInput, byLanguage("",""));
    titleBox.style.opacity = "0";
    skipBtn.style.opacity = "0";
    inputEmailBox.style.opacity = "0";
    sendBtn.style.opacity = "0";

    setTimeout(function(){
      submit()
    }, 1000);
    }

    //Emotion and message completed
    else if(emotionSelected == true && messageReady == true && emailReadyTeller == false && lockAndLoudTeller == false){
    
    
    notificationAppear(notificationForInput, byLanguage("",""));
    linkBox.style.opacity = "0";
    sendBtn.style.color = "transparent"
    titleBox.textContent = byLanguage('Please enter your email if you are happy for us to contact you, if not press "skip".','Ingrese su correo electrónico si está de acuerdo en que nos comuniquemos con usted, de lo contrario presione "omitir".');
    titleBox.style.opacity = "0";
    titleBox.style.display = "block";
    skipBtn.style.display = "block";
    iconBoxContainer.style.opacity = "0";
    iconBoxContainer.style.transform = "translateY(20px)";
    textAreaBox.style.transform = "translateY(20px)";
    textAreaBox.style.opacity = "0";
    inputEmailBox.style.display = "block";
    setTimeout(function(){
      checkEmail();
      sendBtn.setAttribute("value", byLanguage("SEND","ENVIAR"));
      sendBtn.style.color = "white";
      sendBtn.style.backgroundColor = "#CECECE";
      inputEmailBox.style.top = "120px";
      inputEmailBox.style.opacity = "1";
      textAreaBox.style.display = "none";
      iconBoxContainer.style.display = "none";
      skipBtn.style.opacity = "1";
      titleBox.style.opacity = "1";
      tellerBox.style.height = "210px";
    }, 300);
    }
    });

  //Listen email input
  inputEmailBox.addEventListener("input", function() {    
    checkEmail()    
  });
  console.log(browserName)
}




/* Primer dìa, por la mañana cojo una copa de vidrio, la lleno con agua y la pongo al sol. Por la tarde tomo
de la copa de acuerdo a cuanto sienta he de beber de ella.

Por la mañana en el primer día cojo una copa de vidrio con agua y la pongo al sol. Por la tarde tomo
del vaso de acuerdo a cuanto sienta he de beber de ella.

Por la mañana el primer día cojo una copa de vidrio con agua y la pongo al sol. Por la tarde tomo
del vaso de acuerdo sienta he de beber de ella.

El primer día por la mañana coloco una copa de vidrio con agua al sol y tomo de acuerdo sienta
he de beber de ella. Por la tarde. */



