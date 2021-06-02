import { FC, memo } from 'react'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Banner1 from '@assets/images/Banner1.png'

const Slider: FC = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      dynamicHeight
    >
      <Image src={Banner1} alt={'Banner 1'} width={1366} height={400} />
      <Image src={Banner1} alt={'Banner 2'} width={1366} height={400} />
    </Carousel>
  )
}

export default memo(Slider)
