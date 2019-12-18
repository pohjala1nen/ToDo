$(document).ready(function(){
        function run(){
var password = prompt("Password Please");
if(password != 'Janne'){
document.body.innerHTML = '';
document.body.innerHTML = 'Password Failed! Reload to Renter Password';
}else{
alert('Success');
}
}
run();
        
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
