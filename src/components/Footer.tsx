function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Logo */}
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-bold text-gray-800">
              SomeCompany
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="/about" className="hover:text-gray-900">
              About
            </a>
            <a href="/blog" className="hover:text-gray-900">
              Blog
            </a>
            <a href="/team" className="hover:text-gray-900">
              Team
            </a>
            <a href="/pricing" className="hover:text-gray-900">
              Pricing
            </a>
            <a href="/contact" className="hover:text-gray-900">
              Contact
            </a>
            <a href="/terms" className="hover:text-gray-900">
              Terms
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
