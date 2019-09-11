all: build dockerize push

build:
	git add .
	git commit -a
	npm version patch
	ng build --prod

dockerize:
	git add .
	git commit -a
	@docker build -t anthonyrawlinsuom/reactive:latest .

push:
	@docker push anthonyrawlinsuom/reactive:latest
