all: build push

build:
	@docker build -t anthonyrawlinsuom/reactive:latest .

push:
	@docker push anthonyrawlinsuom/reactive:latest
