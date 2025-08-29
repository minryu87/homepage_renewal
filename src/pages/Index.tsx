import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  FileText, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

export default function Index() {
  const services = [
    {
      icon: BarChart3,
      title: "마케팅 애널리틱스 & 예측 모델링",
      description: "Python 기반 데이터 분석 엔진과 머신러닝 예측 모델을 활용한 실시간 성과 분석. Google Analytics 4와 연동하여 환자 여정별 전환율을 추적합니다."
    },
    {
      icon: FileText,
      title: "AI 기반 의료 콘텐츠 마케팅",
      description: "자연어 처리와 E-A-T 최적화를 통한 의료법 준수 콘텐츠 자동화. 네이버 및 구글 최신 검색 알고리즘에 최적화된 콘텐츠를 제작합니다."
    },
    {
      icon: Shield,
      title: "감정 분석 AI 기반 평판 관리",
      description: "감정 분석 AI와 자동화 모니터링을 통한 온라인 평판 관리. 네거티브 SEO 대응과 리뷰 마케팅으로 병원 신뢰도를 향상시킵니다."
    },
    {
      icon: TrendingUp,
      title: "실시간 데이터 처리 & 최적화",
      description: "실시간 SEO 성과 모니터링과 키워드 순위 추적. 경쟁사 SEO 분석과 구조화된 데이터 마크업으로 검색 가시성을 극대화합니다."
    }
  ];

  const achievements = [
    { number: "300%", label: "검색 노출 증가", description: "평균 6개월 내" },
    { number: "40%", label: "환자 유입 비용 절감", description: "기존 마케팅 대비" },
    { number: "250%", label: "온라인 예약률 향상", description: "웹사이트 최적화 후" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              병원 디지털 마케팅 전문 • 의료 SEO 최적화 • 환자 유입 증대
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI 기반 데이터 공학으로<br />
              <span className="text-blue-600">환자 유입을 혁신하세요</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              머신러닝과 실시간 분석을 활용한 의료 특화 마케팅으로<br />
              <strong>검색 노출 300% 증가, 환자 유입 비용 40% 절감</strong>을 달성하세요.
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-4xl mx-auto">
              Python 기반 데이터 분석 엔진과 AI 기반 콘텐츠 자동화 시스템으로 투명한 ROI 측정과 예측 가능한 성과를 제공하는 의료 마케팅 전문 플랫폼입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">무료 상담 받기</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/services">서비스 둘러보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              이런 마케팅 고민이 있으시나요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-red-900 mb-2">낮은 온라인 가시성</h3>
                <p className="text-sm text-red-700">검색 결과에서 찾기 어려운 병원</p>
              </div>
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-red-900 mb-2">환자 유입 부족</h3>
                <p className="text-sm text-red-700">신규 환자 확보의 한계</p>
              </div>
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-red-900 mb-2">불확실한 ROI</h3>
                <p className="text-sm text-red-700">마케팅 비용 대비 성과 측정 어려움</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-8">
              <p className="text-xl font-semibold text-blue-900">
                AI 기반 데이터 공학과 의료 전문성을 결합한 혁신적인 마케팅 솔루션으로 해결하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              검증된 성과와 데이터 기반 솔루션
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{achievement.label}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              병원 마케팅 성공사례
            </h2>
            <p className="text-xl text-gray-600">
              이미 리걸케어 파트너 병원은 경험했습니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 italic">
                  "의료진의 전문성과 마케팅 전략이 만났을 때의 시너지를 경험했습니다. 환자들이 자연스럽게 찾아오는 병원으로 변화했어요."
                </blockquote>
                <cite className="text-gray-600 font-medium">피부과 전문의 김○○ 원장님</cite>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-8">협력 병원들과 함께 성장하고 있습니다</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <Badge variant="outline" className="text-sm py-2 px-4">○○ 성형외과</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">△△ 치과의원</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">□□ 한의원</Badge>
                <Badge variant="outline" className="text-sm py-2 px-4">◇◇ 피부과</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              아직도 단순한 광고만 집중하나요?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              환자가 먼저 알고 찾아오도록, 리걸케어 솔루션으로 병원 온라인 마케팅의 핵심 전략을 수립하세요. 병원에 맞는 콘텐츠 전략과 데이터 분석 환경으로 우량 환자들의 지속적인 유입을 만들어 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  무료 진단 받기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/services">서비스 자세히 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}