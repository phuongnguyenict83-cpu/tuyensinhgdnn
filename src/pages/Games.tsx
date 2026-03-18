import { motion } from 'framer-motion';
import { Gamepad2, Puzzle, Paintbrush, Brain } from 'lucide-react';

const games = [
  {
    id: 'dino-run',
    title: 'Khủng long chạy bộ',
    category: 'Hành động',
    icon: Gamepad2,
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1569993358057-7977a481e18c?auto=format&fit=crop&q=80&w=600',
    description: 'Giúp T-Rex vượt qua các chướng ngại vật trong rừng rậm!',
  },
  {
    id: 'dino-puzzle',
    title: 'Ghép hình xương khủng long',
    category: 'Trí tuệ',
    icon: Puzzle,
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1596743344697-e81050853589?auto=format&fit=crop&q=80&w=600',
    description: 'Trở thành nhà khảo cổ học và ghép các mảnh xương lại với nhau.',
  },
  {
    id: 'dino-paint',
    title: 'Tô màu khủng long',
    category: 'Sáng tạo',
    icon: Paintbrush,
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34f5?auto=format&fit=crop&q=80&w=600',
    description: 'Thỏa sức sáng tạo với những bức tranh khủng long đầy màu sắc.',
  },
  {
    id: 'dino-quiz',
    title: 'Đố vui khủng long',
    category: 'Học tập',
    icon: Brain,
    color: 'bg-amber-500',
    image: 'https://images.unsplash.com/photo-1569993358057-7977a481e18c?auto=format&fit=crop&q=80&w=600',
    description: 'Kiểm tra kiến thức của bạn về thế giới khủng long.',
  },
];

export default function Games() {
  return (
    <div className="min-h-screen bg-amber-50 pb-16">
      <div className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display text-amber-300 mb-4 drop-shadow-md"
          >
            Trò Chơi Khủng Long
          </motion.h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-medium">
            Vừa học vừa chơi với những trò chơi tương tác thú vị về thế giới khủng long!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-amber-100 hover:border-amber-300 transition-colors group cursor-pointer"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className={`absolute top-4 left-4 ${game.color} text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2 shadow-md`}>
                    <Icon className="w-4 h-4" />
                    {game.category}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-display text-stone-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-stone-600 mb-6 text-lg">
                    {game.description}
                  </p>
                  <button className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-lg px-6 py-4 rounded-2xl shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2">
                    <Gamepad2 className="w-6 h-6" />
                    Chơi ngay
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
