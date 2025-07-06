//index.js
const adList = new Swiper('.ad_swiper',{
    slidesPerView:1, //전체개수가 아니라 보이는 개수가 기준
    spaceBetween:10, //사이 여백
    autoplay:{delay:3000},
    loop:true,
    pagination: {
        el: '.swiper-pagination',
        type:'bullets'
    },
});