var hasPlayed = [];
var hasilGame = document.getElementById("hasilnya");
var rockCom = document.getElementById("batucom");
var paperCom = document.getElementById("kertascom");
var scissorsCom = document.getElementById("guntingcom");
var rockPerson = document.getElementById("batuplayer");
var paperPerson = document.getElementById("kertasplayer");
var scissorsPerson = document.getElementById("guntingplayer");

const startgame = playerChoose => {
  if(hasPlayed.length === 0){
      var pilihanPlayer = playerChoose;
      var pilihanCom = Math.floor(Math.random() * 3);
      function com(masukan){
        if(pilihanCom == 0){
          // document.getElementById("batucom").classList.add("pick")
          rockCom.style.background ="#C4C4C4"
          return "rock"
        }else if(pilihanCom == 1){
          // document.getElementById("kertascom").classList.add("pick")
          paperCom.style.background ="#C4C4C4"
          return "paper"
        }else{
          // document.getElementById("guntingcom").classList.add("pick")
          scissorsCom.style.background ="#C4C4C4"
          return "scissors"
        }
      }
      function pemenang(com, orang){
          if (orang === com) {
            hasilGame.innerHTML = `<div class="rectangle center-content">
            <p class="font-OpenSans font-uppercase font-space-01 font-responsive-2vw font-white px-5 my-5 text-center">draw</p>
        </div>`
            return 'Draw'
          }
        
          if (orang === 'rock') {
            if (com === 'paper') {
              hasilGame.innerHTML = `<div class="rectangle center-content">
              <p class="font-OpenSans font-uppercase font-space-01 font-responsive-2vw font-white px-5 text-center">com win</p>
          </div>`
              return 'Computer Menang';
            } else {
              hasilGame.innerHTML = `<div class="rectangle center-content">
              <p class="font-OpenSans font-uppercase font-space-01 font-responsive-2vw font-white px-5 text-center">player 1 win</p>
          </div>`
              return 'Player Menang !';
            }
          }
          if (orang === 'paper') {
            if (com === 'rock') {
              hasilGame.innerHTML = `<div class="rectangle center-content">
              <p class="font-OpenSans font-uppercase font-space-01 font-responsive-2vw font-white px-5 text-center">player 1 win</p>
          </div>`
              return 'Player Menang !';
            } else {
              hasilGame.innerHTML = `<div class="rectangle center-content">
              <p class="font-OpenSans font-uppercase font-space-01 font-responsive-2vw font-white px-5 text-center">com win</p>
          </div>`
              return 'Computer Menang';
            }
          }
          if (orang === 'scissors') {
            if (com === 'paper') {
              hasilGame.innerHTML = `<div class="rectangle center-content">
              <p class="font-OpenSans font-uppercase font-space-01 font-responsive-2vw font-white px-5 text-center">player 1 win</p>
          </div>`
              return 'Player Menang !';
            } else {
              hasilGame.innerHTML = `<div class="rectangle center-content">
              <p class="font-OpenSans font-uppercase font-space-01 font-responsive-2vw font-white px-5 text-center">com win</p>
          </div>`
              return 'Computer Menang !';
            }
          }
        }
      // document.getElementById("hasilnya").innerHTML = hasilakhir
      console.log("pilihan computer :" + com(pilihanCom))
      console.log("pilihan Orang :" + pilihanPlayer);
      console.log("pemenang : " + pemenang(com(pilihanCom),pilihanPlayer))
      // console.log(document.querySelectorAll("#batucom").classList.add("pick"))
    }
    else{
       alert("pancet tombol refresh untuk bermain kembali")
    }
}

rockPerson.addEventListener('click', function() {
  // console.log("kertas");
  startgame('rock')
  hasPlayed.push(1);
  if(paperPerson.style.background=="" && scissorsPerson.style.background==""){
  rockPerson.style.background ="#C4C4C4"
}
});
paperPerson.addEventListener('click', function() {
  // console.log("kertas");
  startgame('paper');
  hasPlayed.push(1);
  if(rockPerson.style.background=="" && scissorsPerson.style.background==""){
  paperPerson.style.background ="#C4C4C4" }
});
scissorsPerson.addEventListener('click', function() {
  // console.log("kertas");
  startgame('scissors')
  hasPlayed.push(1)
  if(rockPerson.style.background=="" && paperPerson.style.background==""){
  scissorsPerson.style.background ="#C4C4C4"}
});
document.getElementById('refresh').addEventListener('click', function() {
  // console.log("kertas");
  hasPlayed = [];
  refreshUser();
  refreshCom();
  document.getElementById("hasilnya").innerHTML = `<div>
  <p class="font-OpenSans font-uppercase font-space-01 font-responsive-10vw font-red">VS</p>
</div>`
});

function refreshUser(){
  if(rockPerson.style.background ="#C4C4C4"){
    rockPerson.style.background=""
  }
  if(paperPerson.style.background ="#C4C4C4"){
    paperPerson.style.background=""
  }
  if(scissorsPerson.style.background ="#C4C4C4"){
   scissorsPerson.style.background=""
  }
}
function refreshCom(){
  if(rockCom.style.background ="#C4C4C4"){
    rockCom.style.background=""
  }
  if(paperCom.style.background ="#C4C4C4"){
    paperCom.style.background=""
  }
  if(scissorsCom.style.background ="#C4C4C4"){
    scissorsCom.style.background=""
  }
}
