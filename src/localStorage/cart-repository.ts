import { OrderDTO } from '../models/order'

export const save = (cart: OrderDTO) => {
  const str = JSON.stringify(cart)
  localStorage.setItem('com.devsuperior.dscommerce/Cart', str)
}

export const get = () : OrderDTO => {
  const str = localStorage.getItem('com.devsuperior.dscommerce/Cart') || '{"items"=[]}'
  return JSON.parse(str)
}
