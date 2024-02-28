import { OrderDTO } from '../models/order'
import * as cartRepository from '../localStorage/cart-repository'

export const saveCart = (cart: OrderDTO) => {
  cartRepository.save(cart)
}

export const getCart = (): OrderDTO => {
  return cartRepository.get()
}
