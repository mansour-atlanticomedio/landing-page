version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    # volumes:
    #   - ./frontend/dist:/usr/local/apache2/htdocs/
    restart: always

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=database
      - DB_USER=root
      - DB_PASSWORD=1234
    restart: always

  database:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=1234
      - MYSQL_DATABASE=landing_pagedb
    volumes:
      - ./mysql_data:/var/lib/mysql
    restart: always