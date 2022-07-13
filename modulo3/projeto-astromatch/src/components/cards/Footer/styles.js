import styled from 'styled-components'

const Section = styled.div`
    padding: 0,5em;
    background-color: ${props => props.background}; 
    box-shadow: 0 0 5px 0 #999;
    bottom: 0;
    position: fixed;
    width: 99vw;
    text-align: center;
    
   span {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
   }
`
export default Section;