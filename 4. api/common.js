window.addEventListener('load', ()=>{
    getList()
    campSearchBtn.addEventListener('click', ()=>{
        getList();
    });
});


function getList(){
    fetch('https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=50&pageNo=2&MobileOS=ETC&MobileApp=GoCamping&serviceKey=cO0wf5%2FHyQ0xJ9QvFzW6ZUKnkog5cI%2FdCWN3xfwj%2F98%2Fi59gDTW%2B%2FwEczYF3FWh9k3MP%2BRIUSNrRjFpUHRChoQ%3D%3D&_type=json')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        let item = data.response.body.items.item;
        console.log(item);
        
        // 캠핑장 정보를 담을 컨텐츠
        let content = '';

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

        // 컨텐츠를 화면에 붙이기
        campList.innerHTML = content;

    });
}