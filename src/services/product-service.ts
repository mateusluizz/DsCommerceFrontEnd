import axios from 'axios'
import { BASE_URL } from '../utils/system'

export const findAll = () => axios.get(`${BASE_URL}/products?size=12`)

export const findById = (id: number) => axios.get(`${BASE_URL}/products/${id}`)
