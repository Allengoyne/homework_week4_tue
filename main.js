// get the repos
$.getJSON('https://api.github.com/users/allengoyne/repos').done(function(data, status, xhrObject) {

  console.log(data);
// displays icon nav in header
  var navContainer = $('.iconNav');
  data.forEach(function(navIcon){
    var notificationsElement = $('<div class="notificationsIcon"><span class="octicon octicon-bell"></span>' + navIcon.notifications_url + '</div>');

    // iconsNavElement.append()

  });


  // displays all repos
  var reposContainer = $('.repos');
  data.forEach(function(repo) {
    var repoElement = $('<div class="repoName">' + repo.name + '</div>');
    var forksElement = $('<div class="repoForks"><span class="octicon octicon-repo-forked"></span>'+ repo.forks_count + '</div>');
    var updateElement = $('<div class="repoUpdate">' + '<div> updated at: </div>' + repo.updated_at + '</div>');
    var languageElement = $('<div class="repoLanguage">' + repo.language + '</div>');
    var starsElement = $('<div class="repoStars"><span class="octicon octicon-star"></span>' + repo.stargazers_count + '</div>');

    repoElement.append(starsElement);
    repoElement.append(languageElement);
    repoElement.append(forksElement);
    repoElement.append(updateElement);
    reposContainer.append(repoElement);
  });

})

// get profile info
$.getJSON('https://api.github.com/users/allengoyne').done(function(data, status, xhrObject) {
  var avatar = data.avatar_url;

  console.log(data);
  $(".avatar").attr("src", avatar );
})
