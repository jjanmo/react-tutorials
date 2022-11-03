import React, { useEffect, useRef, useState } from 'react';
import * as S from './Card.style';

type CardPosition = {
  x: number;
  y: number;
};

export default function Card() {
  const card = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({
    x: 0,
    y: 0,
  });
  const [cardPos, setCardPos] = useState<CardPosition | null>(null);

  // card.current?.addEventListener('mousemove', (e: React.MouseEvent) => {
  //   console.log(e.clientX, e.clientY);
  // });
  useEffect(() => {
    const handleResize = () => {
      setCenter({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      });
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMousemove = (e: React.MouseEvent) => {
    setCardPos({
      x: e.clientX - center.x,
      y: e.clientY - center.y,
    });
  };

  return (
    <S.Scene>
      <S.Card ref={card} onMouseMove={handleMousemove}>
        <S.Back x={cardPos?.x} y={cardPos?.y} />
        <S.Front />
      </S.Card>
    </S.Scene>
  );
}
