import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

export default function Blog() {
  const categories = [
    {
      name: "병원 마케팅 트렌드",
      posts: [
        "2025년 병원 온라인 마케팅 트렌드 10가지",
        "환자 여정 변화와 디지털 마케팅 대응 전략",
        "의료법 개정에 따른 마케팅 가이드라인"
      ]
    },
    {
      name: "성공 사례 & 인사이트",
      posts: [
        "소규모 치과, 3개월만에 신환 200% 증가 비법",
        "성형외과 온라인 평판 관리 성공사례",
        "한의원의 네이버 SEO 최적화 전략"
      ]
    },
    {
      name: "마케팅 노하우",
      posts: [
        "병원 블로그 포스팅, 이렇게 써야 효과적이다",
        "네이버 플레이스 최적화 완벽 가이드",
        "의료 콘텐츠 제작시 피해야 할 5가지 실수"
      ]
    },
    {
      name: "데이터 & 분석",
      posts: [
        "병원 마케팅 KPI 설정 가이드",
        "GA4로 병원 웹사이트 분석하는 법",
        "리뷰 데이터로 읽는 환자 만족도 트렌드"
      ]
    },
    {
      name: "업계 소식",
      posts: [
        "의료 광고 정책 변화 소식",
        "병원 마케팅 관련 법규 업데이트",
        "해외 메디컬 마케팅 동향"
      ]
    }
  ];

  const featuredPosts = [
    {
      title: "2025년 병원 온라인 마케팅 트렌드 10가지",
      excerpt: "새해를 맞아 병원 마케팅 업계에서 주목해야 할 주요 트렌드들을 정리했습니다. AI 기반 개인화 마케팅부터 의료법 준수 자동화까지...",
      category: "트렌드",
      date: "2025-01-15",
      author: "리걸케어 편집팀",
      readTime: "5분"
    },
    {
      title: "소규모 치과, 3개월만에 신환 200% 증가 비법",
      excerpt: "지방 소도시의 작은 치과의원이 어떻게 3개월 만에 신환을 200% 늘렸는지, 그 구체적인 전략과 실행 과정을 공개합니다...",
      category: "성공사례",
      date: "2025-01-10",
      author: "김마케팅 컨설턴트",
      readTime: "7분"
    },
    {
      title: "병원 블로그 포스팅, 이렇게 써야 효과적이다",
      excerpt: "환자들이 실제로 검색하는 키워드를 분석하고, 의료법을 준수하면서도 효과적인 블로그 콘텐츠를 작성하는 방법을 알아보세요...",
      category: "노하우",
      date: "2025-01-05",
      author: "박콘텐츠 전문가",
      readTime: "6분"
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
              병원 마케팅 인사이트
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              의료 마케팅 전문가들이 전하는 최신 트렌드와 실무 노하우
            </p>
            
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="블로그 검색..." 
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">추천 포스트</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime} 읽기</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">카테고리별 포스트</h2>
          </div>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.posts.map((post, postIndex) => (
                    <Card key={postIndex} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                          {post}
                        </h4>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>최근 게시</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              마케팅 인사이트를 이메일로 받아보세요
            </h2>
            <p className="text-xl mb-8 opacity-90">
              매주 새로운 마케팅 트렌드와 실무 팁을 정리해서 보내드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="이메일 주소" 
                className="bg-white text-gray-900"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                구독하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}