// 화면이 로드 될때 바로 실행되고 끝
// alert('알림창');

// 1. 변수와 자료형
// 전역변수
str1 = '전역변수';
var str2 = 'var 전역변수';

function test(){
    // 스코프 : 변수의 사용범위
    // 함수단위
    test1 = 1;
    var varTest = 1;

    var str2 = 'var 함수 스코프';
    
    // 로그를 찍어서 변수의 값을 확인!
    console.log('a', 'b', 'c');

    // 함수 내부에서 생성된 변수가 우선 된다
    // 중복선언이 가능하다
    console.log('str2', str2);
    console.log('str2', this.str2);

    // 값을 여러개 출력 하고 싶을때 ,로 연결해서 나열 합니다.
    console.log('varTest', varTest);
    console.log('test1', test1);

    console.log('------- 전역변수');
    console.log('str1', str1);
    console.log('str2', str2);

    // 변수를 선언하고 값을 할당 하지 않은 경우
    var str4;
    /*
    undefined 
    - 변수를 선언 하고 값이 할당 되지 않았을때
    - 함수의 반환값이 없을때
    */
    console.log('str4', str4); // undefined
    
}

function test2(){

}