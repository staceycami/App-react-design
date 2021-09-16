import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo } from './Data';


function Blog() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Blog;
