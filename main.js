$("form").submit(function(e){
  e.preventDefault();
  var searchItem = $('#search_text').val();
  $('#results').html('<div class="loader">Loading...</div>')
  let promise = $.ajax({
    type : 'GET',
    url: "https://www.reddit.com/r/" + searchItem + ".json"
  });
  let url = "https://www.reddit.com/r/" + searchItem + ".json"
  promise.then(function(data){
    let fragment = document.createDocumentFragment();
    data.data.children.forEach(function(data){
      let div = document.createElement('div');
      let h3 = document.createElement('h3');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');

      h3.innerHTML = '<a href="' + data.data.url + '">' + data.data.title+
      '</a>'
      h2.innerHTML = data.data.author
      p.innerHTML = data.data.score

      div.append(h3);
      div.append(h2);
      div.append(p);
      fragment.append(div);
    });
    $('#results').html(fragment);
  });
});
