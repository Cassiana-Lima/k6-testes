import http from 'k6/http'
import { sleep, check } from 'k6'
import { BASE_URL } from '../config.js'

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: '30s', target: 400 }, //ramp-up de 1 ate 400 VUs em 30 segundos.
    { duration: '40s', target: 0 }, // ramp-down de 400 VUs até 0 em 40 segundos.
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