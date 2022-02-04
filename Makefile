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
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
brain-prime:
	node bin/brain-prime.js
