'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    date: 'Jun 15, 2026',
    readTime: '5 min read',
    image: '/blog-1.png',
    categories: ['Technology', 'Engineering'],
    title: 'How AI is Reshaping Modern Software Development in 2026',
    excerpt:
      'Artificial intelligence is no longer a futuristic concept — it\'s reshaping how development teams architect, code, test, and deploy applications at scale.',
    href: '#',
  },
  {
    date: 'May 28, 2026',
    readTime: '7 min read',
    image: '/blog-2.png',
    categories: ['Cloud', 'Infrastructure'],
    title: 'Cloud Migration Strategies That Cut Costs Without Cutting Corners',
    excerpt:
      'Migrating to cloud isn\'t just about moving workloads. Here are the strategies we use to modernize infrastructure while reducing total cost of ownership.',
    href: '#',
  },
  {
    date: 'Apr 20, 2026',
    readTime: '4 min read',
    image: '/blog-3.png',
    categories: ['Mobile', 'UX Design'],
    title: 'Why Cross-Platform Development Is the Future of Mobile Apps',
    excerpt:
      'React Native and Flutter have matured significantly. We break down when to go cross-platform versus native, and how to get the best of both worlds.',
    href: '#',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function BlogSection() {
  return (
    <section id="blog" className="py-28 md:py-36 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-35" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#111111]/[0.06] rounded-full shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span className="text-sm font-medium text-[#5F6368]">Blog & Insights</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl text-[#111111] text-balance">
              Latest from Orange Global
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#"
            className="inline-flex items-center gap-2 text-[#FF6B00] font-semibold hover:gap-3 transition-all duration-300 shrink-0 group"
          >
            View All Posts
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Post Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-[28px] border border-[#111111]/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#5F6368]">{post.date}</span>
                  <span className="text-xs text-[#5F6368]">{post.readTime}</span>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-medium px-3 py-1 bg-[#FAFAFA] border border-[#111111]/[0.06] rounded-full text-[#5F6368]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-[#111111] mb-3 leading-tight group-hover:text-[#FF6B00] transition-colors duration-200 text-pretty">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#5F6368] text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1 text-sm font-semibold text-[#FF6B00] group-hover:gap-2 transition-all duration-300">
                  Read More
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
