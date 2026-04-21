import { motion } from 'motion/react';
import { MapPin, Bus, Car } from 'lucide-react';

export default function Venue() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-32 px-8 max-w-screen-xl mx-auto"
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-primary">개최장소</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">서울의 중심, 코엑스에서 펼쳐지는 혁신</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-3xl overflow-hidden h-[400px] shadow-2xl relative border border-primary/10">
            <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200" alt="COEX" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <MapPin className="text-primary" />
                코엑스(COEX) 2층 컨퍼런스 룸
              </h3>
              <p className="text-on-surface-variant">서울특별시 강남구 영동대로 513</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-surface rounded-2xl border border-primary/10 space-y-3">
              <h4 className="font-bold flex items-center gap-2 text-primary">
                <Bus className="w-5 h-5" />
                대중교통
              </h4>
              <p className="text-sm text-on-surface-variant">2호선 삼성역 5, 6번 출구 연결<br />9호선 봉은사역 7번 출구 연결</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-primary/10 space-y-3">
              <h4 className="font-bold flex items-center gap-2 text-primary">
                <Car className="w-5 h-5" />
                주차 안내
              </h4>
              <p className="text-sm text-on-surface-variant">코엑스 지하 주차장 이용 가능<br />(행사 참가자 대상 50% 할인권 제공)</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
