import React, { Component } from 'react';
import styled from 'styled-components';

export const SearchBox = props => {

    const Search = styled.input`    
        -webkit-appearance: none;
        border: none;
        outline: none;
        padding: 10px;
        width: 150px;
        line-height: 30px;
        margin-bottom: 30px;
    `

    return (
        <input type='search' placeholder={props.placeholder} onChange={props.handleChanges}></input>
    )
}
