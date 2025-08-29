import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  Zap, 
  Search, 
  Clock,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Target,
  DollarSign
} from 'lucide-react';

export default function CustomSolutions() {
  const problemSolutions = [
    {
      id: 1,
      emoji: "🚨",
      title: "의료법 때문에 마케팅이 두렵습니다",
      concerns: [
        "의료광고법 위반으로 신고당할까 봐 콘텐츠 올리기가 무서워요",
        "어떤 표현이 문제되는지 정확히 모르겠어요", 
        "기존 마케팅 업체는 의료법을 제대로 모르는 것 같아요",
        "광고 리스크 때문에 소극적인 마케팅만 하고 있어요"
      ],
      solution: "의료법 준수 마케팅 시스템",
      process: [
        "의료법 전문가 검토 - 모든 콘텐츠를 의료광고법 전문가가 사전 검토",
        "리스크 자동 감지 - AI 기반 의료법 위반 가능성 사전 차단",
        "안전한 표현 가이드 - 치료 효과, 전후 사진 등 민감 콘텐츠 안전 작성법 제공",
        "지속적 법규 업데이트 - 변경되는 의료법에 맞춘 전략 즉시 조정"
      ],
      results: [
        "의료법 위반 리스크 99% 차단",
        "안전하면서도 효과적인 마케팅 콘텐츠 제작",
        "법적 문제 걱정 없는 적극적 마케팅 가능"
      ],
      icon: Shield,
      color: "red"
    },
    {
      id: 2,
      emoji: "😰",
      title: "개원한 지 얼마 안 되어 환자 유입이 걱정됩니다",
      concerns: [
        "신규 개원이라 인지도가 전혀 없어요",
        "기존 병원들과 경쟁하기가 부담스러워요",
        "어떻게 마케팅을 시작해야 할지 막막해요",
        "초기 투자 대비 효과를 확실히 보고 싶어요"
      ],
      solution: "신규 병원 런칭 패키지",
      process: [
        "지역 특화 전략 - 병원 주변 3km 내 환자 타겟팅 집중 마케팅",
        "속성 브랜딩 - 개원 3개월 내 온라인 인지도 구축 프로그램",
        "런칭 캠페인 - 네이버 플레이스, 블로그, 카페 통합 노출 전략",
        "초기 평판 구축 - 첫 환자들의 긍정 후기 확보 및 관리"
      ],
      results: [
        "개원 3개월 내 신환 200% 증가 (평균 실적)",
        "네이버 지역 검색 상위 노출 달성",
        "온라인 평점 4.5점 이상 유지"
      ],
      icon: Zap,
      color: "blue"
    },
    {
      id: 3,
      emoji: "🔍",
      title: "홈페이지가 검색에 전혀 안 나옵니다",
      concerns: [
        "홈페이지를 만들었는데 구글이나 네이버에서 찾을 수가 없어요",
        "병원명으로 검색해도 다른 사이트들이 먼저 나와요",
        "SEO가 뭔지도 모르겠고, 어떻게 해야 할지 감이 안 와요",
        "홈페이지 제작업체는 만들기만 하고 관리는 안 해줘요"
      ],
      solution: "SEO 최적화 홈페이지 구축",
      process: [
        "SEO 진단 - 현재 홈페이지의 검색엔진 최적화 상태 분석",
        "기술적 SEO 개선 - 사이트 속도, 구조, 메타태그 등 전면 최적화",
        "의료 키워드 전략 - 병원 전문 분야별 핵심 키워드 집중 공략",
        "로컬 SEO 강화 - 지역명 + 진료과목 검색 시 상위 노출 전략",
        "지속적 모니터링 - 검색 순위 추적 및 알고리즘 변화 대응"
      ],
      results: [
        "3개월 내 주요 키워드 네이버/구글 1페이지 진입",
        "홈페이지 방문자 300% 증가",
        "검색을 통한 예약 문의 500% 증가"
      ],
      icon: Search,
      color: "green"
    },
    {
      id: 4,
      emoji: "⏰",
      title: "콘텐츠 만드는 데 시간도 많이 걸리고 비용도 부담됩니다",
      concerns: [
        "의료진이 직접 글 쓰려니 너무 시간이 많이 걸려요",
        "외부 작가에게 맡기면 의료 전문성이 떨어져요",
        "콘텐츠 하나 만드는 데 비용이 너무 많이 들어요",
        "꾸준히 올려야 한다는데 인력도 부족하고 관리도 어려워요"
      ],
      solution: "자동화 콘텐츠 생산 시스템",
      process: [
        "효율적 협업 시스템 - 의료진은 5분 검토만, 나머지는 전문 작가가 담당",
        "콘텐츠 자동화 생산 - 월 30개 콘텐츠를 체계적 워크플로우로 제작",
        "비용 최적화 - 개별 제작 대비 70% 비용 절감된 패키지 서비스",
        "품질 보장 - 의료진 감수 + 의료법 검토 + SEO 최적화까지 원스톱"
      ],
      results: [
        "콘텐츠 제작 시간 95% 단축",
        "콘텐츠 제작 비용 70% 절감",
        "일정한 품질의 전문 콘텐츠 지속 발행"
      ],
      icon: Clock,
      color: "purple"
    },
    {
      id: 5,
      emoji: "💡",
      title: "온라인 평판 관리가 너무 어렵습니다",
      concerns: [
        "네이버, 구글, 카카오맵 등 여러 곳에 흩어진 리뷰 관리가 힘들어요",
        "악성 리뷰가 올라와도 어떻게 대응해야 할지 모르겠어요",
        "좋은 리뷰는 잘 안 올라오고 불만 리뷰만 올라와요",
        "경쟁 병원보다 평점이 낮아서 환자들이 꺼리는 것 같아요"
      ],
      solution: "통합 평판 관리 시스템",
      process: [
        "실시간 모니터링 - 모든 플랫폼의 리뷰를 한 곳에서 통합 관리",
        "자동 알림 시스템 - 새 리뷰 등록 즉시 알림으로 빠른 대응",
        "리뷰 부스팅 - 만족도 높은 환자 대상 리뷰 작성 유도 캠페인",
        "전문 대응 가이드 - 부정 리뷰에 대한 의료법 준수 응답 전략",
        "VOC 분석 - 환자 불만 패턴 분석으로 서비스 개선점 도출"
      ],
      results: [
        "긍정 리뷰 300% 증가",
        "평균 평점 4.8점 달성 및 유지",
        "평판으로 인한 환자 이탈 90% 감소"
      ],
      icon: TrendingUp,
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string, text: string, border: string } } = {
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" },
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
      yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200" }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              병원별 맞춤 솔루션
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              귀하의 병원이 겪고 있는 문제, 리걸케어가 정확히 해결해드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {problemSolutions.map((item, index) => {
              const Icon = item.icon;
              const colors = getColorClasses(item.color);
              
              return (
                <Card key={item.id} className={`border-0 shadow-xl ${colors.border} border-2`}>
                  <CardContent className="p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Problem Side */}
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="text-4xl mr-4">{item.emoji}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">문제 상황 {item.id}</h3>
                            <h4 className="text-xl text-gray-700">{item.title}</h4>
                          </div>
                        </div>
                        
                        <div className="mb-8">
                          <h5 className="font-semibold text-gray-900 mb-4">이런 고민 있으시죠?</h5>
                          <ul className="space-y-3">
                            {item.concerns.map((concern, idx) => (
                              <li key={idx} className="flex items-start">
                                <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{concern}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Solution Side */}
                      <div className={`${colors.bg} p-8 rounded-lg`}>
                        <div className="flex items-center mb-6">
                          <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                            <Icon className={`w-6 h-6 ${colors.text}`} />
                          </div>
                          <div>
                            <div className={`text-sm font-medium ${colors.text} mb-1`}>🎯 리걸케어 솔루션</div>
                            <h5 className="text-xl font-bold text-gray-900">{item.solution}</h5>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h6 className="font-semibold text-gray-900 mb-4">해결 과정:</h6>
                          <div className="space-y-3">
                            {item.process.map((step, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                                  {idx + 1}
                                </div>
                                <span className="text-gray-700 text-sm">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 className="font-semibold text-gray-900 mb-4">결과:</h6>
                          <div className="space-y-2">
                            {item.results.map((result, idx) => (
                              <div key={idx} className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comprehensive Solution Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                종합 솔루션: "All-in-One 병원 마케팅 패키지"
              </h2>
              <p className="text-xl text-blue-100">
                모든 문제를 한 번에 해결하고 싶다면?
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">포함 서비스</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "의료법 준수 콘텐츠 제작 (월 30개)",
                      "SEO 최적화 홈페이지 구축 및 관리",
                      "통합 평판 관리 및 리뷰 부스팅",
                      "실시간 성과 분석 대시보드",
                      "월 1회 전략 미팅 및 리포팅"
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="border-0 shadow-xl bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Target className="w-6 h-6 mr-2" />
                      투자 대비 효과
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">3개월 목표:</span>
                      <Badge variant="secondary">신환 200% 증가, 온라인 노출 500% 증가</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">6개월 목표:</span>
                      <Badge variant="secondary">지역 내 Top 3 병원 온라인 인지도 달성</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">12개월 목표:</span>
                      <Badge variant="secondary">마케팅비 대비 300% ROI 달성</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Alert className="border-yellow-200 bg-yellow-50">
                  <Shield className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-yellow-800">
                    <strong>특별 보장:</strong>
                    <br />• 첫 3개월 내 목표 미달성 시 추가 비용 없이 서비스 연장
                    <br />• 의료법 위반으로 인한 문제 발생 시 전액 책임 보상
                  </AlertDescription>
                </Alert>

                <div className="text-center">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                    종합 패키지 상담받기
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}