import styled from "styled-components"
import tags from "./tags.json"

const TagsSeccion = styled.section`
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 64px;
    
`
const TagTitulo = styled.h3`
    font-size: 24px;
    color: #d9d9d9;
    margin: 0;
`


const ContainerBotones = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tagboton = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }

`

const Tag = () => {
    return (
        <TagsSeccion>
            <TagTitulo>Busque por tags:</TagTitulo>
            <ContainerBotones>
            {
                tags.map(tag => {
                    return <Tagboton key={tag.id}>{tag.titulo}</Tagboton>
                })
            }
            </ContainerBotones>
        </TagsSeccion>
        
    )
}

export default Tag