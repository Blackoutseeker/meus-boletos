import { FC, memo } from 'react'
import Image from 'next/image'
import {
  FooterContainer,
  CornerContainer,
  HalfContent,
  FooterText,
  FooterLink,
  MiddleContainer
} from './style'
import FacebookIcon from '@assets/icons/facebook.svg'
import InstagramIcon from '@assets/icons/instagram.svg'
import TwitterIcon from '@assets/icons/twitter.svg'
import WhatsAppIcon from '@assets/icons/whatsapp.svg'
import Visa from '@assets/images/Visa.svg'
import MasterCard from '@assets/images/MasterCard.svg'
import Boleto from '@assets/images/Boleto.svg'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <CornerContainer>
        <HalfContent>
          <FooterText>Fale conosco!</FooterText>
        </HalfContent>
        <HalfContent>
          <Image src={FacebookIcon} alt={'Facebook'} width={10} height={20} />
          <Image src={InstagramIcon} alt={'Instagram'} width={20} height={20} />
          <Image src={TwitterIcon} alt={'Twitter'} width={20} height={20} />
          <Image src={WhatsAppIcon} alt={'WhatsApp'} width={20} height={20} />
        </HalfContent>
      </CornerContainer>
      <MiddleContainer>
        <HalfContent>
          <FooterLink>Trabalhe conosco</FooterLink>
          <FooterLink>Termos de Uso</FooterLink>
          <FooterLink>Política de Privacidade</FooterLink>
        </HalfContent>
        <HalfContent>
          <FooterText>© 2021 - Presente da Cegonha</FooterText>
        </HalfContent>
      </MiddleContainer>
      <CornerContainer>
        <HalfContent>
          <FooterText>Formas de pagamento</FooterText>
        </HalfContent>
        <HalfContent>
          <Image src={Visa} alt={'Visa'} width={28} height={21} />
          <Image src={MasterCard} alt={'MasterCard'} width={28} height={21} />
          <Image src={Boleto} alt={'Boleto'} width={28} height={21} />
        </HalfContent>
      </CornerContainer>
    </FooterContainer>
  )
}

export default memo(Footer)
