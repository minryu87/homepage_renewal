import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Globe, 
  Star, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Target,
  Shield,
  Zap,
  Calendar,
  TrendingUp,
  Eye,
  Search,
  MessageSquare,
  Activity,
  Database,
  Settings,
  Monitor,
  Clock
} from 'lucide-react';
import { useState, useEffect } from 'react';

const MarketingSolutions = () => {
  const [activeTab, setActiveTab] = useState("medicontent");
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});

  const processSteps = [
    {
      step: "1",
      title: "무료 진단",
      description: "현재 온라인 마케팅 현황 및 문제점 분석",
      duration: "1주"
    },
    {
      step: "2", 
      title: "맞춤 전략 수립",
      description: "병원 특성 및 목표에 맞는 종합 전략 기획",
      duration: "1주"
    },
    {
      step: "3",
      title: "시스템 구축 및 실행", 
      description: "필요 도구 세팅 및 콘텐츠 제작 시작",
      duration: "2주"
    },
    {
      step: "4",
      title: "지속적 최적화",
      description: "성과 분석 기반 전략 개선 및 확장", 
      duration: "ongoing"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues({
        medicontent: 95,
        website: 99,
        reputation: 88,
        analytics: 92
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [activeTab]);

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
              머신러닝과 빅데이터 분석을 활용한 의료법 준수 마케팅부터 환자 유입까지, 
              병원 온라인 마케팅의 모든 것을 기술적으로 해결합니다.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200">
              무료 상담 시작하기
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">AI 기반 핵심 서비스</h2>
              <p className="text-xl text-gray-600">머신러닝과 데이터 분석을 활용한 4가지 기술 기반 솔루션</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-12 bg-gray-100 p-2 rounded-xl">
                <TabsTrigger 
                  value="medicontent" 
                  className="text-sm sm:text-base transition-all duration-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  메디컨텐츠 시스템
                </TabsTrigger>
                <TabsTrigger 
                  value="website" 
                  className="text-sm sm:text-base transition-all duration-300 data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  홈페이지 제작
                </TabsTrigger>
                <TabsTrigger 
                  value="reputation" 
                  className="text-sm sm:text-base transition-all duration-300 data-[state=active]:bg-yellow-600 data-[state=active]:text-white"
                >
                  <Star className="w-4 h-4 mr-2" />
                  평판 관리
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="text-sm sm:text-base transition-all duration-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  데이터 분석
                </TabsTrigger>
              </TabsList>

              {/* Service 1: MediContent System - FINAL 완전 재작성 */}
              <TabsContent value="medicontent" className="mt-8">
                {/* Header Section (중앙 정렬) */}
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 mx-auto">
                    <FileText className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">AI 기반 메디컨텐츠 시스템</h3>
                  <p className="text-xl text-blue-600 font-medium max-w-2xl mx-auto">
                    자연어 처리와 머신러닝을 활용한 자동화된 의료 콘텐츠 제작
                  </p>
                </div>

                {/* 3-Column Grid - MUST BE 3 COLUMNS (lg:grid-cols-3) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {/* 카드 1: 콘텐츠 전략 수립 및 작성 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Target className="w-6 h-6 text-blue-600 mr-3" />
                        콘텐츠 전략 수립 및 작성
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 콘텐츠 분류 및 최적화 전략</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 의료 콘텐츠 자동 생성</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">월 20-30개 AI 최적화 고품질 콘텐츠</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 카드 2: 콘텐츠 SEO 최적화 - MISSING CARD */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Search className="w-6 h-6 text-blue-600 mr-3" />
                        콘텐츠 SEO 최적화
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 의료 키워드 분석 및 최적화</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 검색 알고리즘 예측 대응</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 경쟁 분석 및 자동 차별화 전략</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 카드 3: 의료법 준수 검토 - MISSING CARD */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Shield className="w-6 h-6 text-blue-600 mr-3" />
                        의료법 준수 검토
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 의료광고법 자동 검토 시스템</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 전문의 검토 프로세스</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 리스크 사전 감지 및 차단 시스템</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* 2-Column Grid (하단) - 제공 도구 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 왼쪽 카드: 제공 도구 */}
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="w-6 h-6 text-blue-600 mr-3" />
                        제공 도구
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                        <Database className="w-8 h-8 text-blue-600 mr-3" />
                        <span>AI 기반 콘텐츠 관리 시스템</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                        <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                        <span>머신러닝 기반 콘텐츠 스케줄링</span>
                      </div>
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                        <Activity className="w-8 h-8 text-blue-600 mr-3" />
                        <span>AI 실시간 성과 분석 대시보드</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 오른쪽 카드: 성과 지표 */}
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">월 20-30개</div>
                      <div className="text-lg text-gray-700 mb-4">AI 최적화 의료 콘텐츠</div>
                      <Progress value={progressValues.medicontent || 0} className="h-3" />
                      <div className="text-sm text-gray-500 mt-4">
                        AI 기반 자동화 시스템으로 안정적 제작
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Service 2: Website - 완전 재작성 */}
              <TabsContent value="website" className="mt-8">
                {/* Header Section (중앙 정렬) */}
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 mx-auto">
                    <Globe className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">AI 기반 홈페이지 제작 및 모니터링</h3>
                  <p className="text-xl text-green-600 font-medium max-w-2xl mx-auto">
                    머신러닝 기반 SEO 최적화와 실시간 성과 분석
                  </p>
                </div>

                {/* 3-Column Grid (mb-12) - 제공 서비스 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {/* 카드 1: 홈페이지 제작 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Monitor className="w-6 h-6 text-green-600 mr-3" />
                        홈페이지 제작
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 의료기관 특화 UX/UI 설계</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 반응형 웹사이트 최적화</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 예약 시스템 및 환자 동선 분석</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 카드 2: SEO 기반 웹사이트 구축 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Search className="w-6 h-6 text-green-600 mr-3" />
                        SEO 기반 웹사이트 구축
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 검색엔진 최적화 구조 설계</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 로컬 SEO 최적화</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 페이지 속도 및 사용성 분석</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 카드 3: 지속적 모니터링 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Activity className="w-6 h-6 text-green-600 mr-3" />
                        지속적 모니터링
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 실시간 웹사이트 성능 분석</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 사용자 행동 분석</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 전환율 최적화 제안</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* 2-Column Grid (하단) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 기술 특징 카드 */}
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="w-6 h-6 text-green-600 mr-3" />
                        기술 특징
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                        <Settings className="w-8 h-8 text-green-600 mr-3" />
                        <span>AI 기반 의료법 준수 구조</span>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                        <Shield className="w-8 h-8 text-green-600 mr-3" />
                        <span>AI 개인정보보호 자동화</span>
                      </div>
                      <div className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                        <Clock className="w-8 h-8 text-green-600 mr-3" />
                        <span>AI 24/7 실시간 모니터링</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 성과 지표 카드 */}
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                      <div className="text-lg text-gray-700 mb-4">웹사이트 가동률</div>
                      <Progress value={progressValues.website || 0} className="h-3" />
                      <div className="text-sm text-gray-500 mt-4">
                        안정적인 웹사이트 운영 보장
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Service 3: Reputation - 완전 재작성 */}
              <TabsContent value="reputation" className="mt-8">
                {/* Header Section (중앙 정렬) */}
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 mx-auto">
                    <Star className="w-10 h-10 text-yellow-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">AI 기반 평판 관리 및 리뷰부스팅</h3>
                  <p className="text-xl text-yellow-600 font-medium max-w-2xl mx-auto">
                    자연어 처리와 감정 분석을 활용한 지능형 평판 관리
                  </p>
                </div>

                {/* 3-Column Grid - 제공 서비스 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {/* 카드 1: 온라인 평판 관리 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Eye className="w-6 h-6 text-yellow-600 mr-3" />
                        온라인 평판 관리
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 다채널 리뷰 통합 모니터링</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 평판 위기 사전 감지</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 네거티브 리뷰 자동 대응 시스템</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 카드 2: 리뷰부스팅 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <TrendingUp className="w-6 h-6 text-yellow-600 mr-3" />
                        리뷰부스팅
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 긍정 리뷰 유도 캠페인</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 만족도 예측 시스템</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 리뷰 응답 템플릿 자동 생성</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 카드 3: 고객 VOC 분석 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <MessageSquare className="w-6 h-6 text-yellow-600 mr-3" />
                        고객 VOC 분석
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 환자 후기 감정 분석</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 서비스 개선점 도출</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 경쟁 병원 평판 비교 분석</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* 2-Column Grid (하단) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 분석 도구 카드 */}
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="w-6 h-6 text-yellow-600 mr-3" />
                        분석 도구
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                        <TrendingUp className="w-8 h-8 text-yellow-600 mr-3" />
                        <span>AI 리뷰부스터 (ReviewBooster) 플랫폼</span>
                      </div>
                      <div className="flex items-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                        <MessageSquare className="w-8 h-8 text-yellow-600 mr-3" />
                        <span>AI 감정 분석 기반 VOC 인사이트</span>
                      </div>
                      <div className="flex items-center p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                        <Activity className="w-8 h-8 text-yellow-600 mr-3" />
                        <span>AI 실시간 알림 및 자동 대응 시스템</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 성과 지표 카드 */}
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-yellow-100">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div className="text-4xl font-bold text-yellow-600 mb-2">4.8점</div>
                      <div className="text-lg text-gray-700 mb-4">평균 리뷰 평점 달성</div>
                      <Progress value={progressValues.reputation || 0} className="h-3" />
                      <div className="text-sm text-gray-500 mt-4">
                        전문 평판 관리를 통한 안정적인 평점 유지
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Service 4: Analytics - 완전 재작성 */}
              <TabsContent value="analytics" className="mt-8">
                {/* Header Section (중앙 정렬) */}
                <div className="text-center mb-12">
                  <div className="w-20 h-20 bg-purple-100 rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300 mx-auto">
                    <BarChart3 className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">AI 기반 빅데이터 성과 분석</h3>
                  <p className="text-xl text-purple-600 font-medium max-w-2xl mx-auto">
                    머신러닝과 예측 분석을 활용한 지능형 마케팅 최적화
                  </p>
                </div>

                {/* 3-Column Grid - 제공 서비스 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {/* 카드 1: 통합 데이터 분석 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <BarChart3 className="w-6 h-6 text-purple-600 mr-3" />
                        통합 데이터 분석
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 멀티채널 마케팅 성과 분석</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 환자 여정 분석</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI ROI 예측 및 최적화 제안</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 카드 2: 실시간 모니터링 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Activity className="w-6 h-6 text-purple-600 mr-3" />
                        실시간 모니터링
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 환자 여정 시각화</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 채널별 성과 분석</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 예측 분석 기반 전략 제안</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* 카드 3: 제공 리포트 */}
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <FileText className="w-6 h-6 text-purple-600 mr-3" />
                        제공 리포트
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 기반 월간 종합 성과 분석 리포트</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI 실시간 대시보드 접근 권한</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">머신러닝 기반 맞춤형 KPI 설정</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* 2-Column Grid (하단) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 분석 도구 카드 */}
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="w-6 h-6 text-purple-600 mr-3" />
                        분석 도구
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                        <BarChart3 className="w-8 h-8 text-purple-600 mr-3" />
                        <span>AI 통합 분석 플랫폼</span>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                        <Activity className="w-8 h-8 text-purple-600 mr-3" />
                        <span>머신러닝 예측 분석 엔진</span>
                      </div>
                      <div className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                        <Settings className="w-8 h-8 text-purple-600 mr-3" />
                        <span>AI 실시간 알림 시스템</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* 성과 지표 카드 */}
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
                    <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">300%</div>
                      <div className="text-lg text-gray-700 mb-4">AI 기반 평균 ROI 달성</div>
                      <Progress value={progressValues.analytics || 0} className="h-3" />
                      <div className="text-sm text-gray-500 mt-4">
                        AI 기반 마케팅 최적화를 통한 높은 투자 수익률
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">서비스 프로세스</h2>
            <p className="text-xl text-gray-600">체계적인 4단계 프로세스로 확실한 결과를 만들어냅니다</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketingSolutions;