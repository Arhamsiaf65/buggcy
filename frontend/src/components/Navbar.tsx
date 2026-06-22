import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="https://www.buggcy.com/static/media/white-logo.542762a5ba42422168d4.png" 
            alt="Buggcy Logo" 
            className="h-10"
          />
        </a>

        <div className="hidden md:flex items-center gap-10 font-sans text-sm font-semibold tracking-wide">
          <a href="#services" className="text-foreground/90 hover:text-emerald transition-colors">Services</a>
          <a href="#industries" className="text-foreground/90 hover:text-emerald transition-colors">Industries</a>
          <a href="#work" className="text-foreground/90 hover:text-emerald transition-colors">Work</a>
          <a href="#about" className="text-foreground/90 hover:text-emerald transition-colors">About</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex items-center gap-2 bg-primary text-white font-bold px-7 py-3 rounded-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          Let's Talk
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </nav>
  )
}
