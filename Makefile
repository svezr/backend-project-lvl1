install:
	npm install
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	npx node bin/brain-even.js
brain-calc:
	npx node bin/brain-calc.js
brain-gcd:
	npx node bin/brain-gcd.js
brain-prime:
	npx node bin/brain-prime.js
brain-progression:
	npx node bin/brain-progression.js
