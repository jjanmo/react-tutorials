import React, { useEffect, useRef, useState } from 'react';
import * as S from './Card.style';

type CardPosition = {
  x: number;
  y: number;
};

const speed = 0.09;
export default function Card() {
  const card = useRef<HTMLDivElement>(null);
  const position = useRef({
    x: 0,
    y: 0,
  });
  const [center, setCenter] = useState({
    x: 0,
    y: 0,
  });

  const [cardPos, setCardPos] = useState<CardPosition>({
    x: 0,
    y: 0,
  });

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

  useEffect(() => {
    setCardPos({
      x: cardPos.x + (position.current.x - cardPos.x) * speed,
      y: cardPos.y + (position.current.y - cardPos.y) * speed,
    });
  }, [position.current.x, position.current.y, cardPos]);

  const handleMousemove = (e: React.MouseEvent) => {
    position.current = {
      x: (e.clientX - center.x) / 5,
      y: -(e.clientY - center.y) / 5,
    };
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      position.current = {
        x: 0,
        y: 0,
      };
    }, 800);
  };

  return (
    <S.Scene>
      <S.Card
        ref={card}
        x={cardPos.x}
        y={cardPos.y}
        onMouseMove={handleMousemove}
        onMouseOut={handleMouseOut}
      >
        <S.Back />
        <S.Front />
      </S.Card>
    </S.Scene>
  );
}
