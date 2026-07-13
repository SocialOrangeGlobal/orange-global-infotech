import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import { Code2 } from 'lucide-react';

const techNameMap: Record<string, string> = {
  'react': 'SiReact',
  'node.js': 'SiNodedotjs',
  'nodejs': 'SiNodedotjs',
  'postgresql': 'SiPostgresql',
  'postgres': 'SiPostgresql',
  'mongodb': 'SiMongodb',
  'next.js': 'SiNextdotjs',
  'nextjs': 'SiNextdotjs',
  'typescript': 'SiTypescript',
  'javascript': 'SiJavascript',
  'tailwind css': 'SiTailwindcss',
  'tailwindcss': 'SiTailwindcss',
  'tailwind': 'SiTailwindcss',
  'python': 'SiPython',
  'docker': 'SiDocker',
  'aws': 'SiAmazon',
  'vue': 'SiVuedotjs',
  'vue.js': 'SiVuedotjs',
  'angular': 'SiAngular',
  'java': 'FaJava',
  'php': 'SiPhp',
  'laravel': 'SiLaravel',
  'html': 'SiHtml5',
  'html5': 'SiHtml5',
  'css': 'SiCss3',
  'css3': 'SiCss3',
  'git': 'SiGit',
  'github': 'SiGithub',
  'firebase': 'SiFirebase',
  'supabase': 'SiSupabase',
  'redis': 'SiRedis',
  'mysql': 'SiMysql',
  'graphql': 'SiGraphql',
  'figma': 'SiFigma',
  'express': 'SiExpress',
  'express.js': 'SiExpress',
  'spring boot': 'SiSpringboot',
  'nestjs': 'SiNestjs',
  'nest.js': 'SiNestjs',
  'android': 'SiAndroid',
  'ios': 'SiIos',
  'flutter': 'SiFlutter',
  'react native': 'SiReact',
  'kubernetes': 'SiKubernetes',
  'gcp': 'SiGooglecloud',
  'azure': 'SiMicrosoftazure',
  'rust': 'SiRust',
  'go': 'SiGo',
  'golang': 'SiGo',
  'swift': 'SiSwift',
  'kotlin': 'SiKotlin',
  'wordpress': 'SiWordpress',
  'stripe': 'SiStripe',
  'solidity': 'SiSolidity',
  'ethereum': 'SiEthereum',
  'prisma': 'SiPrisma',
  'framer motion': 'SiFramer',
  'framer': 'SiFramer',
  'vercel': 'SiVercel',
  'gsap': 'SiGreensock',
  'react router': 'SiReactrouter',
  'redux': 'SiRedux',
  'material ui': 'SiMui',
  'mui': 'SiMui',
  'chakra ui': 'SiChakraui',
  'bootstrap': 'SiBootstrap',
  'sass': 'SiSass',
  'vite': 'SiVite',
  'jest': 'SiJest',
  'cypress': 'SiCypress',
  'apollo': 'SiApollographql',
  'sanity': 'SiSanity',
  'strapi': 'SiStrapi',
  'contentful': 'SiContentful',
  'netlify': 'SiNetlify',
  'heroku': 'SiHeroku'
};

const techColorMap: Record<string, string> = {
  'SiReact': '#61DAFB',
  'SiNodedotjs': '#339933',
  'SiPostgresql': '#4169E1',
  'SiMongodb': '#47A248',
  'SiNextdotjs': '#000000',
  'SiTypescript': '#3178C6',
  'SiJavascript': '#F7DF1E',
  'SiTailwindcss': '#06B6D4',
  'SiPython': '#3776AB',
  'SiDocker': '#2496ED',
  'SiAmazon': '#FF9900',
  'SiVuedotjs': '#4FC08D',
  'SiAngular': '#DD0031',
  'FaJava': '#007396',
  'SiPhp': '#777BB4',
  'SiLaravel': '#FF2D20',
  'SiHtml5': '#E34F26',
  'SiCss3': '#1572B6',
  'SiGit': '#F05032',
  'SiGithub': '#181717',
  'SiFirebase': '#FFCA28',
  'SiSupabase': '#3ECF8E',
  'SiRedis': '#DC382D',
  'SiMysql': '#4479A1',
  'SiGraphql': '#E10098',
  'SiFigma': '#F24E1E',
  'SiExpress': '#000000',
  'SiSpringboot': '#6DB33F',
  'SiNestjs': '#E0234E',
  'SiAndroid': '#3DDC84',
  'SiIos': '#000000',
  'SiFlutter': '#02569B',
  'SiKubernetes': '#326CE5',
  'SiGooglecloud': '#4285F4',
  'SiMicrosoftazure': '#0078D4',
  'SiRust': '#000000',
  'SiGo': '#00ADD8',
  'SiSwift': '#F05138',
  'SiKotlin': '#7F52FF',
  'SiWordpress': '#21759B',
  'SiStripe': '#008CDD',
  'SiSolidity': '#363636',
  'SiEthereum': '#3C3C3D',
  'SiPrisma': '#2D3748',
  'SiFramer': '#0055FF',
  'SiVercel': '#000000',
  'SiGreensock': '#88CE02',
  'SiReactrouter': '#CA4245',
  'SiRedux': '#764ABC',
  'SiMui': '#007FFF',
  'SiChakraui': '#319795',
  'SiBootstrap': '#7952B3',
  'SiSass': '#CC6699',
  'SiVite': '#646CFF',
  'SiJest': '#C21325',
  'SiCypress': '#17202C',
  'SiApollographql': '#311C87',
  'SiSanity': '#F03E2F',
  'SiStrapi': '#2E7EEA',
  'SiContentful': '#2478CC',
  'SiNetlify': '#00C7B7',
  'SiHeroku': '#430098'
};

export default function TechIconRenderer({ iconName, color, size = 20 }: { iconName: string, color?: string, size?: number }) {
  if (!iconName) return <Code2 color={color} size={size} />;

  const normalized = iconName.toLowerCase().trim();
  const finalIconName = techNameMap[normalized] || iconName;
  const finalColor = techColorMap[finalIconName] || (color === '#333' ? undefined : color) || techColorMap[`Si${finalIconName.replace(/^Si|Fa/, '')}`] || color;

  if (finalIconName.startsWith('Si')) {
    const IconComponent = (SiIcons as any)[finalIconName];
    if (IconComponent) return <IconComponent color={finalColor} size={size} />;
  }
  if (finalIconName.startsWith('Fa')) {
    const IconComponent = (FaIcons as any)[finalIconName];
    if (IconComponent) return <IconComponent color={finalColor} size={size} />;
  }
  // Clean name for dynamic lookup (e.g. "Framer Motion" -> "Framermotion")
  const cleanName = iconName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const pascalName = `Si${cleanName.charAt(0).toUpperCase() + cleanName.slice(1)}`;
  
  const SiDynamic = (SiIcons as any)[pascalName];
  if (SiDynamic) return <SiDynamic color={techColorMap[pascalName] || finalColor} size={size} />;
  
  // Also try exact PascalCase without lowercase
  const exactPascal = `Si${iconName.replace(/[^a-zA-Z0-9]/g, '')}`;
  const SiExact = (SiIcons as any)[exactPascal];
  if (SiExact) return <SiExact color={techColorMap[exactPascal] || finalColor} size={size} />;

  // console.warn(`Missing icon for technology: ${iconName}`);
  return <Code2 color={color} size={size} />;
}
