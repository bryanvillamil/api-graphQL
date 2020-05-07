import { mutations } from './mutations'
import { queries } from './queries'
import { types } from './types'

export const resolvers = { ...queries, ...mutations, ...types }