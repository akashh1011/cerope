// import React from "react";
// import ceropeLogo from "../../assets/cerope_logo.png";

// const Footer = () => {
//   return (
//     <footer className="bg-[#050608] text-white mt-10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 space-y-10">
//         {/* Top section: Brand + links */}
//         <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
//           {/* Brand block */}
//           <div className="md:flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
//             {/* Sirf logo + brand name, koi circle/border nahi */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={ceropeLogo}
//                 alt="Cerope logo"
//                 className="w-20 h-auto object-contain" // thoda bada logo
//               />
//               <h2 className="text-4xl font-semibold tracking-tight">Cerope</h2>
//             </div>

//             <p className="text-base text-gray-300 max-w-md leading-relaxed">
//               Revolutionizing fashion with AI-powered styling solutions.
//             </p>
//           </div>

//           {/* Links block */}
//           <div className="flex-1">
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-sm">
//               {/* Quick Links */}
//               <div className="space-y-2">
//                 <h4 className="font-medium text-base mb-1">Quick Links</h4>
//                 <div className="space-y-1 text-gray-300">
//                   <a href="#" className="block hover:text-white">Home</a>
//                   <a href="#" className="block hover:text-white">Contact Us</a>
//                   <a href="#" className="block hover:text-white">About</a>
//                   <a href="#" className="block hover:text-white">Features</a>
//                   <a href="#" className="block hover:text-white">FAQ&apos;s</a>
//                 </div>
//               </div>

//               {/* Products */}
//               <div className="space-y-2">
//                 <h4 className="font-medium text-base mb-1">Products</h4>
//                 <div className="space-y-1 text-gray-300">
//                   <a href="#" className="block hover:text-white">User Styling</a>
//                   <a href="#" className="block hover:text-white">~ Launching Soon</a>
//                   <a href="#" className="block hover:text-white">Price Comparison</a>
//                   <a href="#" className="block hover:text-white">Creator Space</a>
//                 </div>
//               </div>

//               {/* Policies */}
//               <div className="space-y-2">
//                 <h4 className="font-medium text-base mb-1">Policies</h4>
//                 <div className="space-y-1 text-gray-300">
//                   <a href="#" className="block hover:text-white">Privacy Policy</a>
//                   <a href="#" className="block hover:text-white">Copyright Policy</a>
//                   <a href="#" className="block hover:text-white">Cookie Policy</a>
//                   <a href="#" className="block hover:text-white">Terms and Conditions</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom line */}
//         <div className="border-t border-gray-700 pt-4 text-[11px] sm:text-xs text-gray-400 text-center md:text-left">
//           © 2025 Cerope. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import ceropeLogo from "../../assets/cerope_logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#050608] text-white mt-10 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-10">
        {/* Top section: Brand + links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-10">
          {/* Brand block */}
          <div className="md:flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3 sm:gap-4">
            {/* Logo + brand name */}
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={ceropeLogo}
                alt="Cerope logo"
                className="w-16 sm:w-20 h-auto object-contain"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Cerope
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-300 max-w-md leading-relaxed">
              Revolutionizing fashion with AI-powered styling solutions.
            </p>
          </div>

          {/* Links block */}
          <div className="flex-1 w-full">
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-sm">
              {/* Quick Links */}
              <div className="space-y-2">
                <h4 className="font-medium text-base mb-1">Quick Links</h4>
                <div className="space-y-1 text-gray-300">
                  <a href="#" className="block hover:text-white transition-colors">
                    Home
                  </a>
                  <a href="#" className="block hover:text-white transition-colors">
                    Contact Us
                  </a>
                  <a href="#" className="block hover:text-white transition-colors">
                    About
                  </a>
                  <a href="#" className="block hover:text-white transition-colors">
                    Features
                  </a>
                  <a href="#" className="block hover:text-white transition-colors">
                    FAQ&apos;s
                  </a>
                </div>
              </div>

              {/* Products */}
              <div className="space-y-2">
                <h4 className="font-medium text-base mb-1">Products</h4>
                <div className="space-y-1 text-gray-300">
                  <a href="#" className="block hover:text-white transition-colors">
                    User Styling
                  </a>
                  <span className="block text-gray-400">
                    ~ Launching Soon
                  </span>
                  <a href="#" className="block hover:text-white transition-colors">
                    Price Comparison
                  </a>
                  <a href="#" className="block hover:text-white transition-colors">
                    Creator Space
                  </a>
                </div>
              </div>

              {/* Policies */}
              <div className="space-y-2">
                <h4 className="font-medium text-base mb-1">Policies</h4>
                <div className="space-y-1 text-gray-300">
                  <a href="#" className="block hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="block hover:text-white transition-colors">
                    Copyright Policy
                  </a>
                  <a href="#" className="block hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                  <a href="#" className="block hover:text-white transition-colors">
                    Terms and Conditions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 pt-4 text-[10px] sm:text-xs text-gray-400 text-center md:text-left">
          © 2025 Cerope. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
