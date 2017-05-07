$(document).ready(function() {

  $("#search").click(function() {
   
    
    var searchTerm =$('#searchTerm').val();
    var url ="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?"
      
      $.ajax({
        type: "GET",
        url: url,
        dataType: 'json',
        success: function(data) {
          $("#output").html('')
          for(i=0;i<data[1].length;i++) {
  
            $("<div class='result'><h3><a href='"+data[3][i]+"'target='_blank'>"+data[1][i]+"</h3></A><br>"+data[2][i]+"</div></br>").appendTo("#output");
          }
          
        }
    })
  });
});


