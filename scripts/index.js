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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
const reviewSLide = new Swiper('.review_swiper',{
    slidesPerView:1, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    autoplay:{delay:3000},
    loop:true,
    pagination: {
        el: '.review_swiper+.swiper-pagination',
        type:'bullets',
    },
    on:{
        init(){
            const activeSlide = this.slides[this.activeIndex];
            for(let i of activeSlide.querySelectorAll('p')) i.classList.add('ani');
        },
        slideChange:function(){
            for(let i of pAni) i.classList.remove('ani');
            const activeSlide = this.slides[this.activeIndex];
            for(let i of activeSlide.querySelectorAll('p')) i.classList.add('ani');
        }
    }
});

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