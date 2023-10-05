document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, []);
   });



 const AddUserButton = document.querySelector('#AddUserButton')
 AddUserButton.addEventListener('click' , ()=>{
  
document.querySelector('.AddUser-Modal-Back').classList.remove("dis-none")
document.querySelector('.AddUser-Modal').classList.add("show")

 });
 document.querySelector('.AddUser-Modal-Back').addEventListener('click' , (e)=>{
  
e.target.classList.add("dis-none")
document.querySelector('.AddUser-Modal').classList.remove("show")

 });
