function validate(){
   let username = document.getElementById('username');
   let errorLineNodes = document.getElementsByClassName('error-line');
   for (let i = 0; i < errorLineNodes.length;i++)
   {
       errorLineNodes[i].innerText = '';
   }

   if(username.value == null || username.value == ''){
       username.nextElementSibling.innerText = 'Vui lòng nhập username';
       return false;
   }

   let password = document.getElementById('password');
   if(password.value == null || password.value == ''){
       password.nextElementSibling.innerText = 'Vui lòng nhập password';
       return false;
   }

   return true;
}
