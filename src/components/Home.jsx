import React from 'react';
import NavBar from './Navbar';
import Slider from './Slider';
import Uppermost from './Uppermost';
import Contact from './Contact';
import Dailylive from './Dailylive';
import Section3 from './Section3';
import Community from './Community';
import Iphone from './Iphone';
import Blue from './Blue';

import Footer from './Footer';
import { Container } from '@chakra-ui/react';
import Faqs from './Faqs';
import Join from './pricing';

function Home() {
  return (
    <>
 
      <Uppermost />
      <Iphone />
      <Dailylive as={Container} maxW="90%" />
      
      <Section3 />
      <Faqs/>
      <Community />
      {/* <Pink /> */}
      <Slider />
      <Contact />
      <Footer />
   
    </>
  );
}

export default Home;
