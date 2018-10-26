clean:
	rm -rf node_modules *.js

circleci-markdownlint:
	circleci local execute --job=markdownlint

circleci-tslint:
	circleci local execute --job=tslint
