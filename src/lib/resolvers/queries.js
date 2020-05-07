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
    async getStudents () {
      let db
      let students = []

      try{
        db = await connectDB()
        students = await db.collection('Students').find().toArray()
      } catch (error) {
        console.log('error al traer todos los students', error);
      }

      return students
    },
    // Query student
    async getStudent (_, { id }) {
      let db
      let student

      try{
        db = await connectDB()
        student = await db.collection('Students').findOne({ _id: ObjectID(id) })
      } catch (error) {
        console.log('error al traer un estudiante', error);
      }

      return student
    },
  }
}