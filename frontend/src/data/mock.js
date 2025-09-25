import { 
  Brain, 
  Database, 
  MessageSquare, 
  Video, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield
} from 'lucide-react';
import React from 'react';

export const mockData = {
  features: [
    {
      icon: <Video className="h-6 w-6 text-blue-600" />,
      title: "Multimodal Data Processing",
      description: "Automatically analyze Zoom call recordings, extract key insights, sentiment, and action items. Turn conversations into structured customer intelligence."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Smart Communication Sync",
      description: "Monitor Slack channels, emails, and chat conversations. AI understands context and updates customer profiles with relevant interactions in real-time."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Financial Intelligence",
      description: "Connect financial reports, invoices, and payment data. Predict customer health, identify upsell opportunities, and forecast revenue with AI precision."
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-600" />,
      title: "Predictive Customer Profiles",
      description: "AI continuously updates customer profiles based on all interactions. Know their preferences, pain points, and buying signals before your next call."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Sales Acceleration",
      description: "Get AI-powered recommendations for next best actions, optimal outreach timing, and personalized messaging that converts prospects faster."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, GDPR ready, and end-to-end encryption. Your sensitive data stays protected and private."
    }
  ],

  integrations: [
    {
      name: "Zoom",
      icon: "🎥"
    },
    {
      name: "Slack",
      icon: "#️⃣"
    },
    {
      name: "QuickBooks",
      icon: "💰"
    },
    {
      name: "Gmail",
      icon: "📧"
    },
    {
      name: "HubSpot",
      icon: "🧲"
    },
    {
      name: "Calendly",
      icon: "🗓️"
    },
    {
      name: "Salesforce",
      icon: "⚡"
    },
    {
      name: "Pipedrive",
      icon: "📈"
    },
    {
      name: "Zendesk",
      icon: "🎯"
    },
    {
      name: "LinkedIn",
      icon: "🔗"
    }
  ],

  benefits: [
    {
      title: "3.5+ Hours Saved Per Rep Daily",
      description: "Eliminate manual data entry, note-taking, and profile updates. AI does the administrative work while your team focuses on selling."
    },
    {
      title: "23% Higher Deal Closure Rate",
      description: "With complete customer context and AI insights, reps have the intelligence they need to close more deals faster."
    },
    {
      title: "4x Better Customer Understanding",
      description: "Multimodal AI captures nuances that traditional CRMs miss. Understand customer sentiment, urgency, and decision-making patterns."
    },
    {
      title: "Shorter Sales Cycles",
      description: "AI identifies buying signals early and recommends the optimal next steps to accelerate deals through your pipeline."
    }
  ],

  testimonials: [
    {
      name: "Sarah Chen",
      role: "VP Sales",
      company: "TechFlow Solutions",
      quote: "Citius AI transformed how we understand our customers. We're closing 30% more deals because we finally have the full picture of each prospect."
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "GrowthLab",
      quote: "As a 50-person company, we couldn't afford enterprise CRM complexity. Citius AI gives us enterprise intelligence at SMB pricing and simplicity."
    },
    {
      name: "Emily Watson",
      role: "Sales Director",
      company: "InnovateNow",
      quote: "The AI insights are incredible. It caught buying signals we would have missed and recommended the perfect timing for our biggest deal this quarter."
    }
  ],

  stats: [
    {
      value: "3.5hrs",
      label: "Time saved daily per rep"
    },
    {
      value: "23%",
      label: "Increase in deal closure"
    },
    {
      value: "4x",
      label: "Better customer insights"
    },
    {
      value: "340%",
      label: "Average annual ROI"
    }
  ]
};