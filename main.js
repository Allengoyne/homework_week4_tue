// get the repos
$.getJSON('https://api.github.com/users/allengoyne/repos').done(function(data, status, xhrObject) {

  console.log(data);

  // displays all repos
  var reposContainer = $('.repos');
  data.forEach(function(repo) {
    var repoElement = $('<div class="repoName">' + repo.name + '</div>');
    var updateElement = $('<div class="repoUpdate">' + '<div> updated at: </div>' + repo.updated_at + '</div>');
    var forksElement = $('<div class="repoForks"><span class="octicon octicon-repo-forked"></span>'+ repo.forks_count + '</div>');
    var languageElement = $('<div class="repoLanguage">' + repo.language + '</div>');
    var starsElement = $('<div class="repoStars"><span class="octicon octicon-star"></span>' + repo.stargazers_count + '</div>');

    repoElement.append(updateElement);
    repoElement.append(starsElement);
    repoElement.append(languageElement);
    repoElement.append(forksElement);
    reposContainer.append(repoElement);
  });

})

// Get Profile info
$.getJSON('https://api.github.com/users/allengoyne').done(function(data, status, xhrObject) {
  var avatar = data.avatar_url;

  // Display Profile info in sidebar
  // var profileContainer = $('.sidebar');
  // data.forEach(function(profile) {

  // var nameElement = $('<div>')

  console.log(data);

  $(".avatar").attr("src", avatar );
  // $(".sidebar").attr("src", avatar );
})
