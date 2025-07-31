//thumnail.js
const smallThum = document.querySelectorAll('.small a')
const bigThum = document.querySelector('.big img')
console.log(smallThum, bigThum)

/* smallThum[0].addEventListener('mouseover',function(){bigThumSrc(1)})

function bigThumSrc(num){
    console.log(1)
    return bigThum.src = `./images/product_detail/big${num}.png`
} */


smallThum[0].style.borderRadius = '20px'

smallThum[0].addEventListener('mouseover', function(){bigThumSrcBorder(1, this)})
smallThum[1].addEventListener('mouseover', function(){bigThumSrcBorder(2, this)})
smallThum[2].addEventListener('mouseover', function(){bigThumSrcBorder(3, this)})
smallThum[3].addEventListener('mouseover', function(){bigThumSrcBorder(4, this)})
smallThum[4].addEventListener('mouseover', function(){bigThumSrcBorder(5, this)})


function bigThumSrcBorder(num, target){
    smallThum[0].style.border = '0'
    smallThum[1].style.border = '0'
    smallThum[2].style.border = '0'
    smallThum[3].style.border = '0'
    smallThum[4].style.border = '0'
    return bigThum.src = `./images/product_detail/big${num}.png`
}