install:
	npm install
start:
	npx node src/games/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	npx node src/games/brain-even.js
brain-calc:
	npx node src/games/brain-calc.js
brain-gcd:
	npx node src/games/brain-gcd.js
brain-prime:
	npx node src/games/brain-prime.js
brain-progression:
	npx node src/games/brain-progression.js
