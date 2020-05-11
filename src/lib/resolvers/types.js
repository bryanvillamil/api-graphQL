import { connectDB } from '../db'
import { errorHandler } from '../errorHandler'
import { ObjectID } from 'mongodb'

export const types = {
  Course: { 
    async people({ people }) { 
      let db 
      let peopleData
      let ids
      try {
        db = await connectDB()
        ids = people ? people.map(id => ObjectID(id)) : [] // if people exist
        peopleData = ids.length > 0 ? await db.collection('Students').find(
          { _id:  { $in: ids } }
        ).toArray() 
        : []
      } catch (error){
        errorHandler(error)
      }

      return peopleData
    }
  },

  Person: {
    __resolveType: (person, context, info) => {
      if (person.phone) {
        return 'Monitor'
      }

      return 'Student'
    }
  },

  GlobalSearch: {
    __resolveType: (item, context, info) => {
      if (item.title) {
        return 'Course'
      }

      if (item.phone) {
        return 'Monitor'
      }

      return 'Student'
    }
  }
}