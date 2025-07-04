// 화면의 요소를 선택하고 이벤트를 등록하여 화면을 초기화하는 역할을 합니다.
window.onload = function(){
    // 화면 초기화
    let btn1 = document.querySelector('#btn1');
    btn1.onclick = function(){
        let box1 = document.querySelector('#box1');
        // 아이디로 선택 할수 있지만
        // 동일한 이름의 변수가 있다면 사용이 불가능 하다!
        // box1='aaaa';
        box1.innerHTML = '안녕!';
        let name = document.querySelector('#name');
        box1.innerHTML = name.value + '님 환영 합니다.';
        // ` ${변수} 값을 입력` : 변수를 출력 하거나 여러줄을 입력할때
        // 백팃을 이용한 출력 
        box1.innerHTML = `${name.value} <br>
                            님 환영 합니다.(2) <br>
                            행복한 하루 보내세요!`;

        // ``을 이용하면 여러줄 입력을 쉽게 할 수 있다
        let content = `
            <nav aria-label="...">
                <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
                </ul>
                </nav>
        `;

        let box2 = document.querySelector('#box2');
        box2.innerHTML = content;
    }

}

