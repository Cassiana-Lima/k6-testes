import http from 'k6/http'
import { sleep, check } from 'k6'
import { BASE_URL } from '../config.js'

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '1m', target: 200 }, //ramp-up de 1 ate 200 VUs em 1 minuto.
    { duration: '1h', target: 200 }, // mantem as 200 VUs durante 1 hora.
    { duration: '1m', target: 0 }, // ramp-down de 200 VUs até 0 em 1 minuto.
  ],
};

export default function () {

    const payload = JSON.stringify(
        {
            "email": "usuario@teste.com",
            "password": "user123"
        }
    )
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    }
    let response = http.post(`${BASE_URL}/api/login`, payload, params)
    sleep(1)

    check(response, {
        'Status code deve ser 200': (r) => r.status === 200
    })
}