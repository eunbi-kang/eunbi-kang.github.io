'use strict';

/*
 *  프로젝트 필터링 관련 로직 처리 
 */
const categories = document.querySelector('.categories'); // 카테고리 버튼 클릭시
const projects = document.querySelectorAll('.project'); // 카테고리 하위 컨텐츠 클릭시
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', function(event){
    const filter = event.target.dataset.category; // 개발자도구에서 값 확인 가능
    if(filter == null){
        return; // 함수에서 아무런 처리도 하지않고 종료해줌.
    }

    /* 
     *  Active 메뉴를 재설정
     */
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    event.target.classList.add('category--selected'); 
    // 이벤트의 타겟의 대상이되는 것의 클래스리스트에 'category--selected'를 추가해준다.
    
    /* 
     *  프로젝트 필터링
     */
    projectsContainer.classList.add('anim-out');
    projects.forEach(project => {
        if(filter ==='all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none'
        } 
    });
    setTimeout(()=> {
        projectsContainer.classList.remove('anim-out');
    }, 250);
});