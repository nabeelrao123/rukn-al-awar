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
    faSun,
    faMoon,
    faTimes
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

const Newfile = () => {
    const [activePage, setActivePage] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    const observerRef = useRef(null);

    // Apply theme to body
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [isDarkMode]);

    // CSS for themes
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            :root {
                /* Light Theme Variables */
                --light-bg-primary: #f8fafc;
                --light-bg-secondary: #ffffff;
                --light-bg-tertiary: #f1f5f9;
                --light-text-primary: #1e293b;
                --light-text-secondary: #475569;
                --light-text-tertiary: #64748b;
                --light-border: #e2e8f0;
                --light-card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                --light-accent-primary: #0d9488; /* teal-600 */
                --light-accent-secondary: #f59e0b; /* yellow-500 */
                
                /* Dark Theme Variables */
                --dark-bg-primary: #111827;
                --dark-bg-secondary: #1f2937;
                --dark-bg-tertiary: #374151;
                --dark-text-primary: #f9fafb;
                --dark-text-secondary: #e5e7eb;
                --dark-text-tertiary: #d1d5db;
                --dark-border: #4b5563;
                --dark-card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
                --dark-accent-primary: #0d9488;
                --dark-accent-secondary: #f59e0b;
            }
            
            body.light-theme {
                background-color: var(--light-bg-primary);
                color: var(--light-text-primary);
            }
            
            body.dark-theme {
                background-color: var(--dark-bg-primary);
                color: var(--dark-text-primary);
            }
            
            .theme-transition * {
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
            }
        `;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        document.querySelectorAll('.card-hover, .testimonial-card').forEach(el => {
            if (observerRef.current) observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handlePageChange = (page) => {
        setActivePage(page);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "+1234567890";
        const message = "Hello, I'm interested in your scrap metal recycling services.";
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

    const services = [
        {
            icon: faIndustry,
            title: "Industrial Scrap",
            description: "We collect and process industrial scrap from manufacturing units with proper documentation.",
            link: "products"
        },
        {
            icon: faTruckLoading,
            title: "Pickup Services",
            description: "Our fleet of trucks provides convenient pickup services for bulk scrap materials.",
            link: "contact"
        },
        {
            icon: faWeight,
            title: "Weigh & Pay",
            description: "Transparent weighing process with digital scales and instant payment for your scrap.",
            link: "about"
        },
        {
            icon: faLeaf,
            title: "Eco-Friendly",
            description: "We follow environmentally responsible recycling practices to reduce carbon footprint.",
            link: "about"
        }
    ];

    const products = [
        {
            name: "Iron Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$120 - $250/ton",
            status: "In Stock"
        },
        {
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$180 - $320/ton",
            status: "In Stock"
        },
        {
            name: "Copper Scrap",
            image: "https://images.unsplash.com/photo-1621533672183-4b4b32f7164e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$3.50 - $4.80/lb",
            status: "In Stock"
        },
        {
            name: "Aluminum Scrap",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$0.60 - $1.20/lb",
            status: "In Stock"
        },
        {
            name: "Brass Scrap",
            image: "https://images.unsplash.com/photo-1620748698226-b6a8a5e1e9f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$1.80 - $2.50/lb",
            status: "In Stock"
        },
        {
            name: "Stainless Steel",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$0.80 - $1.50/lb",
            status: "In Stock"
        }
    ];

    const galleryImages = [
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
            src: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1593941707882-a5bba5338fe2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Steel Scrap Collection"
        },
        {
            src: "https://images.unsplash.com/photo-1620748698226-b6a8a5e1e9f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1620748698226-b6a8a5e1e9f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Sorted Metals"
        },
        {
            src: "https://images.unsplash.com/photo-1621533672183-4b4b32f7164e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1621533672183-4b4b32f7164e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Copper Processing"
        },
        {
            src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            fullSrc: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            title: "Advanced Machinery"
        }
    ];

    const testimonials = [
        {
            name: "Michael Rodriguez",
            role: "Construction Manager",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            text: "We've been working with Metallix Scrap for 3 years now. Their service is reliable, prices are fair, and they always pick up on time. Highly recommended for any construction company!"
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

    const otherMetals = [
        { icon: faBolt, name: "Brass", price: "$1.80 - $2.50/lb" },
        { icon: faCarBattery, name: "Lead", price: "$0.40 - $0.80/lb" },
        { icon: faMicrochip, name: "Circuit Boards", price: "Price Varies" },
        { icon: faTint, name: "Mercury", price: "Special Handling" }
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

    // Theme-based styles
    const themeStyles = {
        backgroundColor: isDarkMode ? '#111827' : '#f8fafc',
        color: isDarkMode ? '#f9fafb' : '#1e293b',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif"
    };

    const bgColor = isDarkMode ? '#1f2937' : '#ffffff';
    const cardBg = isDarkMode ? '#1f2937' : '#ffffff';
    const textColor = isDarkMode ? '#f9fafb' : '#1e293b';
    const textSecondary = isDarkMode ? '#d1d5db' : '#475569';
    const borderColor = isDarkMode ? '#4b5563' : '#e2e8f0';

    return (
        <div className="theme-transition" style={themeStyles}>
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
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </div>

            {/* Navigation */}
            <nav style={{ 
                backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                color: isDarkMode ? '#f9fafb' : '#1e293b',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }} className="sticky top-0 z-50">
                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="bg-teal-600 p-2 rounded-lg mr-3">
                                <FontAwesomeIcon icon={faRecycle} className="text-2xl text-white" />
                            </div>
                            <div className="text-2xl font-bold">
                                <span className="text-teal-600">Metallix</span>
                                <span className="text-yellow-500">Scrap</span>
                            </div>
                        </div>

                        {/* Desktop Menu & Theme Toggle */}
                        <div className="flex items-center space-x-8">
                            <div className="hidden md:flex space-x-8">
                                {['home', 'about', 'products', 'gallery', 'testimonials', 'contact'].map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className="text-lg font-medium relative hover:text-teal-600 transition duration-300"
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            color: 'inherit',
                                            cursor: 'pointer',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        {page === 'home' ? 'Home' :
                                            page === 'about' ? 'About Us' :
                                                page === 'products' ? 'Our Products' :
                                                    page === 'gallery' ? 'Gallery' :
                                                        page === 'testimonials' ? 'Testimonials' : 'Contact'}
                                    </button>
                                ))}
                            </div>

                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full"
                                style={{
                                    backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
                                    border: 'none',
                                    cursor: 'pointer',
                                    width: '44px',
                                    height: '44px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <FontAwesomeIcon 
                                    icon={isDarkMode ? faSun : faMoon} 
                                    className={isDarkMode ? 'text-yellow-400' : 'text-gray-700'} 
                                />
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="md:hidden text-2xl ml-4"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                style={{ background: 'none', border: 'none', color: 'inherit' }}
                            >
                                <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
                        style={{
                            maxHeight: mobileMenuOpen ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.5s ease',
                            backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                            borderTop: `1px solid ${borderColor}`
                        }}
                    >
                        <div className="flex flex-col space-y-4 py-4">
                            {['home', 'about', 'products', 'gallery', 'testimonials', 'contact'].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className="py-2 text-lg text-left hover:text-teal-600 transition duration-300"
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'inherit',
                                        cursor: 'pointer',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    {page === 'home' ? 'Home' :
                                        page === 'about' ? 'About Us' :
                                            page === 'products' ? 'Our Products' :
                                                page === 'gallery' ? 'Gallery' :
                                                    page === 'testimonials' ? 'Testimonials' : 'Contact'}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                {/* Home Page */}
                {activePage === 'home' && (
                    <section>
                        {/* Hero Section */}
                        <div className="hero-gradient min-h-screen flex items-center relative overflow-hidden"
                            style={{ 
                                background: isDarkMode 
                                    ? 'linear-gradient(135deg, rgba(13, 148, 136, 0.15) 0%, rgba(15, 118, 110, 0.1) 100%)'
                                    : 'linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(15, 118, 110, 0.05) 100%)',
                                backgroundColor: isDarkMode ? '#111827' : '#f8fafc'
                            }}>
                            <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                            <span className="text-teal-600">Recycling</span> Metals,
                                            <span className="block text-yellow-500">Building</span>
                                            <span className="block">A Sustainable Future</span>
                                        </h1>
                                        <p className="text-xl mb-8" style={{ color: textSecondary }}>
                                        We specialize in professional scrap buying, offering fair pricing, eco-friendly recycling, and smooth transactions.</p>
                                        <div className="flex flex-wrap gap-4">
                                            <button
                                                onClick={() => handlePageChange('contact')}
                                                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
                                            >
                                                Get Quote
                                            </button>
                                            <button
                                                onClick={() => handlePageChange('about')}
                                                className="border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
                                                style={{ color: '#f59e0b' }}
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
                                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-yellow-500 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="section-padding" style={{ padding: '5rem 0' }}>
                            <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl font-bold mb-4">Our <span className="text-teal-600">Services</span></h2>
                                    <p className="text-xl max-w-3xl mx-auto" style={{ color: textSecondary }}>
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
                                            className="rounded-xl p-8 card-hover"
                                            style={{
                                                backgroundColor: cardBg,
                                                boxShadow: isDarkMode 
                                                    ? '10px 10px 20px #0a0f1a, -10px -10px 20px #182235'
                                                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                border: `1px solid ${borderColor}`
                                            }}
                                        >
                                            <div className="bg-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                                <FontAwesomeIcon icon={service.icon} className="text-2xl text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                            <p className="mb-6" style={{ color: textSecondary }}>{service.description}</p>
                                            <button
                                                onClick={() => handlePageChange(service.link)}
                                                className="text-yellow-500 font-semibold flex items-center hover:text-yellow-600 transition duration-300"
                                                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                            >
                                                Learn More <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="section-padding" style={{ 
                            padding: '5rem 0',
                            background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)'
                        }}>
                            <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold mb-6 text-white">Ready to Recycle Your Scrap Metal?</h2>
                                    <p className="text-xl mb-8 max-w-3xl mx-auto text-teal-100">
                                        Join hundreds of satisfied customers who trust us with their metal recycling needs. Get competitive prices and professional service.
                                    </p>
                                    <button
                                        onClick={() => handlePageChange('contact')}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-lg text-xl transition duration-300 inline-block"
                                    >
                                        Contact Us Today
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* About Us Page */}
                {activePage === 'about' && (
                    <section className="section-padding" style={{ padding: '5rem 0' }}>
                        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                            <h1 className="text-5xl font-bold mb-12 text-center">About <span className="text-teal-600">Us</span></h1>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h2 className="text-3xl font-bold mb-6 text-yellow-500">What Sets Our Business Apart for Your Selection</h2>
                                    <p className="text-lg mb-4" style={{ color: textSecondary }}>
                                        <strong className="text-teal-600">Metallix Scrap</strong> has been a leader in the metal recycling industry for over 15 years. We specialize in processing and recycling various types of metals including iron, steel, copper, and aluminum.
                                    </p>
                                    <p className="text-lg mb-4" style={{ color: textSecondary }}>
                                        Our state-of-the-art facility is equipped with advanced sorting and processing technology, allowing us to handle large volumes of scrap metal efficiently and responsibly.
                                    </p>
                                    <p className="text-lg" style={{ color: textSecondary }}>
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
                                        className="rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                {/* Mission */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="rounded-xl p-8 card-hover"
                                    style={{
                                        backgroundColor: cardBg,
                                        border: `1px solid ${borderColor}`,
                                        boxShadow: isDarkMode 
                                            ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
                                            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                    }}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                            <FontAwesomeIcon icon={faBullseye} className="text-2xl text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Our Mission</h3>
                                    </div>
                                    <p style={{ color: textSecondary }}>
                                        To revolutionize metal recycling through innovative technology and sustainable practices, reducing environmental impact while providing exceptional value to our customers.
                                    </p>
                                </motion.div>

                                {/* Vision */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="rounded-xl p-8 card-hover"
                                    style={{
                                        backgroundColor: cardBg,
                                        border: `1px solid ${borderColor}`,
                                        boxShadow: isDarkMode 
                                            ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
                                            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                    }}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                            <FontAwesomeIcon icon={faEye} className="text-2xl text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Our Vision</h3>
                                    </div>
                                    <p style={{ color: textSecondary }}>
                                        To become the leading provider of metal recycling solutions, setting industry standards for sustainability, technology, and customer service.
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
                                        ? 'linear-gradient(135deg, #1f2937 0%, #374151 100%)'
                                        : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                                    border: `1px solid ${borderColor}`
                                }}
                            >
                                <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Experience & Expertise</h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-teal-600 mb-2">15+</div>
                                        <div className="text-xl font-semibold">Years Experience</div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-teal-600 mb-2">5000+</div>
                                        <div className="text-xl font-semibold">Satisfied Clients</div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-teal-600 mb-2">50K+</div>
                                        <div className="text-xl font-semibold">Tons Recycled</div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <p className="text-lg text-center" style={{ color: textSecondary }}>
                                        Our team consists of certified professionals with extensive knowledge in metal identification, sorting, processing, and recycling technologies.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Products Page */}
                {activePage === 'products' && (
                    <section className="section-padding" style={{ padding: '5rem 0' }}>
                        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                            <h1 className="text-5xl font-bold mb-4 text-center">Our <span className="text-teal-600">Products</span></h1>
                            <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: textSecondary }}>
                                We offer a diverse range of meticulously processed metal scrap, ready to fuel the manufacturing needs of diverse industries.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {products.map((product, index) => (
                                    <div
                                        key={index}
                                        className="relative h-[280px] rounded-xl overflow-hidden group"
                                        style={{
                                            boxShadow: isDarkMode 
                                                ? '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)'
                                                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                        }}
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
                                                {product.name === "Iron Scrap" && "All types of iron & steel scrap, competitive pricing based on quality."}
                                                {product.name === "Steel Scrap" && "Industrial & structural steel scrap at top market rates."}
                                                {product.name === "Copper Scrap" && "High-quality copper wire, tubing & other materials."}
                                                {product.name === "Aluminum Scrap" && "Clean aluminum scrap including sheets, cans & extrusions."}
                                                {product.name === "Brass Scrap" && "Premium brass scrap with high copper content."}
                                                {product.name === "Stainless Steel" && "All grades of stainless steel scrap available."}
                                            </p>
                                            
                                            <div className="mt-4">
                                                <span className="text-yellow-400 font-bold text-lg">{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Gallery Page */}
                {activePage === 'gallery' && (
                    <section className="section-padding" style={{ padding: '5rem 0' }}>
                        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                            <h1 className="text-5xl font-bold mb-4 text-center">Our <span className="text-teal-600">Gallery</span></h1>
                            <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: textSecondary }}>
                                Take a look at our operations, facility, and recycling processes.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {galleryImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-xl gallery-img cursor-pointer"
                                        onClick={() => openLightbox(image.fullSrc)}
                                        style={{ 
                                            transition: 'transform 0.5s ease',
                                            boxShadow: isDarkMode 
                                                ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
                                                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                        }}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end p-6">
                                            <h3 className="text-xl font-bold text-white">{image.title}</h3>
                                        </div>
                                    </div>
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
                )}

                {/* Testimonials Page */}
                {activePage === 'testimonials' && (
                    <section className="section-padding" style={{ padding: '5rem 0' }}>
                        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                            <h1 className="text-5xl font-bold mb-4 text-center">Client <span className="text-teal-600">Testimonials</span></h1>
                            <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: textSecondary }}>
                                Hear what our clients have to say about our services and professionalism.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        className="testimonial-card rounded-xl p-8"
                                        style={{
                                            backgroundColor: cardBg,
                                            border: `1px solid ${borderColor}`,
                                            boxShadow: isDarkMode 
                                                ? '10px 10px 20px #0a0f1a, -10px -10px 20px #182235'
                                                : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                        }}
                                    >
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                                <p style={{ color: textSecondary }}>{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>
                                        <p style={{ color: textSecondary }} className="italic">{testimonial.text}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* More testimonials */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="rounded-xl p-8"
                                    style={{
                                        backgroundColor: cardBg,
                                        border: `1px solid ${borderColor}`,
                                        boxShadow: isDarkMode 
                                            ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
                                            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                    }}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Lisa Thompson</h3>
                                            <p style={{ color: textSecondary }}>Warehouse Manager</p>
                                        </div>
                                    </div>
                                    <p style={{ color: textSecondary }}>
                                        "Metallix Scrap helped us clear out years of accumulated metal waste from our warehouse. Their team was efficient, and we were impressed with their safety protocols."
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="rounded-xl p-8"
                                    style={{
                                        backgroundColor: cardBg,
                                        border: `1px solid ${borderColor}`,
                                        boxShadow: isDarkMode 
                                            ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)'
                                            : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                    }}
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">David Wilson</h3>
                                            <p style={{ color: textSecondary }}>Demolition Contractor</p>
                                        </div>
                                    </div>
                                    <p style={{ color: textSecondary }}>
                                        "I work with Metallix on all my demolition projects. They handle large volumes of scrap metal and always provide timely service. Their pricing is the most competitive in the region."
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Contact Page */}
                {activePage === 'contact' && (
                    <section className="section-padding" style={{ padding: '5rem 0' }}>
                        <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                            <h1 className="text-5xl font-bold mb-4 text-center">Contact <span className="text-teal-600">Us</span></h1>
                            <p className="text-xl mb-12 text-center max-w-3xl mx-auto" style={{ color: textSecondary }}>
                                Get in touch with us for scrap metal pricing, pickup scheduling, or any other inquiries.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Contact Form */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h2 className="text-3xl font-bold mb-8 text-yellow-500">Send Us a Message</h2>

                                    <form onSubmit={handleFormSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block mb-2 font-medium">Your Name *</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full p-4 rounded-lg transition duration-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                                    style={{
                                                        backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
                                                        border: `1px solid ${borderColor}`,
                                                        color: textColor
                                                    }}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block mb-2 font-medium">Email Address *</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full p-4 rounded-lg transition duration-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                                    style={{
                                                        backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
                                                        border: `1px solid ${borderColor}`,
                                                        color: textColor
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full p-4 rounded-lg transition duration-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                                style={{
                                                    backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
                                                    border: `1px solid ${borderColor}`,
                                                    color: textColor
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block mb-2 font-medium">Your Message *</label>
                                            <textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows="5"
                                                className="w-full p-4 rounded-lg transition duration-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                                                style={{
                                                    backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
                                                    border: `1px solid ${borderColor}`,
                                                    color: textColor
                                                }}
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 w-full"
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
                                    <h2 className="text-3xl font-bold mb-8 text-yellow-500">Get in Touch</h2>

                                    <div className="space-y-8 mb-10">
                                        <div className="flex items-start">
                                            <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Our Address</h3>
                                                <p style={{ color: textSecondary }}>123 Industrial Parkway<br />Metropolis, MP 12345</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faPhoneAlt} className="text-xl text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                                                <p style={{ color: textSecondary }}>+1 (555) 123-4567<br />Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faEnvelope} className="text-xl text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Email Address</h3>
                                                <p style={{ color: textSecondary }}>info@metallixscrap.com<br />sales@metallixscrap.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map Placeholder */}
                                    <div className="rounded-xl overflow-hidden h-64"
                                        style={{
                                            backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
                                            border: `1px solid ${borderColor}`
                                        }}>
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <FontAwesomeIcon icon={faMapMarkedAlt} className="text-4xl text-teal-600 mb-4" />
                                                <p style={{ color: textSecondary }}>Metallix Scrap Facility Location</p>
                                                <p className="text-sm mt-2" style={{ color: textSecondary }}>Map integration would go here</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="mt-8 rounded-xl p-6"
                                        style={{
                                            backgroundColor: cardBg,
                                            border: `1px solid ${borderColor}`
                                        }}>
                                        <h3 className="text-xl font-bold mb-4 text-yellow-500">Business Hours</h3>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span style={{ color: textSecondary }}>Monday - Friday</span>
                                                <span className="font-semibold text-teal-600">8:00 AM - 6:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span style={{ color: textSecondary }}>Saturday</span>
                                                <span className="font-semibold text-teal-600">9:00 AM - 2:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span style={{ color: textSecondary }}>Sunday</span>
                                                <span className="font-semibold text-teal-600">Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* Footer */}
            <footer style={{ 
                backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                color: isDarkMode ? '#f9fafb' : '#1e293b',
                borderTop: `1px solid ${borderColor}`
            }} className="pt-12 pb-8">
                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-600 p-2 rounded-lg mr-3">
                                    <FontAwesomeIcon icon={faRecycle} className="text-2xl text-white" />
                                </div>
                                <div className="text-2xl font-bold">
                                    <span className="text-teal-600">Metallix</span>
                                    <span className="text-yellow-500">Scrap</span>
                                </div>
                            </div>
                            <p className="mb-6" style={{ color: textSecondary }}>
                                Leading metal recycling company with 15+ years of experience. Committed to sustainable practices and customer satisfaction.
                            </p>
                            <div className="flex space-x-4">
                                {[faFacebookF, faTwitter, faLinkedinIn, faInstagram].map((icon, index) => (
                                    <button
                                        key={index}
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition duration-300 hover:bg-teal-600 hover:text-white"
                                        style={{ 
                                            backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: textColor
                                        }}
                                    >
                                        <FontAwesomeIcon icon={icon} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-yellow-500">Quick Links</h3>
                            <ul className="space-y-3">
                                {['home', 'about', 'products', 'gallery', 'testimonials', 'contact'].map((page) => (
                                    <li key={page}>
                                        <button
                                            onClick={() => handlePageChange(page)}
                                            className="transition duration-300 text-left hover:text-teal-600"
                                            style={{ 
                                                background: 'none', 
                                                border: 'none', 
                                                cursor: 'pointer', 
                                                textTransform: 'capitalize',
                                                color: textColor
                                            }}
                                        >
                                            {page === 'home' ? 'Home' :
                                                page === 'about' ? 'About Us' :
                                                    page === 'products' ? 'Our Products' :
                                                        page === 'gallery' ? 'Gallery' :
                                                            page === 'testimonials' ? 'Testimonials' : 'Contact'}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-yellow-500">Our Services</h3>
                            <ul className="space-y-3">
                                {['Industrial Scrap Recycling', 'Pickup Services', 'Metal Processing', 'E-Waste Recycling', 'Scrap Metal Trading', 'Consultation Services'].map((service, index) => (
                                    <li key={index} style={{ color: textSecondary }}>{service}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-yellow-500">Newsletter</h3>
                            <p className="mb-4" style={{ color: textSecondary }}>Subscribe to get updates on pricing and recycling tips.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-grow p-3 rounded-l-lg outline-none transition duration-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                    style={{
                                        backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
                                        border: `1px solid ${borderColor}`,
                                        color: textColor
                                    }}
                                />
                                <button
                                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-r-lg transition duration-300"
                                >
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 text-center" style={{ borderTop: `1px solid ${borderColor}` }}>
                        <p style={{ color: textSecondary }}>© 2023 Metallix Scrap. All rights reserved. | Designed for Metal Recycling Business</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Newfile;