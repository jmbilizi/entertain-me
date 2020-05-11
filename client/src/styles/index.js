import styled from 'styled-components';
import { Card, Button, Container } from 'react-materialize'

export const ResultsWrapper = styled(Card)`
.results-card{
    min-height: 35em;
    max-height: 35em;
}
.results-card-title{
    position: relative;
    bottom: .5em;
    // min-height: 2.25em;
    max-height: 2.25em;
    overflow: hidden;
    text-overflow: ellipsis;
}
.backdrop-image{
    width: 270px;
    height: 150px;
    margin-left:.6em;
}
.poster{
    position: relative;
    bottom: 2.5em;
    width: 90px;
    display: block;
    position: relative;
    right: 1.5em;
}
.description {
   position: relative;
   bottom: 2.75em;
    width: 95%;
    min-height: 7.75em;
    max-height: 7.5em;
    overflow: hidden;
    text-overflow: ellipsis;
}
.details{
    position: relative;
    bottom: .5em;
    margin-left: .5em;
}
.stats{
    position: relative;
    bottom: 4em;
    left: 1.5em;
}
.watch{
    cursor: pointer;
    color: lightGray;
    position: relative;
    left: 2em;
    bottom: .95em;    
}
.watch:hover{
    color: green;
}
.favorite{
    cursor: pointer;
    color: lightGray;
}
.favorite:hover{
    color: green;
}
`

export const ButtonWrapper = styled(Button)`
text-align: center;
// border: none;
// background-color: transparent;

// :hover {   
//    background-color: green;  
// }
`

export const ContainerWrapper = styled(Container)`
margin: 0;
width: 100vw;
max-width: 2000px;
.trailer{
    position: relative;
    right: 7em;
}
`