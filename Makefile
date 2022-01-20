instal: # первичная установка проекта
	npm ci
brain-games: # запуск файла с кодом игры
	node bin/brain-games.js
 publish: #
	npm publish --dry-run
 