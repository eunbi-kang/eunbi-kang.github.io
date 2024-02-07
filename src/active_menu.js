const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
    '#testimonial',
    '#contact',
  ];
  const sections = sectionIds.map((id) => document.querySelector(id));
  const navItems = sectionIds.map((id) =>
    document.querySelector(`[href="${id}"]`)
  );
  const visibleSections = sectionIds.map(() => false);
  let activeNavItem = navItems[0];

  const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.98],
  };
  const observer = new IntersectionObserver(observerCallback, options);
  sections.forEach((section) => observer.observe(section));
  
  function observerCallback(entries) {
    let selectLastOne;
    entries.forEach((entry) => {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      visibleSections[index] = entry.isIntersecting;
      selectLastOne =
        index === sectionIds.length - 1 &&
        entry.isIntersecting &&
        entry.intersectionRatio >= 0.99;
    });
  
    const navIndex = selectLastOne
      ? sectionIds.length - 1
      : findFirstIntersecting(visibleSections);

      selectNavItem(navIndex);
  }
  
  
  // 사용자의 보여지는 화면의 제일 상단 화면의 index를 반환해주는 함수
  function findFirstIntersecting(intersections) {
    const index = intersections.indexOf(true);
    return index >= 0 ? index : 0;
  }
  
  // navItem 선택하는 함수
  function selectNavItem(index){
    const navItem = navItems[index];
    if (!navItem) return;

    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
  }