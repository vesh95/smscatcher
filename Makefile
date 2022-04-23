up:
	@docker-compose -f docker-compose.dev.yml up -d

restart:
	@docker-compose -f docker-compose.dev.yml restart

exec:
	@docker-compose -f docker-compose.dev.yml exec app sh

down:
	@docker-compose -f docker-compose.dev.yml down

release: publish-npm build

build:
	@./build.sh

publish-npm:
	@npm publish
