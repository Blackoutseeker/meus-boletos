import { FC, memo } from 'react'
import Image from 'next/image'
import {
  HeaderContainer,
  SearchContainer,
  NavContainer,
  LogoContent,
  LogoContainer,
  SearchBarContent,
  SearchInput,
  SearchIconContent,
  SearchBar,
  ActionsContainer,
  ActionContent,
  CartCounterContent,
  CartCounterText,
  CartContent,
  ActionText,
  NavContent,
  NavText
} from './style'
import Logo from '@assets/images/Logo.svg'
import SearchIcon from '@assets/icons/search.svg'
import CartIcon from '@assets/icons/cart.svg'
import InicioIcon from '@assets/icons/inicio.svg'
import RoupasIcon from '@assets/icons/roupas.svg'
import EnxovalIcon from '@assets/icons/enxoval.svg'
import AcessoriosIcon from '@assets/icons/acessorios.svg'
import MaternidadeIcon from '@assets/icons/maternidade.png'
import CalcadosIcon from '@assets/icons/calcados.svg'
import BrinquedosIcon from '@assets/icons/brinquedos.svg'
import LocationIcon from '@assets/icons/location.svg'

const Header: FC = () => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <LogoContainer>
          <LogoContent>
            <Image
              className={'logo'}
              src={Logo}
              alt={'Presente da Cegonha (Logo)'}
              width={'100%'}
              height={'100%'}
              layout={'intrinsic'}
            />
          </LogoContent>
        </LogoContainer>
        <SearchBarContent>
          <SearchBar>
            <SearchInput placeholder={'Procure seus produtos'} />
            <SearchIconContent>
              <Image src={SearchIcon} alt={'Buscar'} width={20} height={20} />
            </SearchIconContent>
          </SearchBar>
        </SearchBarContent>
        <ActionsContainer>
          <ActionContent>
            <CartContent>
              <Image
                src={CartIcon}
                alt={'Carrinho de compras'}
                width={25}
                height={25}
              />
              <CartCounterContent>
                <CartCounterText>1</CartCounterText>
              </CartCounterContent>
            </CartContent>
          </ActionContent>
          <ActionContent>
            <ActionText>Crie sua conta</ActionText>
          </ActionContent>
          <ActionContent>
            <ActionText>Entrar</ActionText>
          </ActionContent>
          <ActionContent>
            <ActionText>Contato</ActionText>
          </ActionContent>
        </ActionsContainer>
      </SearchContainer>
      <NavContainer>
        <NavContent className={'navContent'}>
          <Image src={InicioIcon} alt={'Início'} width={30} height={25} />
          <NavText>Início</NavText>
        </NavContent>
        <NavContent className={'navContent'}>
          <Image src={RoupasIcon} alt={'Início'} width={30} height={25} />
          <NavText>Roupas</NavText>
        </NavContent>
        <NavContent className={'navContent'}>
          <Image src={EnxovalIcon} alt={'Início'} width={30} height={25} />
          <NavText>Enxoval</NavText>
        </NavContent>
        <NavContent className={'navContent'}>
          <Image src={AcessoriosIcon} alt={'Início'} width={30} height={25} />
          <NavText>Acessórios</NavText>
        </NavContent>
        <NavContent className={'navContent'}>
          <Image src={MaternidadeIcon} alt={'Início'} width={30} height={25} />
          <NavText>Saída de maternidade</NavText>
        </NavContent>
        <NavContent className={'navContent'}>
          <Image src={CalcadosIcon} alt={'Início'} width={30} height={25} />
          <NavText>Calçados</NavText>
        </NavContent>
        <NavContent className={'navContent'}>
          <Image src={BrinquedosIcon} alt={'Início'} width={30} height={25} />
          <NavText>Brinquedos</NavText>
        </NavContent>
        <NavContent className={'navContent'}>
          <Image src={LocationIcon} alt={'Início'} width={30} height={25} />
          <NavText>Lojas físicas</NavText>
        </NavContent>
      </NavContainer>
    </HeaderContainer>
  )
}

export default memo(Header)
