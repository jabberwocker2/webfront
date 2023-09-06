const commonFunctions = {};
//text area


commonFunctions.openTextArea = function openReplyTextArea(textArea,button) {
    if(document.getElementById(textArea).style.display === "none") {
        document.getElementById(button).style.display = "block";
        document.getElementById(textArea).style.display = "block";
    } else {
        document.getElementById(textArea).style.display = "none";
        document.getElementById(button).style.display = "none";
    }
}

//postComment
commonFunctions.postComment = async (id, parent_id, level_id, mainParentId, userStore,textAreaValue,textArea,button) => {


    try {
        await userStore.addComment(id, textAreaValue, parent_id, level_id, mainParentId)
        document.getElementById(textArea).style.display = "none";
        document.getElementById(button).style.display = "none";

    } catch (error) {
        console.log(error)
    }

}


//change height
commonFunctions.changeHeight  = async (id) => {
    document.getElementById("commentReplyArea_"+id).style.height = "auto";
    console.log(document.getElementById("textArea"+id).value);
    document.getElementById("commentReplyArea_"+id).style.height = (document.getElementById("textArea"+id).scrollHeight+2)+"px";
    if(document.getElementById("discussButton"+id).children[0].innerHTML === "Post") {
        commonFunctions.showCharacterCount(id);
        commonFunctions.changeBorderColor(id);
    }
    if(document.getElementById("discussButton"+id).children[0].innerHTML === "Close") {
        commonFunctions.showAllCommentsCount(id);
    }
}

//changeBorderColor
commonFunctions.changeBorderColor = (id) => {
    let percentage =( document.getElementById("textArea"+id).value.length/200)*100;
    document.getElementById("numberTab"+id).style.color = commonFunctions.hsl_col_perc(percentage,document.getElementById("textArea"+id).value.length,200);

}

//change color for border green to red
commonFunctions.hsl_col_perc = (percent, start, end) => {
    var r = percent<50 ? 255 : Math.floor(255-(percent*2-100)*255/100);
    var g = percent>50 ? 255 : Math.floor((percent*2)*255/100);
    return 'rgb('+g+','+r+',0)';
}

//show character length of textArea
commonFunctions.showCharacterCount = (id) => {
    document.getElementById("numberTab"+id).innerHTML = document.getElementById("textArea"+id).value.length+"/200";
}

//show
commonFunctions.showAllCommentsCount = (id) => {

}

commonFunctions.openTextAreaWithButton = (id) => {
    document.getElementById("textArea"+id).style.bottom = "0px";
    document.getElementById("commentReplyArea_"+id).style.height = "80px";

    document.getElementById("discussButton"+id).children[0].innerHTML = "Post";
    document.getElementById("postCommentButton"+id).style.display = "Block";
    document.getElementById("discussButton"+id).children[0].style.marginLeft = 0;
    document.getElementById("discussButton"+id).style.width = "473px";
    document.getElementById("discussButton"+id).style.borderColor = "lightgray";
    commonFunctions.showCharacterCount(id);
    commonFunctions.changeBorderColor(id);
    document.getElementById("discussButton"+id).children[0].style.color = "Black";

    document.getElementById("thoughtContainer"+id).style.bottom = "0px";
}

//closeTextAreaWithButton
commonFunctions.closeTextAreaWithButton = (id) => {
    document.getElementById("textArea"+id).style.bottom = "100px";
    document.getElementById("commentReplyArea_"+id).style.height = "0px";
    document.getElementById("discussButton"+id).children[0].style.color = "red";
    document.getElementById("discussButton"+id).style.borderColor = "red";
    document.getElementById("discussButton"+id).style.width = "170px";
    document.getElementById("numberTab"+id).innerHTML = "";
    document.getElementById("discussButton"+id).children[0].style.marginLeft = "35%";
    document.getElementById("discussButton"+id).children[0].innerHTML = "Close";
    document.getElementById("discussButton"+id).addEventListener('mouseenter', function(e) {
        console.log("mouse enter");
        if(document.getElementById("discussButton"+id).children[0].innerHTML === "Close") {
            document.getElementById("discussButton"+id).children[0].style.color = "transparent";
            document.getElementById("discussButton"+id).style.background = "red";
        }
    });
    document.getElementById("discussButton"+id).addEventListener('mouseleave', function(e) {
        console.log("mouse enter");
            document.getElementById("discussButton"+id).children[0].style.color = "Black";
            document.getElementById("discussButton"+id).style.background = "transparent";
    });
    document.getElementById("postCommentButton"+id).style.display = "none";
    document.getElementById("discussButton"+id).children[0].style.justifySelf = "center";
    document.getElementById("thoughtContainer"+id).style.bottom = "100px";

}

//closeTextArea
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

//toggleTextArea
commonFunctions.toggleTextArea = (id,commentId,primaryObject) => {
    if(document.getElementById("discussButton"+id).children[0].innerHTML === "Close") {
        commonFunctions.openTextAreaWithButton(id);
        document.getElementById("postCommentButton"+id).style.display = "none";
        document.getElementById("replyCommentButton"+id).style.display = "Block";
        let replyValue = document.getElementById("textArea"+id);
        console.log(replyValue,"replyValueInCommon");
        document.getElementById("replyCommentButton"+id).addEventListener('click',function () {commonFunctions.postComment(primaryObject.post_id,primaryObject.comment_id,primaryObject.level_id,primaryObject.comment_value_id,primaryObject.userStore,(document.getElementById("textArea"+id).value),primaryObject.textArea,primaryObject.button)})

         // border color logic ?
        // document.getElementById("commentTileSelect-"+commentId).style.borderColor = "black";
        // document.getElementById("commentTileSelect-"+commentId).style.border = "2px solid";
    } else {
        document.getElementById("replyCommentButton"+id).style.display = "none";
        document.getElementById("postCommentButton"+id).style.display = "Block";
        for(let i=0;i<document.getElementsByClassName("commentTileSelect").length;i++) {

            document.getElementsByClassName("commentTileSelect")[i].style.borderColor = "lightgray";
        }
        commonFunctions.closeTextAreaWithButton(id);
    }
}



export default commonFunctions;