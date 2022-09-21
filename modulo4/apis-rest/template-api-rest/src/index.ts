import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

/* Dessa forma podemos restringir os tipos a apenas os tipos acima e atirar um erro, caso o dado esteja fora do esperado. */
enum UserType {
    ADMIN= "ADMIN",
    NORMAL = "NORMAL"
}
// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

/* Exercício 1 
 a. Método HTTP get
 b. Entidade → /users */
// endpoint que busque todos os usuários de uma lista.

/* Exercício 2
 a. Passei por query params
 b. Fazendo a validação */
 // busque todos os usuários que tenham uma propriedade type específica,  
 // recebendo apenas um type por vez.

/* Exercício 3
a. Passei por query params
*/
// implemente a funcionalidade de search, para encontrar um usuário buscando por nome.
app.get("/users", (req: Request, res: Response) => {
  try {
    const type: string = req.query.type as string
    const search: string = req.query.search as string

    if(type in UserType) {
      const filteredType = users.filter(user => 
        user.type.toUpperCase() === type )
      
      res.status(200).send(filteredType)
    } else {
      throw new Error('Tipo inválido')
    }

    if(search) {
  
      const filteredSearch = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) )

        console.log(filteredSearch, search)
        
        if(!filteredSearch.length) {
          return res.status(204).send('Usuário não encontrado.')
        }

        return res.status(200).send(filteredSearch)
    }

  } catch(error: any) { 
    res.status(400).send(error.mensage)
  }
})

/* Exercício 4 
 a. A funcionalidade não mudou porque quem dita o que ocorre é o código no handler, o que muda é a semântica do verbo/método na documentação da API e se ela segue os padrões estabelecidos pela comunidade.
 b. Não, porque a convenção dita que novos itens em entidades sejam aplicados pelo POST, enquanto PUT e PATCH sejam utilizados para edição completa e parcial, respectivamente.
*/
// crie um endpoint que use o método POST para adicionar um item ao nosso conjunto de usuários.

app.post('/users', (req: Request, res: Response) => {
  try {

      const {name, email, age }= req.body
      let type: string = req.body.type as string
      //error caso alguma propriedade faltar
      if(!name || !email || !age || !type) {
        throw new Error('Todos os dados não foram preenchidos.')
      }

      //error caso tenha caractere incompatível com o campo
      if(typeof name !== 'string') {
        throw new Error("Nome inválido.")
      }

      if (typeof email !== "string") {
        throw new Error("Email inválido.")
      }

      if (typeof age !== "number") {
        throw new Error("Número inválido")
      }
      // tipo não compativel aos existentes
      if(!(type.toUpperCase() in UserType)) {
        throw new Error("Tipo inválido")
      }
      // inibe dados duplicados
      const userEach = users.forEach(user => {
        if(user.email === email) {
          throw new Error("Email já cadastrado.")
        }
      })

      const newUser: User = {
        id: users.length + 1,
        name,
        email,
        age,
        type: type === UserType.NORMAL ? UserType.NORMAL : UserType.ADMIN
      }

      users.push(newUser)

      res.status(200).send({
        message: "Usuário cadastrado.",
        user: newUser
      })
  } catch(error: any) {
    res.status(400).send(error.message)
  }
})

