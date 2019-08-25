build:
	docker-compose build --no-cache
dev:
	docker-compose down;
	sleep 5;
	docker-compose up;
deploy:
	npm run build;
	git add -A;
	git commit -m "Deploy on `date +'%Y-%m-%d %H:%M:%S'`";
	git push heroku master;