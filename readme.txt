Image Resizer API

files to use with the image resizer are included in the projectPics file, along
with a test image.

in order to resize an image, run the start script, and access the api
entering the name of the file you wish to convert along with your desired height and width
in the following format:
http://localhost:3000/api/resize?imagename=encenadaport&height=600&width=200


In order to build the server, run "npm run build"
In order to start the server, run "npm run start"
In order to test, run "npm run test"

EDIT: RESUBMIT
-implemented __dirname so resizing functionality should work on any computer, not just mine
-moved everything but express and sharp out of the dependencies and into dev dependencies
-used supertest to make a get request in my test instead of relying on server being running
-checked and corrected all callbacks and functions to have explicitly typed parameters and return. 

