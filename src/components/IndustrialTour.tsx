import { motion } from 'motion/react';
import { Compass, Building2, MapPin, Calendar, Clock, Users, ArrowRight, ShieldCheck, Bus, Coffee, MessageSquare } from 'lucide-react';

interface IndustrialTourProps {
  onRegister: () => void;
}

export default function IndustrialTour({ onRegister }: IndustrialTourProps) {
  const courses = [
    {
      id: 'course-a',
      title: '코스 A: 초거대 AI & 원천 기술 핵심 투어',
      description: '대한민국 대표 빅테크 기업의 AI 연구소와 데이터 센터를 직접 방문하여 미래 핵심 인프라를 확인합니다.',
      duration: '09:30 ~ 17:30 (종일 코스)',
      targets: ['네이버 1784 (세계 최초 로봇 친화형 빌딩)', '카카오 AI 캠퍼스', 'SKT 인프라 센터'],
      highlights: ['초거대 LLM 인프라 및 전력 관리 시스템 견학', '브레인리스 로봇 제어 및 클라우드 연동 시연', '연구원과의 다이렉트 Q&A 세션'],
      badge: '인기 코스',
      theme: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'course-b',
      title: '코스 B: 모빌리티 & 로보틱스 실무 투어',
      description: '자율주행 및 로봇 제어 등 물리적 현실 세계와 인공지능이 결합하는 디바이스 현장을 체험합니다.',
      duration: '10:00 ~ 16:30',
      targets: ['현대차 자율주행 실증 센터', '로보틱스 랩 스튜디오', '스타트업 클러스터 로보웨어'],
      highlights: ['자율주행 테스트 트랙 탑승 체험', '협동 로봇 및 물류 제어 시스템 시뮬레이션 관람', '로보틱스 하드웨어 아키텍처 특강'],
      badge: '추천 코스',
      theme: 'from-purple-600 to-pink-600'
    },
    {
      id: 'course-c',
      title: '코스 C: 차세대 AI 스타트업 & 스케일업',
      description: '생성형 AI, 의료, 미디어 분야에서 급성장하는 유니콘 스타트업들의 오피스를 탐방하고 혁신적 문화를 체감합니다.',
      duration: '13:00 ~ 18:00 (오후 코스)',
      targets: ['의료 AI 솔루션 루닛(Lunit)', '생성형 비디오 플랫폼 기업', 'AI 액셀러레이터 허브'],
      highlights: ['의료 AI 진단 정확도 99% 달성 모델 파이프라인 소개', 'AI 버추얼 휴먼 실시간 렌더링 스튜디오 견학', '창업가 및 인사 담당자가 전하는 성장 스토리 및 네트워킹'],
      badge: '트렌디',
      theme: 'from-emerald-600 to-teal-600'
    }
  ];

  const benefits = [
    {
      icon: <Bus className="w-6 h-6 text-primary" />,
      title: '무료 셔틀버스 및 차량 제공',
      description: '코엑스에서 출발하여 각 투어지까지 최고급 리무진 버스로 편안하고 안전하게 이동합니다.'
    },
    {
      icon: <Coffee className="w-6 h-6 text-primary" />,
      title: '네트워킹 오찬 및 리프레시먼트',
      description: '전문 투어 가이드와 함께 현업 주니어/시니어 엔지니어들이 함께하는 런치 밋업이 포함됩니다.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: '기술 세션 및 다이렉트 Q&A',
      description: '단순 관람이 아닌 기업별 핵심 엔지니어링 리드와의 대화형 세션 및 채용 상담 연계 혜택을 제공합니다.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: '공식 참가 확인서 발급',
      description: 'AI Horizon 2026 조직위원회가 발급하는 공식 산업시찰(Industrial Tour) 이수증이 발송됩니다.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface py-16 px-8 relative overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/20 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase"
          >
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            Special Industrial Tour
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-headline font-bold text-glow tracking-tighter"
          >
            AI 산업시찰 프로그램
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-on-surface-variant leading-relaxed"
          >
            대한민국 최첨단 AI 산업의 현장을 방문해 보세요. 글로벌 혁신을 주도하는 빅테크 연구소부터 유망 AI 스타트업까지, 눈으로 직접 보고 소통하며 미래의 기회를 잡을 수 있는 특별한 투어입니다.
          </motion.p>
        </div>

        {/* Highlights Banner Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.03] to-surface mb-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface">
                “백문이 불여일견(百聞不如一見)” <br className="hidden sm:inline" />
                연구실 너머 실제 AI가 작동하는 현장 속으로
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                AI Horizon 2026 컨퍼런스의 특별 연계 프로그램으로, 연구원 및 개발진의 상세 가이드와 네트워킹을 함께 누릴 수 있습니다. 각 코스는 인원수 제한(선착순 30명)으로 조기 마감될 수 있습니다.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-semibold text-on-surface">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> 2026.12.4 (금요일) *본 행사 익일 진행
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" /> 코스별 정원 30명 선착순
                </span>
              </div>
            </div>
            <div className="bg-surface/50 border border-primary/10 p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-4">
              <div className="text-xs uppercase tracking-widest text-primary font-bold">참가 대상</div>
              <div className="text-lg font-bold text-on-surface">
                AI Horizon 2026 <br />
                티켓 구매자 (선택 옵션)
              </div>
              <p className="text-xs text-on-surface-variant">
                산업시찰은 메인 컨퍼런스 등록자에 한해 신청할 수 있는 특별 프로그램입니다.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Courses Section */}
        <div className="space-y-12 mb-20">
          <div className="text-left space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">시찰 코스 안내</h2>
            <p className="text-on-surface-variant">관심 있는 분야에 따라 적합한 코스를 선택하세요.</p>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col justify-between glass-card rounded-3xl border border-primary/15 hover:border-primary/40 bg-surface/40 hover:bg-surface/80 transition-all duration-300 shadow-lg overflow-hidden group"
              >
                <div>
                  {/* Top Bar with Badge */}
                  <div className="p-8 pb-4 flex justify-between items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Details */}
                  <div className="px-8 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant">
                        <Clock className="w-3.5 h-3.5 text-primary" /> {course.duration}
                      </div>
                    </div>
                    
                    <p className="text-sm text-on-surface-variant leading-relaxed min-h-[60px]">
                      {course.description}
                    </p>

                    {/* Visit Targets */}
                    <div className="space-y-2 pt-2 border-t border-on-surface-variant/10">
                      <div className="text-xs font-bold text-primary tracking-wider uppercase">방문 예정지</div>
                      <ul className="space-y-1.5">
                        {course.targets.map((target, idx) => (
                          <li key={idx} className="text-sm font-semibold flex items-center gap-2 text-on-surface">
                            <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                            {target}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2 border-t border-on-surface-variant/10">
                      <div className="text-xs font-bold text-primary tracking-wider uppercase">핵심 세션 & 체험</div>
                      <ul className="space-y-1.5">
                        {course.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs text-on-surface-variant leading-relaxed list-disc list-inside pl-1">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-8 pt-6">
                  <button 
                    onClick={onRegister}
                    className="w-full py-3 bg-surface hover:bg-primary hover:text-on-primary border border-primary/20 hover:border-primary rounded-xl font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    이 코스로 투어 신청하기
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-12 mb-20">
          <div className="text-left space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tight">참가자 특별 혜택</h2>
            <p className="text-on-surface-variant">산업시찰 투어 참가자 분들께만 드리는 특별한 서비스와 특전입니다.</p>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-primary/10 bg-surface/20 flex flex-col items-start space-y-4 hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-3 bg-primary/5 rounded-xl border border-primary/10">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg text-on-surface">{benefit.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ or Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-12 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 backdrop-blur-md max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-headline font-bold">투어 참가에 대해 궁금한 점이 있으신가요?</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm leading-relaxed">
            단체 신청(10인 이상) 혹은 특별 제휴 투어 문의는 고객센터나 대회 운영 사무국(tour@aihorizon.org)으로 연락 주시면 상세 안내를 도와드립니다.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={onRegister}
              className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              지금 참가 신청하기
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
