dev:
	yarn install --cwd "applications/crawler"
	yarn install --cwd "applications/api"
	docker-compose up

up-prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d