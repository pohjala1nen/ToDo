$(document).ready(function(){
  
  function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "tsirptsirp") {
alert('You Got it Right!');
window.open('https://competent-gates-7f6f9f.netlify.com/');
break;
} 
testV+=1;
var pass1 = 
prompt('Access Denied - Password Incorrect, Please Try Again.','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
history.go(-1);
return " ";
} 
  
    $("#list-items").html(localStorage.getItem("listItems"));
    
    $(".add-items").submit(function(event){
      
      event.preventDefault();
      
      var item = $("#todo-list-item").val();
      
      if (item){
        $("#list-items").append(
        "<li><input class='checkbox' type='checkbox' />" +
          item + " <a class='remove'>Remove</a><hr></li>"
        );
        
      localStorage.setItem("listItems", $("#list-items").html());
        $("#todo-list-item").val("");
        
        
      }
      else
        alert("Input box can't be empty");
      
    });
    
    
    $(document).on("change", ".checkbox", function(){
      if($(this).attr("checked")){
        $(this).removeAttr("checked");
      }
      else{
          $(this).attr("checked", "checked");
      }
      
      $(this).parent().toggleClass("completed");
      
      localStorage.setItem("listItem", $("#list-items").html());
      
    })
    
    $(document).on("click", ".remove", function (){
      $(this).parent().remove();
      localStorage.setItem("listItem", $("#list-items").html());
    });
  
  
  });
