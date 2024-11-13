import { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Cloud, Code, Laptop, MessageSquare, Music, Play, Sparkles } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const techGirlImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/city-urban-headphones-black-woman-portrait-urban-gen-z-fashion-outdoor-travel-youth-lifestyle-young-trendy-african-girl-student-face-with-technology-5g-audio-streaming-summer_590464-87894.jpg-N3LPpDwMya59qmAsv6CVKfjrWlsrCr.jpeg"
const musiciansImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vibrant-street-musicians-captivate-audiences-with-their-soulful-performances-embodying-dynamic-essence-urban-culture-artistic-expression_14117-506613.jpg-GApniOszRjZQ5XohxNN2SZDX1f39xZ.jpeg"

const MotionLink = motion(Link)

export default function Component() {
  const { scrollYProgress } = useScroll()
  const yPosAnim = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-900 to-black text-white"
      >
        {/* Header */}
        <motion.header 
          className="px-4 lg:px-6 h-16 flex items-center border-b border-zinc-800 sticky top-0 z-50 bg-black/80 backdrop-blur-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <MotionLink 
            className="flex items-center justify-center" 
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/817504a5-a798-4118-b7d9-32cb0a2a43db-l9tRlshjgJerWnTiP3QfEMc3YQu3h3.png"
              alt="Afromuse Digital Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold">Afromuse Digital</span>
          </MotionLink>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            {['Services', 'Our Work', 'About', 'Contact'].map((item, index) => (
              <MotionLink 
                key={item}
                className="text-sm hover:text-yellow-400 transition-colors" 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </MotionLink>
            ))}
          </nav>
        </motion.header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black/50">
            <motion.div 
              className="absolute inset-0 overflow-hidden"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "easeOut" }}
            >
              <Image
                src={techGirlImage}
                alt="Digital Innovation"
                fill
                className="object-cover opacity-20"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
            </motion.div>
            <div className="container relative px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="space-y-2"
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Digital Innovation Meets
                    <motion.span 
                      className="text-yellow-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 1 }}
                    > Strategic Excellence</motion.span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl">
                    Transforming businesses through cloud integration, media consultation, and AI-driven solutions.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="space-x-4"
                >
                  <Button 
                    className="bg-yellow-400 text-black hover:bg-yellow-500"
                    asChild
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-yellow-400/20 text-white hover:bg-yellow-400/10"
                    asChild
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      Our Services
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black/70" id="services">
            <div className="container px-4 md:px-6">
              <motion.div 
                className="flex flex-col items-center justify-center space-y-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-yellow-400/10 px-3 py-1 text-sm text-yellow-400">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Comprehensive Digital Solutions
                  </h2>
                  <p className="max-w-[900px] text-zinc-400 md:text-xl">
                    From cloud integration to AI-powered PR strategies, we deliver cutting-edge solutions for the modern business
                    landscape.
                  </p>
                </div>
              </motion.div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                {[
                  { icon: Cloud, title: "Cloud Integration", description: "Strategic cloud solutions optimized for scalability and performance." },
                  { icon: MessageSquare, title: "Media Consultation", description: "Expert PR strategies for luxury brands and high-end clientele." },
                  { icon: Code, title: "AI Solutions", description: "Cutting-edge AI integration for automated workflows and insights." }
                ].map((service, index) => (
                  <motion.div 
                    key={service.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-zinc-900 border-zinc-800">
                      <CardContent className="flex flex-col items-center space-y-4 p-6">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        >
                          <service.icon className="h-12 w-12 text-yellow-400" />
                        </motion.div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-zinc-400 text-center">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Culture Section */}
          <section className="relative w-full py-12 md:py-24 lg:py-32 bg-black" id="culture">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-block rounded-lg bg-yellow-400/10 px-3 py-1 text-sm text-yellow-400">
                    Our Culture
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Bridging Technology and Culture
                  </h2>
                  <p className="text-zinc-400 md:text-xl">
                    We blend innovative technology solutions with deep cultural understanding, creating digital experiences that resonate with diverse audiences across Africa and beyond.
                  </p>
                </motion.div>
                <motion.div 
                  className="relative aspect-video overflow-hidden rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={musiciansImage}
                    alt="African Musicians"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-black/70" id="contact">
            <div className="container px-4 md:px-6">
              <motion.div 
                className="flex flex-col items-center justify-center space-y-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Business?</h2>
                  <p className="max-w-[600px] text-zinc-400 md:text-xl">
                    Let's discuss how our solutions can elevate your digital presence and operational efficiency.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                      Schedule a Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <motion.footer 
          className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-yellow-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-xs text-zinc-400">© 2024 Afromuse Digital. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-zinc-400 hover:text-yellow-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-zinc-400 hover:text-yellow-400" href="#">
              Privacy
            </Link>
          </nav>
        </motion.footer>
      </motion.div>
    </AnimatePresence>
  )
}