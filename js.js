
var profile_pic;
const card = document.querySelector('.card');
const box = document.querySelector('.box');

async function basic_info_get(){
    const res = await fetch('https://api.github.com/users/Thejus-M');
    // const res = await fetch('https://random-data-api.com/api/users/random_user');
    const data = await res.json()
    
    const basic_info_text = document.createElement('h2');
    basic_info_text.textContent="Basic Info";
    card.appendChild(basic_info_text);

    const name = document.createElement('h4');
    name.textContent=`${data.login}`;
    card.appendChild(name);

    profile_pic = new Image(100,100);
    profile_pic.src = `${data.avatar_url}`
    card.append(profile_pic);

    github_url=document.createElement('p');
    github_url.textContent = `${data.html_url}`
    card.appendChild(github_url);

    public_repos=document.createElement('p');
    public_repos.textContent = "No. of public repo  : "+`${data.public_repos}`
    card.appendChild(public_repos);

    public_gists=document.createElement('p');
    public_gists.textContent = "No. of public gists : "+`${data.public_gists}`
    card.appendChild(public_gists);
    
    
}

// async function repos_info_get(){
    
//     const res = await fetch('https://api.github.com/users/thejus-m/repos');
//     const data = await res.json()
    
//     br=document.createElement('br');
//     box.appendChild(br);

//     let div = document.createElement('div');
//     div.classList.add('card');
//     box.appendChild(div)

//     const repo_info = document.createElement('h2');
//     repo_info.textContent="Basic Info"+`${data.repo.name}`;
//     card.appendChild(repo_info);
// }
basic_info_get();
repos_info_get();