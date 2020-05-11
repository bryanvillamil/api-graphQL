export const schema = `

  "Union Global"
  union GlobalSearch = Course | Student | Monitor

  "Valida los tipos de Nivel"
  enum Level {
    principiante
    intermedio
    avanzado
  }

  type Course {
    _id: ID
    title: String!
    description: String
    people: [Student]
    level: Level
  }

  input CourseInput {
    title: String!
    description: String
    level: Level
  }

  interface Person {
    _id: ID
    name: String!
    apellido: String
    email: String
  }

  type Student implements Person {
    _id: ID
    name: String!
    apellido: String
    email: String
    avatar: String
  }

  type Monitor implements Person {
    _id: ID
    name: String!
    apellido: String
    email: String
    phone: String
  }

  input PersonInput {
    name: String!
    apellido: String
    email: String
    avatar: String
    phone: String
  }

  type Query {
    "devuelve todos los cursos"
    getCourses: [Course]
    "devuelve un cursos"
    getCourse(id: ID!): Course

    "devuelve todas lsa personas"
    getPeople: [Person]
    "devuelve una persona"
    getPerson(id: ID!): Person

    "ejecuta una busqueda global"
    searchItems(keyword: String!) : [GlobalSearch]
  }

  type Mutation {
    "Crear un Curso"
    createCourse(input: CourseInput!) : Course
    "Edita un curso"
    editCourse(_id: ID!, input: CourseInput): Course
    "eliminar un curso"
    deleteCourse(_id: ID!): Course

    "Crear una persona"
    createPerson(input: PersonInput!) : Person
    "Editar una persona"
    editPerson(_id: ID!, input: PersonInput!) : Person
    "Editar una persona"
    deletePerson(_id: ID!) : Person

    "Agregar una persona a un Cursos"
    addPeople(courseID: ID!, personID: ID!) : Course
  }
`