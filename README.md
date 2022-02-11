# nem-stack-markdown-blog
This is a full markdown blog application, using the NEM stack (Node.js, Express, &amp; MongoDB). The frontend UI is being rendered with ejs.


## Markdown
In the vein of this README, the application will accept blogs in the markdown format, using a dependency known as marked.

## Dependencies
I used a series of different modules for this blog application, including the following:
- Express - The framework upon which our application is built and allows us to perform routing etc. 
- Nodemon - Allows for constant updates and continuous running of the application. 
- EJS - Used EJS format in order to render our views for the blog.
- Mongoose - Connection to our MongoDB Atlas Database.
- dotenv - For our .env file
- Method-Override - In order to override our form method and create a delete route.
- Slugify - Allows us to create a slug, set slug to slugify'd version of title and clean up our URLs for show page.
- Marked - marked.parse allows us to render the blogs markdown text to html.
- dompurify - used with jsdom to create a sanitized html version of our markdown text.
- jsdom - in order to allow html rendering within Node

## FUTURE
I would like to add additional functionality, with the help of other modules.
- Password encryption using brypt or another library to hash passwords.
- Google OAuth Login Authentication - Allow users to login with their Google Accounts.
- Local Login Authentication Using Passport
- Image Uploading Using Multer - Will use in the later version of the application in order to give individuals the ability to upload images alongside their blogs.

