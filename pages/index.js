import Image from 'next/image';
import { useRouter } from 'next/router';
import images from '../assets';

import mainNFT1 from '../assets/main/nft1.png';
import mainNFT2 from '../assets/main/nft2.png';
import mainNFT3 from '../assets/main/nft3.png';
import mainNFT4 from '../assets/main/nft4.png';

import artType1 from '../assets/main/palette-solid.svg';
import artType2 from '../assets/main/camera-retro-solid.svg';
import artType3 from '../assets/main/photo-film-solid.svg';
import { useEffect } from 'react';



const Button = () => {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/collections')} style={{ fontSize: '18px', backgroundColor: '#61CE70', padding: '10px', borderRadius: '5px', width: '150px', marginTop: '15px' }}>
      Ver Galeria
    </button>
  );
};

const NFTView = ({ mainNFT, content1, content2 }) => (
  <div className="fullwrap">
    <Image className="image" src={mainNFT} />
    <div className="fullcap" style={{ fontSize: '20px', fontWeight: '500' }}>
      {content1}<br />
      {content2}<br />
      {/* <button type="button">Click!</button> */}
    </div>
  </div>
);

const ArtType = ({ mainNFT, content1 }) => (
  <div className="art-type" style={{ backgroundColor: 'white', borderRadius: '10px', height: '350px', color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Image className="image" src={mainNFT} style={{ width: '80px', height: '80px' }} />
    <p style={{ fontSize: '24px', fontWeight: '500', marginTop: '10px' }}>{content1}</p>
  </div>
);

const Home = () => (
  <div className="px-10 sm:px-10 p-12">
    <div className="columns-2 md:columns-1 md:flex md:flex-col-reverse text-center">
      <div className="text-left" style={{ display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: '18px', fontWeight: '500', color: '#25CFAA', letterSpacing: '5px' }}>DIGITALIZAMOS ARTE</p>
        <p style={{ fontSize: '48px', fontWeight: '900' }}>Explora miles de obras de arte digital y coleccionables</p>
        <p style={{ fontSize: '18px', fontWeight: '500' }}>Compra y vende NFTs, busca en nuestras galerias obras de arte y coleccionables de los mejores artistas alrededor del mundo</p>
        <Button />
      </div>
      <div className="text-xs">
        <Image src={images.mainImage1} objectFit="contain" alt="logo" />
      </div>
    </div>
    <div className="text-center w-10/12 mx-auto pt-[100px]">
      <p style={{ fontSize: '36px', fontWeight: '600' }}>CriptoArts es una plataforma que ayuda a exponer las obras de los artistas latinoamericanos más talentosos del Criptoarte.</p>
      <p style={{ fontSize: '20px', fontWeight: '600' }}>Encuentra nuevos artistas talentosos cada día y agrega obras exclusivas a tus colecciones de arte digital.</p>
    </div>
    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-[100px]">
      <NFTView mainNFT={mainNFT1} content1="Brains 2" content2="Faluc" />
      <NFTView mainNFT={mainNFT2} content1="Pets2" content2="LukeArts" />
      <NFTView mainNFT={mainNFT3} content1="Moon Efects 2" content2="Warts" />
      <NFTView mainNFT={mainNFT4} content1="Moon Friends" content2="Warts" />
    </div>
    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 pt-[200px]">
      <div className="about-item1" style={{ backgroundColor: '#4F5CEB', borderRadius: '15px', color: 'white', textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingInline: '20px', paddingBlock: '20px' }}>
        
        <p style={{ fontSize: '20px', fontWeight: '500', marginTop: '10px' }}>Descubre a los mejores artistas y creadores</p>
        <p style={{ fontSize: '12px', fontWeight: '500', marginTop: '10px' }}>Explora el increíble mundo del arte digital.</p>
      </div>
      <div className="about-item1" style={{ backgroundColor: '#FF6D3D', borderRadius: '15px', color: 'white', textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingInline: '20px', paddingBlock: '20px' }}>
        
        <p style={{ fontSize: '20px', fontWeight: '500', marginTop: '10px' }}>Compra y Vende tus NFTs</p>
        <p style={{ fontSize: '12px', fontWeight: '500', marginTop: '10px' }}>Compra y vende fácilmente tus NFTs en el mejor marketplace.</p>
      </div>
      <div className="about-item1" style={{ backgroundColor: '#25CFAA', borderRadius: '15px', color: 'white', textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingInline: '20px', paddingBlock: '20px' }}>
        
        <p style={{ fontSize: '20px', fontWeight: '500', marginTop: '10px' }}>Haz crecer tu colección de Arte Digital</p>
        <p style={{ fontSize: '12px', fontWeight: '500', marginTop: '10px' }}>Agrega nuevo, innovador y único arte a tu colección.</p>
      </div>
      <div className="about-item1" style={{ backgroundColor: '#FFCA40', borderRadius: '15px', color: 'white', textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingInline: '20px', paddingBlock: '20px' }}>
        
        <p style={{ fontSize: '20px', fontWeight: '500', marginTop: '10px' }}>Gana Dinero Vendiendo NFTs</p>
        <p style={{ fontSize: '12px', fontWeight: '500', marginTop: '10px' }}>Gana vendiendo NFTs con métodos seguros de pago.</p>
      </div>
    </div>
  </div>
);

export default Home;

