$(document).ready(function(){
   $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    success: function(data){
      console.log(data);
      console.log(data[0]);
      data.forEach(function(user){
        var div = $("#app");
        div.append(`<p>${user.id}</p>`);
      });

    },
    error: function(data){
      console.log("error");
    }
  });

});
