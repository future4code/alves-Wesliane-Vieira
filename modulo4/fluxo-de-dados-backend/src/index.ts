import express, {Request, Response} from "express";
import cors from "cors";
import { produtos }  from './data'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get('/', (req, res) => res.send('Hey, bem vinda!'));

//Exercício 1
app.get('/test', (req: Request ,  res: Response) => {
    res.send('Está funcinando.')
})

type Produto = {
    id: number,
    name: string,
    price: number
}
// CRUD - Create (post), Read (get), Update (put), Delete (delete).

//Exercício 3 e 7
//criar novo produto e retorna lista de produtos atualizada
//fluxos de validação dos dados: erro caso de atributos não sejam recebidos, 
//erro caso name seja diferente de string, erro caso price seja diferente de 
//number, erro caso o preice <= 0 e erro caso algo inesperado aconteça.
app.post('/criarProdutos', (req: Request ,  res: Response) => {
    try {
        const { name, price } = req.body

        if (!name || !price ) {
            throw new Error('Necessário nome e preço do produto.')
        }

        if(typeof name !== 'string' || typeof price !== 'number' ) {
            throw new Error('Nome do produto deve ser uma string e o preço deve ser um número')
        }
       
        if(price <= 0) {
            throw new Error('Preço deve ser maior que zero')
        }

        const novoProduto: Produto = {
            id: produtos.length + 1,
            name: name,
            price: price
        }
    
        produtos.push(novoProduto)
        
        //retorna lista de produtos atualizada
        res.status(201).send(produtos)

    } catch (error: any) {
        if(res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.status(422).send(error.message)
        } 
        
    }
})

//Exercício 4
//retorna todos os produtos
app.get('/produtos', (req: Request, res: Response) => {
    try {
        const buscar: string = req.query.buscar as string
    
        if(buscar) {
            const produtosFiltrados = produtos.filter(produtos => 
                produtos.name.toLowerCase().includes(buscar.toLowerCase()))
                res.status(200).send(produtosFiltrados)
        } else {
            res.status(200).send(produtos)
        }
    } catch(error: any) {
        res.status(500).send(error.message)
    }
})

//Exercício 5, 8 e 11
/* -edita o preço de um determidado produto
 -fluxos de validação dos dados: erro caso caso de price não seja recebido, 
erro caso price seja diferente de number, erro caso o preço <= 0, erro 
caso id não recebidaexceto em casos de path params), erro caso o produto a ser editado não seja encontrado e erro caso algo inesperado aconteça. */

app.put('/produtos/:id', (req: Request, res: Response) => { 
    try {
        const { id } = req.params
        const { price, name } = req.body

        if(!price && !name) {
            res.statusCode = 422
            throw new Error('Nome ou preço do produto é exigido')
        } else if (typeof price !== 'number' || typeof name !== "string") {
            res.statusCode = 422
            throw new Error("O nome do produto deve ser string e o preço dever ser número.")
        } else if (price <= 0) {
            res.statusCode = 422
            throw new Error("O preço do produto deve ser maior que zero.")
        }

        const indexProduto = produtos.findIndex(produto => produto.id == Number(id))

        if (indexProduto < 0) {
            res.statusCode = 404
            throw new Error("Produto não encontrado")
        }

        if (!name) {
            produtos[indexProduto].price = price
            res.status(200).send(produtos)
        } else if (!price) {
            produtos[indexProduto].name = name
            res.status(200).send(produtos)
        } else {
            produtos[indexProduto].name = name
            produtos[indexProduto].price = price
            res.status(200).send(produtos)
        }

        

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.send(error.message)
        }
    }
    
})

//Exercício 6 e 9 
//deleta um determinado produto e retorna a lista atualizada
//fluxo de validação de dados: erro em caso id não seja recebido, erro
//caso produto não seja encontrado e erro caso algo inseperado aconteça

app.delete('/produtos/:id', (req: Request, res: Response) => {
    try {
        const {id} = req.params

        const indexProduto = produtos.findIndex(produto => 
            produto.id == Number(id))

            if(indexProduto < 0) {
                res.statusCode = 404
                throw new Error('Produto não encontrado.')
            }

            produtos.splice(indexProduto, 1)
            res.status(200).send(produtos)
    } catch(error: any) {
        res.status(404).send(error.message)
    }
})


