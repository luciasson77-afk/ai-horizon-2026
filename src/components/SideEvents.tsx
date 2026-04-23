import { motion } from 'motion/react';
import { Utensils, Coffee, Presentation, MapPin, Calendar } from 'lucide-react';

const sideEvents = [
  {
    date: '12월 1일 (화)',
    title: '공식 오찬 (Official Luncheon)',
    location: '코엑스 그랜드 볼룸 (COEX Grand Ballroom)',
    icon: <Utensils className="w-6 h-6" />,
    type: '오찬',
    desc: '컨퍼런스 첫날, 주요 귀빈 및 참가자들을 위한 공식 오찬 행사가 진행됩니다.'
  },
  {
    date: '12월 3일 (목)',
    title: '네트워킹 만찬 (Networking Dinner)',
    location: '코엑스 그랜드 볼룸 (COEX Grand Ballroom)',
    icon: <Utensils className="w-6 h-6" />,
    type: '만찬',
    desc: '컨퍼런스의 대미를 장식하는 만찬 행사로, 글로벌 리더들과의 심도 깊은 네트워킹 기회를 제공합니다.'
  },
  {
    date: '12월 1일 ~ 3일',
    title: 'AI 기술 혁신 전시회 (AI Tech Exhibition)',
    location: '1층 전시장 1홀 (1F Exhibition Hall 1)',
    icon: <Presentation className="w-6 h-6" />,
    type: '전시회',
    desc: '최첨단 AI 기술과 혁신적인 솔루션들을 직접 경험할 수 있는 전시 공간입니다.'
  }
];

export default function SideEvents() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 px-8 max-w-screen-xl mx-auto min-h-screen"
    >
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-primary">부대행사</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">메인 프로그램과 함께 즐기는 다채로운 네트워킹과 전시</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sideEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {event.icon}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/5 flex items-start gap-2 text-on-surface-variant">
                <MapPin className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span className="font-medium">{event.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
