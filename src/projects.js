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

    handleActiveSelection(event.target); // handleActiveSelection 함수에 event.target 함수인자를 전달해준다.

    filterProjects(filter);
});

/* 
 *  Active 메뉴를 재설정
 */
function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

/* 
 *  프로젝트 필터링
 */
function filterProjects(filter){
    projects.forEach(project => {
        if(filter ==='all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none'
        } 
    });
    projectsContainer.classList.add('anim-out');
    setTimeout(()=> {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}