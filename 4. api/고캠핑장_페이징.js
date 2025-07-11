window.addEventListener('load', ()=>{
    //getList()
    campSearchBtn.addEventListener('click', ()=>{
        getList();
        
    });
});


// 캠핑장 정보 조회 
function getList(){
    let url = 'https://apis.data.go.kr/B551011/GoCamping/basedList';
    
    // form안의 요소로 쿼리스트링을 만들기
    let formData = new FormData(campForm);
    let queryString = new URLSearchParams(formData);

    console.log('쿼리스트링', queryString.toString());

    fetch(`${url}?${queryString.toString()}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        let item = data.response.body.items.item;
        // 총 건수를 받아와서 화면에 입력
        document.querySelector('#totalCnt').value = data.response.body.totalCount;
        console.log(item);
        
        // 캠핑장 정보를 담을 컨텐츠
        let content = '';

        // for -> forEach
        item.forEach(camp => {
            content += `
                <div class="card" style="width: 18rem;">
                <img src="${camp.firstImageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${camp.facltNm}</h5>
                <p class="card-text">${camp.lineIntro}</p>
            `;    
            
            if(camp.homepage != ''){
                let homepage = camp.homepage;
                if(!(camp.homepage.startsWith('http://')
                    || camp.homepage.startsWith('https://'))){
                        homepage = 'http://' + camp.homepage;
                }
                content += `  ${homepage}<a href="${homepage}" class="btn btn-primary">예약하기</a>`;
            } else {
                //content += `  <a onclick="alert('준비중 입니다.')" class="btn btn-primary">예약하기</a>`;
                content += '중비중 입니다.';
            }
            
            content +=`
                </div>
            </div>
            `;

            console.log(camp.facltNm);
            console.log(camp.lineIntro);
            console.log(camp.firstImageUrl);
        });

        /*
        // 향샹된 for문
        for(camp of item){
            content += `
                <div class="card" style="width: 18rem;">
                <img src="${camp.firstImageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${camp.facltNm}</h5>
                <p class="card-text">${camp.lineIntro}</p>
            `;    
            
            if(camp.homepage != ''){
                let homepage = camp.homepage;
                if(!(camp.homepage.startsWith('http://')
                    || camp.homepage.startsWith('https://'))){
                        homepage = 'http://' + camp.homepage;
                }
                content += `  ${homepage}<a href="${homepage}" class="btn btn-primary">예약하기</a>`;
            } else {
                //content += `  <a onclick="alert('준비중 입니다.')" class="btn btn-primary">예약하기</a>`;
                content += '중비중 입니다.';
            }
            
            content +=`
                </div>
            </div>
            `;

            console.log(camp.facltNm);
            console.log(camp.lineIntro);
            console.log(camp.firstImageUrl);
        }
        */
       
        // 컨텐츠를 화면에 붙이기
        campList.innerHTML = content;

        // 페이지 블럭을 화면에 그리기
        printPageNave();
        
        
    })
    
}


/*

printPageNave : 화면에 있는 4개의 값(페이지번호, 페이지당 게시물수, 블럭당페이지수, 총 게시물수)
            읽어서 변수에 저장하고 페이지 블럭을 그리는 역할

pageNo : 요청 페이지 번호
itemsperPage : 페이지당 게시물의 수
totalCnt : 총 게시물의 수
pagesPerBlock : 블럭당 페이지 수
*/
function printPageNave(){
    // 매개변수로 4개의 값을 전달 받아서 페이지 블럭을 그림
    // -> 화면에 있는 4개의 값을 읽어와서 변수에 저장 

    // 선택자를 이용해서 화면의 요소를 선택 합니다.
    let pageNo = document.querySelector('[name=pageNo]').value;
    let itemsperPage = document.querySelector('[name=numOfRows]').value;
    let totalCnt = document.querySelector('#totalCnt').value;
    let pagesPerBlock = document.querySelector('#pagesPerBlock').value;

    console.log('pageNo', pageNo);
    console.log('itemsperPage', itemsperPage);
    console.log('totalCnt', totalCnt);
    console.log('pagesPerBlock', pagesPerBlock);
    // 총 페이지의 수
    // 131/10 = 13.1페이지 -> 올림처리
    const totalPages = Math.ceil(totalCnt/itemsperPage);
    console.log('totalPages', totalPages)

    endNo = Math.ceil(pageNo/pagesPerBlock) * pagesPerBlock;
    console.log('endNo', endNo);
    startNo = endNo - (pagesPerBlock-1);
    console.log('startNo', startNo);
    
    let content = '';
    
    // 만약 총페이지수 보다 endNo가 크면 endNo를 총 페이지수로 변경
    // 이번블럭 버튼
    if(startNo != 1){
        content += `<button onclick='nextPage(${startNo-1})'><<</button>`;
    }
    // 끝번호 조정
    if(endNo > totalPages){
        endNo = totalPages;
    }
    for(let i=startNo;i<=endNo;i++){
        content += `<button onclick='nextPage(${i})'>${i}</button>`;
    }
    // 다음블럭 버튼
    // 진짜끝페이지 번호
    // totalPages : 진짜 페이지의 수
    if(totalPages > endNo){
        content += `<button onclick='nextPage(${endNo+1})'>>></button>`;
    }
    nav.innerHTML = content;
}

// 요청페이지 블럭 화면에 출력
// 페이지 블럭의 번호를 클릭하면 요청하려는 페이지번호를 매개변수로 받아서 
// 페이지블럭을 다시 그리기 위해 함수를 호출
/**
 * 페이지블럭의 페이지번호를 클릭 하거나
 * 페이지 블럭의 <<, >> 버튼을 클릭하면 
 * 화면의 pageNo를 세팅 -> 리스트 호출
* @param {*} pageNo 
 */
function nextPage(pageNo){
    // 페이지블럭 호출
    if(pageNo<=0) pageNo = 1;

    // 사용자로부터 입력받은 pageNo를 화면에 입력
    document.querySelector('[name=pageNo]').value = pageNo;

    // 리스트 호출
    getList();
    
}