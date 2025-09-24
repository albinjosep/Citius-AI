import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { 
  Brain, 
  Database, 
  MessageSquare, 
  Video, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  PlayCircle,
  Menu,
  X
} from 'lucide-react';
import { mockData } from '../data/mock';

export const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDemoRequest = () => {
    // Mock demo request
    console.log('Demo requested for:', email);
    alert('Demo request submitted! We\'ll contact you soon.');
    setEmail('');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://customer-assets.emergentagent.com/job_ai-enterprise-hub/artifacts/vkm479ax_Screenshot%202025-09-24%20185648.png"
                alt="Citius AI"
                className="h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              <Button variant="outline" className="mr-2 border-gray-600 text-white hover:bg-gray-800">Sign In</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Demo</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-white hover:bg-gray-800"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Sliding Menu */}
        <div className={`md:hidden fixed inset-y-0 right-0 z-50 w-72 bg-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <img 
              src="https://customer-assets.emergentagent.com/job_ai-enterprise-hub/artifacts/vkm479ax_Screenshot%202025-09-24%20185648.png"
              alt="Citius AI"
              className="h-8 w-auto"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white hover:bg-gray-800"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="flex flex-col p-6 space-y-6">
            <a href="#features" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white transition-colors text-lg">Features</a>
            <a href="#benefits" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white transition-colors text-lg">Benefits</a>
            <a href="#testimonials" onClick={toggleMobileMenu} className="text-gray-300 hover:text-white transition-colors text-lg">Testimonials</a>
            <Separator className="bg-gray-800" />
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 w-full">Sign In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">Get Demo</Button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={toggleMobileMenu}
          />
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-900/30 text-blue-300 border border-blue-700 hover:bg-blue-900/40" variant="secondary">
              AI-native systems of record are transforming sales.
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">The Next Era of Sales</span> is Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop managing scattered data. Citius AI integrates Zoom calls, Slack messages, and financial reports into one intelligent system that auto-updates customer profiles and predicts their next move.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <div className="flex items-center gap-3 bg-gray-900 rounded-lg border border-gray-700 p-3 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="flex-1 outline-none text-white bg-transparent placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                onClick={handleDemoRequest}
              >
                Get Free Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Setup in minutes
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multimodal Intelligence for Modern Sales
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While traditional CRMs store static text, Citius AI processes video, audio, documents, and conversations to build living customer profiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mockData.features.map((feature, index) => (
              <Card key={index} className="border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-900/50 flex items-center justify-center mb-4 border border-blue-700">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Integration showcase */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Seamless Integration with Your Existing Tools
              </h3>
              <p className="text-gray-300 text-lg">
                Connect your entire tech stack in minutes, not months
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {mockData.integrations.map((integration, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center shadow-sm hover:shadow-md hover:bg-gray-750 transition-all">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{integration.icon}</span>
                  </div>
                  <h4 className="font-medium text-white">{integration.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-green-900/30 text-green-300 border border-green-700 hover:bg-green-900/40" variant="secondary">
                The Golden Era of Sales
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                AI Won't Replace Salespeople. It Will Make Them Unstoppable.
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Far from dealing a death blow to sales teams, AI-native CRMs usher in a golden era where reps focus on high-touch, consultative selling while AI handles the administrative work.
              </p>
              
              <div className="space-y-6">
                {mockData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-900/50 border border-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">ROI Calculator</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                  <span className="text-gray-300">Time saved per rep/day</span>
                  <span className="font-semibold text-blue-400">3.5 hours</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                  <span className="text-gray-300">Deal closure rate increase</span>
                  <span className="font-semibold text-blue-400">23%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                  <span className="text-gray-300">Customer insights improvement</span>
                  <span className="font-semibold text-blue-400">4x better</span>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
                  <span className="font-semibold text-white">Annual ROI</span>
                  <span className="font-bold text-2xl text-blue-400">340%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              SMBs Are Already Winning with Citius AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how forward-thinking companies are using AI-native CRM to outmaneuver enterprise competitors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-700 bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future of Sales?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join the AI revolution. Start your free trial today and see why SMBs are choosing Citius AI over enterprise incumbents.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch 3-Min Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              Start Free Trial
            </Button>
          </div>
          
          <p className="text-blue-100 text-sm">
            No commitment • Cancel anytime • Enterprise security
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_ai-enterprise-hub/artifacts/vkm479ax_Screenshot%202025-09-24%20185648.png"
                  alt="Citius AI"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6">
                The AI-native CRM that understands your customers better than traditional solutions ever could.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm">𝕏</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Resources</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-gray-800 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2025 Citius AI. All rights reserved.</p>
            <p>Built for the future of enterprise sales.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};