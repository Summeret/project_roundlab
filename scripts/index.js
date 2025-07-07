//index.js
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
    pagination: {
        el: '.swiper-pagination',
        type:'bullets',
    },
});