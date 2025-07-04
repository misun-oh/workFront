// load이벤트가 발생 하면 실행할 함수를 작성
window.onload = function(){
    // load : 요소가 모두 화면에 올라오고 나면 실행되는 이벤트
    // 화면에 요소가 모두 로드된 후 함수를 실행
    let btn = document.querySelector('button');
    console.log(btn);
    
    btn.onclick = function(){
        alert('버튼이 클릭되었어요!');
    }
    
}
