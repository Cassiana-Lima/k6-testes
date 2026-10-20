import http from 'k6/http'
import { sleep } from 'k6'
import { expect } from 'https://jslib.k6.io/k6-testing/0.6.1/index.js';
import {BASE_URL} from '../config.js'

export const options = {
    vus: 50, // numero de usuarios virtuais 
    duration: '2m', // tempo de execucao do teste
    thresholds: {
        'http_req_duration' : ['p(90) < 10'],
        'http_req_failed' : ['rate < 0.01']
    }
}
export default function () {
    let response = http.get(`${BASE_URL}/api/health`)
    expect.soft(response.status).toBe(200) //soft garante que o teste continue 
    //sleep(1)
}
//set K6_WEB_DASHBOARD=true\
//set K6_WEB_DASHBOARD_EXPORT=test-report.html\
//set K6_WEB_DASHBOARD_PERIOD=5s
//k6 run test-report.js\
