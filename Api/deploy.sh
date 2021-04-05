docker-compose down

docker rm -f $(docker ps -a -q)
docker rm -v $(docker ps -a -q)
docker rmi $(docker images -q)

docker build -t mfr_api .
docker-compose -f docker-compose.yml up -d --build

docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /home/Portainer/data:/data portainer/portainer
