.DEFAULT_GOAL := help

# All devstack targets are "PHONY" in that they do not name actual files.
# Thus, all non-parameterized targets should be added to this declaration.
.PHONY: help provision build up logs attach shell stop requirements upgrade

# Generates a help message. Borrowed from https://github.com/pydanny/cookiecutter-djangopackage.
help: ## Display this help message.
	@echo "Please use \`make <target>' where <target> is one of"
	@awk -F ':.*?## ' '/^[a-zA-Z]/ && NF==2 {printf "\033[36m  %-28s\033[0m %s\n", $$1, $$2}' Makefile | sort

dev:  ## Install dependencies and bring up the dev server
	yarn install && yarn dev

deploy-staging:  ## Deploy app to staging (https://staging.codesync.com)
	copilot svc deploy --name webapp --env staging

deploy-prod:  ## Deploy app to production (https://www.codesync.com)
	copilot svc deploy --name webapp --env prod
