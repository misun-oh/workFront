/*
선언적함수
function 함수이름([매개변수]){

}
*/


function test1(){
    console.log('test1()가 호출 되었습니다.');
}

/*
스스로 실행 하는 함수
*/
(
    function (a,b){
        console.log(`${a} + ${b} = ${a+b}`);
    }(10, 2)
)


// 익명의 함수 
// 함수를 변수에 대입할때, 함수를 매개변수로 전달할때 
window.addEventListener('load', function(){
    // 화면이 모두 불러들여져 왔으면 함수 실행
    // 초기화
    console.log('페이지 로딩 완료');
    // document.querySelector : 하나의 요소를 선택 해서 반환
    // document.querySelectorAll : 여러개의 요소를 선택 해서 반환
    let btn1 = document.querySelector('#btn1');
    
    // 화살표 함수
    ArrowFunctionBtn.addEventListener('click', () => {
        p1.innerHTML = '화살표 함수를 사용해봅시다';
        // 파라메터를 전달할 경우 파라메터가 우선된다!!!
        argTest('argTest(value) : 매개변수 있는 함수를 호출 합니다.');
        //argTest(); // 매개변수를 넣지 않으면 undefined
    }); 

    btn4.addEventListener('click', ()=>{
        let num = ran();
        console.log('num', num);
    })

    btn5.addEventListener('click', ()=>{
        /*
        let func = funcTest();
        console.log(func);
        func();
        */
       // 반환된 함수를 실행 하기 위해서 괄호를 붙여준다
       funcTest()();
    });

    btn6.addEventListener('dblclick', ()=>{
        console.log(this);
        //alert('더블클릭!');
        p2.innerHTML = eval(calc.value);
        //div.innerHTML

    });
})

// 함수를 반환 하는 함수
function funcTest(){
    return function(){
        console.log('반환된 함수')
    };
}



// 반환값이 있는 함수
// 1 ~ 100까지의 수 중 램덤한 값을 생성 하여 반환 하는 함수
function ran(){
    // Math.random() : 무작위수 추출
    // parseInt() : 정수타입으로 형변환
    // 이벤트 추첨할 때 사용할수 있음
    let num = parseInt( Math.random() * 100 ) + 1;

    // return : 반환값을 작성
    return num;
}

// 매개변수 있는 함수
// 자바에서는 타입을 지정 했지만
// 자바스크립트에서는 타입을 지정할 필요가 없다
// 변수의 이름만 선언해주면 된다!!!
// 매개변수의 갯수에 상관없이 실행
// 😊 입력이 없을 경우를 대비해 초기값을 지정 할 수 있다!!!!!!!
// 😊 함수의 호이스팅 
// 호이스팅이란 변수나 함수 선언이 코드의 최상단으로 
// 끌어올려지는 것처럼 동작하는 JavaScript의 특성입니다. 
// 실제 코드의 위치와 관계없이 선언이 먼저 처리됩니다.
// 위치에 상관없이 실행 할 수 있다!
function argTest(value='초기값'){
    alert(value);

    console.log(arguments);

    for(let i=0;i<arguments.length;i++ ){
        console.log(`arguments[${i}]`, arguments[i]);
    }

    /*
    향상된 for문
        for...in : 인덱스
        for...of : 값 
    */
    for(let index in arguments){
        console.log('index', index);
        console.log(arguments[index]);
    }

    for(let arg of arguments){
        console.log('arg', arg);
    }
}