default:
	npm install
	./node_modules/http-server/bin/http-server --cors &
	webpack -w