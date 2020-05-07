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
        newCourse._id = course.insertedId
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
    async createPerson (_, { input }) {
      const defaults = {
        apellido: ''
      }
  
      const newPerson = Object.assign(defaults, input)
      let db
      let person
  
      try{
        db = await connectDB()
        person = await db.collection('Students').insertOne(newPerson)
        newPerson._id = person.insertedId
      } catch (error){
        console.log('error al crear una persona', error)
      }
  
      return newPerson
    },
    // EDIT Student
    async editPerson (_, { _id, input }) {
      let db
      let person
  
      try{
        db = await connectDB()
        await db.collection('Students').updateOne(
          { _id: ObjectID(_id) },
          { $set: input }
        )
        person = await db.collection('Students').findOne({ _id: ObjectID(_id)})
      } catch (error){
        console.log('error al editar un Persona', error)
      }
  
      return person
    },
    // DELETE Student
    async deletePerson(_, { _id }) {
      let db
      let person
  
      try{
        db = await connectDB()
        person = await db.collection('Students').findOne({ _id: ObjectID(_id)})
        await db.collection('Students').deleteOne({ _id: ObjectID(_id)})
      } catch (error){
        console.log('error al Eliminar un Estudiante', error)
      }
  
      return person
    },


    // Add Person (People)
    async addPeople (_, { courseID, personID }) {
      let db
      let person
      let course
  
      console.log('courseID', courseID)
      console.log('personID', personID)
  
      try{
        db = await connectDB()
        course = await db.collection('Courses').findOne({ _id: ObjectID(courseID) })
        person = await db.collection('Students').findOne({ _id: ObjectID(personID) })
  
        if (!course || !person) throw new Error('El Estudiante o el Curso no existe')
  
        await db.collection('Courses').updateOne(
          { _id: ObjectID(courseID)},
          { $addToSet: {people: ObjectID(personID)}}
        )
      } catch (error){
        console.log('error al agregar people', error)
      }
      
      return course
    },
  },
}