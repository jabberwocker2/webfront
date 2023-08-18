
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



export default commonFunctions;