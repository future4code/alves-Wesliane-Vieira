import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// 1)

app.get('/', (req: Request, res: Response) => {
    res.send("Hello Word! This is my firt endpoint.")
})

// 2)

type User = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

// 3)

const users: User[] = [
    {
        id: "01",
        name:"Fernando José",
        phone: 61901010101,
        email: "fjose@gmail.com",
        website: "vovos.org"
    },
    {
        id: "02",
        name:"Antônia Guilherme",
        phone: 61902020202,
        email: "toinha@gmail.com",
        website: "vovos.org"
    },
    {
        id: "03",
        name:"Wesley Francisco",
        phone: 61903030303,
        email: "duascaras@gmail.com",
        website: "viagensdemoto.com.br"
    },
    {
        id: "04",
        name:"Glaucia Regina",
        phone: 61904040404,
        email: "proffglaucia@gmail.com",
        website: "escolainclusiva.edu"
    },
    {
        id: "05",
        name:"Wesliane",
        phone: 96105050505,
        email: "annedamimi@gmail.com",
        website: "eurotrip.com.br"
    },
    {
        id: "06",
        name:"Mateus",
        phone: 96106060606,
        email: "mateus.trabalhos@gmail.com",
        website: "bodybuilder4ever.com.br"
    }
]

// 4)

app.get("/users", (req: Request, res: Response) => {
    if(!users.length) {
        res.status(401).send('Não tem usuários.')
    } else  {
        res.status(201).send(users)
    }
})

// 5)

type Post = {
    id: string,
    tittle: string,
    body: string,
    userId: string
}

// 6)

const posts: Post[] = [
    {
        id: "256788",
        tittle: 'Update da viagem',
        body: 'Tô indo pra Londre de trem bala. Previsão de chegada na quarta. :)',
        userId: "05"
    },
    {
        id: "961452",
        tittle: 'Lista de compras',
        body: 'As caixas de ovo acabaram. Preciso de carona pra comprar mais!',
        userId: "04"
    },
    {
        id: "963100",
        tittle: 'Almoço na casa da vó.',
        body: 'Domingo todo mundo convocado, toda a familia.',
        userId: "02"
    }
]

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

// 7)

app.get('/posts', (req: Request, res: Response) => {
    if(!posts.length) {
        res.status(401).send('Não tem posts.')
    } else  {
        res.status(201).send(posts)
    }
})

// 8)

app.get("/post/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = posts.filter((post) => {
        return post.userId === user
    })

    if(!user) {
        return res.status(400).send("userId inválido.")
    } else if(post.length === 0 ) {
        return res.status(400).send("Nenhum resultado compatível.")
    } else {
        res.status(201).send(post)
    }
})

