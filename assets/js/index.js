// Equivalent of PHP Htmlentities, credit to Chris Coiyer and James Padolsey
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function hideReply(e) {
    const target = e.target || e.srcTarget;
    const targetButton = target.parentElement;
    const commentForm = targetButton.parentElement;

    const commentFormParent = commentForm.parentElement;


    const commentFormHeader = commentForm.firstElementChild;
    commentFormHeader.textContent = "Leave Comment";

    commentForm.removeChild(targetButton);

    commentForm.style.marginTop = "0";
    commentForm.style.marginBottom = "0";
    commentForm.style.width = "100%";
    commentForm.style.alignSelf = "center";

    console.log(commentFormParent.childNodes[2]);

    commentFormParent.insertBefore(commentForm, commentFormParent.childNodes[6]);




}
function showReply(e) {
    const target = e.target || e.srcTarget;
    const targetParent = target.parentElement.parentElement;


    const username = htmlEntities(targetParent.querySelector(".username").textContent);

    const commentform = document.querySelector(".comment-form");

    commentform.style.marginTop = "2vh";
    commentform.style.width = "90%";
    commentform.style.alignSelf = "flex-end";
    const commentFormHeader = commentform.firstElementChild;


    commentFormHeader.textContent = "Reply to " + username + "\n";

    const cancelReply = document.createElement("button");
    cancelReply.type = "button";
    cancelReply.classList.add("cancel-button");
    cancelReply.onclick = hideReply;
    
    cancelReply.innerHTML = '<i class="fa-solid fa-xmark fa-2xl normal" style="color: #fcf4bc;"></i> <i class="fa-solid fa-beat fa-xmark fa-2xl on-hover" style="color: #fcf4bc;"></i>';

    commentform.appendChild(cancelReply);


    const commentFormParent = commentform.parentElement;

    commentFormParent.removeChild(commentform);

    // console.log(targetParent);
    targetParent.parentElement.appendChild(commentform);
}

window.addEventListener('load', function() {
    



});