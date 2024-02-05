'use strict';

/**
  *  프로젝트 필터링 관련 로직 처리 
  */
const categories = document.querySelector('.categories'); // 카테고리 버튼 클릭시
const projects = document.querySelectorAll('.project'); // 카테고리 하위 컨텐츠 클릭시

console.log(projects);
categories.addEventListener('click', function(event){
    const filter = event.target.dataset.category; // 개발자도구에서 값 확인 가능
    if(filter == null){
        return; // 함수에서 아무런 처리도 하지않고 종료해줌.
    }
    // projects를 forEach를 통하여 순회하면서 project당 한가지씩 일을 처리해줄건데,
    // forEach에 각각의 프로젝트 아이템을 함수에서 처리해 줄 것이다.
    projects.forEach(project => {
        if(filter ==='all' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none'
        }
    });
});