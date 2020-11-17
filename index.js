const comment = document.querySelector(".cell2");
const headGrid = document.querySelector(".head-grid")
const newDiv = document.createElement("div");
const subDiv = document.createElement("div");
const input =  document.createElement("input");
const newuserForm = document.querySelector (".newuser-form")
const genInfo = document.querySelector(".cell1")
const saveBtn = document.createElement("button");
const save = document.createTextNode("save");
const del = document.createTextNode("delete");
const delBtn = document.createElement("button");

addCommentTab=()=>{
newDiv.classList.add("comment-tab");
input.type="text";
input.placeholder="comments";
delBtn.className="del-btn";
delBtn.id="del-btn";
delBtn.classList.add("com-btn")
saveBtn.classList.add("com-btn")
saveBtn.appendChild(save);
delBtn.appendChild(del);
subDiv.appendChild(input);
subDiv.appendChild(saveBtn);
subDiv.appendChild(delBtn);
newDiv.appendChild(subDiv);
headGrid.appendChild(newDiv);
}
delGenInfo=()=>{
newuserForm.classList.remove("newuser-form");
while (newuserForm.firstChild){
    newuserForm.removeChild(newuserForm.firstChild);
}
}
addGenINfo=()=>{
    newuserForm.classList.add("newuser-form")
    while (newuserForm.firstChild){
        newuserForm.appendChild(newuserForm.firstChild);
    }
}

comment.addEventListener("click", commentSection=()=>{
    if(comment.classList.contains("comment-class"))
    return;
    else{
        comment.classList.add("comment-class");
        addCommentTab();
        delGenInfo()
    }
    
});
genInfo.addEventListener("click",generalInfo=()=>{
   if(newuserForm.classList.contains("newuser-form"))
})
