import axios, { CreateAxiosDefaults } from 'axios'

const BASE_URL = 'https://dev.neupinion.com/'

const defaultConfig: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}

const clientBasic = axios.create(defaultConfig)
const client = axios.create(defaultConfig)

export { clientBasic, client }
