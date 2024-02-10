'use strict';

new TypeIt('.home__title--strong', {
    loop: true, // 무한 반복
    speed: 50,
})
.move(-20) // Designer & Developer (마지막 커서 기준 20글자 앞으로)
.type('Good ')
.pause(1000)
.move(null, {to : 'END'}) // 커서를 제일 끝으로 이동
.delete() // 모든 것을 삭제
.type('Front-end Engineer') // Front-end Engineer|
.pause(1000)
.move(-9)
.delete(9)
.type('Back-end')
.pause(1000)
.delete(8)
.type('Full-stack')
.pause(1000)
.move(9) // Full-stack Engineer|
.go();