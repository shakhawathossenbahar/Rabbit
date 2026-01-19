import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">
              Be the first to hear about new products, exclusive events, and
              online offers.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Sign up and get 10% off your first order.
            </p>

            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-2 rounded-l-md text-sm focus:outline-none"
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md text-sm hover:bg-gray-800">
                Subscribe
              </button>
            </form>
          </div>

          {/* SHOP LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">
                <Link to={"#"}>Men's Top Wear</Link>
              </li>
              <li className="hover:text-black cursor-pointer">
                <Link to={"#"}>Women's Top Wear</Link>
              </li>
              <li className="hover:text-black cursor-pointer">
                <Link to={"#"}>Men's Bottom Wear</Link>
              </li>
              <li className="hover:text-black cursor-pointer">
                <Link to={"#"}>Women's Bottom Wear</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">Contact Us</li>
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">FAQs</li>
              <li className="hover:text-black cursor-pointer">Features</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6 text-gray-600">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:text-black" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-black" />
              </a>

              <a
                href="https://www.x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="cursor-pointer hover:text-black" />
              </a>
            </div>

            <h4 className="mt-5 text-sm text-gray-500 mb-1 hover:text-black">
              Call Us
            </h4>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <FaPhoneAlt></FaPhoneAlt>
              <span className="font-semibold hover:text-black">
                0123-456-789
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © 2024, CompileTab. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
