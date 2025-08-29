import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  HelpCircle, 
  MessageSquare, 
  Book, 
  Settings,
  Search,
  Phone,
  Mail,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function Support() {
  const supportCategories = [
    {
      icon: Book,
      title: "사용자 매뉴얼",
      description: "서비스 이용 방법과 기본 설정 가이드",
      articles: "25개 문서"
    },
    {
      icon: Settings,
      title: "기술 지원",
      description: "시스템 오류 및 기술적 문제 해결",
      articles: "15개 문서"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "자주 묻는 질문과 답변",
      articles: "40개 문서"
    },
    {
      icon: MessageSquare,
      title: "1:1 문의",
      description: "개별 상담이 필요한 경우",
      articles: "실시간 지원"
    }
  ];

  const popularArticles = [
    {
      title: "메디컨텐츠 시스템 초기 설정 방법",
      category: "매뉴얼",
      views: "1,234회",
      helpful: 98
    },
    {
      title: "콘텐츠 승인 프로세스 이해하기",
      category: "매뉴얼",
      views: "987회",
      helpful: 95
    },
    {
      title: "데이터 대시보드 활용법",
      category: "매뉴얼",
      views: "756회",
      helpful: 92
    },
    {
      title: "로그인 문제 해결하기",
      category: "기술지원",
      views: "645회",
      helpful: 88
    },
    {
      title: "청구서 및 결제 관련 문의",
      category: "FAQ",
      views: "534회",
      helpful: 90
    }
  ];

  const ticketCategories = [
    "기술적 문제",
    "서비스 이용 문의",
    "계정/결제 관련",
    "기능 개선 제안",
    "기타"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              고객 지원 센터
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              궁금한 점이 있으시면 언제든지 문의해 주세요. 빠르고 정확한 답변을 드리겠습니다.
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="궁금한 내용을 검색해보세요..." 
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="outline">{category.articles}</Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles & Support Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="popular" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="popular">인기 문서</TabsTrigger>
                <TabsTrigger value="manual">사용자 매뉴얼</TabsTrigger>
                <TabsTrigger value="contact">1:1 문의</TabsTrigger>
              </TabsList>
              
              <TabsContent value="popular" className="mt-8">
                <div className="space-y-4">
                  {popularArticles.map((article, index) => (
                    <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <Badge variant="secondary" className="mr-3">{article.category}</Badge>
                              <span className="text-sm text-gray-500">{article.views}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                              {article.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <span>도움됨 {article.helpful}%</span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="manual" className="mt-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <Book className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">사용자 매뉴얼</h3>
                    <p className="text-gray-600 mb-6">
                      리걸케어 서비스 이용에 필요한 모든 정보를 담은 상세한 가이드입니다.
                    </p>
                    <Button>매뉴얼 다운로드</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="contact" className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle>1:1 문의 티켓 생성</CardTitle>
                      <CardDescription>
                        개별적인 도움이 필요하시면 문의 티켓을 생성해 주세요.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="subject">제목 *</Label>
                        <Input id="subject" placeholder="문의 제목을 입력해주세요" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="category">카테고리</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="문의 유형을 선택해주세요" />
                          </SelectTrigger>
                          <SelectContent>
                            {ticketCategories.map((category, index) => (
                              <SelectItem key={index} value={category.toLowerCase()}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="priority">우선순위</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="우선순위를 선택해주세요" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">낮음</SelectItem>
                            <SelectItem value="medium">보통</SelectItem>
                            <SelectItem value="high">높음</SelectItem>
                            <SelectItem value="urgent">긴급</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">상세 내용 *</Label>
                        <Textarea 
                          id="description" 
                          placeholder="문제 상황을 자세히 설명해주세요..."
                          rows={6}
                        />
                      </div>

                      <Button className="w-full">티켓 생성하기</Button>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Phone className="w-5 h-5 text-blue-600 mr-3" />
                          <h3 className="text-lg font-semibold">전화 지원</h3>
                        </div>
                        <p className="text-gray-600 mb-2">02-1234-5678</p>
                        <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Mail className="w-5 h-5 text-blue-600 mr-3" />
                          <h3 className="text-lg font-semibold">이메일 지원</h3>
                        </div>
                        <p className="text-gray-600 mb-2">support@legalcare.co.kr</p>
                        <p className="text-sm text-gray-500">24시간 접수, 24시간 내 답변</p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-blue-50">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Clock className="w-5 h-5 text-blue-600 mr-3" />
                          <h3 className="text-lg font-semibold">응답 시간</h3>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>일반 문의</span>
                            <span className="font-medium">24시간 내</span>
                          </div>
                          <div className="flex justify-between">
                            <span>기술 지원</span>
                            <span className="font-medium">4시간 내</span>
                          </div>
                          <div className="flex justify-between">
                            <span>긴급 문의</span>
                            <span className="font-medium">1시간 내</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}