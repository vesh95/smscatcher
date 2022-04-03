up:
	@docker-compose up -d

restart:
	@docker-compose restart

exec:
	@docker-compose exec app sh

down:
	@docker-compose down