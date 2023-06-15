let srchBar = document.getElementById('searchBar');
let srch = document.querySelector('#search');
let Logo = document.querySelector('#Logo');
let x = true;
document.getElementById('OpSearch').addEventListener('click', function(){
  if (x === true) {
    srchBar.style.width = '70%';
    srchBar.style.transition = 'all .5s ease';
    srch.style.visibility = 'inherit';
    Logo.style.left = '50px';
    x = false;
  }
})
this.addEventListener('scroll', function(){
  if (x === false) {
  srchBar.style.width = '12%';
  srchBar.style.transition = 'all .5s ease';
  srch.style.visibility = 'hidden';
  Logo.style.margin = 'auto';
  }
})








 $ ( function ( ) {
 $ ( "#sec" ).load( "includes/header.html" ) 
 }) 




