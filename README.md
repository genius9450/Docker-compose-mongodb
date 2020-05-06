# MongoDB

### 需要修正  .env 檔案
	CONTAINER_NAME={NAME}					//容器名稱
	COMPOSE_CONVERT_WINDOWS_PATHS={0|1}		//是否為Windows路徑(0:否; 1:是)	
### MONGO 相關設定
	MONGO_VERSION={VERSION}				//MONGO 版本
	MONGO_ROOT_USERNAME={ROOT USERNAME} //MONGO ROOT 帳號
	MONGO_ROOT_PASSWORD={ROOT PASSWORD} //MONGO ROOT 密碼
	MONGO_HOST={IP} 					//MONGO 指定IP
	MONGO_OUT_PORT={OUT PORT}			//MONGO PORT

------------

### 執行步驟
	1. docker-compose build
	2. docker-compose up -d
	3. docker-compose ps

------------

### docker常用指令
###### docker
	1. 查看Images:
		docker images
	2. 查看containers: 
		docker ps -a
	3. 查看volume:
		docker volume list
	4. 刪除卸載Images跟containers:
		docker system prune -a
	5. 刪除卸載volume:
		docker volume prune
###### docker-compose(需要到資料底下docker-compose.yml存在目錄)
	1. 查看:
		docker-compose ps
	2. 啟用:
		docker-compose start
	3. 停止:
		docker-compose stop
	4. 啟用/更新:
		docker-compose up -d
	5. 重啟:
		docker-compose restart
	6. 卸載:
		docker-compose down
	