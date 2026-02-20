import React, { useState } from 'react';

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="bg-white overflow-x-hidden">
      
      {/* Load Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* --- Header --- */}
      <header className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-[15px] sticky top-0 z-[1000]">
        <div className="max-w-[1200px] mx-auto px-[20px] flex justify-between items-center">
            
            <div className="flex flex-col justify-center">
                <h1 className="text-[26px] font-bold text-[#1a1a50] leading-[0.9]">
                    <span className="text-[#d81b60]">Chunqing</span>
                </h1>
                <p className="text-[11px] text-[#555] tracking-[2px] font-semibold uppercase mt-[2px]">
                    Learning Center
                </p>
            </div>

            <nav className="hidden md:flex">
                <ul className="list-none flex gap-[30px] items-center">
                    <li>
                        <a href="#" className="no-underline text-[#1a1a50] font-medium text-[15px]">Beranda</a>
                    </li>
                    
                    <li className="relative group cursor-pointer">
                        <a href="#" className="no-underline text-[#333] font-medium text-[15px] hover:text-[#1a1a50] flex items-center transition-colors duration-300">
                            Kursus <i className="fas fa-chevron-down text-[10px] ml-[5px] transition-transform duration-300 group-hover:rotate-180"></i>
                        </a>
                        <div className="hidden group-hover:block absolute bg-white min-w-[160px] shadow-[0_8px_16px_rgba(0,0,0,0.1)] z-[1] rounded-[8px] top-full left-0 py-[10px] animate-[fadeIn_0.3s_ease]">
                            {['Mandarin', 'English', 'Calistung', 'Bimbel'].map((item) => (
                                <a key={item} href="#" className="text-black py-[12px] px-[16px] no-underline block text-[14px] hover:bg-[#f5f5f5] hover:text-[#1a1a50]">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </li>

                    <li><a href="#" className="no-underline text-[#333] font-medium text-[15px] hover:text-[#1a1a50] transition-colors duration-300">Profil Guru</a></li>
                    <li><a href="#" className="no-underline text-[#333] font-medium text-[15px] hover:text-[#1a1a50] transition-colors duration-300">My Account</a></li>
                </ul>
            </nav>

            <div className="flex items-center gap-[20px]">
                <i className="fas fa-search text-[18px] text-[#333] cursor-pointer hover:text-[#1a1a50]"></i>
                <div className="relative cursor-pointer hover:text-[#1a1a50] text-[#333]">
                    <i className="fas fa-shopping-cart text-[18px]"></i>
                    <span className="absolute -top-[8px] -right-[8px] bg-[#1a1a50] text-white text-[10px] w-[16px] h-[16px] rounded-full flex justify-center items-center">0</span>
                </div>
                <a href="#" className="hidden md:inline-block bg-[#1a1a50] text-white px-[25px] py-[8px] rounded-[5px] no-underline font-semibold hover:bg-[#12123a] transition-colors duration-300">
                    Login
                </a>
                
                <div className="md:hidden text-[24px] cursor-pointer text-[#333]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>

        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 border-t animate-[fadeIn_0.3s_ease]">
                <a href="#" className="text-[#1a1a50] font-medium text-[15px] no-underline">Beranda</a>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[#333] font-medium text-[15px] cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        Kursus <i className={`fas fa-chevron-down text-[10px] transform ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                    </div>
                    {isDropdownOpen && (
                        <div className="pl-4 flex flex-col gap-2">
                            {['Mandarin', 'English', 'Calistung', 'Bimbel'].map((item) => (
                                <a key={item} href="#" className="text-[#333] text-[14px] no-underline">{item}</a>
                            ))}
                        </div>
                    )}
                </div>
                <a href="#" className="text-[#333] font-medium text-[15px] no-underline">Profil Guru</a>
                <a href="#" className="text-[#333] font-medium text-[15px] no-underline">My Account</a>
                <a href="#" className="bg-[#1a1a50] text-white text-center py-[8px] rounded-[5px] font-semibold">Login</a>
            </div>
        )}
      </header>

      {/* --- Hero Section --- */}
      <section className="py-[60px] bg-white">
        <div className="max-w-[1200px] mx-auto px-[20px] flex flex-col md:flex-row items-center justify-between gap-[50px] text-center md:text-left">
            
            <div className="flex-1">
                <span className="font-semibold text-[#555] mb-[10px] block">Learn-Speak-Connect</span>
                <h1 className="text-[32px] md:text-[48px] text-[#1a1a50] leading-[1.2] mb-[30px] font-bold">
                    Tingkatkan keahlian <br /> bahasa, bersinar <span className="text-[#4caf50]">lebih <br /> terang</span> hadapi dunia
                </h1>
                <a href="#" className="inline-block bg-[#1a1a50] text-white px-[30px] py-[12px] rounded-[5px] no-underline font-semibold text-[16px] shadow-[0_4px_15px_rgba(26,26,80,0.3)]">
                    Pilih Kelasmu!
                </a>
            </div>

            <div className="flex-1 relative">
                <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Students Learning" 
                    className="w-full rounded-[10px] shadow-[20px_20px_0px_rgba(240,240,240,1)]"
                />
                
            </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Menu;
