$(document).ready(function(){
  var quoteContent;
  $('#newQuote').on("click",function(){
    $.ajax({
      url:'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      type:'POST',
      typedata:'json',
      success:function(data){
        data=JSON.parse(data);
        $("#quote-content").text(data.quote);
        $("#quote-author").text(data.author);
        quoteContent=data.quote;
      },
      beforeSend :function(xhr){
      xhr.setRequestHeader("X-Mashape-Key", "KH1P0sc0RpmshREzMtI4pee7SRJmp1GburtjsnSSVrw0zMc1dm"
);
        
    }
      
      
      
    });//end ajax
  });//end get quote
  $("#btn-tweet").attr('<a href=" https://twitter.com/intent/tweet?text="'+quoteContent+'</a>')
});//end document
