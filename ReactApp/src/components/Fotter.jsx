export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 px-6 py-10 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold mb-2">MOTORCYCLES</h4>
          <ul className="space-y-1">
            <li>ADVENTURE</li>
            <li>CLASSIC</li>
            <li>ROADSTERS</li>
            <li>ROCKET-3</li>
            <li>SPORT</li>
            <li>REVIEWS</li>
            <li>OFFERS</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold mb-2">GET STARTED</h4>
          <ul className="space-y-1">
            <li>CONFIGURE</li>
            <li>BOOK NOW</li>
            <li>FIND A DEALER</li>
            <li>ENQUIRE NOW</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold mb-2">FOR THE RIDE</h4>
          <ul className="space-y-1">
            <li>LATEST NEWS</li>
            <li>FACTORY VISITOR EXPERIENCE</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold mb-2">OWNERS</h4>
          <ul className="space-y-1">
            <li>MY TRIUMPH APP</li>
            <li>WHAT3WORDS</li>
            <li>YOUR TRIUMPH</li>
          </ul>
        </div>
      </div>

      {/* Social & Bottom Links */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-black pt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-black hover:text-gray-500">📘</a>
          <a href="#" className="text-black hover:text-gray-500">❌</a>
          <a href="#" className="text-black hover:text-gray-500">▶️</a>
          <a href="#" className="text-black hover:text-gray-500">💬</a>
        </div>
        <div className="flex space-x-6 text-xs">
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">CSR Policy</a>
        </div>
        <div className="text-xs text-gray-500 mt-2 md:mt-0">
          © 2025 Triumph Motorcycles
        </div>
      </div>
    </footer>
  );
}
