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