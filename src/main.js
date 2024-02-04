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

document.addEventListener('scroll', function(e) { 
// setEventListener() : 나중에 작성한 이벤트리스너 1개만 적용됨 But, addEventListener()은 여러개 작성해도 여러 이벤트가 적용됨
    const homeOpacity = home.style.opacity = 1- window.scrollY/homeHeight;

  
    if(homeOpacity < 0){
        
        e.preventDefault();
        
    }
    console.log(homeOpacity)
});
