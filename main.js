// get the repos
$.getJSON('https://api.github.com/users/allengoyne/repos').done(function(data, status, xhrObject) {


  // displays all repos


  // var reposContainer = $('.repos');
  // data.forEach(function(repo) {
  //   var repoElement = $('<div class="repoName">' + repo.name + '</div>');
  //   var updateElement = $('<div class="repoUpdate">' + '<div> updated at: </div>' + repo.updated_at + '</div>');
  //   var forksElement = $('<div class="repoForks"><span class="octicon octicon-repo-forked"></span>'+ repo.forks_count + '</div>');
  //   var languageElement = $('<div class="repoLanguage">' + repo.language + '</div>');
  //   var starsElement = $('<div class="repoStars"><span class="octicon octicon-star"></span>' + repo.stargazers_count + '</div>');
  //
  //   repoElement.append(updateElement);
  //   repoElement.append(starsElement);
  //   repoElement.append(languageElement);
  //   repoElement.append(forksElement);
  //   reposContainer.append(repoElement);
  // });
  console.log(data);

  var reposContainer = $('.repos');
  var reposAll = $('#reposAll')._forEach(function(repo){
    var reposTemplate = _.template(reposAll);
    var reposMarkup = reposTemplate(data);
  });


  reposContainer.html(reposMarkup);
})

// Get Profile info
$.getJSON('https://api.github.com/users/allengoyne').done(function(data) {
  // Display Profile info in sidebar
  console.log(data);
  var profileContainer = $( '.sidebar');
  var details = $('#details').html();
  var sidebarTemplate = _.template(details);
  var html = sidebarTemplate(data);

  profileContainer.html(html);
})
