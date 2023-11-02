function getGroups(){
    //Connect to DB and get groups for the user
    //The following are just examples since there is no DB
    const groups = [
        { name: 'Group 1', img: "https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: 'Group 2', img: "https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { name: 'Group 3', img: "https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      ];
      groups.forEach((group) =>{
        addGroupList(group.name, group.img);
      });
}
function addGroupList(groupName, imageUrl) {
    const myList = document.getElementById('groupList');

    const newItem = document.createElement('li');
    newItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    const innerContent = `
      <div class="d-flex align-items-center">
        <img src="${imageUrl}" alt="" style="width: 45px; height: 45px" class="rounded" />
        <div class="ms-3">
          <p class="fw-bold mb-1">${groupName}</p>
        </div>
      </div>
    `;

    newItem.innerHTML = innerContent;
    myList.appendChild(newItem);
  }


  function getChats(){
    //Connect to DB and get chats for the user
    //The following are just examples since there is no DB
    const chats = [
        { name: 'John Doe', msg: "ABC", img: "https://mdbootstrap.com/img/new/avatars/8.jpg" },
        { name: 'Alex Ray', msg: "123", img: "https://mdbootstrap.com/img/new/avatars/6.jpg" },
        { name: 'Kate Hunington', msg: "XYZ", img: "https://mdbootstrap.com/img/new/avatars/7.jpg" },
      ];
      chats.forEach((chats) =>{
        addChatList(chats.name, chats.msg, chats.img);
      });
}

function addChatList(chatName, lastMessage, imageUrl) {
  const myList = document.getElementById('chatList');

  const newItem = document.createElement('li');
  newItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  const innerContent = `
    <div class="d-flex align-items-center">
      <img src="${imageUrl}" alt="" style="width: 45px; height: 45px" class="rounded" />
      <div class="ms-3">
        <p class="fw-bold mb-1">${chatName}</p>
        <p class="text-muted mb-0">${lastMessage}</p>
      </div>
    </div>
  `;

  newItem.innerHTML = innerContent;
  newItem.onclick = function() {
    window.location.href = "chat.html";
  };
  myList.appendChild(newItem);
}


function getNotifications(){
  //Connect to DB and get notifications for the user
  //The following are just examples since there is no DB
  const notifications = [
      { name: 'Notification 1', msg: "ABC"},
      { name: 'Notification 2', msg: "123" },
      { name: 'Notification 3', msg: "XYZ" },
    ];
    notifications.forEach((notification) =>{
      addNotificationList(notification.name, notification.msg);
    });
}
function addNotificationList(notificationName, message) {
  const myList = document.getElementById('notificationList');

  const newItem = document.createElement('li');
  newItem.className = 'list-group-item d-flex justify-content-between align-items-center';
  const innerContent = `
    <div class="d-flex align-items-center">
      <div class="ms-3">
        <p class="fw-bold mb-1">${notificationName}</p>
        <p class="text-muted mb-0">${message}</p>
      </div>
    </div>
  `;

  newItem.innerHTML = innerContent;
  myList.appendChild(newItem);
}