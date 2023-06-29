//숫자가 한자리일때 앞에 0을 붙이는 함수
function leftPad(number) {
  if(number < 10) {
    return `0${number}`; //숫자에 0을 붙여서 반환
  }
  return number;
}

setInterval(function() {
  const now = new Date();
  const hr = leftPad( now.getHours() );
  const min = leftPad( now.getMinutes() );
  const sec = leftPad( now.getSeconds() );

  //p태그 안에 시간 출력
  const spans = document.querySelectorAll("figure span");
  spans[0].textContent = hr;
  spans[1].textContent = min;
  spans[2].textContent = sec;
},1000) //1초에 한번씩 함수를 호출

function themeChange(acn) {
  const wrap = document.querySelector("#wrap");
  const cn = wrap.className;
  wrap.classList.remove(cn); //현재 적용 클래스 제거
  wrap.classList.add(acn); 
}

//시간별로 화면 테마 변경
const now = new Date();
const hr = now.getHours();
if(hr >= 5 && hr < 11) {
  themeChange("morning");
} else if(hr >= 11 && hr < 16 ) {
  themeChange("afternoon");
} else if(hr >= 16 && hr < 20) {
  themeChange("evening");
} else if(hr >= 20 || hr < 5) {
  themeChange("night");
}

//nav 버튼 클릭시 화면 테마변경
const navs = document.querySelectorAll("nav li");
navs.forEach(nav => nav.addEventListener("click", () => {
  //변수 acn에 클릭한 버튼의 자손인 a요소의 텍스트콘텐츠를 할당
  const acn = nav.firstChild.textContent
  themeChange(acn);
}))