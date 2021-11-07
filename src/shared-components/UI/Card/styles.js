import styled from "styled-components";

export const CompaniesDoingCard = styled.article`
max-width: 100%;
display: flex;
padding: .8rem;
margin-top: 1rem;
border-radius: 0.5rem;
color: black;
background-color: #f5f5f5;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
export const CompaniesDoingImageBox = styled.div`
display: flex;
justify-content: center;
padding-right: .5rem;
max-width: 100%;
border-right-color: black;
border-right-width: 1px;
border-right-style: solid;
`


export const CompaniesDoingImage = styled.img`
width: 5rem;`
export const CompaniesDoingTextBox = styled.div`
padding-left: .5rem;
display: flex;
flex-direction: column;`

export const CompaniesDoingTitle = styled.div`
font-size: .8rem;`

export const CompaniesDoingText = styled.div`
font-size: 1.1rem;`

export const CompaniesSeeMore = styled.div`
margin-top: .2rem;
font-size: 1.1rem;
color: lightblue;
text-decoration: underline;`
