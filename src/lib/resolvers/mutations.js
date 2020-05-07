import { connectDB } from '../db'
import { ObjectID } from 'mongodb';

export const mutations = {
  Mutation: {
     // Mutations Course
    async createCourse (_, { input }) {
      const defaults = {
        description: ''
      }
  
      const newCourse = Object.assign(defaults, input)
      let db
      let course = []
  
      try{
        db = await connectDB()
        course = await db.collection('Courses').insertOne(newCourse)
        newCourse._id = task.insertedId
      } catch (error){
        console.log('error al crear un curso', error)
      }
  
      return newCourse
    },
    // EDIT Course
    async editCourse (_, { _id, input }) {
      let db
      let course

      try{
        db = await connectDB()
        await db.collection('Courses').updateOne(
          { _id: ObjectID(_id) },
          { $set: input }
        )
        course = await db.collection('Courses').findOne({ _id: ObjectID(_id) })
      } catch (error){
        console.log('error al Editar un curso', error)
      }
  
      return course
    },
    // DELETE Course
    async deleteCourse (_, { _id }) {
      let db
      let course

      try{
        db = await connectDB()
        course = await db.collection('Courses').findOne({ _id: ObjectID(_id) }) // Buscamos el id que nos envian a eliminar
        await db.collection('Courses').deleteOne({ _id: ObjectID(_id) }) // aqui lo eliminamos
      } catch (error){
        console.log('error al Eliminar un curso', error)
      }
  
      return course
    },

    // Mutations Students
    async createStudent (_, { input }) {
      const defaults = {
        apellido: ''
      }
  
      const newStudent = Object.assign(defaults, input)
      let db
      let student = []
  
      try{
        db = await connectDB()
        student = await db.collection('Students').insertOne(newStudent)
        newStudent._id = student.insertedId
      } catch (error){
        console.log('error al crear un Estudiante', error)
      }
  
      return newStudent
    },
    // EDIT Student
    async editStudent (_, { _id, input }) {
      let db
      let student
  
      try{
        db = await connectDB()
        await db.collection('Students').updateOne(
          { _id: ObjectID(_id) },
          { $set: input }
        )
        student = await db.collection('Students').findOne({ _id: ObjectID(_id)})
      } catch (error){
        console.log('error al editar un Estudiante', error)
      }
  
      return student
    },
    // DELETE Student
    async deleteStudent (_, { _id }) {
      let db
      let student
  
      try{
        db = await connectDB()
        student = await db.collection('Students').findOne({ _id: ObjectID(_id)})
        await db.collection('Students').deleteOne({ _id: ObjectID(_id)})
      } catch (error){
        console.log('error al Eliminar un Estudiante', error)
      }
  
      return student
    },
  }
}