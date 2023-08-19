
const commonFunctions = {};

commonFunctions.openTextArea = function openReplyTextArea(textArea,button) {
    if(document.getElementById(textArea).style.display === "none") {
        document.getElementById(button).style.display = "block";
        document.getElementById(textArea).style.display = "block";
    } else {
        document.getElementById(textArea).style.display = "none";
        document.getElementById(button).style.display = "none";
    }
}

commonFunctions.postComment = async (id, parent_id, level_id, mainParentId, userStore,textAreaValue,textArea,button) => {

    try {
        await userStore.addComment(id, textAreaValue, parent_id, level_id, mainParentId)
        document.getElementById(textArea).style.display = "none";
        document.getElementById(button).style.display = "none";

    } catch (error) {
        console.log(error)
    }

}

commonFunctions.changeHeight  = async (id) => {
    console.log("id","commentReplyArea_"+id)
    document.getElementById("commentReplyArea_"+id).style.height = "auto";
    document.getElementById("commentReplyArea_"+id).style.height = (document.getElementById("textArea"+id).scrollHeight+2)+"px";
    console.log("new height",document.getElementById("textArea"+id).scrollHeight,document.getElementById("commentReplyArea_"+id).style.height);
    console.log(document.getElementById("discussButton"+id)  );
    if(document.getElementById("discussButton"+id).children[0].innerHTML === "Post") {
        console.log("reached if");
        commonFunctions.showCharacterCount(id);
        commonFunctions.changeBorderColor(id);
    }
    if(document.getElementById("discussButton"+id).children[0].innerHTML === "Close") {
        console.log("reached if");
        commonFunctions.showAllCommentsCount(id);
    }
}
commonFunctions.changeBorderColor = (id) => {
    let percentage =( document.getElementById("textArea"+id).value.length/200)*100;
    document.getElementById("discussButton"+id).style.borderColor = commonFunctions.hsl_col_perc(percentage,document.getElementById("textArea"+id).value.length,200);

}
commonFunctions.hsl_col_perc = (percent, start, end) => {
    var r = percent<50 ? 255 : Math.floor(255-(percent*2-100)*255/100);
    var g = percent>50 ? 255 : Math.floor((percent*2)*255/100);
    return 'rgb('+g+','+r+',0)';
}
commonFunctions.showCharacterCount = (id) => {
    document.getElementById("numberTab"+id).innerHTML = document.getElementById("textArea"+id).value.length+"/200";
}
commonFunctions.showAllCommentsCount = (id) => {
}

commonFunctions.openTextAreaWithButton = (id) => {
    document.getElementById("textArea"+id).style.bottom = "0px";
    document.getElementById("commentReplyArea_"+id).style.height = "80px";

    document.getElementById("discussButton"+id).children[0].innerHTML = "Post";
    document.getElementById("postCommentButton"+id).style.display = "Block";
    document.getElementById("discussButton"+id).children[0].style.marginLeft = 0;
    document.getElementById("discussButton"+id).style.width = "440px";
    document.getElementById("discussButton"+id).style.borderColor = "green";
    commonFunctions.showCharacterCount(id);
    commonFunctions.changeBorderColor(id);
    document.getElementById("discussButton"+id).children[0].style.color = "Black";

    document.getElementById("thoughtContainer"+id).style.bottom = "0px";
}

commonFunctions.closeTextAreaWithButton = (id) => {
    document.getElementById("textArea"+id).style.bottom = "100px";
    document.getElementById("commentReplyArea_"+id).style.height = "0px";
    document.getElementById("discussButton"+id).children[0].style.color = "red";
    document.getElementById("discussButton"+id).style.borderColor = "red";
    document.getElementById("discussButton"+id).style.width = "170px";
    document.getElementById("numberTab"+id).innerHTML = "";
    document.getElementById("discussButton"+id).children[0].style.marginLeft = "35%";
    document.getElementById("discussButton"+id).children[0].innerHTML = "Close";
    document.getElementById("postCommentButton"+id).style.display = "none";
    document.getElementById("discussButton"+id).children[0].style.justifySelf = "center";
    document.getElementById("thoughtContainer"+id).style.bottom = "100px";

}

commonFunctions.closeTextArea  =  (id) => {
    if((document.getElementById("thoughtContainer"+id).scrollTop === 0)) {
        commonFunctions.openTextAreaWithButton(id);
    } else {
        for(let i=0;i<document.getElementsByClassName("commentTileSelect").length;i++) {
            document.getElementsByClassName("commentTileSelect")[i].style.borderColor = "lightgray";
        }
        commonFunctions.closeTextAreaWithButton(id);
    }
}

commonFunctions.toggleTextArea = (id,commentId) => {
    if(document.getElementById("discussButton"+id).children[0].innerHTML === "Close") {
        commonFunctions.openTextAreaWithButton(id);
        document.getElementById("postCommentButton"+id).addEventListener('click',function () {

        })
        document.getElementById("commentTileSelect-"+commentId).style.borderColor = "black";
        document.getElementById("commentTileSelect-"+commentId).style.border = "2px solid";
    } else {
        for(let i=0;i<document.getElementsByClassName("commentTileSelect").length;i++) {
            document.getElementsByClassName("commentTileSelect")[i].style.borderColor = "lightgray";
        }
        commonFunctions.closeTextAreaWithButton(id);
    }
}



export default commonFunctions;