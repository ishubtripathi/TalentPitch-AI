import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Target, Users, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    name: 'AI-Powered Intelligence',
    description: 'Advanced natural language processing analyzes job postings and creates contextually relevant emails.',
    icon: Brain,
  },
  {
    name: 'Precision Targeting',
    description: 'Extract key requirements and company culture insights to craft highly targeted outreach.',
    icon: Target,
  },
  {
    name: 'Human-Like Communication',
    description: 'Generate emails that sound natural and personal, not robotic or templated.',
    icon: Users,
  },
  {
    name: 'Lightning Fast Results',
    description: 'Get multiple email variations in seconds, saving hours of writing and editing time.',
    icon: Zap,
  },
  {
    name: 'Privacy & Security',
    description: 'Your resume and personal data are processed securely with enterprise-grade encryption.',
    icon: Shield,
  },
  {
    name: 'Proven Success Rate',
    description: 'Increase your response rates with emails optimized for maximum engagement.',
    icon: TrendingUp,
  },
]

const benefits = [
  'Stand out from generic applications',
  'Save 10+ hours per week on cold outreach',
  'Increase response rates by up to 300%',
  'Multiple tone variations for different companies',
  'Automated job posting analysis',
  'Professional email templates',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              About TalentPitch AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We're revolutionizing job hunting by empowering job seekers with AI-powered tools 
              that create genuine, personalized outreach that actually gets responses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Mission
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              In a world where hiring is increasingly noisy and competitive, we believe that 
              authentic, personalized outreach should be accessible to everyone. TalentPitch AI 
              bridges the gap between generic applications and genuine human connection.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Why TalentPitch AI Exists</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The modern job market is brutal. With hundreds of applications per position, 
                  standing out requires more than just a great resume. It requires strategic, 
                  personalized outreach that demonstrates genuine interest and cultural fit.
                </p>
                <p>
                  But crafting compelling cold emails is time-consuming and requires specific 
                  skills that many talented professionals simply don't have. That's where we come in.
                </p>
                <p>
                  TalentPitch AI democratizes effective job outreach by combining artificial 
                  intelligence with proven communication strategies, giving every job seeker 
                  the tools to present their best professional self.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-0">
                <CardHeader>
                  <CardTitle>What Makes Us Different</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Powerful Technology, Simple Experience
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Behind our simple interface lies sophisticated AI technology designed 
              specifically for professional communication and job search success.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid max-w-xl mx-auto lg:max-w-none lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="flex flex-col"
              >
                <Card className="group relative overflow-hidden border-0 bg-background shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-7">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Our streamlined process makes professional outreach simple and effective.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Paste Job URL',
                description: 'Simply paste the link to any job posting from major job boards.'
              },
              {
                step: '02',
                title: 'Upload Resume',
                description: 'Upload your resume so we can understand your background and skills.'
              },
              {
                step: '03',
                title: 'AI Analysis',
                description: 'Our AI analyzes the job requirements and matches them with your profile.'
              },
              {
                step: '04',
                title: 'Generated Emails',
                description: 'Receive multiple personalized cold email variations ready to send.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Transform Your Job Search?
            </h2>
            <p className="text-lg leading-8 text-muted-foreground mb-8">
              Join thousands of professionals who have already discovered the power of 
              AI-driven job outreach. Start generating compelling cold emails today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/generate"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
              >
                Get Started Free
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}