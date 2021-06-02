import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 2;
`

export const SearchContainer = styled.div`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`

export const LogoContent = styled.div`
  width: 85px;
  height: 85px;
  display: grid;
  place-items: center;
`

export const Title = styled.span`
  color: #fff;
  font-size: 24px;
`

export const SearchBarContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.5;
`

export const SearchBar = styled.div`
  position: sticky;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 70px;
  font-size: 20px;
  color: #222;
  ::placeholder {
    color: #999;
  }
`

export const SearchIconContent = styled.div`
  position: absolute;
  height: 100%;
  width: 65px;
  right: 0px;
  display: grid;
  place-items: center;
  cursor: pointer;
`

export const ActionsContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  @media screen and (max-width: 610px) {
    display: none;
  }
`

export const ActionContent = styled.div`
  height: 60px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ActionText = styled.a`
  color: #0078dd;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: #fff;
    text-decoration: underline;
  }
`

export const CartContent = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export const CartCounterContent = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0066ff;
  border-radius: 50%;
  transform: translate(10px, -10px);
`

export const CartCounterText = styled.span`
  color: #fff;
  font-size: 12px;
`

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  .navContent:hover {
    background-color: #2f95f3;
  }
`

export const NavContent = styled.nav`
  min-width: 160px;
  height: 40px;
  padding: 0 5px;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.2s;
`

export const NavText = styled.span`
  color: #fff;
  font-size: 18px;
  text-align: center;
`
