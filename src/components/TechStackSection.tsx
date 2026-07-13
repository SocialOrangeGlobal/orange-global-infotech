'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// All tech icons using Devicons CDN — real logos, no text
const allTechs = [
  // Row 1 — Frontend & Backend
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
  { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg' },
  // Row 2 — Database, Cloud, Mobile, AI
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg' },
  { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
]

const deviconMap: Record<string, string> = {
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  NextJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  Vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  Tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  NodeJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  NestJs: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  GraphQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
  Go: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  PostgreSql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  MongoDb: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  Redis: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
  Aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
  Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg'
};

function TechIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="shrink-0 flex flex-col items-center gap-2.5 mx-4 group cursor-default">
      <div className="relative w-[68px] h-[68px] rounded-[18px] bg-white border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center p-3.5 transition-all duration-300 group-hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] group-hover:-translate-y-1.5 group-hover:border-gray-300">
        <Image
          src={icon}
          alt={name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <span className="text-[11px] font-medium text-gray-600 whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function TechStackSection({
  title = 'Works with the tools you already use',
  description = 'Deep integrations with the most popular frameworks, databases, cloud platforms, and modern development tools.',
  categories
}: {
  title?: string;
  description?: string;
  categories?: any[];
}) {
  let flatTechs = allTechs;
  if (categories && categories.length > 0) {
    flatTechs = categories.flatMap(cat => cat.technologies || []).map(t => ({
      name: t.name,
      icon: deviconMap[t.icon] || deviconMap.React // fallback
    }));
  }

  const half = Math.ceil(flatTechs.length / 2);
  // Repeat array to ensure the marquee fills the screen
  const row1 = [...flatTechs.slice(0, half), ...flatTechs.slice(0, half), ...flatTechs.slice(0, half), ...flatTechs.slice(0, half)];
  const row2 = [...flatTechs.slice(half), ...flatTechs.slice(half), ...flatTechs.slice(half), ...flatTechs.slice(half)];

  return (
    <section id="tech" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Soft center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] blur-3xl pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,107,0,0.06) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10">

        {/* Row 1 marquee — left */}
        <div className="relative overflow-hidden mb-5">
          <div className="absolute left-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-marquee py-4">
            {row1.map((t, i) => (
              <TechIcon key={`r1-${i}`} name={t.name} icon={t.icon} />
            ))}
          </div>
        </div>

        {/* Center heading */}
        <motion.div
          className="text-center py-12 px-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#111111] mb-5 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Row 2 marquee — right (reverse) */}
        <div className="relative overflow-hidden mt-5">
          <div className="absolute left-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-44 z-10 bg-gradient-to-l from-white to-transparent" />
          <div className="flex py-4" style={{ animation: 'marquee 38s linear infinite reverse' }}>
            {row2.map((t, i) => (
              <TechIcon key={`r2-${i}`} name={t.name} icon={t.icon} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
