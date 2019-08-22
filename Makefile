build:
	docker-compose build --no-cache
dev:
	docker-compose down;
	sleep 5;
	docker-compose up;