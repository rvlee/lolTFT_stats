build:
	docker-compose build --no-cache
dev:
	docker-compose down;
	sleep 5;
	docker-compose up;
deploy:
	npm run build;
	git add -A;
	git commit -m "Deploy";
	git push heroku master;