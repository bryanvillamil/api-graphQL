export const schema = `
  type Course {
    _id: ID
    title: String!
    description: String
  }

  input CourseInput {
    title: String!
    description: String
  }

  type Student {
    _id: ID
    name: String!
    apellido: String
    email: String
  }

  input StudentInput {
    name: String!
    apellido: String
    email: String
  }

  type Query {
    "devuelve todos los cursos"
    getCourses: [Course]
    "devuelve un cursos"
    getCourse(id: ID!): Course

    "devuelve todos los estudiante"
    getStudents: [Student]
    "devuelve un estudiante"
    getStudent(id: ID!): Student
  }

  type Mutation {
    "Crear un Curso"
    createCourse(input: CourseInput!) : Course
    "Edita un curso"
    editCourse(_id: ID!, input: CourseInput): Course
    "eliminar un curso"
    deleteCourse(_id: ID!): Course

    "Crear un Estudiante"
    createStudent(input: StudentInput!) : Student
    "Editar un Estudiante"
    editStudent(_id: ID!, input: StudentInput!) : Student
    "Editar un Estudiante"
    deleteStudent(_id: ID!) : Student
  }
`