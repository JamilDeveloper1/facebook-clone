const postBtn = document.querySelector(".post-btn");
const button = document.querySelector(".post-button");
const  modal = document.querySelector(".modal");
const  body = document.querySelector("body");
const faTimes = document.querySelector(".fa-times");
const textarea = document.querySelector(".textarea");
const posts = document.querySelector(".posts");
const deleteBtn = document.querySelectorAll(".delete-btn");
const remove = document.getElementById("remove");
const idUserPost = document.getElementById("user-post")
const cards = document.querySelectorAll(".card");
const thumbUp = document.getElementById("thumb-up");
const sendPlane = document.getElementById("send-plane");
const firstComment = document.querySelector(".first-comment");
const openMenu = document.querySelector(".fa-bars");
const leftBar = document.querySelector(".left-bar");


let openMenuBar;
openMenu.addEventListener("click",()=>{
  openMenuBar = !openMenuBar;

  if(openMenuBar){
    leftBar.style.left = '0';
  }else{
    leftBar.style.left = '-100%';
  }




})





sendPlane.addEventListener("click",()=>{
  const div1 = document.createElement("div");
  div1.style.width = '90%';
  div1.style.display = 'flex';
  div1.style.padding = '0 20px';
  div1.style.alignItems = 'center';
  div1.style.gap = '5px';
  div1.style.paddingBottom = '10px';


  const img = document.createElement("img");
  img.src = 'images/profile-photo.jpeg';
  img.style.width = '30px';
  img.style.height = '30px';
  img.style.borderRadius = '50%';

  const paragraph = document.createElement("p");
  paragraph.style.padding = '10px';
  paragraph.style.borderRadius = '5px';
  paragraph.style.backgroundColor = 'var(--icon-bg)';

  if(firstComment.value.trim() !== ''){
    paragraph.textContent = firstComment.value;
    idUserPost.appendChild(div1);
    div1.appendChild(img);
    div1.appendChild(paragraph);
  }

  firstComment.value = '';
  
})



let isClicked;
thumbUp.addEventListener("click",()=>{
  isClicked = !isClicked;

  if(isClicked){
    thumbUp.className = 'fas fa-thumbs-up';
    thumbUp.style.color = 'var(--active)';
  }else{
    thumbUp.className = "fa-regular fa-thumbs-up";
    thumbUp.style.color = 'var(--text-color)';
  }
})




console.log(cards);

Array.from(cards).forEach((item)=>{
  item.addEventListener("click",run);
})



button.addEventListener("click",()=>{
  run2();


  let div = document.createElement("div");
  div.className = "user-post";
  
 
    let img = document.createElement("img");

    const image = document.querySelector(".upload-img");

    const input = document.querySelector(".file");
    
    image.src = URL.createObjectURL(input.files[0]);  
    
    img.src = image.src;

    let p = document.createElement("p");

    p.textContent = textarea.value;


    let headerDiv = document.createElement("div");
    headerDiv.className = "header_div";
    let i = document.createElement("i");

    i.className = "fas fa-times";

    i.addEventListener("click",()=>{
        div.remove();
    })







// <=== COMMENT SIDE IS HERE RIGHT NOW ===>

let commentNumDiv = document.createElement("div");
commentNumDiv.className = 'comment-div';
let commentLink = document.createElement("a");
commentLink.textContent = 'comments';
commentLink.href = "#";



// <===ICON AND ADD COMMENT IS HERE RIGHT NOW ===>

let likeAndComment = document.createElement("div");
likeAndComment.className = 'like-and-comment'

let likeIcon = document.createElement("i");
likeIcon.className = "fa-regular fa-thumbs-up";

let isLiked = false;
likeIcon.addEventListener("click",()=>{

  isLiked = !isLiked;

  if(isLiked){
    likeIcon.className = 'fas fa-thumbs-up';
    likeIcon.style.color = 'var(--active)';
  }else{
    likeIcon.className = "fa-regular fa-thumbs-up";
    likeIcon.style.color = 'var(--text-color)';
  }

})

 let commentIcon = document.createElement("i");
 commentIcon.className = "fa-regular fa-comment-alt";

 let commentShare = document.createElement("i");
 commentShare.className = 'fas fa-share';


  let comments = document.createElement("div");
  comments.className = "comments";
  let imgComment = document.createElement("img");
  imgComment.src = 'images/profile-photo.jpeg';

  let inputComment = document.createElement("input");
  inputComment.placeholder = "Write a comment...";

  let addComment = document.createElement("i");
  addComment.className = 'fa-solid fa-paper-plane';

addComment.addEventListener("click",()=>{

  let commentTxt = document.createElement("div");
  commentTxt.className = 'comment-txt';
  let commentTxtImg = document.createElement("img");
  commentTxtImg.src = 'images/profile-photo.jpeg';
  let para = document.createElement("p");
  // para.textContent = inputComment.value;

  if(inputComment.value.trim() !== ''){
    para.textContent = inputComment.value;
    
  div.appendChild(commentTxt);
  commentTxt.appendChild(commentTxtImg);
  commentTxt.appendChild(para);
  }





inputComment.value = '';

})











    posts.appendChild(div);
    div.appendChild(headerDiv);
    headerDiv.appendChild(i);
    div.appendChild(p);
    div.appendChild(img);
    div.appendChild(commentNumDiv);
    commentNumDiv.appendChild(commentLink);
    div.appendChild(likeAndComment);

    likeAndComment.appendChild(likeIcon);
    likeAndComment.appendChild(commentIcon);
    likeAndComment.appendChild(commentShare);
    div.appendChild(comments);
    comments.appendChild(imgComment);
    comments.appendChild(inputComment);
    comments.appendChild(addComment);


textarea.value = '';



});








postBtn.addEventListener("click",run);
faTimes.addEventListener("click",run2);

function run(){
    modal.classList.toggle('open-popup');
    body.style.overflowY = "hidden"; 

}

function run2(){
    modal.classList.toggle('open-popup');
    body.style.overflowY = "scroll"; 
}




function updateCursor() {
  if(textarea.value === ''){
      button.style.cursor = 'no-drop';
      button.style.backgroundColor = 'rgba(0,0,0,0.2)'; 
      button.disabled = true;
    } else {
      button.style.cursor = 'pointer';
      button.style.backgroundColor = "#2374E1";
      button.disabled = false;
    }
  }


window.onload = updateCursor;

textarea.addEventListener('input', updateCursor);


remove.addEventListener("click",()=>{
  idUserPost.remove();
})


const friendRrequest =  document.querySelector(".friend_request");



Array.from(deleteBtn).forEach((item)=>{
  item.addEventListener("click",()=>{
    friendRrequest.style.display = 'none';
  })
})









