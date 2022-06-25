import React from 'react';
//import axios from 'axios';
//import styled from 'styled-components';

export default class DescriptionPerson extends React.Component {
    render() {
        return (
            <div>
               <button onClick={this.props.goToAllPeople}>Ir para Lista</button> 
            </div>
        )
    }
}