install:
	npm install
start:
	npx node src/bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	npx node src/bin/brain-even.js
brain-calc:
	npx node src/bin/brain-calc.js
brain-gcd:
	npx node src/bin/brain-gcd.js
brain-prime:
	npx node src/bin/brain-prime.js
brain-progression:
	npx node src/bin/brain-progression.js
