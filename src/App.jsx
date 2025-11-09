import Header from './components/Header';
import Hero from './components/Hero';
import Rankings from './components/Rankings';
import LiveStream from './components/LiveStream';
import ScheduleHighlights from './components/ScheduleHighlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter','IBM Plex Sans','Manrope',sans-serif] text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <Rankings />
        <LiveStream />
        <ScheduleHighlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;
