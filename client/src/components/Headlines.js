import React from 'react';
import Marquee from 'react-double-marquee';
 
export default function Headlines(speed=0.04, direction='left') {
  return (
    <div
      style={{
        width: '1200px',
        whiteSpace: 'nowrap',
      }}
    >
      <Marquee>
        Some really really really really really really really really really really really really really really really really really really really really long text
      </Marquee>
    </div>
  );
}