# Plano de teste de performance

## Criacao do report e monitoria
//set K6_WEB_DASHBOARD=true\
//set K6_WEB_DASHBOARD_EXPORT=html-report.html\
//set K6_WEB_DASHBOARD_PERIOD=5s \
//k6 run script.js\

## Executar Smoke Tests 
- Validar se a aplicacao ( api, site, banco, etc. ) está no ar

### Configuracao do teste
- VUs: 2
- Tempo de execucao: 10 segundos 

## Executar Load Tests (teste de performance)
- Validar se um fluxo aguenta com um certo numero de usuarios
- Validar fluxo de login 

### Configuracao do teste
- VUs: 50
- Tempo de execucao: 2 minutos

### Execucao via Terminal
set K6_WEB_DASHBOARD=true \
set K6_WEB_DASHBOARD_EXPORT=load-test-report.html \
set K6_WEB_DASHBOARD_PERIOD=5s \
k6 run load-test.js

## Executar Stress Tests (teste de estresse)
- Validar o limite do sistema, para descobrir ate onde aguenta ate falhar
- Validar fluxo de login 

### Configuracao do teste
- VUs: aumento gradativo
- Estagios 
 - ramp-up de 1 ate 200 VUs em 1 minuto.
 - mantem as 200 VUs durante 5 minutos.
 - ramp-down de 200 VUs até 0 em 1 minuto.

### Execucao via Terminal
set K6_WEB_DASHBOARD=true \
set K6_WEB_DASHBOARD_EXPORT=stress-test-report.html \
set K6_WEB_DASHBOARD_PERIOD=5s \
k6 run stress-test.js

## Executar Spike Tests (teste de pico)
- Validar a reacao da aplicacao e da infraestrutura com picos de requisicoes 
- Validar fluxo de login 

### Configuracao do teste
- VUs: aumento repentino
- Estagios 
 - ramp-up de 1 ate 400 VUs em 30 segundos.
 - ramp-down de 400 VUs até 0 em 40 segundos.

### Execucao via Terminal
set K6_WEB_DASHBOARD=true \
set K6_WEB_DASHBOARD_EXPORT=spike-test-report.html \
set K6_WEB_DASHBOARD_PERIOD=5s \
k6 run spike-test.js

## Executar Soak Tests (teste de imersao)
- Validar a estabilidade do sistema e da infraestrutura por um longo periodo de teste
- Validar fluxo de login 

### Configuracao do teste
- VUs: aumento gradativo
- Estagios 
 - ramp-up de 1 ate 200 VUs em 1 minuto.
 - mantem as 200 VUs durante 1 hora.
 - ramp-down de 200 VUs até 0 em 1 minuto.

### Execucao via Terminal
set K6_WEB_DASHBOARD=true \
set K6_WEB_DASHBOARD_EXPORT=soak-test-report.html \
set K6_WEB_DASHBOARD_PERIOD=5s \
k6 run soak-test.js

## Executar Breakpoint Tests (teste de ponto de interrupcao)
- Validar o quanto sua aplicacao ou infraestrutura aguenta
- Validar fluxo de login 

### Configuracao do teste
- VUs: aumento gradativo
- Estagios 
 - ramp-up de 1 ate 50000 VUs em 1 hora.
 

### Execucao via Terminal
set K6_WEB_DASHBOARD=true `
set K6_WEB_DASHBOARD_EXPORT=breakpoint-test-report.html `
set K6_WEB_DASHBOARD_PERIOD=5s `
k6 run breakpoint-test.js