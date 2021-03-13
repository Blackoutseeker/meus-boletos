import styled from 'styled-components'

const Container = styled.main`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  overflow-y: auto;
  z-index: 0;
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accent};
  }
  ::-webkit-scrollbar {
    width: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export default Container
