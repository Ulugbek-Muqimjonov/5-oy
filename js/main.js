const userTemplate = document.querySelector(".hero__user-template").content;
const userFragment = document.createDocumentFragment();
const userList = document.querySelector(".hero__users-list");
const modalbtn = document.querySelector(".hero__userbtn");
const modalList = document.querySelector(".modal-list");
const postFragment = document.createDocumentFragment();
const posttemplate = document.querySelector(".hero__post-temp").content;
const postList = document.querySelector(".modal-list");
const commentTemplate = document.querySelector(".modal-comment-template").content;
const modalcomment = document.querySelector(".modal-comment-list");


async function get() {
    let data = [];
    async function getUsers(url) {
        try {
            const response  = await fetch(url)
            data = await response.json();
            // console.log(data);
            renderUsers(data,userList);
        } catch (error) {
            console.log(error);
        }
    }
    getUsers("https://jsonplaceholder.typicode.com/users");
    let post = [];
    async function getpost(url) {
        const res = await fetch(url);
        post = await res.json();
        // console.log(post);
    }
    
    getpost("https://jsonplaceholder.typicode.com/posts");
    
    let comment = [];
    async function getComment(url) {
        const res = await fetch(url);
        comment = await res.json();
        // console.log(comment);
    }
    getComment("https://jsonplaceholder.typicode.com/comments")
    
    userList.addEventListener("click", evt => {
        let findPost = [];
        if (evt.target.matches(".hero__userbtn")) {
            const finduser = data.find(item => item.id == evt.target.dataset.id);
            // console.log(finduser);
            
            findPost = post.filter(item => item.userId == finduser.id);
            // console.log(findPost);
            
            
        }
        if (evt.target.matches(".hero__userbtn")) {
            findPost.forEach(item => {
                // console.log(item);
                postList.innerHTML = "";
                const posttemplatClone = posttemplate.cloneNode(true);
                posttemplatClone.querySelector(".hero__users-post-title").textContent = item.title;
                
                posttemplatClone.querySelector(".hero__users-post-desc").textContent = item.body;
                posttemplatClone.querySelector(".hero__users-post-btn").dataset.id = item.id;
                
                
                postFragment.appendChild(posttemplatClone);
            })
            postList.appendChild(postFragment);
        }
        postList.addEventListener("click",evt => {
            if (evt.target.matches(".hero__users-post-btn")) {
                const findComment = comment.filter(item => item.postId == evt.target.dataset.id);
                // console.log(findComment);
                
                modalcomment.innerHTML = "";
                findComment.forEach(item => {
                    const commentTemplateClone = commentTemplate.cloneNode(true);
                    commentTemplateClone.querySelector(".modal-comment-title").textContent = item.name;
                    commentTemplateClone.querySelector(".modal-comment-link").href = `mailto:${item.email}"`;
                    commentTemplateClone.querySelector(".modal-comment-desc").textContent = item.body;
                    postFragment.appendChild(commentTemplateClone);
                })
                modalcomment.appendChild(postFragment)
                
            }
        })
    })
}

get();


function renderUsers(array,node) {
    node.innerHTML = "";
    array.forEach(item => {
        const templateClone = userTemplate.cloneNode(true);
        templateClone.querySelector(".hero__user-name").textContent = item.username;
        templateClone.querySelector(".hero__user-fullname").textContent = item.name;
        templateClone.querySelector(".hero__user-id").textContent =item.id;
        templateClone.querySelector(".hero__user-email").textContent= item.email;
        templateClone.querySelector(".hero__user-email").href = `mailto:${item.email}`;
        
        templateClone.querySelector(".hero__user-location").textContent = "location";
        templateClone.querySelector(".hero__user-location").href =`https/www.gogle.com/maps/place/${item.address.geo.lat}`;
        
        templateClone.querySelector(".hero__user-phone").href =`tel:${item.phone}`;
        
        templateClone.querySelector(".hero__user-site").href = item.website;
        templateClone.querySelector(".hero__user-site").target = "_blank";
        templateClone.querySelector(".hero__user-companyname").textContent = item.company.catchPhrase;
        
        templateClone.querySelector(".hero__user-company-bs").textContent = item.company.bs;
        templateClone.querySelector(".hero__userbtn").dataset.id = item.id;
        
        userFragment.appendChild(templateClone)
    });
    
    node.appendChild(userFragment)
}





