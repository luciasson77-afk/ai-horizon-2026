import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Building, 
  Cpu, 
  Globe, 
  FileText, 
  ShieldCheck, 
  Layers
} from 'lucide-react';

interface ExhibitionProps {
  onRegister?: () => void;
}

type TabType = 'overview' | 'categories' | 'options' | 'apply';

export default function Exhibition({ onRegister }: ExhibitionProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    ceoName: '',
    businessRegNum: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    category: '생성형 AI & LLM',
    boothType: '조립 부스 (Standard)',
    boothQty: '1개 부스',
    description: '',
    website: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: '전시회 개요', icon: <Layers className="w-4 h-4" /> },
    { id: 'categories', label: '주요 전시 분야', icon: <Cpu className="w-4 h-4" /> },
    { id: 'options', label: '부스 신청 옵션', icon: <Building className="w-4 h-4" /> },
    { id: 'apply', label: '업체 부스 참가 신청', icon: <FileText className="w-4 h-4" /> }
  ];

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-32 px-8 max-w-2xl mx-auto text-center space-y-8 min-h-[70vh] flex flex-col justify-center items-center"
      >
        <div className="flex justify-center relative">
          <div className="absolute inset-0 bg-primary/20 blur-[30px] rounded-full"></div>
          <CheckCircle className="w-24 h-24 text-primary animate-bounce relative z-10" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-headline font-bold text-on-surface">참가 신청이 완료되었습니다!</h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-body">
            <span className="text-primary font-bold">{formData.companyName}</span>의 AI 기술 혁신 전시회 참가 신청서가 정상적으로 접수되었습니다.<br />
            제출하신 담당자 이메일(<span className="underline">{formData.contactEmail}</span>)로 승인 절차 및 부스 도면 안내 자료를 보내드렸습니다.
          </p>
        </div>
        <div className="pt-6">
          <button 
            onClick={() => window.location.reload()} 
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/25 cursor-pointer"
          >
            메인으로 돌아가기
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-20 px-4 md:px-8 max-w-screen-2xl mx-auto space-y-16"
    >
      {/* Top Title Section */}
      <div className="text-center space-y-4 pt-4 border-b border-primary/5 pb-12">
        <div className="inline-block px-4 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary text-sm font-bold tracking-[0.2em] uppercase font-headline">
          SPECIAL EXHIBITION
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter text-primary">
          AI 기술 혁신 전시회
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          글로벌 리더와 투자자 앞에서 귀사의 첨단 기술과 혁신 서비스를 직접 선보이세요.
        </p>
      </div>

      {/* Premium Horizontal Navigation Bar (Full Width Center) */}
      <div className="flex justify-center border-b border-primary/10 pb-8 max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-surface/50 backdrop-blur-md rounded-3xl border border-primary/10 w-full max-w-4xl shadow-lg shadow-primary/5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2.5 cursor-pointer text-sm sm:text-base border flex-1 min-w-[170px] ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary to-primary-container text-on-primary border-primary shadow-lg shadow-primary/15 scale-105 active:scale-98' 
                    : 'bg-transparent border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/40 active:scale-98'
                }`}
              >
                <span className={isActive ? 'text-on-primary' : 'text-primary'}>
                  {tab.icon}
                </span>
                <span className="font-headline">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Wide Active Content Display Area - Fills Entire Screen like SideEvents */}
      <div className="max-w-screen-xl mx-auto min-h-[60vh] w-full pt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="space-y-16"
          >
            {/* Tab 1: Overview Component */}
            {activeTab === 'overview' && (
              <div className="space-y-12 font-body">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">전시회 개요 & 혜택</h2>
                  <p className="text-on-surface-variant text-sm md:text-base max-w-2xl mx-auto">
                    AI 기술 혁신 전시회의 기본 일정과 참가 기업만이 누릴 수 있는 풍성한 혜택입니다.
                  </p>
                </div>
                
                {/* 주요 정보 Card (Full Screen Width Grid) */}
                <div className="group p-8 md:p-12 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/20 transition-all space-y-8 shadow-xl shadow-primary/5">
                  <h3 className="text-2xl font-headline font-bold text-primary flex items-center gap-2.5 border-b border-primary/10 pb-4">
                    <Layers className="w-6 h-6" /> 주요 정보
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 bg-surface-variant/20 rounded-2xl border border-primary/5 space-y-3 flex flex-col justify-between hover:border-primary/20 hover:bg-surface-variant/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar className="w-5 h-5" />
                        <span className="font-bold text-sm tracking-wide font-headline">일시</span>
                      </div>
                      <p className="text-base font-semibold text-on-surface">2026.12.1 (화) ~ 12.3 (목)</p>
                      <p className="text-xs text-on-surface-variant">3일간 오전 10시~오후 5시 진행</p>
                    </div>
                    
                    <div className="p-6 bg-surface-variant/20 rounded-2xl border border-primary/5 space-y-3 flex flex-col justify-between hover:border-primary/20 hover:bg-surface-variant/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-primary">
                        <MapPin className="w-5 h-5" />
                        <span className="font-bold text-sm tracking-wide font-headline">장소</span>
                      </div>
                      <p className="text-base font-semibold text-on-surface">코엑스 1층 전시장 1홀</p>
                      <p className="text-xs text-on-surface-variant">COEX Hall 1 (전면 배정)</p>
                    </div>
                    
                    <div className="p-6 bg-surface-variant/20 rounded-2xl border border-primary/5 space-y-3 flex flex-col justify-between hover:border-primary/20 hover:bg-surface-variant/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-primary">
                        <Building className="w-5 h-5" />
                        <span className="font-bold text-sm tracking-wide font-headline">전시 규모</span>
                      </div>
                      <p className="text-base font-semibold text-on-surface">150여 개사 참여</p>
                      <p className="text-xs text-on-surface-variant">국내외 탑티어 및 AI 스타트업</p>
                    </div>
                    
                    <div className="p-6 bg-surface-variant/20 rounded-2xl border border-primary/5 space-y-3 flex flex-col justify-between hover:border-primary/20 hover:bg-surface-variant/30 transition-all duration-300">
                      <div className="flex items-center gap-2 text-primary">
                        <Users className="w-5 h-5" />
                        <span className="font-bold text-sm tracking-wide font-headline">참관 대상</span>
                      </div>
                      <p className="text-base font-semibold text-on-surface">20,000+ 명 참관 예정</p>
                      <p className="text-xs text-on-surface-variant">VC, 바이어 및 전문 관람객</p>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      💡 <span className="font-bold text-primary">부스 신청 기간:</span> 2026년 10월 31일 (금) 까지 접수를 받습니다. 부스 완판 시에는 일정이 앞당겨 마감될 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 참가 혜택 Card (Full Screen Width Grid) */}
                <div className="group p-8 md:p-12 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/20 transition-all space-y-8 shadow-xl shadow-primary/5">
                  <h3 className="text-2xl font-headline font-bold text-primary flex items-center gap-2.5 border-b border-primary/10 pb-4">
                    <Award className="w-6 h-6" /> 참가 기업 독점 혜택
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-surface-variant/20 rounded-3xl border border-primary/5 space-y-4 hover:border-primary/30 hover:bg-surface transition-all duration-300 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                          <Globe className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg text-on-surface font-headline">1:1 VC 비즈니스 매칭</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                          글로벌 탑티어 투자자 및 대기업 구매 임원진과의 다이렉트 1:1 프라이빗 비즈니스 테이블 매칭으로 확실한 투자 유치 및 연계를 보장합니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-8 bg-surface-variant/20 rounded-3xl border border-primary/5 space-y-4 hover:border-primary/30 hover:bg-surface transition-all duration-300 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg text-on-surface font-headline">공식 데모데이 및 IR 발표</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                          전시장 메인 중앙에 위치한 특설 무대에서 글로벌 참관진과 벤처 캐피탈을 대상으로 핵심 하드웨어 및 소프트웨어 신제품 시연 기회를 부여합니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-8 bg-surface-variant/20 rounded-3xl border border-primary/5 space-y-4 hover:border-primary/30 hover:bg-surface transition-all duration-300 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-lg text-on-surface font-headline">글로벌 미디어 홍보 연계</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                          프레스 센터에 상주하는 국내외 주요 IT 언론사와의 단독 현장 인터뷰 및 특집 보도 기사 배포, 그리고 공식 채널 기획 노출 기회를 보장합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Major Categories Component (Full Screen Grid) */}
            {activeTab === 'categories' && (
              <div className="space-y-12">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">주요 전시 분야</h2>
                  <p className="text-on-surface-variant text-sm md:text-base max-w-2xl mx-auto">
                    전시관을 뜨겁게 달굴 최고의 인공지능 핵심 트렌드 도메인입니다.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="group p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 shadow-lg">
                    <div className="space-y-4">
                      <div className="text-primary font-bold text-3xl font-headline">01</div>
                      <h4 className="text-2xl font-bold text-on-surface font-headline">생성형 AI & LLM</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                        대규모 자연어 모델, 멀티모달 서비스, 차세대 디지털 휴먼, 텍스트-투-미디어 등 창의성과 인지 융합 솔루션 전시
                      </p>
                    </div>
                  </div>
                  
                  <div className="group p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 shadow-lg">
                    <div className="space-y-4">
                      <div className="text-primary font-bold text-3xl font-headline">02</div>
                      <h4 className="text-2xl font-bold text-on-surface font-headline">AI 반도체 & 인프라</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                        초거대 인공지능 연산용 NPU 실물, 차세대 반도체 공정 가속 하드웨어 칩셋, 엣지 가속 디바이스 솔루션 실시간 데모
                      </p>
                    </div>
                  </div>
                  
                  <div className="group p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 shadow-lg">
                    <div className="space-y-4">
                      <div className="text-primary font-bold text-3xl font-headline">03</div>
                      <h4 className="text-2xl font-bold text-on-surface font-headline">로보틱스 & 비전</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                        물류 및 공장 지능형 구동 로봇, 드론 자율 경로 제어 플랫폼, 컴퓨터 비전 기반 보안 및 유통 자동화 분석 솔루션
                      </p>
                    </div>
                  </div>
                  
                  <div className="group p-8 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between min-h-[320px] hover:-translate-y-1 shadow-lg">
                    <div className="space-y-4">
                      <div className="text-primary font-bold text-3xl font-headline">04</div>
                      <h4 className="text-2xl font-bold text-on-surface font-headline">엔터프라이즈 AI</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed font-body">
                        비즈니스 효율을 극대화하는 SaaS 솔루션, 핀테크 자산 분석, 의료 영상 보조 및 공공 행정 지능화 자동화 툴킷
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Booth Options Component (Full Screen Grid) */}
            {activeTab === 'options' && (
              <div className="space-y-12">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">부스 신청 옵션</h2>
                  <p className="text-on-surface-variant text-sm md:text-base max-w-2xl mx-auto">
                    기업의 브랜딩 연출 규모와 예산 배정에 맞춰 최적의 부스 형태를 비교해 보세요.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Standard Option (Wide Card) */}
                  <div className="group p-8 md:p-10 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between space-y-8 shadow-xl">
                    <div className="space-y-4">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full uppercase tracking-wider font-headline">
                        Standard Booth
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-headline text-on-surface">조립 부스</h3>
                      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-body">
                        주최측에서 부스 기본 벽 골조판, 바닥용 프리미엄 카펫, 기업 로고 상호판 간판, 기본 조명등 및 안내 테이블/의자 세트(1세트), 1kW 기본 전기를 제공해 드립니다. 설치 및 철거 공사가 편리해 초기 제품 홍보나 스타트업 전시에 강점이 있습니다.
                      </p>
                    </div>
                    <div className="border-t border-primary/10 pt-6 space-y-2 font-body">
                      <div className="text-sm text-on-surface-variant flex justify-between">
                        <span className="font-bold">기본 규격:</span> <span>3m x 3m x 2.5m (총 9㎡ 면적)</span>
                      </div>
                      <div className="text-sm text-on-surface-variant flex justify-between">
                        <span className="font-bold">포함 설비:</span> <span>인포 테이블, 기본 전력(1kW), 상호 간판, 조명 3구</span>
                      </div>
                      <div className="text-xl font-bold text-primary font-headline flex justify-between items-center pt-3 border-t border-primary/5 mt-3">
                        <span>부스 참가비:</span> <span>₩2,500,000 / 1부스당</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Raw Space Option (Wide Card) */}
                  <div className="group p-8 md:p-10 bg-surface/50 backdrop-blur-xl rounded-3xl border border-tertiary/10 hover:border-tertiary/30 transition-all duration-300 flex flex-col justify-between space-y-8 shadow-xl">
                    <div className="space-y-4">
                      <div className="inline-block px-3 py-1 bg-tertiary/10 text-tertiary font-bold text-xs rounded-full uppercase tracking-wider font-headline">
                        Space Only
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-headline text-on-surface">독립 부스</h3>
                      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-body">
                        부스가 설치될 전시장 맨바닥 면적만 제공합니다. 참가업체가 직접 전문 전시 시공사를 섭외하여 화려한 아일랜드 설계, LED 대화면 월, 조명 트러스 등을 적용해 커스텀 독창 브랜딩을 장식하는 방식입니다. 대규모 기업 마케팅 및 혁신 브랜드 부각에 절대적으로 유리합니다.
                      </p>
                    </div>
                    <div className="border-t border-primary/10 pt-6 space-y-2 font-body">
                      <div className="text-sm text-on-surface-variant flex justify-between">
                        <span className="font-bold">최소 면적:</span> <span>최소 4개 부스 면적 단위부터 신청 가능</span>
                      </div>
                      <div className="text-sm text-on-surface-variant flex justify-between">
                        <span className="font-bold">시공 요건:</span> <span>전시 지정 등록 장치공사 시공사 자체 섭외 필수</span>
                      </div>
                      <div className="text-xl font-bold text-tertiary font-headline flex justify-between items-center pt-3 border-t border-primary/5 mt-3">
                        <span>부스 참가비:</span> <span>₩2,000,000 / 1부스당</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setActiveTab('apply')}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-base rounded-full hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/20 cursor-pointer flex items-center gap-2"
                  >
                    지금 참가 신청하러 가기 <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Tab 4: Application Form Component (Centered, Wide Form) */}
            {activeTab === 'apply' && (
              <div className="space-y-12">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface">전시회 참가 신청서 작성</h2>
                  <p className="text-on-surface-variant text-sm md:text-base max-w-2xl mx-auto">
                    정확한 심사 조율을 위해 비즈니스 정보와 담당자 정보를 성실히 작성해 주시기 바랍니다.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="group p-8 md:p-12 bg-surface/50 backdrop-blur-xl rounded-3xl border border-primary/15 space-y-10 font-body max-w-4xl mx-auto shadow-2xl">
                  
                  {/* Section 1: Company details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2.5 border-b border-primary/10 pb-3">
                      <Building className="w-5 h-5" /> 1. 기업 기본 정보
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">업체명</label>
                        <input 
                          required 
                          type="text" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="예: 주식회사 에이아이호라이즌" 
                          className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm" 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">대표자명</label>
                          <input 
                            required 
                            type="text" 
                            name="ceoName"
                            value={formData.ceoName}
                            onChange={handleInputChange}
                            placeholder="홍길동" 
                            className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">사업자등록번호</label>
                          <input 
                            required 
                            type="text" 
                            name="businessRegNum"
                            value={formData.businessRegNum}
                            onChange={handleInputChange}
                            placeholder="123-45-67890" 
                            className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm" 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">홈페이지 주소 (선택)</label>
                      <input 
                        type="url" 
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://www.company.com" 
                        className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm" 
                      />
                    </div>
                  </div>

                  {/* Section 2: Exhibition Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2.5 border-b border-primary/10 pb-3">
                      <Layers className="w-5 h-5" /> 2. 부스 신청 및 기술 부문
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">전시 분야 카테고리</label>
                        <select 
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm appearance-none cursor-pointer"
                        >
                          <option>생성형 AI & LLM</option>
                          <option>AI 반도체 & 인프라</option>
                          <option>로보틱스 & 컴퓨터 비전</option>
                          <option>엔터프라이즈 AI 솔루션</option>
                          <option>기타 AI 소프트웨어</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">희망 부스 형태</label>
                        <select 
                          name="boothType"
                          value={formData.boothType}
                          onChange={handleInputChange}
                          className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm appearance-none cursor-pointer"
                        >
                          <option>조립 부스 (Standard)</option>
                          <option>독립 부스 (Raw Space)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">신청 부스 수량</label>
                        <select 
                          name="boothQty"
                          value={formData.boothQty}
                          onChange={handleInputChange}
                          className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm appearance-none cursor-pointer"
                        >
                          <option>1개 부스</option>
                          <option>2개 부스</option>
                          <option>3개 부스</option>
                          <option>4개 부스 (추천)</option>
                          <option>5개 부스 이상</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">전시품목 및 핵심 전시 기술 소개</label>
                      <textarea 
                        required
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="전시할 하드웨어/소프트웨어 기기 제품 소개와 관람객 비즈니스 매칭 시연을 위해 어필할 핵심 기술 내용을 상세히 기록해 주십시오." 
                        className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all h-36 text-on-surface text-sm"
                      ></textarea>
                    </div>
                  </div>

                  {/* Section 3: Contact Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-headline font-bold text-primary flex items-center gap-2.5 border-b border-primary/10 pb-3">
                      <Users className="w-5 h-5" /> 3. 실무 담당자 정보
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">담당자 성함</label>
                        <input 
                          required 
                          type="text" 
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="김철수 과장" 
                          className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">연락처</label>
                        <input 
                          required 
                          type="tel" 
                          name="contactPhone"
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                          placeholder="010-1234-5678" 
                          className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">이메일</label>
                        <input 
                          required 
                          type="email" 
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          placeholder="contact@company.com" 
                          className="w-full bg-surface-variant/40 border border-primary/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-on-surface text-sm" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-4">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-2xl font-bold text-base hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer shadow-lg shadow-primary/20"
                    >
                      {loading ? '참가 신청서 접수 중...' : (
                        <>
                          참가 신청서 제출하기
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-on-surface-variant/50">
                      제출해주신 기업 정보 및 기술 적합성을 기반으로 접수 즉시 내부 심사가 개시되며, 3영업일 내 유선 또는 이메일로 개별 연락을 취하게 됩니다.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
