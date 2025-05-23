export default function ContactUs() {
    return (
      <div className="relative overflow-hidden bg-black text-white p-10 rounded-xl">

        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
            maskImage: 'linear-gradient(to bottom right, black 40%, transparent 65%)',
            WebkitMaskImage: 'linear-gradient(to bottom right, black 40%, transparent 65%)'
          }}
        />
        

        <div 
          className="absolute right-0 bottom-0 w-1/2 h-1/2 pointer-events-none blur-[1px]"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
          }}
        />
  
        <div className="relative z-10">
          <h1 className="text-4xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-400">
            Contact Us
          </h1>
          <p className="text-gray-400 mb-8 max-w-lg">
            Have questions or want to discuss a project? Reach out to our team and we'll get back to you within 24 hours.
          </p>
  
          <div className="space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="bg-gray-900 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="bg-gray-900 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="bg-gray-900 text-white px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-gradient-to-r from-green-400 to-cyan-500 text-black px-6 py-3 rounded-full hover:opacity-90 transition font-medium">
              Send Message
            </button>
          </div>
  
          <div className="mt-12 pt-6 border-t border-gray-800">
            <p className="text-gray-400 italic mb-2">
              "Arctic cut project delays by 30% and transformed our global team communication, saving us hours every week."
            </p>
            <p className="text-gray-500">— ebay</p>
          </div>
        </div>
      </div>
    );
  }