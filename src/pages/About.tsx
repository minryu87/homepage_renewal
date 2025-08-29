import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Calendar,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: "김대표",
      role: "대표이사 / 마케팅 전략가",
      experience: "10년",
      specialty: "의료 마케팅 전략 수립, 브랜딩"
    },
    {
      name: "박실장",
      role: "콘텐츠 마케팅 실장",
      experience: "8년",
      specialty: "SEO, 콘텐츠 제작, 의료법 준수"
    },
    {
      name: "이팀장",
      role: "데이터 분석 팀장",
      experience: "7년",
      specialty: "마케팅 데이터 분석, 성과 측정"
    },
    {
      name: "정차장",
      role: "디지털 마케팅 차장",
      experience: "6년",
      specialty: "온라인 광고, 평판 관리"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "리걸케어 창립",
      description: "의료 마케팅 전문 컨설팅 회사로 시작"
    },
    {
      year: "2021",
      title: "첫 100개 병원 파트너십",
      description: "전국 100개 병원과 마케팅 파트너십 체결"
    },
    {
      year: "2022",
      title: "메디컨텐츠 시스템 출시",
      description: "의료법 준수 자동화 콘텐츠 제작 시스템 개발"
    },
    {
      year: "2023",
      title: "업계 최고 성과 달성",
      description: "고객 평균 신환 증가율 250% 기록"
    },
    {
      year: "2024",
      title: "AI 마케팅 솔루션 도입",
      description: "인공지능 기반 개인화 마케팅 서비스 시작"
    },
    {
      year: "2025",
      title: "전국 네트워크 확장",
      description: "500개 파트너 병원, 업계 1위 달성"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "환자 중심 마케팅",
      description: "환자의 입장에서 생각하고, 환자에게 실질적인 도움이 되는 마케팅을 지향합니다."
    },
    {
      icon: CheckCircle,
      title: "의료법 100% 준수",
      description: "의료법을 철저히 준수하면서도 효과적인 마케팅 전략을 제공합니다."
    },
    {
      icon: Award,
      title: "데이터 기반 의사결정",
      description: "모든 마케팅 활동을 데이터로 측정하고 분석하여 지속적으로 개선합니다."
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
              리걸케어 이야기
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              병원 마케팅의 새로운 기준을 만들어가는 우리의 여정
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  우리의 미션
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  환자와 병원이 서로를 찾을 수 있도록 돕는 것. 의료법을 준수하면서도 효과적인 마케팅으로 우수한 의료진과 환자를 연결하는 다리 역할을 합니다.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">비전</h3>
                <p className="text-lg text-gray-600">
                  모든 병원이 온라인에서 환자들에게 쉽게 발견되고, 신뢰받을 수 있는 세상을 만들어가겠습니다.
                </p>
              </div>

              <div className="space-y-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {value.title}
                            </h4>
                            <p className="text-gray-600">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              의료 마케팅 전문가 팀
            </h2>
            <p className="text-xl text-gray-600">
              각 분야의 전문가들이 모여 최고의 서비스를 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">경력 {member.experience}</Badge>
                    <p className="text-sm text-gray-600 mt-3">
                      {member.specialty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              회사 연혁
            </h2>
            <p className="text-xl text-gray-600">
              지속적인 혁신으로 업계를 선도해온 리걸케어의 발자취
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="flex items-center mb-2">
                        <Badge variant="secondary" className="mr-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              리걸케어와 함께 성장하세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              병원 마케팅의 새로운 기준을 함께 만들어갈 파트너를 찾습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  파트너십 문의하기
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link to="/contact">무료 상담 받기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}