dev:
	yarn install --cwd "applications/crawler"
	yarn install --cwd "applications/api"
	yarn install --cwd "applications/client"
	docker compose up --build --force-recreate

prod-up:
	docker compose -f docker-compose.prod.yml up -d --build --force-recreate

prod-stop:
	docker compose -f docker-compose.prod.yml stop
