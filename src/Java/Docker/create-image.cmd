docker build --no-cache -f SQL\Dockerfile.PostgreSql -t diagramma-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t diagramma-java/app ../../..
