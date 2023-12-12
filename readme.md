# FamilyMade

## Family is important!
Family is important and so is food.<br>
We all know family search as one of the best tools to bring families together.<br>
Do you know what else brings family together? FOOD!<br>

## Design
This web app will allow you to create a group or family that can share food recipies, pictures, and ratings. It is designed so that old recipies can be kept for generations and those who made them remebered.<br>
Users are going to be able to send messages within the app and connect with far away members.


Bring to life your family’s history by exploring the food of those that came before you!

![image](https://github.com/jhgirald/cs260-startup/assets/63177251/34c130e1-85f3-4694-b46b-eeaf864d685f)
![image](https://github.com/jhgirald/cs260-startup/assets/63177251/bc81603a-7392-4d4f-b680-aad23b242731)


## Technologies
### 1. HTML
It structures the content on the service, defining elements like headings, paragraphs, links, images, and more.<br>
I added, in the html startup assignment, the basic skeleton for the service. All pages that will need to be accessed are there (a landing page, login/create account, main page, chats, groups, profile, and notifications).

### 2. CSS (Cascading Style Sheets)
CSS will be used for styling the web pages, controlling the layout, and enhancing the visual presentation of HTML elements.

### 3. JavaScript
JavaScript is a programming language that adds interactivity to web pages. It runs in the browser and allows dynamic content updates, user interactions, and asynchronous communication. It will be used to control valid data and frontend logic.<br>
I have added several scripts to ensure log in, new account creation, backend database pull and fill data, and future websocket connections.

### 3.5 Services
I added services and endpoints. Node and express are now running the services. Endpoints for backend data calls have been added. Third party call to get quotes have been added. Middleware creates a cookie with username.<br>
To test the quote and the cookie: Log in (No backend yet so just use username, password does nothing) using any username you want to use. Click log in button and this should take you to main.html where a pop up with the username and a random quote will show up.

### 4. Backend
The backend involves server-side scripting, handling databases, and managing application logic. This load from the database, do validation on login.<br>
A database has been added. Creating accounts and logging in checks on database for authentification. Database now holds recipes. Users will soon be able to add their recipes. Currently recipes stored in the database are loaded to the website. <br>
When logging in, it will do nothing if there was an error. I am going to change the functionality to be able to finish for the class. It will still contain the same things except for notifications and groups. Instead there will be see recipes and add recipes.

### 5. Database
The database will store and manage data for the web application such as group information and recipies. Database is up and running!

### 6. WebSocket
WebSockets provide a bidirectional communication channel between the client and server over a single, long-lived connection. This will serve the chat option on the application.
