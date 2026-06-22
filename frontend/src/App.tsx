import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StatsBar from "./components/StatsBar"

function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <StatsBar />
      </main>
      
      {/* Footer / Other sections would go here */}
    </div>
  )
}

export default App
