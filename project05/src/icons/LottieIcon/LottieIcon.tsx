import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

interface Props {
  type: string
  size: number
}

function LottieIcon({ type, size }: Props) {
  const containerElem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animation: AnimationItem
    if (containerElem.current) {
      animation = lottie.loadAnimation({
        container: containerElem.current,
        renderer: 'svg',
        autoplay: true,
        animationData: require(`../../assets/lotties/${type}.json`),
      })
    }

    return () => animation.destroy()
  }, [containerElem, type])

  const handleMouseEnter = () => {
    lottie.stop()
  }
  const handleMouseLeave = () => {
    lottie.play()
  }

  return (
    <Container
      ref={containerElem}
      size={size}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default LottieIcon

const Container = styled.div<{ size?: number }>`
  width: 100%;
  height: ${({ size }) => `${size}rem` || '100%'};
`
