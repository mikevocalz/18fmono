'use client';
import React from 'react';
import { NProvider } from 'next13-progressbar';

const NPProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NProvider
      color={'#3f88c5'}
      startPosition={0.3}
      stopDelayMs={200}
      height={4}>
      {children}
    </NProvider>
  )
};

export default NPProvider;