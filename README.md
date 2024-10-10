# CAOHOANGTHIEN

## build docker laravel

### build image: 
docker build -t laravel .

### run container: 
docker run -d -p 8000:80 --name laravel-app laravel

## build docker react

### build image: 
docker build -t react .

### run container: 
docker run -p 3000:3000 react