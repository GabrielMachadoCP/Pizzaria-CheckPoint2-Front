import styled from 'styled-components'

export const Cabec = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: darkgray;
    height: 200px;

    & h1{
        padding: 20px 15px;
        font-size: 60px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    & h2{
        padding-bottom: 20px;
    }
`;

export const Rod = styled.div`
    
    height: 15vh;
    background-color: gray;
    color: white;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & h3{
        padding: 15px;
    }
    
`