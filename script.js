import {messageDetails} from './data.js'

import {v4 as uuidv4} from 'https://jspm.dev/uuid';
uuidv4()

const notification = document.getElementById("notifications")


document.addEventListener("click", function(e){
    if(e.target.dataset.id){
      showReply(e.target.dataset.id)
    }
 })


function showReply(replyId){  document.getElementById(`replies-${replyId}`).classList.toggle("hiddenreply")
}



function iterateMessage(){
   let list ="" 
  let newMessageClass =""
  let redDot = ""
  let colorChessClub = ""
  let showCommentedPicture = ""
  
messageDetails.forEach(function(message){

  if (message.isRead === "false"){
    newMessageClass = "unreadmsg"
    redDot = ""
   }  else{
    newMessageClass =""
    redDot ="dontshow"
  }

 colorChessClub = message.activity === "Chess Club" ? "blue" : ""
     
 showCommentedPicture = message.commentpicture === "" ? "dontshow" : ""
      
   list += `
   
    <div class=" ${newMessageClass} msglayout">
    
       <img src=${message.avatar} alt="image of ${message.person}">
       <p data-id="${message.id}">
               <span class="namestyling">${message.person}</span>  
               <span class="actionstyling" >${message.action}</span>  
               <span class="activitystyling ${colorChessClub}">${message.activity}</span> 
               <i class="${redDot} fa fa-solid fa-circle fa-sm" style="color: #ff1100;font-size:8px;"></i>
         <br/>
               <span class="timestampstyling"> ${message.time} ago </span>
        
         </p>
      <img src=${message.commentpicture} alt = "commented picture" class=${showCommentedPicture} >
            
     </div>
     
     <div class="hiddenreply replystyling" id="replies-${message.id}"> 
       <p>  Hello thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and Improving my game
       </p>
      </div> 
 
   `
   
 })
 return list
}



function render(){
  notification.innerHTML =  iterateMessage()
} 

render()

  
