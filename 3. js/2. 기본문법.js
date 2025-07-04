// 화면이 로드 될때 바로 실행되고 끝
// alert('알림창');

// 1. 변수와 자료형
// 전역변수
str1 = '전역변수';
var str2 = 'var 전역변수';
let str3 = 'let 전역변수';

// var
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
    console.log('str4', str4); // undefined

    console.log('str3', str3); 

}

// let(변수), const(상수)
function test2(){

    // 중복 선언 안됨!
    let letTest = 'let 으로 선언';
    // let letTest = '';

    // 변수의 사용 범위 (스코프)
    if(10>1){
        // 코드블럭 단위의 스코프
        let letTest2 = 'if 문장 안에서 선언';
        // 함수단위의 스코프
        var varTest = 'var로 선언';
        console.log('varTest', varTest);
        console.log('letTest2', letTest2);
    }
    console.log('varTest', varTest);
    // console.log('letTest2', letTest2);

    // 상수
    const constTest = 'const로 선언';
    console.log('constTest', constTest);
    // constTest = '변경 불가능';
}

// 자료형 테스트
function typeTest(){

    let name = '문인수';     // 문자열 쌍따옴표, 홑따옴표
    let age = 10;           // 숫자
    let height = 150.6;     // 숫자 (실수)
    let check = false;      // 논리값
    let hobbies = ['축구', '야구', '농구']; // 배열 : [] 안에 선언
    // 배열의 값에 접근 하는 방법
    console.log('방의 갯수', hobbies.length); // 배열의 방의 갯수
    console.log('0번째 방', hobbies[0]); // 방번호를 이용해서 접근

    // typeof : 변수의 타입을 확인
    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof height);
    console.log(typeof check);
    console.log(typeof hobbies);

    // 객체 : 중괄호 안에 선언
    let user = {
        name : '문인수'
        , age : 20
        , height : 150.5
        , id : 'ismoon'
        , hobbies : ['축구', '배구']
    }

    let testFunc = function(){
        console.log('함수 test');
    }

    console.log(typeof user);
    console.log(user);

    // 중복선언 불가 
    let testFunc1 = function(num1, num2){
        console.log('num1', num1);
        console.log('num2', num2);
        return num1 + num2;
    }

    // 매개변수가 입력되지 않은경우
    // 변수의 값으로 undefined가 입력
    testFunc1();
    testFunc1(1,2);

    let user2 = {
        name : '오미자'
        , age : 25
        , height : 163
        , id : 'momo'
        , hobbies : ['축구', '배구']
        // 함수를 등록 할 수도 있다
        , testfnc : function(a,b){
            return a+b;
        }
    }

    // 화면의 요소를 선택
    let btn2 = document.querySelector('btn2');
    console.log('btn2', btn2);


}

window.onload = function(){

    let btn2 = document.querySelector('#btn2');
    console.log(btn2, '======================');
}
