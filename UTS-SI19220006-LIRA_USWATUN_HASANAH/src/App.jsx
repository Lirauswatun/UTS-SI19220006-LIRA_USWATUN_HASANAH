import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Tombol from './komponen/atoms/tombol';
import Navbar from './komponen/Navbar';
import Hero from './komponen/Hero';
import Section1 from './komponen/Section';
import Footer from './komponen/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar />
      <Hero title="selamat datang di dunia anime!" desc="Anime adalah gaya animasi yang berasal dari Jepang, 
      dikenal dengan karakteristik visual yang khas, seperti mata besar, ekspresi wajah yang beragam, dan desain karakter yang unik.
       Anime mencakup berbagai genre dan gaya, dari aksi, petualangan, drama, horor, hingga fantasi dan fiksi ilmiah,
        sehingga mampu menarik berbagai kalangan penonton, 
       dari anak-anak hingga dewasa." src="http://getwallpapers.com/wallpaper/full/7/5/4/232708.jpg" />
      <Section1 title="Wibu dan Otaku Yang Telah Bergabung" desc="Jelaskan Deskripsi"></Section1>
      <Footer></Footer>
    </>

  );
}

export default App
