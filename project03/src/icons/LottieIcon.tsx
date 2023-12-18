import { LottieType } from '@constants/lottie'
import lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

interface Props {
  type: LottieType['theme']
  name: LottieType['name']
  size?: number
}

function LottieIcon({ type, name, size }: Props) {
  const containerElem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animation: AnimationItem
    if (containerElem.current) {
      animation = lottie.loadAnimation({
        container: containerElem.current,
        renderer: 'svg',
        autoplay: true,
        animationData: require(`../assets/lotties/${type}/${name}.json`),
      })
    }

    return () => animation.destroy()
  }, [containerElem, type, name])

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
  width: ${({ size }) => `${size}rem` || '100%'};
  height: ${({ size }) => `${size}rem` || '100%'};
`
