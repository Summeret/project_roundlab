//index.js

//슬라이드
const adList = new Swiper('.ad_swiper',{
    slidesPerView:1, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    autoplay:{delay:3000},
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        type:'bullets',
    },
});
const newList = new Swiper('.new_swiper',{
    slidesPerView:1, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    autoplay:{delay:3000},
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        type:'bullets',
    },
});

const bestList = new Swiper('.best_swiper',{
    slidesPerView:3.5, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:5, //사이 여백
    autoplay:{delay:2000},
    loop:true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const vedioList = new Swiper('.vedio_swiper',{
    slidesPerView:1, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    /* autoplay:{delay:3000}, */
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const pAni = document.querySelectorAll('.review_content p');
const reviewList = new Swiper('.review_swiper',{
    slidesPerView:1, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    autoplay:{delay:5000},
    loop:true,
    pagination: {
        el: '.review_swiper+.swiper-pagination',
        type:'bullets',
    },
    on:{
        slideChange:function(){
            
            for(let i=0; i<pAni.length; i++){
                console.log(2)
                // pAni[i].style.opacity = '1'
                pAni[i].classList.add('ani')
            }
        }
    }
});

/* const reviewP = setTimeout(()=>{
    
    const pAni = document.querySelectorAll('.review_content p');
    console.log(pAni);

    for(let i=0; i<pAni.length; i++){
        pAni[i].classList.add('ani')
    }
},100); */


const instaList = new Swiper('.insta_swiper',{
    slidesPerView:7, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:5, //사이 여백
    autoplay:{delay:1500},
    loop:true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

//========================================

const oliveBnr = document.querySelector('.ad_bnr');
const closeBtn = document.querySelector('.close_btn');
console.log(oliveBnr, closeBtn);

closeBtn.addEventListener('click',()=>{
    oliveBnr.style.display = 'none';
})