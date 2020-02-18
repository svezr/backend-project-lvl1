install:
	npm install
start:
	npx node src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	npx node src/bin/games/brain-even.js
brain-calc:
	npx node src/bin/games/brain-calc.js
brain-gcd:
	npx node src/bin/games/brain-gcd.js
brain-prime:
	npx node src/bin/games/brain-prime.js
brain-progression:
	npx node src/bin/games/brain-progression.js
