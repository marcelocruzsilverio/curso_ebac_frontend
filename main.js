document.addEventListener('DOMContentLoaded', function () {
    const avatar = document.querySelector('.profile-avatar');
    const name = document.querySelector('.profile-name');
    const username = document.querySelector('.profile-username');
    const repositors = document.getElementById('repositors');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.querySelector('.profile-link');

    const endpoint = 'https://api.github.com/users/marcelocruzsilverio';

    fetch(endpoint).then(function (anwser) {
        return anwser.json();
    }).then(function (json) {
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repositors.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    })
})