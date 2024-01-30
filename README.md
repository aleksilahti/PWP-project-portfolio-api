# PWP SPRING 2024
# Project Portfolio API(PPA)
# Group information
* Student 1. Aleksi Lahti(aleksi.mikael.lahti@gmail.com)


__Remember to include all required documentation and HOWTOs, including how to create and populate the database, how to run and test the API, the url to the entrypoint and instructions on how to setup and run the client__

# Serving the application locally using docker
## If running for the first time(TODO)
- run "make ppa-first-up"
## If database has been setup before(TODO)
- run "make ppa-up"



# Serving the Angular frontend for development

## Standalone(Mocked backend)
- cd portfolio-client
- npm run start:ppa-mock

## Local backend/docker(TODO)
- cd portfolio-client
- npm run start:ppa-local

## Deployed instance for aleksilahti.com(TODO)
- cd portfoli-client
- npm run start:ppa-deployed


# Serving the backend for development

## Database setup(TODO)
- Basic user "username:password" and Admin user"admin:password" are created by default
- If desired the database can be populated with projects/tags/users etc using the script below
    - run bash script ./populate with options for number of projects, users(creators/collaborators), tags. Example below
    - sh ./populate -u 3 -t 5 -p 12
    - Running the script without any options defaults to 1 user having 10 projects with 3 tags.

## Clearing the database(TODO)
- run bash script ./erase

## Using docker compose(Also builds the client to be available at localhost:4200)(TODO)
- cd portfolio-service
- Build docker image "docker build -t portfolio-service:local ."
- cd ..
- run "make ppa-local-up"

## Local JVM
- install java 21 and maven(sdkman is the recommended tool for this for unix users. For windows Chocolatey might work but I have had issues with it previously)
    - with sdkman installed run
    - "sdk use java 21.0.1-tem" -> if not installed yet run "- sdk install java 21.0.1-tem" first
    -./mvnw spring-boot:run
