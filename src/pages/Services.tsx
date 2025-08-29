import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Globe, 
  Shield, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  Zap
} from 'lucide-react';

export default function Services() {
  const coreServices = [
    {
      icon: FileText,
      name: "AI 기반 메디컨텐츠 시스템",
      value: "머신러닝과 자연어 처리를 활용한 자동화된 의료 콘텐츠 제작",
      features: ["AI 콘텐츠 전략 수립", "AI SEO 최적화", "AI 의료법 준수 검토"]
    },
    {
      icon: Globe,
      name: "AI 기반 홈페이지 제작 및 모니터링",
      value: "머신러닝 기반 SEO 최적화와 실시간 성과 분석",
      features: ["AI 의료기관 특화 디자인", "AI SEO 기반 웹사이트 구축", "AI 지속적 모니터링"]
    },
    {
      icon: Shield,
      name: "AI 기반 평판 관리 및 리뷰부스팅",
      value: "자연어 처리와 감정 분석을 활용한 지능형 평판 관리",
      features: ["AI 온라인 평판 관리", "AI 리뷰부스팅", "AI 고객 VOC 분석"]
    },
    {
      icon: BarChart3,
      name: "AI 기반 빅데이터 성과 분석",
      value: "머신러닝과 예측 분석을 활용한 지능형 마케팅 최적화",
      features: ["AI 통합 데이터 분석", "AI 실시간 모니터링", "AI 맞춤형 리포팅"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "무료 진단",
      description: "현재 온라인 마케팅 현황 및 문제점 분석",
      duration: "1주"
    },
    {
      step: 2,
      title: "맞춤 전략 수립",
      description: "병원 특성 및 목표에 맞는 종합 전략 기획",
      duration: "1주"
    },
    {
      step: 3,
      title: "시스템 구축 및 실행",
      description: "필요 도구 세팅 및 콘텐츠 제작 시작",
      duration: "2주"
    },
    {
      step: 4,
      title: "지속적 최적화",
      description: "성과 분석 기반 전략 개선 및 확장",
      duration: "ongoing"
    }
  ];

  const solutions = [
    {
      problem: "의료법 때문에 마케팅이 두렵습니다",
      solution: "AI 기반 의료법 준수 마케팅 시스템",
      results: [
        "AI 의료법 위반 리스크 99% 차단",
        "AI 기반 안전하고 효과적인 마케팅 콘텐츠 제작",
        "AI 법적 문제 걱정 없는 적극적 마케팅 가능"
      ]
    },
    {
      problem: "개원한 지 얼마 안 되어 환자 유입이 걱정됩니다",
      solution: "AI 기반 신규 병원 런칭 패키지",
      results: [
        "AI 기반 개원 3개월 내 신환 200% 증가",
        "AI 네이버 지역 검색 상위 노출 달성",
        "AI 온라인 평점 4.5점 이상 유지"
      ]
    },
    {
      problem: "홈페이지가 검색에 전혀 안 나옵니다",
      solution: "AI 기반 SEO 최적화 홈페이지 구축",
      results: [
        "AI 기반 3개월 내 주요 키워드 네이버/구글 1페이지 진입",
        "AI 홈페이지 방문자 300% 증가",
        "AI 검색을 통한 예약 문의 500% 증가"
      ]
    },
    {
      problem: "콘텐츠 만드는 데 시간도 많이 걸리고 비용도 부담됩니다",
      solution: "AI 기반 자동화 콘텐츠 생산 시스템",
      results: [
        "AI 콘텐츠 제작 시간 95% 단축",
        "AI 콘텐츠 제작 비용 70% 절감",
        "AI 기반 일정한 품질의 전문 콘텐츠 지속 발행"
      ]
    },
    {
      problem: "온라인 평판 관리가 너무 어렵습니다",
      solution: "AI 기반 통합 평판 관리 시스템",
      results: [
        "AI 긍정 리뷰 300% 증가",
        "AI 평균 평점 4.8점 달성 및 유지",
        "AI 평판으로 인한 환자 이탈 90% 감소"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI 기반 병원 마케팅 통합 솔루션
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              머신러닝과 빅데이터 분석을 활용한 의료법 준수부터 환자 유입까지, 
              병원 온라인 마케팅의 모든 것을 기술적으로 해결합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">AI 기반 핵심 서비스 4가지</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-blue-600">
                      {service.value}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">서비스 프로세스</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <Badge variant="outline">{step.duration}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">AI 기반 문제별 맞춤 솔루션</h2>
          </div>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {solutions.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-red-600 mb-4">
                        문제: {item.problem}
                      </h3>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">해결책</h4>
                        <p className="text-blue-800">{item.solution}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4">기대 효과</h4>
                      <ul className="space-y-2">
                        {item.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All-in-One Package Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              AI 기반 All-in-One 병원 마케팅 패키지
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">포함 서비스</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      AI 기반 의료법 준수 콘텐츠 제작 (월 30개)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      AI SEO 최적화 홈페이지 구축 및 관리
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      AI 통합 평판 관리 및 리뷰 부스팅
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      AI 실시간 성과 분석 대시보드
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      AI 기반 월 1회 전략 미팅 및 리포팅
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-white">ROI 목표</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  <div>
                    <Badge variant="secondary" className="mb-2">3개월</Badge>
                    <p>AI 기반 신환 200% 증가, 온라인 노출 500% 증가</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">6개월</Badge>
                    <p>AI 기반 지역 내 Top 3 병원 온라인 인지도 달성</p>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">12개월</Badge>
                    <p>AI 기반 마케팅비 대비 300% ROI 달성</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">보장 정책</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 flex-shrink-0" />
                  첫 3개월 내 목표 미달성 시 추가 비용 없이 서비스 연장
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 flex-shrink-0" />
                  의료법 위반으로 인한 문제 발생 시 전액 책임 보상
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  무료 상담 신청하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}