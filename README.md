- domen - https://eugen-bash.com/
- docker

# Dev

docker build -t eugen/eugen.bash:dev .
docker run \
 -it \
 --rm \
 -v \${PWD}:/app \
 -v /app/node_modules \
 -p 3001:3000 \
 -e CHOKIDAR_USEPOLLING=true \
 eugen/eugen.bash:dev
