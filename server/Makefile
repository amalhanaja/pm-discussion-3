clean: clean-build

clean-build:
	@echo "======  CLEANING BUILD FILE  ====="
	@rm -rf ./build

compile: clean
	@echo "======  COMPILING  ======"
	@npx tsc

watch: clean
	@npx tsc --build --watch

start: compile
	@echo "=====  START RUNNING PROD  ====="
	@node build

dev:
	@echo "=====  RUNNING DEVELOPMENT  ====="
	@npx nodemon src/index.ts

sync:
	@pnpm install