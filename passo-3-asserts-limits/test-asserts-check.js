import http from 'k6/http'
import { sleep, check } from 'k6'

export const options = {
    vus: 10, // numero de usuarios virtuais 
    duration: '10s', // tempo de execucao do teste
}

export default function () {
    let response = http.get('http://localhost:3000/api/health')
    check(response, {
        'Deve validar o status code 200': (r) => r.status === 200,
    });
    sleep(1)
}