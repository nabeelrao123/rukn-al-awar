// // // import React from "react";
// // // import { motion } from "framer-motion";

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   visible: { opacity: 1, y: 0 },
// // // };

// // // function Navbar() {
// // //   return (
// // //     <nav className="fixed top-0 left-0 w-full z-40 bg-[#0b0f14]/80 backdrop-blur border-b border-white/10">
// // //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// // //         <div className="text-xl font-bold text-white tracking-wide">
// // //           Scrap<span className="text-orange-500">Recycle</span>
// // //         </div>
// // //         <ul className="hidden md:flex gap-8 text-sm text-gray-300">
// // //           <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
// // //           <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
// // //           <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
// // //           <li><a href="#process" className="hover:text-orange-500 transition">Process</a></li>
// // //           <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
// // //         </ul>
// // //         <a
// // //           href="#contact"
// // //           className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
// // //         >
// // //           Get Quote
// // //         </a>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // // export default function News() {
// // //   return (
// // //     <div className="bg-[#0b0f14] text-gray-200 font-sans">
// // //       <Navbar />

// // //       {/* WhatsApp Floating Button */}
// // //       <a
// // //         href="https://wa.me/923001234567"
// // //         target="_blank"
// // //         rel="noreferrer"
// // //         className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
// // //       >
// // //         💬
// // //       </a>

// // //       {/* Hero */}
// // //       <section id="home" className="min-h-screen pt-24 flex items-center justify-center bg-gradient-to-b from-[#0b0f14] to-[#121826] px-6">
// // //         <motion.div
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           variants={fadeUp}
// // //           transition={{ duration: 0.6 }}
// // //           className="text-center max-w-4xl"
// // //         >
// // //           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
// // //             Scrap & Metal Recycling Solutions
// // //           </h1>
// // //           <p className="text-gray-400 mb-8 text-lg">
// // //             Professional, sustainable, and reliable scrap & metal recycling services.
// // //           </p>
// // //           <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition">
// // //             Get a Quote
// // //           </button>
// // //         </motion.div>
// // //       </section>

// // //       {/* About */}
// // //       <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
// // //         <motion.div
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           variants={fadeUp}
// // //           transition={{ duration: 0.6 }}
// // //           className="grid md:grid-cols-2 gap-12 items-center"
// // //         >
// // //           <div>
// // //             <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
// // //             <p className="text-gray-400 leading-relaxed">
// // //               We are a modern scrap and metal recycling company focused on efficiency,
// // //               transparency, and environmental responsibility.
// // //             </p>
// // //           </div>
// // //           <div className="bg-[#121826] p-8 rounded-xl shadow">
// // //             <ul className="space-y-4 text-gray-300">
// // //               <li>✔ Industrial Scrap Handling</li>
// // //               <li>✔ Eco-Friendly Recycling</li>
// // //               <li>✔ Competitive Market Rates</li>
// // //             </ul>
// // //           </div>
// // //         </motion.div>
// // //       </section>

// // //       {/* Services */}
// // //       <section id="services" className="py-20 bg-[#121826] px-6">
// // //         <div className="max-w-7xl mx-auto">
// // //           <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
// // //           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
// // //             {[
// // //               "Iron & Steel Scrap",
// // //               "Aluminum Recycling",
// // //               "Copper & Brass",
// // //               "Factory Dismantling",
// // //               "E-Waste Recycling",
// // //               "Bulk Scrap Pickup",
// // //             ].map((service, i) => (
// // //               <motion.div
// // //                 key={i}
// // //                 whileHover={{ scale: 1.05 }}
// // //                 className="bg-[#0b0f14] p-8 rounded-xl shadow hover:shadow-xl transition"
// // //               >
// // //                 <h3 className="text-xl font-semibold text-white mb-3">{service}</h3>
// // //                 <p className="text-gray-400">Safe, professional handling of {service.toLowerCase()}.</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Process */}
// // //       <section id="process" className="py-20 px-6 max-w-7xl mx-auto">
// // //         <h2 className="text-3xl font-bold text-white text-center mb-12">Our Recycling Process</h2>
// // //         <div className="grid md:grid-cols-4 gap-6 text-center">
// // //           {["Collection", "Sorting", "Processing", "Reuse"].map((step, i) => (
// // //             <motion.div
// // //               key={i}
// // //               initial="hidden"
// // //               whileInView="visible"
// // //               viewport={{ once: true }}
// // //               variants={fadeUp}
// // //               transition={{ delay: i * 0.1 }}
// // //               className="bg-[#121826] p-6 rounded-xl"
// // //             >
// // //               <div className="text-orange-500 text-3xl font-bold mb-3">{i + 1}</div>
// // //               <h3 className="text-white font-semibold mb-2">{step}</h3>
// // //               <p className="text-gray-400 text-sm">Efficient and responsible {step.toLowerCase()}.</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Gallery */}
// // //       <section className="py-20 bg-[#121826] px-6">
// // //         <h2 className="text-3xl font-bold text-white text-center mb-12">Gallery</h2>
// // //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
// // //           {[1,2,3,4,5,6].map(i => (
// // //             <div key={i} className="h-48 bg-[#0b0f14] rounded-xl flex items-center justify-center text-gray-500">
// // //               Image {i}
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </section>

// // //       {/* Contact */}
// // //       <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
// // //         <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>
// // //         <form className="bg-[#121826] p-8 rounded-xl space-y-6">
// // //           <input type="text" placeholder="Your Name" className="w-full bg-[#0b0f14] p-4 rounded text-gray-200" />
// // //           <input type="email" placeholder="Your Email" className="w-full bg-[#0b0f14] p-4 rounded text-gray-200" />
// // //           <textarea rows="4" placeholder="Your Message" className="w-full bg-[#0b0f14] p-4 rounded text-gray-200" />
// // //           <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold">Send Message</button>
// // //         </form>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="bg-[#0b0f14] py-6 text-center text-gray-500 text-sm">
// // //         © {new Date().getFullYear()} Scrap & Metal Recycling. All rights reserved.
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { FaWhatsapp, FaIndustry, FaRecycle, FaFire } from "react-icons/fa";

// // export default function News() {
// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: { opacity: 1, y: 0 },
// //   };

// //   return (
// //     <div className="bg-black text-gray-200 font-sans overflow-x-hidden">

// //       {/* ================= NAVBAR ================= */}
// //       <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur z-50 border-b border-gray-800">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// //           <h1 className="text-xl font-bold text-orange-500">
// //             RUKN AL TAWAR
// //           </h1>
// //           <ul className="hidden md:flex gap-8 text-sm">
// //             {["About", "Services", "Products", "Gallery", "Contact"].map((item) => (
// //               <li key={item} className="hover:text-orange-500 cursor-pointer">
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>
// //           <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded font-semibold">
// //             Get Quote
// //           </button>
// //         </div>
// //       </nav>

// //       {/* ================= HERO ================= */}
// //       <section className="min-h-screen flex items-center justify-center text-center px-6 pt-24">
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8 }}
// //           className="max-w-4xl"
// //         >
// //           <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
// //             Iron Melting & <span className="text-orange-500">Metal Recycling</span>
// //           </h2>
// //           <p className="text-gray-400 mb-8 text-lg">
// //             Professional waste treatment, scrap processing and sustainable metal recycling solutions.
// //           </p>
// //           <button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded text-lg font-semibold transition">
// //             Get a Free Quote
// //           </button>
// //         </motion.div>
// //       </section>

// //       {/* ================= ABOUT ================= */}
// //       <motion.section
// //         variants={fadeUp}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.6 }}
// //         className="max-w-7xl mx-auto px-6 py-20"
// //       >
// //         <h3 className="text-3xl font-bold mb-6 text-orange-500">About Us</h3>
// //         <p className="text-gray-400 leading-relaxed max-w-3xl">
// //           RUKN AL TAWAR WASTE TREATMENT LLC specializes in iron melting, scrap processing,
// //           and eco-friendly metal recycling. Our advanced industrial processes ensure
// //           maximum recovery with minimal environmental impact.
// //         </p>
// //       </motion.section>

// //       {/* ================= SERVICES ================= */}
// //       <section className="bg-gray-950 py-20">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <motion.h3
// //             variants={fadeUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             className="text-3xl font-bold mb-12 text-orange-500"
// //           >
// //             Our Services
// //           </motion.h3>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               { icon: <FaFire />, title: "Iron Melting" },
// //               { icon: <FaIndustry />, title: "Scrap Processing" },
// //               { icon: <FaRecycle />, title: "Metal Recycling" },
// //             ].map((s, i) => (
// //               <motion.div
// //                 key={i}
// //                 variants={fadeUp}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 whileHover={{ scale: 1.05 }}
// //                 className="bg-black border border-gray-800 p-8 rounded-lg text-center"
// //               >
// //                 <div className="text-orange-500 text-4xl mb-4 mx-auto">
// //                   {s.icon}
// //                 </div>
// //                 <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
// //                 <p className="text-gray-400 text-sm">
// //                   High-efficiency industrial solutions with strict quality control.
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= PRODUCTS ================= */}
// //       <motion.section
// //         variants={fadeUp}
// //         initial="hidden"
// //         whileInView="visible"
// //         className="max-w-7xl mx-auto px-6 py-20"
// //       >
// //         <h3 className="text-3xl font-bold mb-10 text-orange-500">Products</h3>
// //         <div className="grid md:grid-cols-4 gap-6">
// //           {["Iron Scrap", "Steel Scrap", "Aluminum", "Copper"].map((p, i) => (
// //             <div
// //               key={i}
// //               className="border border-gray-800 rounded-lg p-6 hover:border-orange-500 transition"
// //             >
// //               <h4 className="font-semibold text-lg">{p}</h4>
// //             </div>
// //           ))}
// //         </div>
// //       </motion.section>

// //       {/* ================= WHY CHOOSE US ================= */}
// //       <section className="bg-gray-950 py-20">
// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           className="max-w-7xl mx-auto px-6"
// //         >
// //           <h3 className="text-3xl font-bold mb-8 text-orange-500">
// //             Why Choose Us
// //           </h3>
// //           <ul className="grid md:grid-cols-3 gap-6 text-gray-400">
// //             <li>✔ Advanced industrial equipment</li>
// //             <li>✔ Environmentally responsible</li>
// //             <li>✔ Experienced technical team</li>
// //             <li>✔ High-quality output materials</li>
// //             <li>✔ Reliable & timely delivery</li>
// //             <li>✔ Competitive pricing</li>
// //           </ul>
// //         </motion.div>
// //       </section>

// //       {/* ================= GALLERY ================= */}
// //       <motion.section
// //         variants={fadeUp}
// //         initial="hidden"
// //         whileInView="visible"
// //         className="max-w-7xl mx-auto px-6 py-20"
// //       >
// //         <h3 className="text-3xl font-bold mb-10 text-orange-500">Gallery</h3>
// //         <div className="grid md:grid-cols-3 gap-6">
// //           {[1, 2, 3].map((i) => (
// //             <div
// //               key={i}
// //               className="h-48 bg-gray-800 rounded-lg hover:opacity-80 transition"
// //             />
// //           ))}
// //         </div>
// //       </motion.section>

// //       {/* ================= CONTACT ================= */}
// //       <motion.section
// //         variants={fadeUp}
// //         initial="hidden"
// //         whileInView="visible"
// //         className="bg-gray-950 py-20"
// //       >
// //         <div className="max-w-3xl mx-auto px-6">
// //           <h3 className="text-3xl font-bold mb-8 text-orange-500">
// //             Contact Us
// //           </h3>
// //           <form className="grid gap-4">
// //             <input className="bg-black border border-gray-700 p-3 rounded" placeholder="Name" />
// //             <input className="bg-black border border-gray-700 p-3 rounded" placeholder="Email" />
// //             <textarea className="bg-black border border-gray-700 p-3 rounded" placeholder="Message" />
// //             <button className="bg-orange-500 hover:bg-orange-600 text-black py-3 rounded font-semibold">
// //               Send Message
// //             </button>
// //           </form>
// //         </div>
// //       </motion.section>

// //       {/* ================= FOOTER ================= */}
// //       <footer className="bg-black border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
// //         © {new Date().getFullYear()} RUKN AL TAWAR WASTE TREATMENT LLC. All rights reserved.
// //       </footer>

// //       {/* ================= WHATSAPP FLOAT ================= */}
// //       <a
// //         href="https://wa.me/971000000000"
// //         target="_blank"
// //         rel="noreferrer"
// //         className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
// //       >
// //         <FaWhatsapp size={28} />
// //       </a>
// //     </div>
// //   );
// // }



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function App() {
//   const [page, setPage] = useState("home");
//   const whatsappNumber = "15551234567"; // change number

//   const pageAnimation = {
//     initial: { opacity: 0, y: 30 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen overflow-x-hidden">

//       {/* WhatsApp Floating Button */}
//       <a
//         href={`https://wa.me/${whatsappNumber}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition z-50"
//       >
//         <i className="fab fa-whatsapp"></i>
//       </a>

//       {/* Navbar */}
//       <nav className="sticky top-0 z-40 bg-gray-900 border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold">
//             <span className="text-teal-400">Metallix</span>
//             <span className="text-yellow-400">Scrap</span>
//           </h1>

//           <div className="hidden md:flex gap-8">
//             {["home", "about", "products", "gallery", "testimonials", "contact"].map(
//               (item) => (
//                 <button
//                   key={item}
//                   onClick={() => setPage(item)}
//                   className="capitalize hover:text-yellow-400 transition"
//                 >
//                   {item}
//                 </button>
//               )
//             )}
//           </div>
//         </div>
//       </nav>

//       {/* Page Content */}
//       <AnimatePresence mode="wait">
//         {page === "home" && (
//           <motion.section key="home" {...pageAnimation} className="px-6 py-24">
//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <h1 className="text-5xl font-extrabold mb-6">
//                   <span className="text-teal-400">Recycling Metals</span><br />
//                   Building a Sustainable Future
//                 </h1>
//                 <p className="text-gray-400 text-lg mb-8">
//                   Professional scrap metal recycling with eco-friendly industrial solutions.
//                 </p>
//                 <div className="flex gap-4">
//                   <button
//                     onClick={() => setPage("contact")}
//                     className="bg-teal-500 px-8 py-3 rounded-lg font-bold hover:bg-teal-600 transition"
//                   >
//                     Get Quote
//                   </button>
//                   <button
//                     onClick={() => setPage("about")}
//                     className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>

//               <motion.img
//                 src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f"
//                 alt="Scrap Metal"
//                 className="rounded-xl shadow-2xl"
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               />
//             </div>
//           </motion.section>
//         )}

//         {page === "about" && (
//           <motion.section key="about" {...pageAnimation} className="px-6 py-24 max-w-6xl mx-auto">
//             <h2 className="text-4xl font-bold mb-8 text-center">
//               About <span className="text-teal-400">Us</span>
//             </h2>
//             <p className="text-gray-400 text-lg text-center">
//               Metallix Scrap has 15+ years of experience in industrial metal recycling,
//               serving factories, construction companies, and individuals.
//             </p>
//           </motion.section>
//         )}

//         {page === "products" && (
//           <motion.section key="products" {...pageAnimation} className="px-6 py-24">
//             <h2 className="text-4xl font-bold text-center mb-12">
//               Our <span className="text-teal-400">Products</span>
//             </h2>

//             <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {["Iron", "Steel", "Copper", "Aluminum"].map((item) => (
//                 <motion.div
//                   key={item}
//                   whileHover={{ y: -10 }}
//                   className="bg-gray-800 rounded-xl p-6 shadow-lg"
//                 >
//                   <h3 className="text-2xl font-bold mb-4">{item} Scrap</h3>
//                   <p className="text-gray-400 mb-4">
//                     High-quality recycled {item.toLowerCase()} scrap materials.
//                   </p>
//                   <button
//                     onClick={() => setPage("contact")}
//                     className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-600 transition"
//                   >
//                     Inquire
//                   </button>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>
//         )}

//         {page === "gallery" && (
//           <motion.section key="gallery" {...pageAnimation} className="px-6 py-24">
//             <h2 className="text-4xl font-bold text-center mb-12">
//               Our <span className="text-teal-400">Gallery</span>
//             </h2>

//             <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
//               {[1, 2, 3, 4, 5, 6].map((i) => (
//                 <motion.img
//                   key={i}
//                   whileHover={{ scale: 1.05 }}
//                   src={`https://source.unsplash.com/600x400/?scrap,metal,${i}`}
//                   className="rounded-xl cursor-pointer"
//                 />
//               ))}
//             </div>
//           </motion.section>
//         )}

//         {page === "testimonials" && (
//           <motion.section key="testimonials" {...pageAnimation} className="px-6 py-24 max-w-6xl mx-auto">
//             <h2 className="text-4xl font-bold text-center mb-12">
//               Client <span className="text-teal-400">Testimonials</span>
//             </h2>

//             <div className="grid md:grid-cols-3 gap-8">
//               {["Reliable service!", "Best scrap prices!", "Professional team!"].map(
//                 (text, i) => (
//                   <motion.div
//                     key={i}
//                     whileHover={{ y: -8 }}
//                     className="bg-gray-800 p-6 rounded-xl shadow-lg"
//                   >
//                     <p className="italic text-gray-300">"{text}"</p>
//                   </motion.div>
//                 )
//               )}
//             </div>
//           </motion.section>
//         )}

//         {page === "contact" && (
//           <motion.section key="contact" {...pageAnimation} className="px-6 py-24 max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold text-center mb-12">
//               Contact <span className="text-teal-400">Us</span>
//             </h2>

//             <form className="bg-gray-800 p-8 rounded-xl space-y-6">
//               <input className="w-full p-4 rounded bg-gray-700" placeholder="Your Name" />
//               <input className="w-full p-4 rounded bg-gray-700" placeholder="Email" />
//               <textarea className="w-full p-4 rounded bg-gray-700" rows="4" placeholder="Message" />
//               <button className="w-full bg-teal-500 py-3 rounded font-bold hover:bg-teal-600 transition">
//                 Send Message
//               </button>
//             </form>
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }











// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faRecycle, faBars, faIndustry, faTruckLoading, faWeight, 
//   faLeaf, faBullseye, faEye, faBolt, faCarBattery, 
//   faMicrochip, faTint, faStar, faStarHalfAlt, 
//   faMapMarkerAlt, faPhoneAlt, faEnvelope, faMapMarkedAlt,
//   faArrowRight, faFacebookF, faTwitter, faLinkedinIn, 
//   faInstagram, faPaperPlane, faWhatsapp
// } from '@fortawesome/free-solid-svg-icons';
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';


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
    faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

// Import regular star icon
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// Import brand icons - IMPORTANT: These are from free-brands-svg-icons
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';


const News = () => {
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

    const observerRef = useRef(null);

    useEffect(() => {
        // Intersection Observer for animations
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

        // Observe elements
        document.querySelectorAll('.card-hover, .testimonial-card').forEach(el => {
            if (observerRef.current) observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

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
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$180 - $320/ton",
            status: "In Stock"
        },
        {
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$180 - $320/ton",
            status: "In Stock"
        },
        {
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$180 - $320/ton",
            status: "In Stock"
        },
        {
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$180 - $320/ton",
            status: "In Stock"
        },
        {
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$180 - $320/ton",
            status: "In Stock"
        },
        {
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$180 - $320/ton",
            status: "In Stock"
        },
        {
            name: "Steel Scrap",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            price: "$180 - $320/ton",
            status: "In Stock"
        },
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

    return (
        <div className="text-gray-100" style={{
            backgroundColor: '#111827',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif"
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
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </div>

            {/* Navigation */}
            <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg">
                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="bg-teal-600 p-2 rounded-lg mr-3">
                                <FontAwesomeIcon icon={faRecycle} className="text-2xl" />
                            </div>
                            <div className="text-2xl font-bold">
                                <span className="text-teal-600">Metallix</span>
                                <span className="text-yellow-500">Scrap</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {['home', 'about', 'products', 'gallery', 'testimonials', 'contact'].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className="text-lg font-medium nav-link relative"
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

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-2xl"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ background: 'none', border: 'none', color: 'inherit' }}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`md:hidden mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
                        style={{
                            maxHeight: mobileMenuOpen ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'max-height 0.5s ease'
                        }}
                    >
                        <div className="flex flex-col space-y-4 py-4 border-t border-gray-700">
                            {['home', 'about', 'products', 'gallery', 'testimonials', 'contact'].map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className="py-2 text-lg text-left"
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
                            style={{ background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.15) 0%, rgba(15, 118, 110, 0.1) 100%)' }}>
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
                                        <p className="text-xl mb-8 text-gray-300">
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
                                                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
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
                                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                                            className="bg-gray-800 rounded-xl p-8 card-hover"
                                            style={{
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                            }}
                                        >
                                            <div className="bg-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                                <FontAwesomeIcon icon={service.icon} className="text-2xl" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                            <p className="text-gray-400 mb-6">{service.description}</p>
                                            <button
                                                onClick={() => handlePageChange(service.link)}
                                                className="text-yellow-500 font-semibold flex items-center"
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
                        <div className="bg-gradient-to-r from-teal-600 to-teal-700 section-padding" style={{ padding: '5rem 0' }}>
                            <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                                <div className="text-center">
                                    <h2 className="text-4xl font-bold mb-6">Ready to Recycle Your Scrap Metal?</h2>
                                    <p className="text-xl mb-8 max-w-3xl mx-auto">
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
                                    <p className="text-lg mb-4">
                                        <strong>Metallix Scrap</strong> has been a leader in the metal recycling industry for over 15 years. We specialize in processing and recycling various types of metals including iron, steel, copper, and aluminum.
                                    </p>
                                    <p className="text-lg mb-4">
                                        Our state-of-the-art facility is equipped with advanced sorting and processing technology, allowing us to handle large volumes of scrap metal efficiently and responsibly.
                                    </p>
                                    <p className="text-lg">
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
                                    className="bg-gray-800 rounded-xl p-8 card-hover"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                            <FontAwesomeIcon icon={faBullseye} className="text-2xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Our Mission</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        To revolutionize metal recycling through innovative technology and sustainable practices, reducing environmental impact while providing exceptional value to our customers.
                                    </p>
                                </motion.div>

                                {/* Vision */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="bg-gray-800 rounded-xl p-8 card-hover"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                            <FontAwesomeIcon icon={faEye} className="text-2xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Our Vision</h3>
                                    </div>
                                    <p className="text-gray-400">
                                        To become the leading provider of metal recycling solutions, setting industry standards for sustainability, technology, and customer service.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Experience */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8"
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
                                    <p className="text-lg text-center">
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
                            <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
                                We offer a diverse range of meticulously processed metal scrap, ready to fuel the manufacturing needs of diverse industries </p>



                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {products.map((product, index) => (
                                    <div
                                        key={index}
                                        className="relative h-[280px] rounded-xl overflow-hidden group"
                                    >
                                        {/* Background Image with stronger zoom */}
                                        <div
                                            className="absolute inset-0 bg-cover bg-center 
                   transition-transform duration-700 ease-in-out
                   group-hover:scale-125"
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
                                            </p>
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
                            <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
                                Take a look at our operations, facility, and recycling processes.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {galleryImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-xl gallery-img cursor-pointer"
                                        onClick={() => openLightbox(image.fullSrc)}
                                        style={{ transition: 'transform 0.5s ease' }}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.title}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex items-end p-6">
                                            <h3 className="text-xl font-bold">{image.title}</h3>
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
                            <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
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
                                            background: 'linear-gradient(145deg, #1f2937, #111827)',
                                            boxShadow: '10px 10px 20px #0a0f1a, -10px -10px 20px #182235'
                                        }}
                                    >
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                                                <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                                <p className="text-gray-400">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="flex">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>
                                        <p className="text-gray-300 italic">{testimonial.text}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* More testimonials */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    className="bg-gray-800 rounded-xl p-8"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">Lisa Thompson</h3>
                                            <p className="text-gray-400">Warehouse Manager</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
                                        "Metallix Scrap helped us clear out years of accumulated metal waste from our warehouse. Their team was efficient, and we were impressed with their safety protocols."
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    className="bg-gray-800 rounded-xl p-8"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">David Wilson</h3>
                                            <p className="text-gray-400">Demolition Contractor</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-300">
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
                            <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
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
                                                    className="contact-input w-full p-4 rounded-lg"
                                                    style={{
                                                        backgroundColor: '#1f2937',
                                                        border: '1px solid #374151',
                                                        transition: 'border 0.3s ease'
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
                                                    className="contact-input w-full p-4 rounded-lg"
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
                                                className="contact-input w-full p-4 rounded-lg"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block mb-2 font-medium">Your Message *</label>
                                            <textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows="5"
                                                className="contact-input w-full p-4 rounded-lg"
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
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Our Address</h3>
                                                <p className="text-gray-400">123 Industrial Parkway<br />Metropolis, MP 12345</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faPhoneAlt} className="text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                                                <p className="text-gray-400">+1 (555) 123-4567<br />Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-teal-600 p-3 rounded-lg mr-4">
                                                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">Email Address</h3>
                                                <p className="text-gray-400">info@metallixscrap.com<br />sales@metallixscrap.com</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map Placeholder */}
                                    <div className="bg-gray-800 rounded-xl overflow-hidden h-64">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-center">
                                                <FontAwesomeIcon icon={faMapMarkedAlt} className="text-4xl text-teal-600 mb-4" />
                                                <p className="text-gray-400">Metallix Scrap Facility Location</p>
                                                <p className="text-sm text-gray-500 mt-2">Map integration would go here</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="mt-8 bg-gray-800 rounded-xl p-6">
                                        <h3 className="text-xl font-bold mb-4 text-yellow-500">Business Hours</h3>
                                        <div className="space-y-2">
                                            <div className="flex justify-between">
                                                <span>Monday - Friday</span>
                                                <span className="font-semibold">8:00 AM - 6:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Saturday</span>
                                                <span className="font-semibold">9:00 AM - 2:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Sunday</span>
                                                <span className="font-semibold">Closed</span>
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
            <footer className="bg-gray-900 pt-12 pb-8">
                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Company Info */}
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="bg-teal-600 p-2 rounded-lg mr-3">
                                    <FontAwesomeIcon icon={faRecycle} className="text-2xl" />
                                </div>
                                <div className="text-2xl font-bold">
                                    <span className="text-teal-600">Metallix</span>
                                    <span className="text-yellow-500">Scrap</span>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-6">
                                Leading metal recycling company with 15+ years of experience. Committed to sustainable practices and customer satisfaction.
                            </p>
                            <div className="flex space-x-4">
                                {[faFacebookF, faTwitter, faLinkedinIn, faInstagram].map((icon, index) => (
                                    <button
                                        key={index}
                                        className="bg-gray-800 hover:bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                                        style={{ border: 'none', cursor: 'pointer' }}
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
                                            className="text-gray-400 hover:text-teal-600 transition duration-300 text-left"
                                            style={{ background: 'none', border: 'none', cursor: 'pointer', textTransform: 'capitalize' }}
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
                                <li className="text-gray-400">Industrial Scrap Recycling</li>
                                <li className="text-gray-400">Pickup Services</li>
                                <li className="text-gray-400">Metal Processing</li>
                                <li className="text-gray-400">E-Waste Recycling</li>
                                <li className="text-gray-400">Scrap Metal Trading</li>
                                <li className="text-gray-400">Consultation Services</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-yellow-500">Newsletter</h3>
                            <p className="text-gray-400 mb-4">Subscribe to get updates on pricing and recycling tips.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="contact-input flex-grow p-3 rounded-l-lg"
                                    style={{
                                        backgroundColor: '#1f2937',
                                        border: '1px solid #374151'
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
                    <div className="pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-500">© 2023 Metallix Scrap. All rights reserved. | Designed for Metal Recycling Business</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default News;