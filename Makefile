all: build push

build:
	git add .
	git commit -a
	npm version patch
	@docker build -t anthonyrawlinsuom/reactive:latest .

push:
	@docker push anthonyrawlinsuom/reactive:latest
