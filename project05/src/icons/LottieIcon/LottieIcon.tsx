import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

interface Props {
  type: string
  size: number
}

function LottieIcon({ type, size }: Props) {
  const containerElem = useRef<HTMLElement>(null)

  useEffect(() => {
    if (containerElem.current) {
      lottie.loadAnimation({
        container: containerElem.current as HTMLElement,
        renderer: 'svg',
        autoplay: false,
        animationData: require(`../../assets/lotties/${type}.json`),
      })
    }
  }, [containerElem, type])

  const handleMouseEnter = () => {
    lottie.play()
  }
  const handleMouseLeave = () => {
    lottie.pause()
  }

  return (
    <Container
      // ref={containerElem}
      size={size}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default LottieIcon

const Container = styled.div<{ size: number }>`
  width: 100%;
  height: ${({ size }) => size && `${size}rem`};
`
