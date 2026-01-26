// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // Import solid icons correctly
// import {
//     faRecycle,
//     faBars,
//     faIndustry,
//     faTruckLoading,
//     faWeight,
//     faLeaf,
//     faBullseye,
//     faEye,
//     faBolt,
//     faCarBattery,
//     faMicrochip,
//     faTint,
//     faStar,
//     faStarHalfAlt,
//     faMapMarkerAlt,
//     faPhoneAlt,
//     faEnvelope,
//     faMapMarkedAlt,
//     faArrowRight,
//     faPaperPlane,
//     faChevronDown,
//     faSun,
//     faMoon
// } from '@fortawesome/free-solid-svg-icons';

// // Import regular star icon
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// // Import brand icons
// import {
//     faFacebookF,
//     faTwitter,
//     faLinkedinIn,
//     faInstagram,
//     faWhatsapp
// } from '@fortawesome/free-brands-svg-icons';

// const Weblogotakaful = () => {
//     const [activeSection, setActiveSection] = useState('home');
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [lightboxOpen, setLightboxOpen] = useState(false);
//     const [lightboxImage, setLightboxImage] = useState('');
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//     });
//     const [isDarkMode, setIsDarkMode] = useState(true);

//     // Create refs for each section
//     const homeRef = useRef(null);
//     const aboutRef = useRef(null);
//     const servicesRef = useRef(null);
//     const productsRef = useRef(null);
//     const galleryRef = useRef(null);
//     const testimonialsRef = useRef(null);
//     const contactRef = useRef(null);

//     const observerRef = useRef(null);

//     useEffect(() => {
//         // Intersection Observer for animations and active section tracking
//         observerRef.current = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('animate-fadeInUp');

//                         // Update active section based on which section is in view
//                         const sectionId = entry.target.id;
//                         if (sectionId) {
//                             setActiveSection(sectionId);
//                         }
//                     }
//                 });
//             },
//             {
//                 threshold: 0.3,
//                 rootMargin: '0px 0px -50px 0px'
//             }
//         );

//         // Observe all sections
//         const sections = [
//             homeRef.current,
//             aboutRef.current,
//             servicesRef.current,
//             productsRef.current,
//             galleryRef.current,
//             testimonialsRef.current,
//             contactRef.current
//         ].filter(Boolean);

//         sections.forEach(section => {
//             if (observerRef.current) observerRef.current.observe(section);
//         });

//         return () => {
//             if (observerRef.current) observerRef.current.disconnect();
//         };
//     }, []);

//     const toggleTheme = () => {
//         setIsDarkMode(!isDarkMode);
//     };

//     const scrollToSection = (sectionId) => {
//         let element;
//         switch (sectionId) {
//             case 'home':
//                 element = homeRef.current;
//                 break;
//             case 'about':
//                 element = aboutRef.current;
//                 break;
//             case 'services':
//                 element = servicesRef.current;
//                 break;
//             case 'products':
//                 element = productsRef.current;
//                 break;
//             case 'gallery':
//                 element = galleryRef.current;
//                 break;
//             case 'testimonials':
//                 element = testimonialsRef.current;
//                 break;
//             case 'contact':
//                 element = contactRef.current;
//                 break;
//             default:
//                 element = homeRef.current;
//         }

//         if (element) {
//             const yOffset = -80; // Adjust for fixed header
//             const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//             window.scrollTo({ top: y, behavior: 'smooth' });
//         }

//         setMobileMenuOpen(false);
//         setActiveSection(sectionId);
//     };

//     const handleWhatsAppClick = () => {
//         const phoneNumber = "+971506252875";
//         const message = "Hello, I'm interested in your scrap metal recycling services from Rukn Al Tawar.";
//         const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//         window.open(url, '_blank');
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         alert(`Thank you ${formData.name}! Your message has been sent successfully. We'll contact you at ${formData.email} soon.`);
//         setFormData({ name: '', email: '', phone: '', message: '' });
//     };

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData(prev => ({ ...prev, [id]: value }));
//     };

//     const openLightbox = (imgSrc) => {
//         setLightboxImage(imgSrc);
//         setLightboxOpen(true);
//     };

//     const closeLightbox = () => {
//         setLightboxOpen(false);
//     };

//     // Theme-based styles with Rukn Al Tawar brand colors
//     const themeStyles = {
//         backgroundColor: isDarkMode ? '#111827' : '#F4F4F4',
//         textColor: isDarkMode ? '#f9fafb' : '#111827',
//         secondaryTextColor: isDarkMode ? '#d1d5db' : '#4b5563',
//         cardBackground: isDarkMode ? '#1f2937' : '#ffffff',
//         cardBorder: isDarkMode ? '#374151' : '#e5e7eb',
//         navbarBackground: isDarkMode ? '#111827' : '#ffffff',
//         footerBackground: isDarkMode ? '#111827' : '#375382',
//         footerText: isDarkMode ? '#d1d5db' : '#FFFFFF',
//         inputBackground: isDarkMode ? '#1f2937' : '#ffffff',
//         inputBorder: isDarkMode ? '#374151' : '#d1d5db',
//         heroGradient: isDarkMode
//             ? 'linear-gradient(135deg, rgba(55, 83, 130, 0.15) 0%, rgba(47, 71, 111, 0.1) 100%)'
//             : 'linear-gradient(135deg, rgba(55, 83, 130, 0.1) 0%, rgba(47, 71, 111, 0.05) 100%)',
//         testimonialCardBg: isDarkMode
//             ? 'linear-gradient(145deg, #1f2937, #111827)'
//             : 'linear-gradient(145deg, #ffffff, #f3f4f6)',
//         testimonialShadow: isDarkMode
//             ? '10px 10px 20px #0a0f1a, -10px -10px 20px #182235'
//             : '10px 10px 20px #d1d5db, -10px -10px 20px #ffffff',
//         hoverColor: isDarkMode ? '#374151' : '#f3f4f6'
//     };

//     const services = [
//         {
//             icon: faIndustry,
//             title: "Industrial Scrap",
//             description: "We collect and process industrial scrap from manufacturing units with proper documentation."
//         },
//         {
//             icon: faTruckLoading,
//             title: "Pickup Services",
//             description: "Our fleet of trucks provides convenient pickup services for bulk scrap materials."
//         },
//         {
//             icon: faWeight,
//             title: "Weigh & Pay",
//             description: "Transparent weighing process with digital scales and instant payment for your scrap."
//         },
//         {
//             icon: faLeaf,
//             title: "Eco-Friendly",
//             description: "We follow environmentally responsible recycling practices to reduce carbon footprint."
//         }
//     ];

//     const products = [
//         {
//             name: "Iron Scrap",
//             image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             description: "All types of iron & steel scrap, competitive pricing based on quality."
//         },
//         {
//             name: "Steel Scrap",
//             image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             description: "Industrial & structural steel scrap at top market rates."
//         },
//         {
//             name: "Copper Scrap",
//             image: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             description: "High-quality copper wire, tubing & other materials."
//         },
//         {
//             name: "Aluminum Scrap",
//             image: "https://images.unsplash.com/photo-1620748698226-b6a8a5e1e9f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             description: "Clean aluminum scrap including sheets, cans & extrusions."
//         },
//         {
//             name: "Brass Scrap",
//             image: "https://images.unsplash.com/photo-1621533672183-4b4b32f7164e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             description: "Various grades of brass scrap materials."
//         },
//         {
//             name: "Stainless Steel",
//             image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             description: "All grades of stainless steel scrap available."
//         }
//     ];

//     const galleryImages = [
//         {
//             src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             fullSrc: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//             title: "Scrap Yard Operations"
//         },
//         {
//             src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             fullSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//             title: "Processing Facility"
//         },
//         {
//             src: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             fullSrc: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//             title: "Steel Scrap Collection"
//         },
//         {
//             src: "https://images.unsplash.com/photo-1620748698226-b6a8a5e1e9f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             fullSrc: "https://images.unsplash.com/photo-1620748698226-b6a8a5e1e9f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//             title: "Sorted Metals"
//         },
//         {
//             src: "https://images.unsplash.com/photo-1621533672183-4b4b32f7164e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             fullSrc: "https://images.unsplash.com/photo-1621533672183-4b4b32f7164e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//             title: "Copper Processing"
//         },
//         {
//             src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//             fullSrc: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
//             title: "Advanced Machinery"
//         }
//     ];

//     const testimonials = [
//         {
//             name: "Michael Rodriguez",
//             role: "Construction Manager",
//             avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//             rating: 5,
//             text: "We've been working with Rukn Al Tawar for 3 years now. Their service is reliable, prices are fair, and they always pick up on time. Highly recommended for any construction company!"
//         },
//         {
//             name: "Sarah Johnson",
//             role: "Manufacturing Plant Owner",
//             avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//             rating: 4.5,
//             text: "Their industrial scrap recycling service has helped us manage waste efficiently. The team is professional, and their documentation process makes everything transparent and easy to track."
//         },
//         {
//             name: "Robert Chen",
//             role: "Auto Repair Shop Owner",
//             avatar: "https://randomuser.me/api/portraits/men/67.jpg",
//             rating: 5,
//             text: "As a small business, I appreciate their flexible pickup schedule and fair pricing for scrap metal. They've been a reliable partner for my auto repair shop for over 5 years now."
//         }
//     ];

//     const renderStars = (rating) => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             if (i <= Math.floor(rating)) {
//                 stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
//             } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
//                 stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
//             } else {
//                 stars.push(<FontAwesomeIcon key={i} icon={farStar} className="text-yellow-400" />);
//             }
//         }
//         return stars;
//     };

//     return (
//         <div className="text-gray-100" style={{
//             backgroundColor: themeStyles.backgroundColor,
//             color: themeStyles.textColor,
//             fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
//             transition: 'background-color 0.3s ease, color 0.3s ease'
//         }}>
//             {/* WhatsApp Floating Button */}
//             <div
//                 className="whatsapp-float"
//                 onClick={handleWhatsAppClick}
//                 style={{
//                     position: 'fixed',
//                     width: '60px',
//                     height: '60px',
//                     bottom: '40px',
//                     right: '40px',
//                     backgroundColor: '#375382',
//                     color: 'white',
//                     borderRadius: '50px',
//                     textAlign: 'center',
//                     fontSize: '30px',
//                     boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
//                     zIndex: 100,
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease'
//                 }}
//                 onMouseEnter={(e) => e.target.style.backgroundColor = '#2F476F'}
//                 onMouseLeave={(e) => e.target.style.backgroundColor = '#375382'}
//             >
//                 <FontAwesomeIcon icon={faWhatsapp} />
//             </div>

//             {/* Theme Toggle Button */}
//             <div
//                 className="theme-toggle"
//                 onClick={toggleTheme}
//                 style={{
//                     position: 'fixed',
//                     width: '60px',
//                     height: '60px',
//                     bottom: '110px',
//                     right: '40px',
//                     backgroundColor: isDarkMode ? '#374151' : '#fbbf24',
//                     color: isDarkMode ? '#fbbf24' : '#374151',
//                     borderRadius: '50px',
//                     textAlign: 'center',
//                     fontSize: '30px',
//                     boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
//                     zIndex: 100,
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease'
//                 }}
//             >
//                 <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
//             </div>

//             {/* Navigation */}
//             <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg transition-colors duration-300"
//                 style={{ backgroundColor: themeStyles.navbarBackground }}>
//                 <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                     <div className="flex justify-between items-center py-4">
//                         {/* Logo */}
//                         <button
//                             onClick={() => scrollToSection('home')}
//                             className="flex items-center focus:outline-none"
//                             style={{ background: 'none', border: 'none', cursor: 'pointer' }}
//                         >
//                             <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#375382' }}>
//                                 <FontAwesomeIcon icon={faRecycle} className="text-2xl text-white" />
//                             </div>
//                             <div className="text-2xl font-bold">
//                                 <span style={{ color: '#375382' }}>Rukn</span>
//                                 <span style={{ color: '#111827' }}> Al Tawar</span>
//                             </div>
//                         </button>

//                         {/* Desktop Menu & Theme Toggle */}
//                         <div className="flex items-center space-x-4">
//                             <div className="hidden md:flex space-x-8">
//                                 {[
//                                     { id: 'home', label: 'Home' },
//                                     { id: 'about', label: 'About' },
//                                     { id: 'services', label: 'Services' },
//                                     { id: 'products', label: 'Products' },
//                                     { id: 'gallery', label: 'Gallery' },
//                                     { id: 'testimonials', label: 'Testimonials' },
//                                     { id: 'contact', label: 'Contact' }
//                                 ].map((item) => (
//                                     <button
//                                         key={item.id}
//                                         onClick={() => scrollToSection(item.id)}
//                                         className={`text-lg font-medium nav-link relative ${activeSection === item.id ? 'text-blue-600' : ''
//                                             } transition-colors duration-300`}
//                                         style={{
//                                             background: 'none',
//                                             border: 'none',
//                                             cursor: 'pointer',
//                                             color: activeSection === item.id ? '#375382' : themeStyles.textColor
//                                         }}
//                                     >
//                                         {item.label}
//                                     </button>
//                                 ))}
//                             </div>

//                             {/* Theme Toggle Button for Desktop */}
//                             <button
//                                 onClick={toggleTheme}
//                                 className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
//                                 style={{
//                                     backgroundColor: isDarkMode ? '#374151' : '#fbbf24',
//                                     color: isDarkMode ? '#fbbf24' : '#374151',
//                                     border: 'none',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
//                             </button>
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <div className="flex items-center space-x-4 md:hidden">
//                             <button
//                                 onClick={toggleTheme}
//                                 className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
//                                 style={{
//                                     backgroundColor: isDarkMode ? '#374151' : '#fbbf24',
//                                     color: isDarkMode ? '#fbbf24' : '#374151',
//                                     border: 'none',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
//                             </button>
//                             <button
//                                 className="text-2xl"
//                                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                                 style={{
//                                     background: 'none',
//                                     border: 'none',
//                                     color: themeStyles.textColor
//                                 }}
//                             >
//                                 <FontAwesomeIcon icon={faBars} />
//                             </button>
//                         </div>
//                     </div>

//                     {/* Mobile Menu */}
//                     <div
//                         className={`md:hidden mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
//                         style={{
//                             maxHeight: mobileMenuOpen ? '500px' : '0',
//                             overflow: 'hidden',
//                             transition: 'max-height 0.5s ease',
//                             borderTopColor: themeStyles.cardBorder
//                         }}
//                     >
//                         <div className="flex flex-col space-y-4 py-4 border-t" style={{ borderTopColor: themeStyles.cardBorder }}>
//                             {[
//                                 { id: 'home', label: 'Home' },
//                                 { id: 'about', label: 'About' },
//                                 { id: 'services', label: 'Services' },
//                                 { id: 'products', label: 'Products' },
//                                 { id: 'gallery', label: 'Gallery' },
//                                 { id: 'testimonials', label: 'Testimonials' },
//                                 { id: 'contact', label: 'Contact' }
//                             ].map((item) => (
//                                 <button
//                                     key={item.id}
//                                     onClick={() => scrollToSection(item.id)}
//                                     className={`py-2 text-lg text-left transition-colors duration-300`}
//                                     style={{
//                                         background: 'none',
//                                         border: 'none',
//                                         cursor: 'pointer',
//                                         color: activeSection === item.id ? '#375382' : themeStyles.textColor
//                                     }}
//                                 >
//                                     {item.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <main>
//                 {/* Hero Section */}
//                 <section
//                     id="home"
//                     ref={homeRef}
//                     className="min-h-screen flex items-center relative overflow-hidden"
//                     style={{
//                         background: themeStyles.heroGradient,
//                         paddingTop: '80px'
//                     }}
//                 >
//                     <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8 }}
//                             >
//                                 <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: themeStyles.textColor }}>
//                                     <span style={{ color: '#375382' }}>Recycling</span> Metals,
//                                     <span className="block" style={{ color: '#375382' }}>Building</span>
//                                     <span className="block">A Sustainable Future</span>
//                                 </h1>
//                                 <p className="text-xl mb-8" style={{ color: themeStyles.secondaryTextColor }}>
//                                     Rukn Al Tawar specializes in professional scrap buying, offering fair pricing, eco-friendly recycling, and smooth transactions.
//                                 </p>
//                                 <div className="flex flex-wrap gap-4">
//                                     <button
//                                         onClick={() => scrollToSection('contact')}
//                                         className="font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
//                                         style={{
//                                             backgroundColor: '#375382',
//                                             color: '#FFFFFF',
//                                             border: 'none',
//                                             cursor: 'pointer'
//                                         }}
//                                         onMouseEnter={(e) => e.target.style.backgroundColor = '#2F476F'}
//                                         onMouseLeave={(e) => e.target.style.backgroundColor = '#375382'}
//                                     >
//                                         Get Quote
//                                     </button>
//                                     <button
//                                         onClick={() => scrollToSection('about')}
//                                         className="font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
//                                         style={{
//                                             border: '2px solid #375382',
//                                             color: '#375382',
//                                             backgroundColor: 'transparent',
//                                             cursor: 'pointer'
//                                         }}
//                                         onMouseEnter={(e) => {
//                                             e.target.style.backgroundColor = '#375382';
//                                             e.target.style.color = '#FFFFFF';
//                                         }}
//                                         onMouseLeave={(e) => {
//                                             e.target.style.backgroundColor = 'transparent';
//                                             e.target.style.color = '#375382';
//                                         }}
//                                     >
//                                         Learn More
//                                     </button>
//                                 </div>
//                             </motion.div>
//                             <div className="relative hidden lg:block">
//                                 <motion.div
//                                     animate={{ y: [0, -10, 0] }}
//                                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                                     className="relative z-10"
//                                 >
//                                     <img
//                                         src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
//                                         alt="Metal Recycling"
//                                         className="rounded-lg shadow-2xl"
//                                     />
//                                 </motion.div>
//                                 <div className="absolute -bottom-6 -right-6 w-full h-full border-4" style={{ borderColor: '#375382' }}></div>
//                             </div>
//                         </div>

//                         {/* Scroll Down Indicator */}
//                         <motion.div
//                             animate={{ y: [0, 10, 0] }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
//                         >
//                             <button
//                                 onClick={() => scrollToSection('about')}
//                                 className="transition-colors duration-300"
//                                 style={{
//                                     background: 'none',
//                                     border: 'none',
//                                     cursor: 'pointer',
//                                     color: themeStyles.secondaryTextColor
//                                 }}
//                             >
//                                 <FontAwesomeIcon icon={faChevronDown} className="text-3xl" />
//                             </button>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* Services Section */}
//                 <section
//                     id="services"
//                     ref={servicesRef}
//                     className="section-padding"
//                     style={{ padding: '5rem 0' }}
//                 >
//                     <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl font-bold mb-4" style={{ color: themeStyles.textColor }}>
//                                 Our <span style={{ color: '#375382' }}>Services</span>
//                             </h2>
//                             <p className="text-xl max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
//                                 We offer comprehensive metal recycling services to industries, businesses, and individuals.
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {services.map((service, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.8, delay: index * 0.1 }}
//                                     className="rounded-xl p-8 card-hover hover:transform hover:-translate-y-2 transition-all duration-300"
//                                     style={{
//                                         backgroundColor: themeStyles.cardBackground,
//                                         border: `1px solid ${themeStyles.cardBorder}`,
//                                         boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
//                                     }}
//                                 >
//                                     <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#375382' }}>
//                                         <FontAwesomeIcon icon={service.icon} className="text-2xl text-white" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold mb-4" style={{ color: themeStyles.textColor }}>
//                                         {service.title}
//                                     </h3>
//                                     <p className="mb-6" style={{ color: themeStyles.secondaryTextColor }}>
//                                         {service.description}
//                                     </p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* About Us Section */}
//                 <section
//                     id="about"
//                     ref={aboutRef}
//                     className="section-padding"
//                     style={{ padding: '5rem 0' }}
//                 >
//                     <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                         <h2 className="text-5xl font-bold mb-12 text-center" style={{ color: themeStyles.textColor }}>
//                             About <span style={{ color: '#375382' }}>Us</span>
//                         </h2>

//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8 }}
//                             >
//                                 <h3 className="text-3xl font-bold mb-6" style={{ color: '#375382' }}>What Sets Our Business Apart for Your Selection</h3>
//                                 <p className="text-lg mb-4" style={{ color: themeStyles.textColor }}>
//                                     <strong>Rukn Al Tawar Waste Treatment LLC</strong> has been a leader in the metal recycling industry in Sharjah, UAE. We specialize in processing and recycling various types of metals including iron, steel, copper, and aluminum.
//                                 </p>
//                                 <p className="text-lg mb-4" style={{ color: themeStyles.textColor }}>
//                                     Our state-of-the-art facility in the industrial area of Sajja, Sharjah is equipped with advanced sorting and processing technology, allowing us to handle large volumes of scrap metal efficiently and responsibly.
//                                 </p>
//                                 <p className="text-lg" style={{ color: themeStyles.textColor }}>
//                                     We serve industries, construction companies, and individual customers across the region, providing reliable recycling solutions that contribute to environmental sustainability.
//                                 </p>
//                             </motion.div>
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.2 }}
//                             >
//                                 <img
//                                     src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
//                                     alt="Our Facility"
//                                     className="rounded-lg shadow-2xl w-full"
//                                 />
//                             </motion.div>
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//                             {/* Mission */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.3 }}
//                                 className="rounded-xl p-8 card-hover hover:transform hover:-translate-y-2 transition-all duration-300"
//                                 style={{
//                                     backgroundColor: themeStyles.cardBackground,
//                                     border: `1px solid ${themeStyles.cardBorder}`
//                                 }}
//                             >
//                                 <div className="flex items-center mb-6">
//                                     <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#375382' }}>
//                                         <FontAwesomeIcon icon={faBullseye} className="text-2xl text-white" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold" style={{ color: themeStyles.textColor }}>Our Mission</h3>
//                                 </div>
//                                 <p style={{ color: themeStyles.secondaryTextColor }}>
//                                     To revolutionize metal recycling through innovative technology and sustainable practices, reducing environmental impact while providing exceptional value to our customers.
//                                 </p>
//                             </motion.div>

//                             {/* Vision */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.4 }}
//                                 className="rounded-xl p-8 card-hover hover:transform hover:-translate-y-2 transition-all duration-300"
//                                 style={{
//                                     backgroundColor: themeStyles.cardBackground,
//                                     border: `1px solid ${themeStyles.cardBorder}`
//                                 }}
//                             >
//                                 <div className="flex items-center mb-6">
//                                     <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#375382' }}>
//                                         <FontAwesomeIcon icon={faEye} className="text-2xl text-white" />
//                                     </div>
//                                     <h3 className="text-2xl font-bold" style={{ color: themeStyles.textColor }}>Our Vision</h3>
//                                 </div>
//                                 <p style={{ color: themeStyles.secondaryTextColor }}>
//                                     To become the leading provider of metal recycling solutions in the UAE, setting industry standards for sustainability, technology, and customer service.
//                                 </p>
//                             </motion.div>
//                         </div>

//                         {/* Experience */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, delay: 0.5 }}
//                             className="rounded-xl p-8"
//                             style={{
//                                 background: isDarkMode
//                                     ? 'linear-gradient(to right, #1f2937, #111827)'
//                                     : 'linear-gradient(to right, #ffffff, #f3f4f6)',
//                                 border: `1px solid ${themeStyles.cardBorder}`
//                             }}
//                         >
//                             <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#375382' }}>Experience & Expertise</h3>

//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                                 <div className="text-center">
//                                     <div className="text-5xl font-bold mb-2" style={{ color: '#375382' }}>15+</div>
//                                     <div className="text-xl font-semibold" style={{ color: themeStyles.textColor }}>Years Experience</div>
//                                 </div>

//                                 <div className="text-center">
//                                     <div className="text-5xl font-bold mb-2" style={{ color: '#375382' }}>5000+</div>
//                                     <div className="text-xl font-semibold" style={{ color: themeStyles.textColor }}>Satisfied Clients</div>
//                                 </div>

//                                 <div className="text-center">
//                                     <div className="text-5xl font-bold mb-2" style={{ color: '#375382' }}>50K+</div>
//                                     <div className="text-xl font-semibold" style={{ color: themeStyles.textColor }}>Tons Recycled</div>
//                                 </div>
//                             </div>

//                             <div className="mt-8">
//                                 <p className="text-lg text-center" style={{ color: themeStyles.textColor }}>
//                                     Our team consists of certified professionals with extensive knowledge in metal identification, sorting, processing, and recycling technologies.
//                                 </p>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>

//                 {/* Products Section */}
//                 <section
//                     id="products"
//                     ref={productsRef}
//                     className="section-padding"
//                     style={{ padding: '5rem 0' }}
//                 >
//                     <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                         <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: themeStyles.textColor }}>
//                             Our <span style={{ color: '#375382' }}>Products</span>
//                         </h2>
//                         <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
//                             We offer a diverse range of meticulously processed metal scrap, ready to fuel the manufacturing needs of diverse industries
//                         </p>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {products.map((product, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.8, delay: index * 0.1 }}
//                                     className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
//                                 >
//                                     {/* Background Image with stronger zoom */}
//                                     <div
//                                         className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-125"
//                                         style={{ backgroundImage: `url(${product.image})` }}
//                                     ></div>

//                                     {/* Dark Overlay */}
//                                     <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-700"></div>

//                                     {/* Centered Text */}
//                                     <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
//                                         <h3 className="text-3xl font-bold text-white mb-4">
//                                             {product.name}
//                                         </h3>
//                                         <p className="text-gray-300 text-sm max-w-xs">
//                                             {product.description}
//                                         </p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Gallery Section */}
//                 <section
//                     id="gallery"
//                     ref={galleryRef}
//                     className="section-padding"
//                     style={{ padding: '5rem 0' }}
//                 >
//                     <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                         <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: themeStyles.textColor }}>
//                             Our <span style={{ color: '#375382' }}>Gallery</span>
//                         </h2>
//                         <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
//                             Take a look at our operations, facility, and recycling processes.
//                         </p>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {galleryImages.map((image, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 40 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{
//                                         duration: 0.7,
//                                         delay: index * 0.12,
//                                         ease: "easeOut"
//                                     }}
//                                     whileHover={{
//                                         y: -8,
//                                         scale: 1.03
//                                     }}
//                                     className="relative overflow-hidden rounded-2xl cursor-pointer group bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-blue-500/30 transition-all duration-500"
//                                     onClick={() => openLightbox(image.fullSrc)}
//                                 >
//                                     {/* Image */}
//                                     <motion.img
//                                         src={image.src}
//                                         alt={image.title}
//                                         className="w-full h-64 object-cover"
//                                         whileHover={{ scale: 1.15 }}
//                                         transition={{ duration: 0.6, ease: "easeOut" }}
//                                     />

//                                     {/* Dark overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

//                                     {/* Title animation */}
//                                     <motion.div
//                                         initial={{ y: 20, opacity: 0 }}
//                                         whileHover={{ y: 0, opacity: 1 }}
//                                         transition={{ duration: 0.4 }}
//                                         className="absolute bottom-0 left-0 right-0 p-6"
//                                     >
//                                         <h3 className="text-2xl font-bold text-white tracking-wide">
//                                             {image.title}
//                                         </h3>
//                                         <span className="block mt-2 w-12 h-1 rounded-full" style={{ backgroundColor: '#375382' }} />
//                                     </motion.div>

//                                     {/* Glow border */}
//                                     <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition duration-500" />
//                                 </motion.div>
//                             ))}
//                         </div>


//                         {/* Lightbox */}
//                         {lightboxOpen && (
//                             <div
//                                 className="lightbox"
//                                 style={{
//                                     display: 'flex',
//                                     position: 'fixed',
//                                     zIndex: 1000,
//                                     left: 0,
//                                     top: 0,
//                                     width: '100%',
//                                     height: '100%',
//                                     backgroundColor: 'rgba(0, 0, 0, 0.9)',
//                                     justifyContent: 'center',
//                                     alignItems: 'center'
//                                 }}
//                                 onClick={(e) => e.target.className === 'lightbox' && closeLightbox()}
//                             >
//                                 <span
//                                     className="lightbox-close"
//                                     onClick={closeLightbox}
//                                     style={{
//                                         position: 'absolute',
//                                         top: '20px',
//                                         right: '40px',
//                                         color: 'white',
//                                         fontSize: '40px',
//                                         cursor: 'pointer'
//                                     }}
//                                 >
//                                     &times;
//                                 </span>
//                                 <img
//                                     className="lightbox-img"
//                                     src={lightboxImage}
//                                     alt="Lightbox"
//                                     style={{ maxWidth: '90%', maxHeight: '80%' }}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </section>

//                 {/* Testimonials Section */}
//                 <section
//                     id="testimonials"
//                     ref={testimonialsRef}
//                     className="section-padding"
//                     style={{ padding: '5rem 0' }}
//                 >
//                     <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                         <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: themeStyles.textColor }}>
//                             Client <span style={{ color: '#375382' }}>Testimonials</span>
//                         </h2>
//                         <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
//                             Hear what our clients have to say about our services and professionalism.
//                         </p>

//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {testimonials.map((testimonial, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 30 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.8, delay: index * 0.2 }}
//                                     className="testimonial-card rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
//                                     style={{
//                                         background: themeStyles.testimonialCardBg,
//                                         boxShadow: themeStyles.testimonialShadow
//                                     }}
//                                 >
//                                     <div className="flex items-center mb-6">
//                                         <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
//                                             <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
//                                         </div>
//                                         <div>
//                                             <h3 className="text-xl font-bold" style={{ color: themeStyles.textColor }}>{testimonial.name}</h3>
//                                             <p style={{ color: themeStyles.secondaryTextColor }}>{testimonial.role}</p>
//                                         </div>
//                                     </div>
//                                     <div className="mb-6">
//                                         <div className="flex">
//                                             {renderStars(testimonial.rating)}
//                                         </div>
//                                     </div>
//                                     <p className="italic" style={{ color: themeStyles.textColor }}>{testimonial.text}</p>
//                                 </motion.div>
//                             ))}
//                         </div>

//                         {/* More testimonials */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.6 }}
//                                 className="rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
//                                 style={{
//                                     backgroundColor: themeStyles.cardBackground,
//                                     border: `1px solid ${themeStyles.cardBorder}`
//                                 }}
//                             >
//                                 <div className="flex items-center mb-6">
//                                     <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                                         <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" className="w-full h-full object-cover" />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-xl font-bold" style={{ color: themeStyles.textColor }}>Lisa Thompson</h3>
//                                         <p style={{ color: themeStyles.secondaryTextColor }}>Warehouse Manager</p>
//                                     </div>
//                                 </div>
//                                 <p style={{ color: themeStyles.textColor }}>
//                                     "Rukn Al Tawar helped us clear out years of accumulated metal waste from our warehouse. Their team was efficient, and we were impressed with their safety protocols."
//                                 </p>
//                             </motion.div>

//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.8 }}
//                                 className="rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
//                                 style={{
//                                     backgroundColor: themeStyles.cardBackground,
//                                     border: `1px solid ${themeStyles.cardBorder}`
//                                 }}
//                             >
//                                 <div className="flex items-center mb-6">
//                                     <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                                         <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client" className="w-full h-full object-cover" />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-xl font-bold" style={{ color: themeStyles.textColor }}>David Wilson</h3>
//                                         <p style={{ color: themeStyles.secondaryTextColor }}>Demolition Contractor</p>
//                                     </div>
//                                 </div>
//                                 <p style={{ color: themeStyles.textColor }}>
//                                     "I work with Rukn Al Tawar on all my demolition projects. They handle large volumes of scrap metal and always provide timely service. Their pricing is the most competitive in the region."
//                                 </p>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Contact Section */}
//                 <section
//                     id="contact"
//                     ref={contactRef}
//                     className="section-padding"
//                     style={{ padding: '5rem 0' }}
//                 >
//                     <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                         <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: themeStyles.textColor }}>
//                             Contact <span style={{ color: '#375382' }}>Us</span>
//                         </h2>
//                         <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
//                             Get in touch with us for scrap metal pricing, pickup scheduling, or any other inquiries.
//                         </p>

//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                             {/* Contact Form */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8 }}
//                             >
//                                 <h3 className="text-3xl font-bold mb-8" style={{ color: '#375382' }}>Send Us a Message</h3>

//                                 <form onSubmit={handleFormSubmit} className="space-y-6">
//                                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                         <div>
//                                             <label htmlFor="name" className="block mb-2 font-medium" style={{ color: themeStyles.textColor }}>Your Name *</label>
//                                             <input
//                                                 type="text"
//                                                 id="name"
//                                                 value={formData.name}
//                                                 onChange={handleInputChange}
//                                                 className="contact-input w-full p-4 rounded-lg"
//                                                 style={{
//                                                     backgroundColor: themeStyles.inputBackground,
//                                                     border: `1px solid ${themeStyles.inputBorder}`,
//                                                     color: themeStyles.textColor,
//                                                     transition: 'border 0.3s ease'
//                                                 }}
//                                                 required
//                                             />
//                                         </div>

//                                         <div>
//                                             <label htmlFor="email" className="block mb-2 font-medium" style={{ color: themeStyles.textColor }}>Email Address *</label>
//                                             <input
//                                                 type="email"
//                                                 id="email"
//                                                 value={formData.email}
//                                                 onChange={handleInputChange}
//                                                 className="contact-input w-full p-4 rounded-lg"
//                                                 style={{
//                                                     backgroundColor: themeStyles.inputBackground,
//                                                     border: `1px solid ${themeStyles.inputBorder}`,
//                                                     color: themeStyles.textColor
//                                                 }}
//                                                 required
//                                             />
//                                         </div>
//                                     </div>

//                                     <div>
//                                         <label htmlFor="phone" className="block mb-2 font-medium" style={{ color: themeStyles.textColor }}>Phone Number</label>
//                                         <input
//                                             type="tel"
//                                             id="phone"
//                                             value={formData.phone}
//                                             onChange={handleInputChange}
//                                             className="contact-input w-full p-4 rounded-lg"
//                                             style={{
//                                                 backgroundColor: themeStyles.inputBackground,
//                                                 border: `1px solid ${themeStyles.inputBorder}`,
//                                                 color: themeStyles.textColor
//                                             }}
//                                         />
//                                     </div>

//                                     <div>
//                                         <label htmlFor="message" className="block mb-2 font-medium" style={{ color: themeStyles.textColor }}>Your Message *</label>
//                                         <textarea
//                                             id="message"
//                                             value={formData.message}
//                                             onChange={handleInputChange}
//                                             rows="5"
//                                             className="contact-input w-full p-4 rounded-lg"
//                                             style={{
//                                                 backgroundColor: themeStyles.inputBackground,
//                                                 border: `1px solid ${themeStyles.inputBorder}`,
//                                                 color: themeStyles.textColor
//                                             }}
//                                             required
//                                         />
//                                     </div>

//                                     <button
//                                         type="submit"
//                                         className="font-bold py-4 px-8 rounded-lg text-lg transition duration-300 w-full"
//                                         style={{
//                                             backgroundColor: '#375382',
//                                             color: '#FFFFFF',
//                                             border: 'none',
//                                             cursor: 'pointer'
//                                         }}
//                                         onMouseEnter={(e) => e.target.style.backgroundColor = '#2F476F'}
//                                         onMouseLeave={(e) => e.target.style.backgroundColor = '#375382'}
//                                     >
//                                         Send Message
//                                     </button>
//                                 </form>
//                             </motion.div>

//                             {/* Contact Info & Map */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.2 }}
//                             >
//                                 <h3 className="text-3xl font-bold mb-8" style={{ color: '#375382' }}>Get in Touch</h3>

//                                 <div className="space-y-8 mb-10">
//                                     <div className="flex items-start">
//                                         <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#375382' }}>
//                                             <FontAwesomeIcon icon={faPhoneAlt} className="text-xl text-[#375382]" />
//                                         </div>
//                                         <div>
//                                             <h4 className="text-xl font-bold mb-2" style={{ color: themeStyles.textColor }}>Phone Number</h4>
//                                             <p style={{ color: themeStyles.secondaryTextColor }}>+971 50 625 2875<br />+971 54 452 0303<br />Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</p>
//                                         </div>
//                                     </div>

//                                     <div className="flex items-start">
//                                         <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#375382' }}>
//                                             <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-white" />
//                                         </div>
//                                         <div>
//                                             <h4 className="text-xl font-bold mb-2" style={{ color: themeStyles.textColor }}>Yard Address</h4>
//                                             <p style={{ color: themeStyles.secondaryTextColor }}>Industrial area Sajja, Sharjah UAE<br />RUKN AL TAWAR WASTE TREATMENT LLC</p>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-start">
//                                         <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#375382' }}>
//                                             <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-white" />
//                                         </div>
//                                         <div>
//                                             <h4 className="text-xl font-bold mb-2" style={{ color: themeStyles.textColor }}>Office Address</h4>
//                                             <p style={{ color: themeStyles.secondaryTextColor }}>Office No: E-16F-02<br />Hamriyah Free Zone, Sharjah, United Arab Emirates.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Business Hours */}
//                                 <div className="mt-8 rounded-xl p-6" style={{ backgroundColor: themeStyles.cardBackground }}>
//                                     <h4 className="text-xl font-bold mb-4" style={{ color: '#375382' }}>Business Hours</h4>
//                                     <div className="space-y-2">
//                                         <div className="flex justify-between">
//                                             <span style={{ color: themeStyles.textColor }}>Monday - Friday</span>
//                                             <span className="font-semibold" style={{ color: themeStyles.textColor }}>8:00 AM - 6:00 PM</span>
//                                         </div>
//                                         <div className="flex justify-between">
//                                             <span style={{ color: themeStyles.textColor }}>Saturday</span>
//                                             <span className="font-semibold" style={{ color: themeStyles.textColor }}>9:00 AM - 2:00 PM</span>
//                                         </div>
//                                         <div className="flex justify-between">
//                                             <span style={{ color: themeStyles.textColor }}>Sunday</span>
//                                             <span className="font-semibold" style={{ color: themeStyles.textColor }}>Closed</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="section-padding" style={{ 
//                     padding: '5rem 0',
//                     backgroundColor: '#375382',
//                     color: '#FFFFFF'
//                 }}>
//                     <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                         <div className="text-center">
//                             <h3 className="text-4xl font-bold mb-6">Ready to Recycle Your Scrap Metal?</h3>
//                             <p className="text-xl mb-8 max-w-3xl mx-auto">
//                                 Join hundreds of satisfied customers who trust Rukn Al Tawar with their metal recycling needs. Get competitive prices and professional service.
//                             </p>
//                             <button
//                                 onClick={() => scrollToSection('contact')}
//                                 className="font-bold py-4 px-10 rounded-lg text-xl transition duration-300 inline-block"
//                                 style={{
//                                     backgroundColor: '#FFFFFF',
//                                     color: '#375382',
//                                     border: 'none',
//                                     cursor: 'pointer'
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     e.target.style.backgroundColor = '#2F476F';
//                                     e.target.style.color = '#FFFFFF';
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     e.target.style.backgroundColor = '#FFFFFF';
//                                     e.target.style.color = '#375382';
//                                 }}
//                             >
//                                 Contact Us Today
//                             </button>
//                         </div>
//                     </div>
//                 </section>
//             </main>

//             {/* Footer */}
//             <footer className="pt-12 pb-8" style={{ backgroundColor: themeStyles.footerBackground }}>
//                 <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//                         {/* Company Info */}
//                         <div>
//                             <div className="flex items-center mb-6">
//                                 <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#375382' }}>
//                                     <FontAwesomeIcon icon={faRecycle} className="text-2xl text-white" />
//                                 </div>
//                                 <div className="text-2xl font-bold">
//                                     <span style={{ color: '#FFFFFF' }}>Rukn</span>
//                                     <span style={{ color: '#FFFFFF' }}> Al Tawar</span>
//                                 </div>
//                             </div>
//                             <p className="mb-6" style={{ color: themeStyles.footerText }}>
//                                 Rukn Al Tawar Waste Treatment LLC - Leading waste treatment and metal recycling company in Sharjah, UAE with years of experience. Committed to sustainable practices and customer satisfaction.
//                             </p>
//                             <div className="flex space-x-4">
//                                 {[faFacebookF, faTwitter, faLinkedinIn, faInstagram].map((icon, index) => (
//                                     <button
//                                         key={index}
//                                         className="w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
//                                         style={{
//                                             backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                                             color: '#FFFFFF',
//                                             border: 'none',
//                                             cursor: 'pointer'
//                                         }}
//                                         onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
//                                         onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
//                                     >
//                                         <FontAwesomeIcon icon={icon} />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Quick Links */}
//                         <div>
//                             <h3 className="text-xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Quick Links</h3>
//                             <ul className="space-y-3">
//                                 {[
//                                     { id: 'home', label: 'Home' },
//                                     { id: 'about', label: 'About' },
//                                     { id: 'services', label: 'Services' },
//                                     { id: 'products', label: 'Products' },
//                                     { id: 'gallery', label: 'Gallery' },
//                                     { id: 'testimonials', label: 'Testimonials' },
//                                     { id: 'contact', label: 'Contact' }
//                                 ].map((item) => (
//                                     <li key={item.id}>
//                                         <button
//                                             onClick={() => scrollToSection(item.id)}
//                                             className="transition duration-300 text-left"
//                                             style={{
//                                                 background: 'none',
//                                                 border: 'none',
//                                                 cursor: 'pointer',
//                                                 color: themeStyles.footerText
//                                             }}
//                                             onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
//                                             onMouseLeave={(e) => e.target.style.color = themeStyles.footerText}
//                                         >
//                                             {item.label}
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Services */}
//                         <div>
//                             <h3 className="text-xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Our Services</h3>
//                             <ul className="space-y-3">
//                                 {services.map((service, index) => (
//                                     <li key={index} style={{ color: themeStyles.footerText }}>{service.title}</li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Newsletter */}
//                         <div>
//                             <h3 className="text-xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Newsletter</h3>
//                             <p className="mb-4" style={{ color: themeStyles.footerText }}>Subscribe to get updates on pricing and recycling tips.</p>
//                             <div className="flex">
//                                 <input
//                                     type="email"
//                                     placeholder="Your email"
//                                     className="contact-input flex-grow p-3 rounded-l-lg"
//                                     style={{
//                                         backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                                         border: 'none',
//                                         color: '#FFFFFF'
//                                     }}
//                                 />
//                                 <button
//                                     className="font-bold py-3 px-6 rounded-r-lg transition duration-300"
//                                     style={{
//                                         backgroundColor: '#FFFFFF',
//                                         color: '#375382',
//                                         border: 'none',
//                                         cursor: 'pointer'
//                                     }}
//                                     onMouseEnter={(e) => {
//                                         e.target.style.backgroundColor = '#2F476F';
//                                         e.target.style.color = '#FFFFFF';
//                                     }}
//                                     onMouseLeave={(e) => {
//                                         e.target.style.backgroundColor = '#FFFFFF';
//                                         e.target.style.color = '#375382';
//                                     }}
//                                 >
//                                     <FontAwesomeIcon icon={faPaperPlane} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Copyright */}
//                     <div className="pt-8 border-t text-center" style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)' }}>
//                         <p style={{ color: themeStyles.footerText }}>© 2023 Rukn Al Tawar Waste Treatment LLC. All rights reserved. | Industrial area Sajja, Sharjah UAE</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Weblogotakaful;












import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import solid icons correctly
import {
    faRecycle,
    faBars,
    faIndustry,
    faTruckLoading,
    faWeight,
    faLeaf,
    faBullseye,
    faEye,
    faBolt,
    faCarBattery,
    faMicrochip,
    faTint,
    faStar,
    faStarHalfAlt,
    faMapMarkerAlt,
    faPhoneAlt,
    faEnvelope,
    faMapMarkedAlt,
    faArrowRight,
    faPaperPlane,
    faChevronDown,
    faSun,
    faMoon
} from '@fortawesome/free-solid-svg-icons';

// Import regular star icon
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// Import brand icons
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Weblogotakaful = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Create refs for each section
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const productsRef = useRef(null);
    const galleryRef = useRef(null);
    const testimonialsRef = useRef(null);
    const contactRef = useRef(null);

    const observerRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for animations and active section tracking
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');

                        // Update active section based on which section is in view
                        const sectionId = entry.target.id;
                        if (sectionId) {
                            setActiveSection(sectionId);
                        }
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe all sections
        const sections = [
            homeRef.current,
            aboutRef.current,
            servicesRef.current,
            productsRef.current,
            galleryRef.current,
            testimonialsRef.current,
            contactRef.current
        ].filter(Boolean);

        sections.forEach(section => {
            if (observerRef.current) observerRef.current.observe(section);
        });

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const scrollToSection = (sectionId) => {
        let element;
        switch (sectionId) {
            case 'home':
                element = homeRef.current;
                break;
            case 'about':
                element = aboutRef.current;
                break;
            case 'services':
                element = servicesRef.current;
                break;
            case 'products':
                element = productsRef.current;
                break;
            case 'gallery':
                element = galleryRef.current;
                break;
            case 'testimonials':
                element = testimonialsRef.current;
                break;
            case 'contact':
                element = contactRef.current;
                break;
            default:
                element = homeRef.current;
        }

        if (element) {
            const yOffset = -80; // Adjust for fixed header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }

        setMobileMenuOpen(false);
        setActiveSection(sectionId);
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "+971506252875";
        const message = "Hello, I'm interested in your scrap metal recycling services from Rukn Al Tawar.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! Your message has been sent successfully. We'll contact you at ${formData.email} soon.`);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const openLightbox = (imgSrc) => {
        setLightboxImage(imgSrc);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    // Theme-based styles with Rukn Al Tawar brand colors
    const themeStyles = {
        backgroundColor: isDarkMode ? '#111827' : '#FFFFFF', 
        // bg color yaha change kia hai upr
        textColor: isDarkMode ? '#f9fafb' : '#111827',
        secondaryTextColor: isDarkMode ? '#d1d5db' : '#4b5563',
        cardBackground: isDarkMode ? '#1f2937' : '#ffffff',
        cardBorder: isDarkMode ? '#374151' : '#e5e7eb',
        navbarBackground: isDarkMode ? '#111827' : '#ffffff',
        footerBackground: isDarkMode ? '#111827' : '#375382',
        footerText: isDarkMode ? '#d1d5db' : '#FFFFFF',
        inputBackground: isDarkMode ? '#1f2937' : '#ffffff',
        inputBorder: isDarkMode ? '#374151' : '#d1d5db',
        heroGradient: isDarkMode
            ? 'linear-gradient(135deg, rgba(55, 83, 130, 0.15) 0%, rgba(47, 71, 111, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(55, 83, 130, 0.1) 0%, rgba(47, 71, 111, 0.05) 100%)',
        testimonialCardBg: isDarkMode
            ? 'linear-gradient(145deg, #1f2937, #111827)'
            : 'linear-gradient(145deg, #ffffff, #f3f4f6)',
        testimonialShadow: isDarkMode
            ? '10px 10px 20px #0a0f1a, -10px -10px 20px #182235'
            : '10px 10px 20px #d1d5db, -10px -10px 20px #ffffff',
        hoverColor: isDarkMode ? '#374151' : '#f3f4f6'
    };

    const services = [
        {
            icon: faIndustry,
            title: "Industrial Scrap",
            description: "We collect and process industrial scrap from manufacturing units with proper documentation."
        },
        {
            icon: faTruckLoading,
            title: "Pickup Services",
            description: "Our fleet of trucks provides convenient pickup services for bulk scrap materials."
        },
        {
            icon: faWeight,
            title: "Weigh & Pay",
            description: "Transparent weighing process with digital scales and instant payment for your scrap."
        },
        {
            icon: faLeaf,
            title: "Eco-Friendly",
            description: "We follow environmentally responsible recycling practices to reduce carbon footprint."
        }
    ];

    const products = [
        {
            name: "Iron Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "All types of iron & steel scrap, competitive pricing based on quality."
        },
        {
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Industrial & structural steel scrap at top market rates."
        },
        {
            name: "Copper Scrap",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "High-quality copper wire, tubing & other materials."
        },
        {
            name: "Aluminum Scrap",
            image: "https://images.unsplash.com/photo-1620748698226-b6a8a5e1e9f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Clean aluminum scrap including sheets, cans & extrusions."
        },
        {
            name: "Brass Scrap",
            image: "https://images.unsplash.com/photo-1621533672183-4b4b32f7164e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "Various grades of brass scrap materials."
        },
        {
            name: "Stainless Steel",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            description: "All grades of stainless steel scrap available."
        }
    ];

    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Scrap Yard Operations"
        },
          {
            src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Scrap Yard Operations"
        },
          {
            src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Scrap Yard Operations"
        },
          {
            src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Scrap Yard Operations"
        },
          {
            src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Scrap Yard Operations"
        },
        {
            src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Processing Facility"
        },
         {
            src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Processing Facility"
        },
         {
            src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Processing Facility"
        },
        {
            src: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Steel Scrap Collection"
        },
        
    ];

    const testimonials = [
        {
            name: "Michael Rodriguez",
            role: "Construction Manager",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            text: "We've been working with Rukn Al Tawar for 3 years now. Their service is reliable, prices are fair, and they always pick up on time. Highly recommended for any construction company!"
        },
        {
            name: "Sarah Johnson",
            role: "Manufacturing Plant Owner",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 4.5,
            text: "Their industrial scrap recycling service has helped us manage waste efficiently. The team is professional, and their documentation process makes everything transparent and easy to track."
        },
        {
            name: "Robert Chen",
            role: "Auto Repair Shop Owner",
            avatar: "https://randomuser.me/api/portraits/men/67.jpg",
            rating: 5,
            text: "As a small business, I appreciate their flexible pickup schedule and fair pricing for scrap metal. They've been a reliable partner for my auto repair shop for over 5 years now."
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
            } else {
                stars.push(<FontAwesomeIcon key={i} icon={farStar} className="text-yellow-400" />);
            }
        }
        return stars;
    };

    return (
        <div className="text-gray-100" style={{
            backgroundColor: themeStyles.backgroundColor,
            color: themeStyles.textColor,
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
            transition: 'background-color 0.3s ease, color 0.3s ease'
        }}>
            {/* WhatsApp Floating Button */}
            <div
                className="whatsapp-float"
                onClick={handleWhatsAppClick}
                style={{
                    position: 'fixed',
                    width: '60px',
                    height: '60px',
                    bottom: '40px',
                    right: '40px',
                    backgroundColor: '#25d366',
                    color: 'white',
                    borderRadius: '50px',
                    textAlign: 'center',
                    fontSize: '30px',
                    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
                    zIndex: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2F476F'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#375382'}
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </div>

            {/* Theme Toggle Button */}
            <div
                className="theme-toggle"
                onClick={toggleTheme}
                style={{
                    position: 'fixed',
                    width: '60px',
                    height: '60px',
                    bottom: '110px',
                    right: '40px',
                    backgroundColor: isDarkMode ? '#374151' : '#fbbf24',
                    color: isDarkMode ? '#fbbf24' : '#374151',
                    borderRadius: '50px',
                    textAlign: 'center',
                    fontSize: '30px',
                    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
                    zIndex: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </div>

            {/* Navigation */}
          <nav
    className="sticky top-0 z-50 shadow-lg transition-colors duration-300"
    style={{ backgroundColor: themeStyles.navbarBackground }}
>
    <div
        className="section-container"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}
    >
        <div className="flex justify-between items-center py-4">

            {/* Logo */}
            <button
                onClick={() => scrollToSection('home')}
                className="flex items-center focus:outline-none"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
                <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: '#375382' }}
                >
                    <FontAwesomeIcon icon={faRecycle} className="text-2xl text-white" />
                </div>

                <div className="leading-tight text-left">
                    <div className="text-xl md:text-2xl font-bold tracking-wide">
                        <span style={{ color: '#375382' }}>RUKN</span>{' '}
                        <span style={{ color: '#375382' }}>AL TAWAR</span>
                    </div>
                    <div className="text-xs md:text-sm uppercase tracking-widest opacity-90">
                        Waste Treatment L.L.C
                    </div>
                </div>
            </button>

            {/* Desktop Menu & Theme Toggle */}
            <div className="flex items-center space-x-4">
                <div className="hidden md:flex space-x-8">
                    {[
                        { id: 'home', label: 'Home' },
                        { id: 'about', label: 'About' },
                        { id: 'services', label: 'Services' },
                        { id: 'products', label: 'Products' },
                        { id: 'gallery', label: 'Gallery' },
                        { id: 'testimonials', label: 'Testimonials' },
                        { id: 'contact', label: 'Contact' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-lg font-medium relative transition-colors duration-300"
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color:
                                    activeSection === item.id
                                        ? '#375382'
                                        : themeStyles.textColor
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Theme Toggle (Desktop) */}
                <button
                    onClick={toggleTheme}
                    className="hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300"
                    style={{
                        backgroundColor: isDarkMode ? '#374151' : '#fbbf24',
                        color: isDarkMode ? '#fbbf24' : '#374151',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                </button>
            </div>

            {/* Mobile Buttons */}
            <div className="flex items-center space-x-4 md:hidden">
                <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300"
                    style={{
                        backgroundColor: isDarkMode ? '#374151' : '#fbbf24',
                        color: isDarkMode ? '#fbbf24' : '#374151',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                </button>

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-2xl"
                    style={{
                        background: 'none',
                        border: 'none',
                        color: themeStyles.textColor
                    }}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
        <div
            className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
            style={{
                borderTop: `1px solid ${themeStyles.cardBorder}`
            }}
        >
            <div className="flex flex-col space-y-4 py-4">
                {[
                    { id: 'home', label: 'Home' },
                    { id: 'about', label: 'About' },
                    { id: 'services', label: 'Services' },
                    { id: 'products', label: 'Products' },
                    { id: 'gallery', label: 'Gallery' },
                    { id: 'testimonials', label: 'Testimonials' },
                    { id: 'contact', label: 'Contact' }
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="py-2 text-lg text-left transition-colors duration-300"
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            color:
                                activeSection === item.id
                                    ? '#375382'
                                    : themeStyles.textColor
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    </div>
</nav>


            <main>
                {/* Hero Section */}
                <section
                    id="home"
                    ref={homeRef}
                    className="min-h-screen flex items-center relative overflow-hidden"
                    style={{
                        background: themeStyles.heroGradient,
                        paddingTop: '80px'
                    }}
                >
                    <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: themeStyles.textColor }}>
                                    <span style={{ color: '#375382' }}>Recycling</span> Metals,
                                    <span className="block" style={{ color: '#375382' }}>Building</span>
                                    <span className="block">A Sustainable Future</span>
                                </h1>
                                <p className="text-xl mb-8" style={{ color: themeStyles.secondaryTextColor }}>
                                    Rukn Al Tawar specializes in professional scrap buying, offering fair pricing, eco-friendly recycling, and smooth transactions.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
                                        style={{
                                            backgroundColor: '#375382',
                                            color: '#FFFFFF',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#2F476F'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#375382'}
                                    >
                                        Get Quote
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className="font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
                                        style={{
                                            border: '2px solid #375382',
                                            color: '#375382',
                                            backgroundColor: 'transparent',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#375382';
                                            e.target.style.color = '#FFFFFF';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.color = '#375382';
                                        }}
                                    >
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                            <div className="relative hidden lg:block">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                        alt="Metal Recycling"
                                        className="rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                                <div className="absolute -bottom-6 -right-6 w-full h-full border-4" style={{ borderColor: '#375382' }}></div>
                            </div>
                        </div>

                        {/* Scroll Down Indicator */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
                        >
                            <button
                                onClick={() => scrollToSection('about')}
                                className="transition-colors duration-300"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: themeStyles.secondaryTextColor
                                }}
                            >
                                <FontAwesomeIcon icon={faChevronDown} className="text-3xl" />
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* Services Section */}
                {/* <section
                    id="services"
                    ref={servicesRef}
                    className="section-padding"
                    style={{ padding: '5rem 0' }}
                >
                    <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4" style={{ color: themeStyles.textColor }}>
                                Our <span style={{ color: '#375382' }}>Services</span>
                            </h2>
                            <p className="text-xl max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
                                We offer comprehensive metal recycling services to industries, businesses, and individuals.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="rounded-xl p-8 card-hover hover:transform hover:-translate-y-2 transition-all duration-300"
                                    style={{
                                        backgroundColor: themeStyles.cardBackground,
                                        border: `1px solid ${themeStyles.cardBorder}`,
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                    }}
                                >
                                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#375382' }}>
                                        <FontAwesomeIcon icon={service.icon} className="text-2xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4" style={{ color: themeStyles.textColor }}>
                                        {service.title}
                                    </h3>
                                    <p className="mb-6" style={{ color: themeStyles.secondaryTextColor }}>
                                        {service.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section> */}

                {/* About Us Section */}
                <section
                    id="about"
                    ref={aboutRef}
                    className="section-padding"
                    style={{ padding: '5rem 0' }}
                >
                    <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <h2 className="text-5xl font-bold mb-12 text-center" style={{ color: themeStyles.textColor }}>
                            About <span style={{ color: '#375382' }}>Us</span>
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3 className="text-3xl font-bold mb-6" style={{ color: '#375382' }}>What Sets Our Business Apart for Your Selection</h3>
                                <p className="text-lg mb-4" style={{ color: themeStyles.textColor }}>
                                    <strong>Rukn Al Tawar Waste Treatment LLC</strong> has been a leader in the metal recycling industry in Sharjah, UAE. We specialize in processing and recycling various types of metals including iron, steel, copper, and aluminum.
                                </p>
                                <p className="text-lg mb-4" style={{ color: themeStyles.textColor }}>
                                    Our state-of-the-art facility in the industrial area of Sajja, Sharjah is equipped with advanced sorting and processing technology, allowing us to handle large volumes of scrap metal efficiently and responsibly.
                                </p>
                                <p className="text-lg" style={{ color: themeStyles.textColor }}>
                                    We serve industries, construction companies, and individual customers across the region, providing reliable recycling solutions that contribute to environmental sustainability.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                                    alt="Our Facility"
                                    className="rounded-lg shadow-2xl w-full"
                                />
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="rounded-xl p-8 card-hover hover:transform hover:-translate-y-2 transition-all duration-300"
                                style={{
                                    backgroundColor: themeStyles.cardBackground,
                                    border: `1px solid ${themeStyles.cardBorder}`
                                }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#375382' }}>
                                        <FontAwesomeIcon icon={faBullseye} className="text-2xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ color: themeStyles.textColor }}>Our Mission</h3>
                                </div>
                                <p style={{ color: themeStyles.secondaryTextColor }}>
                                    To revolutionize metal recycling through innovative technology and sustainable practices, reducing environmental impact while providing exceptional value to our customers.
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="rounded-xl p-8 card-hover hover:transform hover:-translate-y-2 transition-all duration-300"
                                style={{
                                    backgroundColor: themeStyles.cardBackground,
                                    border: `1px solid ${themeStyles.cardBorder}`
                                }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#375382' }}>
                                        <FontAwesomeIcon icon={faEye} className="text-2xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ color: themeStyles.textColor }}>Our Vision</h3>
                                </div>
                                <p style={{ color: themeStyles.secondaryTextColor }}>
                                    To become the leading provider of metal recycling solutions in the UAE, setting industry standards for sustainability, technology, and customer service.
                                </p>
                            </motion.div>
                        </div>

                        {/* Experience */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="rounded-xl p-8"
                            style={{
                                background: isDarkMode
                                    ? 'linear-gradient(to right, #1f2937, #111827)'
                                    : 'linear-gradient(to right, #ffffff, #f3f4f6)',
                                border: `1px solid ${themeStyles.cardBorder}`
                            }}
                        >
                            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#375382' }}>Experience & Expertise</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-5xl font-bold mb-2" style={{ color: '#375382' }}>15+</div>
                                    <div className="text-xl font-semibold" style={{ color: themeStyles.textColor }}>Years Experience</div>
                                </div>

                                <div className="text-center">
                                    <div className="text-5xl font-bold mb-2" style={{ color: '#375382' }}>5000+</div>
                                    <div className="text-xl font-semibold" style={{ color: themeStyles.textColor }}>Satisfied Clients</div>
                                </div>

                                <div className="text-center">
                                    <div className="text-5xl font-bold mb-2" style={{ color: '#375382' }}>50K+</div>
                                    <div className="text-xl font-semibold" style={{ color: themeStyles.textColor }}>Tons Recycled</div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-lg text-center" style={{ color: themeStyles.textColor }}>
                                    Our team consists of certified professionals with extensive knowledge in metal identification, sorting, processing, and recycling technologies.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Products Section */}
                <section
                    id="products"
                    ref={productsRef}
                    className="section-padding"
                    style={{ padding: '5rem 0' }}
                >
                    <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: themeStyles.textColor }}>
                            Our <span style={{ color: '#375382' }}>Products</span>
                        </h2>
                        <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
                            We offer a diverse range of meticulously processed metal scrap, ready to fuel the manufacturing needs of diverse industries
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="relative h-[280px] rounded-xl overflow-hidden group cursor-pointer"
                                >
                                    {/* Background Image with stronger zoom */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-125"
                                        style={{ backgroundImage: `url(${product.image})` }}
                                    ></div>

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-700"></div>

                                    {/* Centered Text */}
                                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                                        <h3 className="text-3xl font-bold text-white mb-4">
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-300 text-sm max-w-xs">
                                            {product.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section
                    id="gallery"
                    ref={galleryRef}
                    className="section-padding"
                    style={{ padding: '5rem 0' }}
                >
                    <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: themeStyles.textColor }}>
                            Our <span style={{ color: '#375382' }}>Gallery</span>
                        </h2>
                        <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
                            Take a look at our operations, facility, and recycling processes.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.12,
                                        ease: "easeOut"
                                    }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.03
                                    }}
                                    className="relative overflow-hidden rounded-2xl cursor-pointer group bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-blue-500/30 transition-all duration-500"
                                    onClick={() => openLightbox(image.fullSrc)}
                                >
                                    {/* Image */}
                                    <motion.img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-64 object-cover"
                                        whileHover={{ scale: 1.15 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    />

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                                    {/* Title animation */}
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        whileHover={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute bottom-0 left-0 right-0 p-6"
                                    >
                                        <h3 className="text-2xl font-bold text-white tracking-wide">
                                            {image.title}
                                        </h3>
                                        <span className="block mt-2 w-12 h-1 rounded-full" style={{ backgroundColor: '#375382' }} />
                                    </motion.div>

                                    {/* Glow border */}
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-blue-500/40 transition duration-500" />
                                </motion.div>
                            ))}
                        </div>


                        {/* Lightbox */}
                        {lightboxOpen && (
                            <div
                                className="lightbox"
                                style={{
                                    display: 'flex',
                                    position: 'fixed',
                                    zIndex: 1000,
                                    left: 0,
                                    top: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onClick={(e) => e.target.className === 'lightbox' && closeLightbox()}
                            >
                                <span
                                    className="lightbox-close"
                                    onClick={closeLightbox}
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '40px',
                                        color: 'white',
                                        fontSize: '40px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    &times;
                                </span>
                                <img
                                    className="lightbox-img"
                                    src={lightboxImage}
                                    alt="Lightbox"
                                    style={{ maxWidth: '90%', maxHeight: '80%' }}
                                />
                            </div>
                        )}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section
                    id="testimonials"
                    ref={testimonialsRef}
                    className="section-padding"
                    style={{ padding: '5rem 0' }}
                >
                    <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: themeStyles.textColor }}>
                            Client <span style={{ color: '#375382' }}>Testimonials</span>
                        </h2>
                        <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
                            Hear what our clients have to say about our services and professionalism.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="testimonial-card rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
                                    style={{
                                        background: themeStyles.testimonialCardBg,
                                        boxShadow: themeStyles.testimonialShadow
                                    }}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                            <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold" style={{ color: themeStyles.textColor }}>{testimonial.name}</h3>
                                            <p style={{ color: themeStyles.secondaryTextColor }}>{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <div className="flex">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                    <p className="italic" style={{ color: themeStyles.textColor }}>{testimonial.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* More testimonials */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
                                style={{
                                    backgroundColor: themeStyles.cardBackground,
                                    border: `1px solid ${themeStyles.cardBorder}`
                                }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold" style={{ color: themeStyles.textColor }}>Lisa Thompson</h3>
                                        <p style={{ color: themeStyles.secondaryTextColor }}>Warehouse Manager</p>
                                    </div>
                                </div>
                                <p style={{ color: themeStyles.textColor }}>
                                    "Rukn Al Tawar helped us clear out years of accumulated metal waste from our warehouse. Their team was efficient, and we were impressed with their safety protocols."
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="rounded-xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300"
                                style={{
                                    backgroundColor: themeStyles.cardBackground,
                                    border: `1px solid ${themeStyles.cardBorder}`
                                }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold" style={{ color: themeStyles.textColor }}>David Wilson</h3>
                                        <p style={{ color: themeStyles.secondaryTextColor }}>Demolition Contractor</p>
                                    </div>
                                </div>
                                <p style={{ color: themeStyles.textColor }}>
                                    "I work with Rukn Al Tawar on all my demolition projects. They handle large volumes of scrap metal and always provide timely service. Their pricing is the most competitive in the region."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section
                    id="contact"
                    ref={contactRef}
                    className="section-padding"
                    style={{ padding: '5rem 0' }}
                >
                    <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <h2 className="text-5xl font-bold mb-4 text-center" style={{ color: themeStyles.textColor }}>
                            Contact <span style={{ color: '#375382' }}>Us</span>
                        </h2>
                        <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: themeStyles.secondaryTextColor }}>
                            Get in touch with us for scrap metal pricing, pickup scheduling, or any other inquiries.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h3 className="text-3xl font-bold mb-8" style={{ color: '#375382' }}>Send Us a Message</h3>

                                <form onSubmit={handleFormSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 font-medium" style={{ color: themeStyles.textColor }}>Your Name *</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="contact-input w-full p-4 rounded-lg"
                                                style={{
                                                    backgroundColor: themeStyles.inputBackground,
                                                    border: `1px solid ${themeStyles.inputBorder}`,
                                                    color: themeStyles.textColor,
                                                    transition: 'border 0.3s ease'
                                                }}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block mb-2 font-medium" style={{ color: themeStyles.textColor }}>Email Address *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="contact-input w-full p-4 rounded-lg"
                                                style={{
                                                    backgroundColor: themeStyles.inputBackground,
                                                    border: `1px solid ${themeStyles.inputBorder}`,
                                                    color: themeStyles.textColor
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block mb-2 font-medium" style={{ color: themeStyles.textColor }}>Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="contact-input w-full p-4 rounded-lg"
                                            style={{
                                                backgroundColor: themeStyles.inputBackground,
                                                border: `1px solid ${themeStyles.inputBorder}`,
                                                color: themeStyles.textColor
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block mb-2 font-medium" style={{ color: themeStyles.textColor }}>Your Message *</label>
                                        <textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="5"
                                            className="contact-input w-full p-4 rounded-lg"
                                            style={{
                                                backgroundColor: themeStyles.inputBackground,
                                                border: `1px solid ${themeStyles.inputBorder}`,
                                                color: themeStyles.textColor
                                            }}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="font-bold py-4 px-8 rounded-lg text-lg transition duration-300 w-full"
                                        style={{
                                            backgroundColor: '#375382',
                                            color: '#FFFFFF',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#2F476F'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#375382'}
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>

                            {/* Contact Info & Map */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h3 className="text-3xl font-bold mb-8" style={{ color: '#375382' }}>Get in Touch</h3>

                                <div className="space-y-8 mb-10">
                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg mr-4" style={{  }}>
                                            <FontAwesomeIcon icon={faPhoneAlt} className="text-xl text-[#375382]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2" style={{ color: themeStyles.textColor }}>Phone Number</h4>
                                            <p style={{ color: themeStyles.secondaryTextColor }}>+971 50 625 2875<br />+971 54 452 0303<br />Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg mr-4" style={{  }}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-[#375382]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2" style={{ color: themeStyles.textColor }}>Yard Address</h4>
                                            <p style={{ color: themeStyles.secondaryTextColor }}>Industrial area Sajja, Sharjah UAE<br />RUKN AL TAWAR WASTE TREATMENT LLC</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg mr-4" style={{}}>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-[#375382]" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2" style={{ color: themeStyles.textColor }}>Office Address</h4>
                                            <p style={{ color: themeStyles.secondaryTextColor }}>Office No: E-16F-02<br />Hamriyah Free Zone, Sharjah, United Arab Emirates.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="mt-8 rounded-xl p-6" style={{ backgroundColor: themeStyles.cardBackground }}>
                                    <h4 className="text-xl font-bold mb-4" style={{ color: '#375382' }}>Business Hours</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span style={{ color: themeStyles.textColor }}>Monday - Friday</span>
                                            <span className="font-semibold" style={{ color: themeStyles.textColor }}>8:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span style={{ color: themeStyles.textColor }}>Saturday</span>
                                            <span className="font-semibold" style={{ color: themeStyles.textColor }}>9:00 AM - 2:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span style={{ color: themeStyles.textColor }}>Sunday</span>
                                            <span className="font-semibold" style={{ color: themeStyles.textColor }}>Closed</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* <section className="section-padding" style={{ 
                    padding: '5rem 0',
                    backgroundColor: '#375382',
                    color: '#FFFFFF'
                }}>
                    <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                        <div className="text-center">
                            <h3 className="text-4xl font-bold mb-6">Ready to Recycle Your Scrap Metal?</h3>
                            <p className="text-xl mb-8 max-w-3xl mx-auto">
                                Join hundreds of satisfied customers who trust Rukn Al Tawar with their metal recycling needs. Get competitive prices and professional service.
                            </p>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="font-bold py-4 px-10 rounded-lg text-xl transition duration-300 inline-block"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    color: '#375382',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#2F476F';
                                    e.target.style.color = '#FFFFFF';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#FFFFFF';
                                    e.target.style.color = '#375382';
                                }}
                            >
                                Contact Us Today
                            </button>
                        </div>
                    </div>
                </section> */}
            </main>

            {/* Footer */}
            <footer className="pt-12 pb-8" style={{ backgroundColor: themeStyles.footerBackground }}>
                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#375382' }}>
                                    <FontAwesomeIcon icon={faRecycle} className="text-2xl text-white" />
                                </div>
                                <div className="text-2xl font-bold">
                                    <span style={{ color: '#FFFFFF' }}>Rukn</span>
                                    <span style={{ color: '#FFFFFF' }}> Al Tawar </span>  
                                 <div className='text-xs md:text-sm  text-white' >
                        Waste Treatment LLC
                    </div>
                                 <div className='text-xs md:text-sm uppercase text-white' >
                     ركن الطوار لمعالجة النفايات ذ.م.م
                    </div>
                       
                                </div>
                      
                            </div>
                            <p className="mb-6" style={{ color: themeStyles.footerText }}>
                                Rukn Al Tawar Waste Treatment LLC - Leading waste treatment and metal recycling company in Sharjah, UAE with years of experience. Committed to sustainable practices and customer satisfaction.
                            </p>
                            <div className="flex space-x-4">
                                {[faFacebookF, faTwitter, faLinkedinIn, faInstagram].map((icon, index) => (
                                    <button
                                        key={index}
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            color: '#FFFFFF',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                                    >
                                        <FontAwesomeIcon icon={icon} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Quick Links</h3>
                            <ul className="space-y-3">
                                {[
                                    { id: 'home', label: 'Home' },
                                    { id: 'about', label: 'About' },
                                    { id: 'services', label: 'Services' },
                                    { id: 'products', label: 'Products' },
                                    { id: 'gallery', label: 'Gallery' },
                                    { id: 'testimonials', label: 'Testimonials' },
                                    { id: 'contact', label: 'Contact' }
                                ].map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => scrollToSection(item.id)}
                                            className="transition duration-300 text-left"
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: themeStyles.footerText
                                            }}
                                            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                                            onMouseLeave={(e) => e.target.style.color = themeStyles.footerText}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Our Services</h3>
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index} style={{ color: themeStyles.footerText }}>{service.title}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-xl font-bold mb-6" style={{ color: '#FFFFFF' }}>Newsletter</h3>
                            <p className="mb-4" style={{ color: themeStyles.footerText }}>Subscribe to get updates on pricing and recycling tips.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="contact-input flex-grow p-3 rounded-l-lg"
                                    style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        border: 'none',
                                        color: '#FFFFFF'
                                    }}
                                />
                                <button
                                    className="font-bold py-3 px-6 rounded-r-lg transition duration-300"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        color: '#375382',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = '#2F476F';
                                        e.target.style.color = '#FFFFFF';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = '#FFFFFF';
                                        e.target.style.color = '#375382';
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 border-t text-center" style={{ borderTopColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <p style={{ color: themeStyles.footerText }}>© 2023 Rukn Al Tawar Waste Treatment LLC. All rights reserved. | Industrial area Sajja, Sharjah UAE</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Weblogotakaful;























