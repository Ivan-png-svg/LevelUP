import { Outlet, ScrollRestoration } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AIChatBot } from '../components/AIChatBot';

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollRestoration />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
}
