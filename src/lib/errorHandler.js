export const errorHandler = (error) => {
  console.log('error', error)
  throw new Error('Fallo la Operacion del Servidor')
}