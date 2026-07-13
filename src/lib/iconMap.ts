import {
  Globe, Code2, Smartphone, Cloud, Layers, Check, Mail, Phone, MapPin, Clock, Send, CheckCircle,
  LayoutTemplate, Cpu, Database, Building2, LineChart, Network, Users, Wifi, Activity, HeartPulse,
  ShoppingCart, GraduationCap, Briefcase, Building, PiggyBank, TrendingUp, Landmark, ShieldCheck,
  Search, MessageSquare,
  Target, Rocket, Trophy, Heart, Settings, PenTool, Lightbulb, Zap, Monitor
} from 'lucide-react';

export const IconMap: Record<string, any> = {
  Globe, Code2, Smartphone, Cloud, Layers, Check, Mail, Phone, MapPin, Clock, Send, CheckCircle,
  LayoutTemplate, Cpu, Database, Building2, LineChart, Network, Users, Wifi, Activity, HeartPulse,
  ShoppingCart, GraduationCap, Briefcase, Building, PiggyBank, TrendingUp, Landmark, ShieldCheck,
  Search, MessageSquare,
  Target, Rocket, Trophy, Heart, Settings, PenTool, Lightbulb, Zap, Monitor
};

export function getIcon(name: string | any, fallback: any = Layers) {
  if (typeof name === 'string') {
    return IconMap[name] || fallback;
  }
  return name || fallback;
}
