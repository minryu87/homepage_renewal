import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Download, 
  Calendar, 
  Users, 
  FileText,
  Video,
  BookOpen,
  ExternalLink
} from 'lucide-react';

export default function Resources() {
  const freeResources = [
    {
      icon: FileText,
      title: "병원 마케팅 체크리스트",
      description: "온라인 마케팅 시작 전 필수 점검 사항 15가지",
      format: "PDF",
      downloads: "1,234회"
    },
    {
      icon: BookOpen,
      title: "의료법 준수 가이드북",
      description: "의료 광고 시 꼭 알아야 할 법적 기준과 주의사항",
      format: "PDF",
      downloads: "987회"
    },
    {
      icon: FileText,
      title: "SEO 최적화 템플릿",
      description: "병원 홈페이지 검색 순위 향상을 위한 실무 템플릿",
      format: "Excel",
      downloads: "756회"
    },
    {
      icon: FileText,
      title: "콘텐츠 캘린더 템플릿",
      description: "월간 콘텐츠 계획 수립을 위한 캘린더 템플릿",
      format: "Excel",
      downloads: "645회"
    }
  ];

  const webinars = [
    {
      title: "2025년 병원 마케팅 트렌드 전망",
      date: "2025-02-15",
      time: "14:00-15:30",
      speaker: "김대표 (리걸케어)",
      status: "예정",
      attendees: "127명 신청"
    },
    {
      title: "소규모 병원을 위한 저비용 고효율 마케팅",
      date: "2025-01-20",
      time: "14:00-15:30",
      speaker: "박실장 (리걸케어)",
      status: "완료",
      attendees: "234명 참석"
    },
    {
      title: "의료법 위반 없는 안전한 콘텐츠 마케팅",
      date: "2024-12-18",
      time: "14:00-15:30",
      speaker: "이변호사 (법무법인 메디)",
      status: "완료",
      attendees: "189명 참석"
    }
  ];

  const partnerships = [
    {
      title: "병원 마케팅 에이전시 파트너십",
      description: "지역별 마케팅 에이전시와의 협력 파트너십 프로그램",
      benefits: ["수익 쉐어링", "전문 교육 제공", "마케팅 도구 지원"]
    },
    {
      title: "의료진 강사 파트너십",
      description: "의료 전문성을 가진 강사진과의 콘텐츠 제작 파트너십",
      benefits: ["콘텐츠 수익 분배", "전문성 인증", "브랜딩 지원"]
    },
    {
      title: "IT 솔루션 파트너십",
      description: "병원 관리 시스템 및 마케팅 도구 개발사와의 협력",
      benefits: ["기술 연동 지원", "공동 마케팅", "레퍼런스 제공"]
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
              무료 리소스 & 파트너십
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              병원 마케팅에 도움이 되는 다양한 자료와 협력 기회를 제공합니다
            </p>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              무료 다운로드 자료
            </h2>
            <p className="text-xl text-gray-600">
              실무에 바로 활용할 수 있는 마케팅 자료를 무료로 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {freeResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{resource.format}</Badge>
                        <span className="text-sm text-gray-500">{resource.downloads}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <CardDescription className="text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      무료 다운로드
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              웨비나 & 세미나
            </h2>
            <p className="text-xl text-gray-600">
              업계 전문가들과 함께하는 온라인 교육 프로그램
            </p>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <Video className="w-5 h-5 text-blue-600 mr-2" />
                        <Badge 
                          variant={webinar.status === '예정' ? 'default' : 'secondary'}
                          className="mr-3"
                        >
                          {webinar.status}
                        </Badge>
                        <span className="text-sm text-gray-500">{webinar.attendees}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {webinar.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{webinar.date} {webinar.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>강사: {webinar.speaker}</span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      {webinar.status === '예정' ? (
                        <Button>
                          신청하기
                        </Button>
                      ) : (
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          다시보기
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              파트너십 프로그램
            </h2>
            <p className="text-xl text-gray-600">
              함께 성장할 파트너를 찾습니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{partnership.title}</CardTitle>
                  <CardDescription className="text-base">
                    {partnership.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">혜택</h4>
                    <ul className="space-y-2">
                      {partnership.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">파트너십 문의</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}