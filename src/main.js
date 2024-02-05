'use strict'; // 예전 버전의 에러메세지를 전송받을 수 있음
/*
 * Header에 페이지 아래로 스크롤시 다크 스타일링 적용 
 */
const header = document.querySelector('.header');

const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

/*
 * Scroll 내렸을 때 Home 투명하게 처리
 */
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight; // home Selector의 높이를 받아옴
// console.log(homeHeight);

document.addEventListener('scroll', ()=>{ 
// setEventListener() : 나중에 작성한 이벤트리스너 1개만 적용됨 But, addEventListener()은 여러개 작성해도 여러 이벤트가 적용됨
   home.style.opacity = 1 - window.scrollY / homeHeight;
});

/*
 *  Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
 */
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{ 
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
    }
});

/*
 *   Navbar 토글버튼 클릭 처리
 */
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});


/*
 *   Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
 */
navbarMenu.addEventListener('click', ()=> {
    navbarMenu.classList.remove('open');
});
