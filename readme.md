# Lyft Code Sample

- Takes a string as a POST request, and will return every third letter from that string.
- Two main functions.
  - `returnThirds` : takes a string, loops through and returns the third letter.
    - Does this by checking where the pointer is, check its modulous by three. If it returns zero it will apend it to the placeholder constant `thirds`, which will return when it is finished looping.
    - Should take place in O(n), as the string grows, it will take more time/actions respectively. 
  - `server.post('test'){...}`: Code to make the express server connect the routes.
    - This will pull out the string from the request body, feed the string to the `returnThirds` function and then send back the new string.

----



My projects do not have live back-ends at the momment, so here is my code challenge/sample. That being said most of my projects do have accompaning back-ends I'll link them here. 



**SharedBackend**

- I noticed I am rewritting code often to create a backend, this is a project I am working on to create one backend to manage the databases for my personal projects, currently connecting the FocusedKanban Project.
- https://github.com/aply333/-SharedBackend

**Snippet Tool**

- Web-based version of the SnippetLab. Post code into an editor field, where you can then create annotations on the the code. 

- Backend - https://github.com/aply333/SnippetTool-BackEnd
- Frontend - https://github.com/aply333/SnippetFrontEnd

**Task to Date**

- Simple Calendar Tool.
  - Backend: https://github.com/aply333/TaskToDate-Backend
  - Front-End: https://github.com/aply333/TaskToDate

