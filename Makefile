.PHONY: build clean dev docker-build docker-run install test type-check

# Variables
APP_NAME = fraternity-website
DOCKER_IMAGE = $(APP_NAME):latest
DOCKER_FILE = Dockerfile

# Default target
all: clean install type-check build

# Clean build artifacts and dependencies
clean:
	rm -rf .next
	rm -rf node_modules
	rm -rf dist

# Install dependencies
install:
	npm ci

# Run type checking
type-check:
	npx tsc --noEmit

# Build the application
build: type-check
	npm run build

# Run development server
dev:
	npm run dev

# Run tests
test:
	npm run test

# Build Docker image
docker-build:
	docker build -t $(DOCKER_IMAGE) -f $(DOCKER_FILE) .

# Run Docker container
docker-run:
	docker run -p 3000:3000 $(DOCKER_IMAGE)

# Full Docker workflow
docker: docker-build docker-run