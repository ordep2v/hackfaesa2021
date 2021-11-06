import styled from "styled-components";
import media from "styled-media-query";

export const StampProgressMainBox = styled.div`
display: flex;
padding:1rem;
`
export const StampProgressImage = styled.img`
max-width: 4rem;`
export const StampProgressImageDivision = styled.div`
width: 4rem;
`
export const StampProgressTextBox = styled.div`
margin-left: .5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
text-align: left;
`
export const StampProgressTitle = styled.span`
font-size: 1.8rem;
font-weight: bold;`
export const StampProgressDescription = styled.span`
font-size: 1rem;`

export const StampProgressBar = styled.div`
background-color: green;
height: 10px;
border-radius: 1rem;
width: 0;`

export const StampProgressArticle = styled.article`
/* width: 40rem; */
display: flex;
flex-direction: column;
color: black;
background-color: #f5f5f5;
max-width: 100%;
border-radius: 0.5rem;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`