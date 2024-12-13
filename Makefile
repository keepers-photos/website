.PHONY: setup dev build clean

# Variables
VENV = .venv
PYTHON = $(VENV)/bin/python3
PIP = $(VENV)/bin/pip
VITE = node_modules/vite/bin/vite.js
VITE_HOST := $(shell ifconfig | grep -o 'inet 192[^ ]*' | awk '{print $$2}' | tail -n 1)

# Setup development environment
setup: node_modules $(VENV)
	@echo "Setting up development environment..."
	@echo "export VITE_HOST=$(VITE_HOST)" >> ~/.zshrc
	@source ~/.zshrc

node_modules:
	npm install

$(VENV):
	python3 -m venv $(VENV)
	. $(VENV)/bin/activate && $(PIP) install -r requirements.txt

# Development server
dev:
	@if ! command -v modd > /dev/null; then \
		echo "Error: modd is not installed. Please install it from: https://github.com/cortesi/modd/releases/tag/v0.8"; \
		exit 1; \
	fi
	@echo "Starting development servers..."
	@(modd &)
	@($(VITE) dev)

# Build for deployment
build: clean compile vite-build
	@echo "Build complete. Files are ready in docs/ directory"

compile:
	@echo "Compiling HTML templates..."
	@find src -name '*.html' -exec $(PYTHON) compile.py {} \;

vite-build:
	@echo "Building with Vite..."
	@$(VITE) build

# Deploy
deploy: build
	git add .
	git commit -m "Release"
	git push

# Clean built files
clean:
	@echo "Cleaning built files..."
	@rm -rf docs/*

# Help
help:
	@echo "Available targets:"
	@echo "  setup   - Set up development environment (npm + python venv)"
	@echo "  dev     - Start development servers (modd + vite)"
	@echo "  build   - Build site for deployment"
	@echo "  deploy  - Build and deploy to GitHub Pages"
	@echo "  clean   - Remove built files"