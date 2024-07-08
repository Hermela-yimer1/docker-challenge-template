# docker-challenge-template
Steps 
Challenge 1 
first open CMD as admin
run wsl –install
if that doesn’t work run wsl –install -d ubuntu 
wsl.exe –update to make sure that its up to date 
then wsl.exe –install ubuntu
 it will prompt you with new username and password
then make sure that the version that you are using is correct by running wsl -l -v 
after that is done install docker and run as admin 
make sure that you go to setting and check the WSL 
clone the GitHub and open it on VS 
create the files that are required which are public folder and index.html file as well as docker file  then run the following 
docker build -t my-static-page.
docker run -d -p 8080:80 --name my-static-page-container my-static-page
docker PS
after commit on GitHub when done 

challenge 2
create the folder and extract the file in there after open it with VS
create the files that are needed for the docker to work which are  Dockerfile , docker-compose and nginx.conf
after the files are created run the following 
docker-compose up –build
docker-compose PS
copy the URL and screenshot the results 
