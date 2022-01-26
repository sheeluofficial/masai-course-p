
function appendRepo(data) {
    
    let repo_list = document.getElementById("repo-list")
    repo_list.innerHTML = null;

    data.forEach(({name,full_name}) => {
        let div = document.createElement("div")
        let name_t = document.createElement("h2")
        name_t.innerText = `Name=> ${name}`;
        let fullname = document.createElement("p")
        fullname.innerText = `Full name=> ${full_name}`;
        div.append(name_t,fullname)
        repo_list.append(div)
    });
}

export {appendRepo}