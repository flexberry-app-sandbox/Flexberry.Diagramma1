docker build --no-cache -f SQL\Dockerfile.PostgreSql -t diagramma/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t diagramma/app ../..
