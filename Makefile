all: build push

build:
	npm version patch
	@docker build -t anthonyrawlinsuom/reactive:latest .

push:
	@docker push anthonyrawlinsuom/reactive:latest
