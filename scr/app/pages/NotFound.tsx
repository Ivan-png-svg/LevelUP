import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold text-foreground mt-4 mb-2">
            Сторінку не знайдено
          </h2>
          <p className="text-foreground/70">
            Вибачте, але сторінка, яку ви шукаєте, не існує.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium inline-flex items-center gap-2 hover:shadow-lg transition-all"
          >
            <Home className="w-5 h-5" />
            На головну
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-medium inline-flex items-center gap-2 hover:bg-primary/5 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </button>
        </div>
      </motion.div>
    </div>
  );
}
