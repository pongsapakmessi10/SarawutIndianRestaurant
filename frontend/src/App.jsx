import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Volume2, Menu, X, MapPin, Phone, Mail } from 'lucide-react';

// --- Helper Data ---
const menuItems = [
  {
    name: 'Murgh Makhani (Butter Chicken)',
    description: 'Tender chicken in a creamy, spiced tomato sauce. A timeless classic.',
    price: '₹450',
    image: 'https://www.shutterstock.com/shutterstock/videos/16422232/thumb/1.jpg?ip=x480',
  },
  {
    name: 'Palak Paneer',
    description: 'Soft paneer cubes in a smooth, vibrant spinach curry.',
    price: '₹380',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhMDva3CMyY7hWGo_bH_FTCruvsYVNVVxAQ&s',
  },
  {
    name: 'Amritsari Chole Kulche',
    description: 'Spicy chickpea curry served with soft, fluffy bread.',
    price: '₹350',
    image: 'https://s1.dmcdn.net/v/UOILC1ZSB9BKz6n2X/x1080',
  },
  {
    name: 'Hyderabadi Biryani',
    description: 'Fragrant basmati rice cooked with succulent meat and exotic spices.',
    price: '₹550',
    image: 'https://c8.alamy.com/comp/EWDFA9/piles-of-dirty-dishes-during-a-festival-in-uttar-pradesh-india-EWDFA9.jpg',
  },
   {
    name: 'Samosa Chaat',
    description: 'Crispy samosas crushed and topped with yogurt, chutneys, and spices.',
    price: '₹220',
    image: 'https://us-fbcloud.net/wb/data/1358/1358407-img.v61357.13ueq.opsbtlmx.webp',
  },
  {
    name: 'Garlic Naan',
    description: 'Soft, leavened flatbread freshly baked in the tandoor with garlic.',
    price: '₹90',
    image: 'https://images.news18.com/ibnlive/uploads/2025/09/news18-21-2025-09-e0b94e6639fa7b4f0115ff4d00f19415-4x3.png',
  },
];

const galleryImages = [
  'https://placehold.co/600x400/800000/FFFFFF?text=Vibrant+Spices&font=cinzel',
  'https://placehold.co/600x400/D2691E/FFFFFF?text=Tandoor+Oven&font=cinzel',
  'https://placehold.co/600x400/DAA520/FFFFFF?text=Elegant+Dining&font=cinzel',
  'https://placehold.co/600x400/B22222/FFFFFF?text=Delicious+Thali&font=cinzel',
];

// --- SVG Components for Decoration ---
const PaisleyPattern = () => (
  <svg width="100%" height="100%" className="absolute inset-0 opacity-5 pointer-events-none">
    <defs>
      <pattern id="paisley" patternUnits="userSpaceOnUse" width="200" height="200" patternTransform="scale(0.5)">
        <path d="M100 50 C 50 50, 50 100, 100 100 C 150 100, 150 150, 100 150 C 50 150, 50 200, 100 200" stroke="#B8860B" fill="none" strokeWidth="2"/>
        <path d="M100 50 C 150 50, 150 100, 100 100" stroke="#B8860B" fill="none" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#paisley)" />
  </svg>
);


// --- Main App Component ---
export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap";
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => console.log("Audio play failed:", error));
    }
    setIsMusicPlaying(!isMusicPlaying);
  };
  
  const navLinks = (
    <>
      <a href="#about" className="hover:text-amber-400 transition-colors duration-300">About Us</a>
      <a href="#menu" className="hover:text-amber-400 transition-colors duration-300">Menu</a>
      <a href="#gallery" className="hover:text-amber-400 transition-colors duration-300">Gallery</a>
      <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">Contact</a>
    </>
  );

  return (
    <div style={{ fontFamily: "'Lora', serif" }} className="bg-orange-50/50 text-stone-800">
      {/* Background Music Player */}
      <audio ref={audioRef} src="Indiamusic.mp3" loop>
        Your browser does not support the audio element.
      </audio>

      {/* --- Header --- */}
      <header className="bg-red-900/90 text-amber-50 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 style={{ fontFamily: "'Cinzel Decorative', cursive" }} className="text-2xl md:text-3xl font-bold text-amber-300">
            Sarawut Indian Food
          </h1>
          <nav className="hidden md:flex items-center space-x-8 text-lg">
            {navLinks}
          </nav>
          <div className="flex items-center space-x-4">
            <button onClick={toggleMusic} className="p-2 rounded-full hover:bg-amber-400/20 transition-colors duration-300" aria-label="Toggle Music">
              {isMusicPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Open Menu">
              <Menu size={28} />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-900/95 absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-6 text-xl z-40">
            {navLinks}
          </div>
        )}
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section
          className="h-screen min-h-[600px] bg-cover bg-center flex flex-col justify-center items-center text-white relative"
          style={{ backgroundImage: "url('https://media.tenor.com/g01carZ_O74AAAAe/indian-man-rolls-eyes-funny-gorilla.png')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center px-4">
            <h2 style={{ fontFamily: "'Cinzel Decorative', cursive" }} className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-300 drop-shadow-lg">
              A Taste of Tradition
            </h2>
            <p className="mt-4 text-xl md:text-2xl max-w-2xl text-amber-50">
              Experience the authentic flavors of India, crafted with passion and heritage.
            </p>
            <a
              href="#menu"
              className="mt-8 inline-block bg-amber-500 text-red-900 font-bold text-lg px-8 py-4 rounded-md hover:bg-amber-400 transition-transform duration-300 hover:scale-105 shadow-xl"
            >
              Explore Our Menu
            </a>
          </div>
        </section>

        {/* --- About Us Section --- */}
        <section id="about" className="py-20 md:py-28 bg-stone-100 relative overflow-hidden">
          <PaisleyPattern />
          <div className="container mx-auto px-6 text-center relative z-10">
            <h3 style={{ fontFamily: "'Cinzel Decorative', cursive" }} className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
              สูตรลับอินไม่เดีย
            </h3>
            <div className="max-w-3xl mx-auto text-lg md:text-xl text-stone-700 leading-relaxed space-y-6">
              <p>
                ที่นี่ไม่ใช่แค่ร้านอาหาร…แต่มันคือสนามรบแห่งเครื่องเทศ! 🌶️
กลิ่นนี่แรงพอจะทำให้หมาเพื่อนบ้านเห่าไปสามซอย 🐕💨
รสชาติก็เผ็ดจนลืมแฟนเก่าได้ภายใน 5 วิ 💔➡️❤️

ตำนานร้านเราเริ่มจากคำพูดเล่นๆ ของเชฟว่า
“ถ้าแกงกะหรี่เราทำอร่อย…งั้นเลี้ยงทั้งหมู่บ้านไปเลยดิ๊!!”
แล้วมันก็ไม่เล่นแล้ว เพราะทุกคนติดจนเลิกไม่ได้ 😭🍲

สูตรอาหารเราไม่ธรรมดา 🧄
ได้มาจากคุณแม่ 👩‍👦 คุณยาย 👵 คุณทวด 👵🏻👵🏽
แถมมี “สูตรลับ” คือการกะเอาแบบสายตา แล้วภาวนาให้มันอร่อย 555+
              </p>
              <p>
เมนูเรานี่คือทัวร์อินเดียเวอร์ชันกินจริง
ตั้งแต่ข้างถนนเดลี ที่กลิ่นแรงจนแท็กซี่ต้องจอดสูดดม 🚕
ไปจนถึงครัวเจ้าเมืองลัคเนา ที่หรูหราจนคุณรู้สึกว่าตัวเองคือราชา 👑
แต่ในความจริง…คุณอาจนั่งกินอยู่หน้าห้องเช่า 😂

สรุปง่ายๆ ที่นี่ไม่ใช่ร้านอาหาร แต่คือ พอร์ทัลสู่จักรวาลเครื่องเทศ
ใครกล้าเข้ามา ก็บอกได้เลยว่า…
“เผ็ดนี้เพื่อชาติ แกงนี้เพื่อเรา” 🇮🇳🔥              </p>
            </div>
          </div>
        </section>

        {/* --- Menu Section --- */}
        <section id="menu" className="py-20 md:py-28" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/grilled-light.png')"}}>
          <div className="container mx-auto px-6">
            <h3 style={{ fontFamily: "'Cinzel Decorative', cursive" }} className="text-4xl md:text-5xl font-bold text-red-900 text-center mb-12">
              Our Signature Dishes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {menuItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-2 border-amber-500/50 group">
                  <img src={item.image} alt={item.name} className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-red-900">{item.name}</h4>
                      <p className="text-lg font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">{item.price}</p>
                    </div>
                    <p className="text-stone-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Gallery Section --- */}
        <section id="gallery" className="py-20 md:py-28 bg-stone-100">
           <div className="container mx-auto px-6">
              <h3 style={{ fontFamily: "'Cinzel Decorative', cursive" }} className="text-4xl md:text-5xl font-bold text-red-900 text-center mb-12">
                A Visual Feast
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                    <img 
                      src={src} 
                      alt={`Gallery image ${index + 1}`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* --- Contact Section --- */}
        <footer id="contact" className="bg-red-900 text-amber-50 pt-20 pb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/mandala-wallpaper.png')"}}></div>
          <div className="container mx-auto px-6 text-center relative z-10">
             <h3 style={{ fontFamily: "'Cinzel Decorative', cursive" }} className="text-4xl md:text-5xl font-bold text-amber-300 mb-8">
                Visit Us
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-16 space-y-8 md:space-y-0 text-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-amber-400" size={24}/>
                  <span>123 Spice Route, Bangkok, Thailand</span>
                </div>
                 <div className="flex items-center space-x-3">
                  <Phone className="text-amber-400" size={24}/>
                  <span>+66 12 345 6789</span>
                </div>
                 <div className="flex items-center space-x-3">
                  <Mail className="text-amber-400" size={24}/>
                  <span>contact@sarawutindian.com</span>
                </div>
              </div>
              <div className="mt-12 border-t border-amber-500/30 pt-8">
                <p>&copy; {new Date().getFullYear()} Sarawut Indian Food. All Rights Reserved.</p>
              </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
