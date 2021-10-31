// 기본 화면에 입력했을 때 실행될 코드들
let cake = document.querySelector('#btn');
cake.addEventListener('click', input);

function input(){
  let name = document.querySelector('#nameIn').value;
  let what = document.querySelector("#whatName");
  what.innerText = name + ", お誕生日おめでとう!!!";
  document.querySelector('html').style.background = "url(images/florida-disney.gif) no-repeat center 50%,30% fixed";
  let lang = document.getElementsByClassName('country');
  for(let i = 0; i < lang.length; i++){
    lang[i].style.color = 'black';
  }

  /* 왜 setAttribute로 속서을 변경하려고 하면 안되는 걸까?
      - 이유 : 

  let lang = document.getElementsByClassName('country');
  for(let i = 0; i < lang.length; i++){
    lang[i].setAttribute('color','black');
  }
  */
}

document.querySelector("#nameIn").onkeypress = function(e){
  if(e.keyCode == 13 || e.which == 3){
      input();
      return false;
  }
}


// 언어 설정 클릭 후 실행될 코드들

function changeKo(){
  let what = document.getElementById('whatName');
  what.innerText = "너의 이름은?";
  document.getElementById('nameIn').setAttribute('placeholder','이름을 입력하고 케이크를 누르세요!');
  document.querySelector('#nameIn').focus();  //화면 전환을 해도 입력창이 autofocus 되도록 해줌.
  document.querySelector('html').style.background = "url(images/korea_suwonhwasung.jpg) no-repeat center/cover fixed";

  /*
  let cake = document.querySelector('#btn');
  cake.addEventListener('click', () => {
  let name = document.querySelector('#nameIn').value;
  let what = document.querySelector("#whatName");
  what.innerText = name + ", 생일 축하해!!!";
  });
  */

  let cake = document.querySelector('#btn');
  cake.addEventListener('click', input);

  function input(){
    let name = document.querySelector('#nameIn').value;
    let what = document.querySelector("#whatName");
    what.innerText = name + ", 생일 축하해!!!";  
    document.querySelector('html').style.background = "url(images/florida-disney.gif) no-repeat center 50%,30% fixed";  
  }

  document.querySelector("#nameIn").onkeypress = function(e){
    if(e.keyCode == 13 || e.which == 3){
        input();
        return false;
    }
  }
}

function changeJp(){
  let what = document.getElementById('whatName');
  what.innerText = "君の名は";
  document.getElementById('nameIn').setAttribute('placeholder','名前を入力してケーキをクリックしてください。');
  // document.querySelector('html').style.background = "url(images/tokyo_street_by_arsenixc_daj4ocm-pre.jpg) no-repeat center fixed";
  // background는 background-size를 하위요소로 포함하는데
  // 이렇게 쓰면 background-size가 cover가 아니므로 이미지가 화면 전체를 못 채움.
  document.querySelector('#nameIn').focus();
  document.querySelector('html').style.background = "url(images/destination_tokyo.jpg) no-repeat center/cover fixed";
  // background-size는 반드시 position(여기서는 center) 뒤에 /를 해서 입력해줘야한다.
  /* getElementsByTagName으로 하면 안되는 이유가 뭘까?

  */

  /*
  let cake = document.querySelector('#btn');
  cake.addEventListener('click', () => {
  let name = document.querySelector('#nameIn').value;
  let what = document.querySelector("#whatName");
  what.innerText = name + ", お誕生日おめでとう!!!";
  });
  */

  let cake = document.querySelector('#btn');
  cake.addEventListener('click', input);

  function input(){
    let name = document.querySelector('#nameIn').value;
    let what = document.querySelector("#whatName");
    what.innerText = name + ", お誕生日おめでとう!!!";
    document.querySelector('html').style.background = "url(images/florida-disney.gif) no-repeat center 50%,30% fixed";
  }

  document.querySelector("#nameIn").onkeypress = function(e){
    if(e.keyCode == 13 || e.which == 3){
        input();
        return false;
    }
  }
}

function changeEn(){
  let what = document.getElementById('whatName');
  what.innerText = "What's your name?";
  document.getElementById('nameIn').setAttribute('placeholder','Enter your name and click on the cake.');
  document.querySelector('#nameIn').focus();
  document.querySelector('html').style.background = "url(images/newYork.jpg) no-repeat center/cover fixed";

  /*
  let cake = document.querySelector('#btn');
  cake.addEventListener('click', () => {
  let name = document.querySelector('#nameIn').value;
  let what = document.querySelector("#whatName");
  what.innerText = "Congraturation, " + name + "!!!";
  });
  */

  let cake = document.querySelector('#btn');
  cake.addEventListener('click', input);

  function input(){
    let name = document.querySelector('#nameIn').value;
    let what = document.querySelector("#whatName");
    what.innerText = "Congraturation, " + name + "!!!";
    document.querySelector('html').style.background = "url(images/florida-disney.gif) no-repeat center 50%,30% fixed";
  }

  document.querySelector("#nameIn").onkeypress = function(e){
    if(e.keyCode == 13 || e.which == 3){
        input();
        return false;
    }
  }
}