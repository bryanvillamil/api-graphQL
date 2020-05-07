import { mutations } from './mutations'
import { queries } from './queries'

export const resolvers = { ...queries, ...mutations }