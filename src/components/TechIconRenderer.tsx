import {
  SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiNextdotjs,
  SiTypescript, SiJavascript, SiTailwindcss, SiPython, SiDocker,
  SiVuedotjs, SiAngular, SiPhp, SiLaravel, SiHtml5, SiCss,
  SiGit, SiGithub, SiFirebase, SiSupabase, SiRedis, SiMysql, SiGraphql,
  SiFigma, SiExpress, SiSpringboot, SiNestjs, SiAndroid, SiIos, SiFlutter,
  SiKubernetes, SiGooglecloud, SiRust, SiGo, SiSwift,
  SiKotlin, SiWordpress, SiStripe, SiSolidity, SiEthereum, SiPrisma,
  SiFramer, SiVercel, SiGreensock, SiReactrouter, SiRedux, SiMui, SiChakraui,
  SiBootstrap, SiSass, SiVite, SiJest, SiCypress, SiApollographql, SiSanity,
  SiStrapi, SiContentful, SiNetlify, SiHeroku,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { Code2 } from 'lucide-react';

const IconRegistry: Record<string, any> = {
  SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiNextdotjs,
  SiTypescript, SiJavascript, SiTailwindcss, SiPython, SiDocker,
  SiVuedotjs, SiAngular, SiPhp, SiLaravel, SiHtml5, SiCss3: SiCss,
  SiGit, SiGithub, SiFirebase, SiSupabase, SiRedis, SiMysql, SiGraphql,
  SiFigma, SiExpress, SiSpringboot, SiNestjs, SiAndroid, SiIos, SiFlutter,
  SiKubernetes, SiGooglecloud, SiRust, SiGo, SiSwift,
  SiKotlin, SiWordpress, SiStripe, SiSolidity, SiEthereum, SiPrisma,
  SiFramer, SiVercel, SiGreensock, SiReactrouter, SiRedux, SiMui, SiChakraui,
  SiBootstrap, SiSass, SiVite, SiJest, SiCypress, SiApollographql, SiSanity,
  SiStrapi, SiContentful, SiNetlify, SiHeroku, FaJava, FaAws, VscAzure
};

export const techNameMap: Record<string, string> = {
  'react': 'SiReact',
  'react.js': 'SiReact',
  'reactjs': 'SiReact',
  'node.js': 'SiNodedotjs',
  'node': 'SiNodedotjs',
  'nodejs': 'SiNodedotjs',
  'postgresql': 'SiPostgresql',
  'postgres': 'SiPostgresql',
  'mongodb': 'SiMongodb',
  'next.js': 'SiNextdotjs',
  'nextjs': 'SiNextdotjs',
  'next': 'SiNextdotjs',
  'typescript': 'SiTypescript',
  'ts': 'SiTypescript',
  'javascript': 'SiJavascript',
  'js': 'SiJavascript',
  'tailwind css': 'SiTailwindcss',
  'tailwindcss': 'SiTailwindcss',
  'tailwind': 'SiTailwindcss',
  'python': 'SiPython',
  'docker': 'SiDocker',
  'aws': 'FaAws',
  'amazon': 'FaAws',
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
  'azure': 'VscAzure',
  'microsoft azure': 'VscAzure',
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

export const techColorMap: Record<string, string> = {
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
  'FaAws': '#FF9900',
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
  'VscAzure': '#0089D6',
  'SiRust': '#000000',
  'SiGo': '#00ADD8',
  'SiSwift': '#FA7343',
  'SiKotlin': '#0095D5',
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
  'SiStrapi': '#2F2E8B',
  'SiContentful': '#2478CC',
  'SiNetlify': '#00C7B7',
  'SiHeroku': '#430098'
};

export default function TechIconRenderer({ iconName, size = 16, color }: { iconName: string, size?: number, color?: string }) {
  if (!iconName) return <Code2 size={size} color={color} />;

  let Icon = Code2;
  let iconColor = color || '#6b7280';

  // 1. Check if the provided name is directly an exact key in our registry (e.g., 'SiNextdotjs')
  if (IconRegistry[iconName]) {
    Icon = IconRegistry[iconName];
    iconColor = techColorMap[iconName] || color || iconColor;
  } else {
    // 2. Otherwise, normalize and look up in our friendly name map (e.g., 'next.js' -> 'SiNextdotjs')
    const normalizedName = iconName.toLowerCase().trim();
    const reactIconName = techNameMap[normalizedName];

    if (reactIconName && IconRegistry[reactIconName]) {
      Icon = IconRegistry[reactIconName];
      iconColor = techColorMap[reactIconName] || color || iconColor;
    }
  }

  return <Icon size={size} style={{ color: iconColor }} />;
}
