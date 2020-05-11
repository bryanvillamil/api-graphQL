import { connectDB } from '../db'
import { ObjectID } from 'mongodb';

export const queries = {
  Query: {
    // Query courses
    async getCourses () {
      let db
      let courses = []

      try{
        db = await connectDB()
        courses = await db.collection('Courses').find().toArray()
      } catch (error) {
        console.log('error al traer todos los cursos', error);
      }

      return courses
    },
    // Query course
    async getCourse (_, { id }) {
      let db
      let course = []

      try{
        db = await connectDB()
        course = await db.collection('Courses').findOne({ _id: ObjectID(id) })
      } catch (error) {
        console.log('error al traer curso', error);
      }

      return course
    },


    // Query students
    async getPeople () {
      let db
      let people = []

      try{
        db = await connectDB()
        people = await db.collection('Students').find().toArray()
      } catch (error) {
        console.log('error al traer todos la people', error);
      }

      return people
    },
    // Query student
    async getPerson (_, { id }) {
      let db
      let person

      try{
        db = await connectDB()
        person = await db.collection('Students').findOne({ _id: ObjectID(id) })
      } catch (error) {
        console.log('error al traer un estudiante', error);
      }

      return person
    },
  }
}