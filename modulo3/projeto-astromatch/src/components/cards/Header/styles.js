import styled from 'styled-components'

const Section = styled.div`
   padding: 0,5em;
   background-color: ${props => props.background}; 
   box-shadow: 0 0 5px 0 #999;
   position: fixed;
   text-align: right;
   width: 99vw;
   li {
    display: inline-block;
    padding: 15px;
    margin: 0;
    font-size: 20px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  }
`
export default Section;

