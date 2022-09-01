import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

type user = {
  details: {
    id: number,
    name: string,
    cpf: string,
    birthDate: Date
  },
  bankBalence: number,
  bankStatement: {
    value: number,
    date: Date,
    description: string
  } 
}

let users: user[] = [
  {
    details: {
      id: 1,
      name: "Miriã Cabeça de Carvalho",
      cpf: "96969696996",
      birthDate: new Date("1985-03-07")
    },
    bankBalence: 1000000,
    bankStatement: {
      value: 2000,
      date: new Date(),
      description: "Reserva do hotel fazenda para 2 dias."
    } 
  },
  {
    details: {
      id: 2,
      name: "Mateus de Rocha Sauro.",
      cpf: "40028922",
      birthDate: new Date("20033-09-02")
    },
    bankBalence: 1500,
    bankStatement: {
      value: 300,
      date: new Date(),
      description: "Parcela do PlayStation."
    }
  },
  {
    details: {
      id: 3,
      name: "Flávinho do Pneu Oliveira Rocha",
      cpf: "13156497849",
      birthDate: new Date("1985-11-14")
    },
    bankBalence: 15000,
    bankStatement: {
      value: 2500,
      date: new Date(),
      description: "Novo conjunto de pneus para o carro."
    } 
  }
]

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("BuiAAA!")
})


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
