import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
 import { AllPeopleCard, PageImage } from './styles'

export default class AllPeople extends React.Component {

    state = {
        allPeople: []
    }


// Renderizar assim que a tela abrir 

    componentDidMount() {
        this.getAllPeople()
    }

    getAllPeople = () => {
        const url = `${BASE_URL}/people/`
        
        axios.get(url)
        .then ((res) => this.setState({allPeople: res.data.results}))  
        .catch ((err) => console.log(err.response))
    }
    

    render() {
        const characters = this.state.allPeople.map((person) => {
            return <AllPeopleCard key={person.url}>{person.name}</AllPeopleCard>
        })
        return (
            <PageImage> 
                <h1>Personagens de Star Wars:</h1>
                {characters}
            </PageImage>
            
        )
    }
}
