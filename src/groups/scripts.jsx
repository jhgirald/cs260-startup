import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const AddList = () => {
//   const [chats, setChats] = useState([]);

//   const getChats = () => {
//     // Simulating fetching chats from the DB
//     const fetchedChats = [
//       { name: 'John Doe', msg: 'ABC', img: 'https://mdbootstrap.com/img/new/avatars/8.jpg' },
//       { name: 'Alex Ray', msg: '123', img: 'https://mdbootstrap.com/img/new/avatars/6.jpg' },
//       { name: 'Kate Hunington', msg: 'XYZ', img: 'https://mdbootstrap.com/img/new/avatars/7.jpg' },
//     ];

//     setChats(fetchedChats);
//     // console.log(fetchedChats);
//     // console.log(chats);
    

//   };

//   const addChatList = (chatName, lastMessage, imageUrl) => {
//     setChats((prevChats) => [
//       ...prevChats,
//       { chatName, lastMessage, imageUrl }
//     ]);
//   };

//   useEffect(() => {
//     // Fetch chats when the component mounts
//     getChats();
//     console.log(chats);

//   }, []);
  
  return (
    <div>
        <ul className="list-group list-group-light" id="chatList">
            {/* <NavLink className="" to="/chat"> */}
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                        <img alt="" style={{width: '45px', height: '45px'}} className="rounded" src='https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                        <div className="ms-3">
                            <p className="fw-bold mb-1">Group 1</p>
                            {/* <p className="text-muted mb-0">ABC</p> */}
                        </div>
                </div>
            </li>
            {/* </NavLink> */}
            {/* <NavLink className="" to="/chat"> */}

            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    
                        <img  style={{width: '45px', height: '45px'}} className="rounded" src='https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                        <div className="ms-3">
                            <p className="fw-bold mb-1">Group 2</p>
                            {/* <p className="text-muted mb-0">123</p> */}
                        </div>
            </div>
            </li>
            {/* </NavLink>     */}

            {/* <NavLink className="" to="/chat"> */}

            <li className="list-group-item d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                        <img alt="" style={{width: '45px', height: '45px'}} className="rounded" src='https://images.pexels.com/photos/1111318/pexels-photo-1111318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Group 3</p>
                            {/* <p className="text-muted mb-0">XYZ</p> */}
                            </div>
                </div>

            </li>
            {/* </NavLink> */}

        </ul>
    </div>
  );
};

export default AddList;
