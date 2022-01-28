install: # первичная установка проекта
	npm ci
brain-games: # запуск файла с кодом игры
	node bin/brain-games.js
publish: # Проверка на ошибки при публикации проекта (делать в конце, перед пушем в репозиторий)
	npm publish --dry-run
lint: # Запускает линтер
	npx eslint .
 brain-even: # запуск игры - проверка чисел на чётность.
	node bin/brain-even.js
