import styled from 'styled-components';
import { Card, Button } from 'react-materialize'

const teal = "#008080"
const lightGray = "rgba(0,0,0,.03)"
const darkGray = "rgba(0,0,0,.125)"



export const ResultsWrapper = styled(Card)`
.back{
    width: 600px;
    height: 340px;
}
img {
    width: 200px;
    display: block;
    margin: 0 auto;
}
.poster{
    width: 90px;
    display: block;
    margin-top: .25em;
    position: relative;
    right: 1em;
}
.description {
    width: 95%;
}
.details{
    margin-left: 2.5em;
}
.watch{
  color: green;
}
`

export const ButtonWrapper = styled(Button)`
border: none;
background-color: transparent;

:hover {   
   background-color: green;  
}
`