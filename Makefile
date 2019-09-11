all: build dockerize push

build:
	git add .
	git commit -a
	npm version patch
	ng build

dockerize:
	@docker build -t anthonyrawlinsuom/reactive:latest .

push:
	@docker push anthonyrawlinsuom/reactive:latest
