import http from 'k6/http'
import { sleep } from 'k6'
import { expect } from 'https://jslib.k6.io/k6-testing/0.6.1/index.js';

export const options = {
    vus: 10, // numero de usuarios virtuais 
    duration: '10s', // tempo de execucao do teste
}

export default function () {
    let response = http.get('http://localhost:3000/api/health')
    expect.soft(response.status).toBe(200) //soft garante que o teste continue 
    sleep(0.5)
}