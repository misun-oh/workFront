window.onload = function(){
    // btn1 클릭되면 area1에 안녕 출력
    let btn1 = document.querySelector('#btn1');
    
     
    btn1.onclick = function(){
        let area1 = document.querySelector('#area1');
        area1.innerHTML = '안녕!';
    }
 
    // addEventListener를 이용하여 이벤트가 발생 하였을때 실행할 함수를 작성
    // 요소.addEventListener(이벤트이름, 함수)
    btn1.addEventListener('click', function(){
        let area1 = document.querySelector('#area1');
        area1.innerHTML += 'addEventListener 로 이벤트 적용';

        let array = new Array();    // []
        let array1 = new Array(3);  // [empty * 3]
        let array2 = new Array('빨강', '노랑', '파랑');  // [empty * 3]
        let array3 = ['A', 'B', 'C'];
        let array4 = [
            '오미자'
            , 25
            , true
            , [1,2,3,4,5]
            , {}
            , function(){
                return 1
            }
        ];

        array4[0] = '미자';
        
        // 배열의 길이
        array4.length;
        let content = '';
        for(let i=0;i<array4.length;i++){
            console.log(`배열[${i}] : `, array4[i]);
            content += `배열[${i}] : ${array4[i]} <br>`;
        }
        area1.innerHTML = content;

    });
    
}