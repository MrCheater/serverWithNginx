nginx -s stop
taskkill /IM nginx.exe /F
taskkill /IM node.exe /F

set SERVER_PORT=3000
start node ./app/server/api/main
set SERVER_PORT=3001
start node ./app/server/auth/main
nginx -p %cd%