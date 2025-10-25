import {
  Sparkles,
  Bot,
  MessageSquare,
  Brain,
  Cpu,
  Lightbulb,
  BookOpen,
  FileText,
  Layers,
  FileCheck,
  Smartphone,
  Globe,
  Code,
  Rocket,
  Users,
  Wrench,
  Server,
  Cloud,
  Wifi,
  Link,
  Eye,
  Target,
  Settings,
  TrendingUp,
  BarChart,
  Database,
  Activity,
  DollarSign,
  Heart,
  ShoppingCart,
  GraduationCap,
  Home,
  Truck,
  Zap,
  Plane,
  Film,
  Utensils,
  Car,
  Map,
  Book,
  Newspaper,
  Calendar,
  Headphones,
  Calculator,
  Star,
  Image,
  Pizza,
  Briefcase,
  Mic,
  Building,
  Award,
  Shield,
  Handshake,
  MapPin,
  Mail,
  UsersRound,
} from 'lucide-react';

export const iconMap = {
  // AI & Tech
  sparkles: Sparkles,
  bot: Bot,
  'message-square': MessageSquare,
  brain: Brain,
  cpu: Cpu,
  lightbulb: Lightbulb,

  // Content & Learning
  'book-open': BookOpen,
  'file-text': FileText,
  layers: Layers,
  'file-check': FileCheck,
  book: Book,
  map: Map,

  // Development
  smartphone: Smartphone,
  globe: Globe,
  code: Code,
  rocket: Rocket,
  server: Server,
  cloud: Cloud,
  wifi: Wifi,
  link: Link,
  eye: Eye,

  // Business
  users: Users,
  'user-group': Users,
  wrench: Wrench,
  target: Target,
  settings: Settings,
  'trending-up': TrendingUp,

  // Data
  'bar-chart': BarChart,
  database: Database,
  activity: Activity,

  // Industries
  'dollar-sign': DollarSign,
  heart: Heart,
  'shopping-cart': ShoppingCart,
  'graduation-cap': GraduationCap,
  home: Home,
  truck: Truck,
  zap: Zap,
  plane: Plane,
  film: Film,
  utensils: Utensils,
  car: Car,

  // Resources
  newspaper: Newspaper,
  calendar: Calendar,
  headphones: Headphones,
  calculator: Calculator,
  star: Star,
  image: Image,

  // Custom/Food
  pizza: Pizza,
  drumstick: Utensils,
  'pizza-slice': Pizza,
  sofa: Home,
  briefcase: Briefcase,
  fuel: Zap,
  mic: Mic,
  bank: DollarSign,

  // About/Company Icons
  building: Building,
  award: Award,
  shield: Shield,
  handshake: Handshake,
  'map-pin': MapPin,
  mail: Mail,
  'users-round': UsersRound,
  cog: Settings,
};

export function getIcon(iconName: string, className?: string) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} />;
}
