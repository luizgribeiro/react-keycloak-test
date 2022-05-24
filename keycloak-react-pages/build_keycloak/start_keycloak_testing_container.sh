#!/bin/bash

docker rm keycloak-testing-container || true

cd /home/luiz/Dev/voltz/keycloak-test/keycloak-react-pages/build_keycloak

docker run \
   -p 8080:8080 \
   --name keycloak-testing-container \
   -e KEYCLOAK_ADMIN=admin \
   -e KEYCLOAK_ADMIN_PASSWORD=admin \
   -e JAVA_OPTS=-Dkeycloak.profile=preview \
   -v /home/luiz/Dev/voltz/keycloak-test/keycloak-react-pages/build_keycloak/src/main/resources/theme/keycloak-react-pages:/opt/keycloak/themes/keycloak-react-pages:rw \
   -it quay.io/keycloak/keycloak:18.0.0 \
   start-dev
