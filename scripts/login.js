const userId = document.querySelector('input[name$=id]')
const userPw = document.querySelector('input[name$=pw]')
const errorMsg =document.querySelector('.error_msg')
const loginBtn = document.querySelector('.login_btn')
console.log(userId, userPw, loginBtn, errorMsg)

const userDB = [{
    id:'aaa',
    pw:'aaa1234',
},{
    id:'bbb',
    pw:'bbb1234',
}] 
console.log(userDB)

loginBtn.addEventListener('click', ()=>{
    if(userId.value == '' && userPw.value ==''){
        errorMsg.textContent = '아이디와 비밀번호를 입력해주세요';
    }else if(userPw.value == ''){
        errorMsg.textContent = '비밀번호를 입력해주세요';
    }else if(userId.value == ''){
        errorMsg.textContent = '아이디를 입력해주세요';
    }else if(userId.value == userDB[0].id && userPw.value == userDB[0].pw){
        window.location.href = 'index.html';
    }else {
        errorMsg.textContent = '아이디 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요.'
    }
})