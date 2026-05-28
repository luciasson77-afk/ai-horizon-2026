import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Bus, Car, Building, Train, Maximize2, X } from 'lucide-react';

interface SpaceInfo {
  id: string;
  name: string;
  englishName: string;
  image: string;
  capacity: string;
  purpose: string;
  details: string;
}

export default function Venue() {
  const [activeTab, setActiveTab] = useState<string>('hall1');
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);
  const [mapTab, setMapTab] = useState<'location' | 'floor'>('location');

  const spaces: SpaceInfo[] = [
    {
      id: 'hall1',
      name: '코엑스 전시장 1홀',
      englishName: 'COEX Exhibition Hall 1',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      capacity: '150+ 개사 부스, 20,000+ 명 참관 규모',
      purpose: '메인 기술 혁신 전시회, AI 하드웨어/소프트웨어 데모, 메인 스테이지',
      details: '인공지능 핵심 도메인별 전시 부스가 구성되는 본 행사의 메인 허브 공간입니다. 국내외 탑티어 테크 대기업부터 혁신 스타트업까지 한자리에서 교류할 수 있으며, 전시장 내부에 신기술 IR 데모 무대가 함께 상설 운영됩니다.'
    },
    {
      id: 'grandballroom',
      name: '그랜드 볼룸',
      englishName: 'Grand Ballroom',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
      capacity: '최대 1,500석 규모의 대형 컨퍼런스 홀',
      purpose: '오프닝 세레모니, 메인 키노트 세션, AI 트렌드 리더 초청 강연',
      details: '글로벌 석학 및 IT 리더들의 기조연설이 펼쳐지는 초대형 컨퍼런스 홀입니다. 최첨단 대화면 LED 월과 다차원 몰입형 사운드 시스템을 장착하여 참가자들에게 극도의 지적 전율을 선사하는 메인 세션이 진행됩니다.'
    },
    {
      id: 'auditorium',
      name: '오디토리움',
      englishName: 'Auditorium',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=1200',
      capacity: '좌석 수 1,058석 규모의 계단식 전문 극장',
      purpose: '글로벌 AI 정책 서밋, 메인 패널 토론, 혁신 스타트업 어워드',
      details: '무대 주목도가 매우 뛰어난 계단식 구조의 프리미엄 극장식 홀입니다. 최적의 시각적 선명도와 입체 오디오를 구성하여 강연자의 호흡 하나까지 밀도 있게 전달하며, 한-영 동시통역과 다자간 패널 토크에 특화되어 있습니다.'
    },
    {
      id: 'conference',
      name: '2층 컨퍼런스 룸',
      englishName: 'Conference Room 2F',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200',
      capacity: '개별 룸당 50 ~ 200석 규모의 분과실 다수',
      purpose: '세부 트랙 기술 세션, 1:1 VC 비즈니스 매칭 테이블, 프라이빗 워크숍',
      details: '분과별 심층 기술 강의와 핸즈온 세션, 그리고 글로벌 바이어와의 1:1 프라이빗 비즈니스 매칭이 다발적으로 이루어지는 실무 세미나 공간입니다. 차분하고 격조 높은 비즈니스 네트워킹을 위한 라운지가 함께 운영됩니다.'
    }
  ];

  const currentSpace = spaces.find(space => space.id === activeTab) || spaces[0];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-24 px-4 md:px-8 max-w-screen-2xl mx-auto space-y-20 relative"
    >
      {/* Background Nebula Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] nebula-gradient -z-10 pointer-events-none rounded-full blur-[80px]" />

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-block px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-[0.2em] uppercase font-headline">
          VENUE & SPACES
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-primary text-glow">
          개최장소
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          글로벌 IT의 메카, 서울 코엑스(COEX)에서 다채롭게 펼쳐지는 차세대 AI 컨퍼런스
        </p>
      </div>

      {/* 1. Spaces Gallery Section */}
      <div className="space-y-10 max-w-screen-xl mx-auto">
        <div className="text-center md:text-left space-y-2 border-b border-primary/10 pb-4">
          <h2 className="text-2xl md:text-3xl font-headline font-bold flex items-center justify-center md:justify-start gap-2">
            <Building className="text-primary w-6 h-6" /> 주요 행사장 안내
          </h2>
          <p className="text-sm text-on-surface-variant">행사가 진행되는 부문별 핵심 공간 정보입니다.</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-surface/50 border border-primary/10 rounded-2xl max-w-3xl mx-auto md:mx-0 shadow-lg">
          {spaces.map((space) => (
            <button
              key={space.id}
              onClick={() => setActiveTab(space.id)}
              className={`flex-1 min-w-[140px] px-5 py-3.5 rounded-xl font-bold transition-all text-sm font-headline cursor-pointer ${
                activeTab === space.id
                  ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary shadow-md shadow-primary/20 scale-[1.02]'
                  : 'bg-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/40'
              }`}
            >
              {space.name}
            </button>
          ))}
        </div>

        {/* Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-surface/40 backdrop-blur-xl border border-primary/10 rounded-3xl overflow-hidden p-6 md:p-8 shadow-xl"
          >
            {/* Image Box */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden h-[300px] md:h-[450px] relative group border border-primary/5">
              <img 
                src={currentSpace.image} 
                alt={currentSpace.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-primary tracking-wider uppercase font-headline">
                  {currentSpace.englishName}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-on-surface mt-1">
                  {currentSpace.name}
                </h3>
              </div>
            </div>

            {/* Info Box */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider">주요 목적 및 기능</div>
                  <h4 className="text-lg md:text-xl font-bold text-on-surface leading-snug">
                    {currentSpace.purpose}
                  </h4>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider">수용 및 운영 규모</div>
                  <p className="text-base text-on-surface font-semibold">
                    {currentSpace.capacity}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider">상세 안내</div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {currentSpace.details}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-primary/5">
                <div className="flex items-center gap-2.5 text-xs text-on-surface-variant bg-surface-variant/20 p-4 rounded-xl border border-primary/5">
                  <MapPin className="text-primary w-4 h-4 shrink-0" />
                  <span>해당 행사장 구역별 세부 부스 위치는 아래 **행사장 지도**를 확인하십시오.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Directions & Floor Map Section */}
      <div className="space-y-10 max-w-screen-xl mx-auto">
        <div className="text-center md:text-left space-y-2 border-b border-primary/10 pb-4">
          <h2 className="text-2xl md:text-3xl font-headline font-bold flex items-center justify-center md:justify-start gap-2">
            <MapPin className="text-primary w-6 h-6" /> 오시는 길 & 행사장 지도
          </h2>
          <p className="text-sm text-on-surface-variant">코엑스 오시는 길 안내와 전시장 내부 약도 정보입니다.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Floor Map Frame */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl border border-primary/10 glass-card p-4 shadow-2xl space-y-4">
              {/* Map Toggle Buttons */}
              <div className="flex gap-2 p-1 bg-surface-variant/30 rounded-xl border border-primary/5 max-w-[280px]">
                <button
                  onClick={() => setMapTab('location')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer font-headline ${
                    mapTab === 'location'
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  코엑스 위치
                </button>
                <button
                  onClick={() => setMapTab('floor')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer font-headline ${
                    mapTab === 'floor'
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  행사장 도면
                </button>
              </div>

              {/* Map Display Box */}
              <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] bg-background/50 flex items-center justify-center border border-primary/5">
                {mapTab === 'location' ? (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.204505191244!2d127.05642731210819!3d37.512591672101344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca46c07a41ec9%3A0xe5a18017c60e7e40!2sCOEX!5e0!3m2!1sen!2skr!4v1716899736000!5m2!1sen!2skr"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="COEX Location Map"
                  />
                ) : (
                  <>
                    <img 
                      src="/coex_floor_map.png" 
                      alt="COEX Floor Map" 
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                      onClick={() => setIsMapModalOpen(true)}
                    />
                    {/* Overlay Hover Effect */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <button 
                      onClick={() => setIsMapModalOpen(true)}
                      className="absolute bottom-4 right-4 bg-surface-variant/80 hover:bg-surface border border-primary/20 p-3 rounded-full text-primary hover:text-white transition-all shadow-lg cursor-pointer"
                      title="지도 크게 보기"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
            <p className="text-center text-xs text-on-surface-variant">
              {mapTab === 'location' 
                ? '💡 마우스를 스크롤 하거나 터치하여 지도를 확대/축소 및 이동할 수 있습니다.'
                : '💡 도면을 클릭하시면 크게 확대하여 상세 배치도를 보실 수 있습니다.'
              }
            </p>
          </div>

          {/* Right: Transport Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Subway Card */}
            <div className="p-6 bg-surface/50 border border-primary/10 rounded-2xl space-y-4 hover:border-primary/20 hover:bg-surface transition-all">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2.5">
                <Train className="w-5 h-5" /> 지하철 이용 시
              </h3>
              <div className="space-y-3.5 text-sm">
                <div>
                  <span className="inline-block px-2 py-0.5 bg-[#37b422]/15 text-[#37b422] rounded text-xs font-bold font-headline mr-2">2호선</span>
                  <strong className="text-on-surface">삼성역 5, 6번 출구</strong>
                  <p className="text-xs text-on-surface-variant mt-1 pl-10 border-l border-primary/5">코엑스 지하 쇼핑몰(밀레니엄 광장)로 진입하여 2층/1층 에스컬레이터 이용</p>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 bg-[#b29729]/15 text-[#b29729] rounded text-xs font-bold font-headline mr-2">9호선</span>
                  <strong className="text-on-surface">봉은사역 7번 출구</strong>
                  <p className="text-xs text-on-surface-variant mt-1 pl-10 border-l border-primary/5">아셈타워 출구 방면으로 진입하여 코엑스 1층 북문 진입</p>
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 bg-[#78643f]/15 text-[#78643f] rounded text-xs font-bold font-headline mr-2">7호선</span>
                  <strong className="text-on-surface">청담역 2번 출구</strong>
                  <p className="text-xs text-on-surface-variant mt-1 pl-10 border-l border-primary/5">2번 출구로 나와 도보로 약 15분 소요 (직진 코스)</p>
                </div>
              </div>
            </div>

            {/* Bus Card */}
            <div className="p-6 bg-surface/50 border border-primary/10 rounded-2xl space-y-3 hover:border-primary/20 hover:bg-surface transition-all">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2.5">
                <Bus className="w-5 h-5" /> 버스 이용 시
              </h3>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <p>
                  <strong className="text-on-surface">코엑스 동문 앞 (삼성역 방면):</strong><br />
                  간선: 146, 301, 351, 352, 401 | 지선: 2415, 3217, 3411, 3412
                </p>
                <p>
                  <strong className="text-on-surface">봉은사 건너편 (봉은사역 방면):</strong><br />
                  간선: 351 | 지선: 3411, 3412 | 직행: 9407, 9507, 9607
                </p>
              </div>
            </div>

            {/* Car/Parking Card */}
            <div className="p-6 bg-surface/50 border border-primary/10 rounded-2xl space-y-3 hover:border-primary/20 hover:bg-surface transition-all">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2.5">
                <Car className="w-5 h-5" /> 자가용 및 주차 안내
              </h3>
              <div className="space-y-2 text-sm text-on-surface-variant">
                <p>
                  <strong className="text-on-surface">네비게이션 검색:</strong> 코엑스 주차장 서문/동문<br />
                  (서울특별시 강남구 영동대로 513)
                </p>
                <p>
                  <strong className="text-on-surface">주차 할인 혜택:</strong><br />
                  행사 참가자 전원에게 등록대에서 **50% 주차 요금 할인권**을 교부해 드립니다. (출차 시 사전정산기 적용 가능, 일 최대 24,000원 한도)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {isMapModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setIsMapModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative max-w-5xl w-full bg-surface border border-primary/20 rounded-3xl overflow-hidden p-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsMapModalOpen(false)}
                className="absolute top-4 right-4 bg-background/80 hover:bg-background border border-primary/10 p-2.5 rounded-full text-on-surface-variant hover:text-white transition-all cursor-pointer z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="rounded-2xl overflow-hidden bg-background max-h-[80vh] flex items-center justify-center">
                <img 
                  src="/coex_floor_map.png" 
                  alt="COEX Floor Map Detail" 
                  className="max-w-full max-h-[75vh] object-contain" 
                />
              </div>
              <div className="p-4 bg-surface text-center">
                <h3 className="text-lg font-bold text-on-surface">코엑스 AI Horizon 2026 전시장 및 세션 회의실 배치도</h3>
                <p className="text-xs text-on-surface-variant mt-1">1층 전시장 1홀 | 2층 컨퍼런스 룸 | 그랜드 볼룸 | 오디토리움</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
