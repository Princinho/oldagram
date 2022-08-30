const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        liked:false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        liked:false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked:false
    }
]

const containerDiv=document.getElementById("main")
function renderUI(){
    containerDiv.innerHTML=""
    let uiHtml=`
            <header>
                <img class="logo" src="images/logo.png" alt="oldagram logo">
                <img class="user-avatar" alt="profile image" src="images/user-avatar.jpg"/>
            </header>`;
    for(post of posts){
        uiHtml+=getHtmlForPost(post);
    }
    containerDiv.innerHTML=uiHtml;
}
renderUI()
function getHtmlForPost(post){
    return `<section class="post">
                <div class="post--header">
                    <img src="${post.avatar}" class="user-avatar"/>
                    <div class="post--user-details">
                        <h3 class="post--user-pseudo">${post.name}</h3>
                        <p class="post--location">${post.location}</p>
                    </div>
                </div>
                <img class="post--image" src="${post.post}" ondblclick="updateLikes('${post.username}')"/>
                <div class="post--footer">
                    <div class="action-bar">
                        <img class="action-icon" src="images/${post.liked?'instagram-liked.png':'icon-heart.png'}" onclick="updateLikes('${post.username}')"/>
                        <img class="action-icon" src="images/icon-comment.png"/>
                        <img class="action-icon" src="images/icon-dm.png"/>
                    </div>
                    <p class="likes-count">${post.likes} likes</p>
                    <p class="post--comment"><span class="post--username">${post.username} </span>${post.comment}</p>
                </div>
                
            </section>`
}
function updateLikes(username){
    for(post of posts){
        if(post.username===username){
            if(post.liked) post.likes-=1
            else post.likes+=1;
            post.liked=!post.liked;
            }
        
    }
    renderUI();
}