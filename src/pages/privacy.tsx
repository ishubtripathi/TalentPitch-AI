import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Trash2, Server, UserCheck } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const principles = [
  {
    name: 'Data Minimization',
    description: 'We only collect the information necessary to provide our services - your resume, job URLs, and basic preferences.',
    icon: Eye,
  },
  {
    name: 'Secure Processing',
    description: 'All data is encrypted in transit and at rest using enterprise-grade security protocols.',
    icon: Lock,
  },
  {
    name: 'No Permanent Storage',
    description: 'Your resume and personal information are processed temporarily and automatically deleted after generation.',
    icon: Trash2,
  },
  {
    name: 'No Third-Party Sharing',
    description: 'We never sell, share, or distribute your personal information to third parties or advertisers.',
    icon: Server,
  },
  {
    name: 'User Control',
    description: 'You have complete control over your data and can request deletion at any time.',
    icon: UserCheck,
  },
  {
    name: 'Transparent Practices',
    description: 'We maintain full transparency about how your data is used in our AI processing pipeline.',
    icon: Shield,
  },
]

export function PrivacyPage() {
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
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Privacy & Security
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Your privacy is our priority. Learn how we protect your personal information 
              and maintain the highest standards of data security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Overview */}
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
              Our Privacy Commitment
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              TalentPitch AI is built with privacy by design. We understand that your resume 
              and personal information are sensitive, and we've implemented robust safeguards 
              to protect your data at every step.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <principle.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{principle.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-7">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Privacy Policy */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Detailed Privacy Policy
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Complete transparency about how we handle your information.
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <p>We collect only the information necessary to provide our AI-powered email generation service:</p>
                  <ul>
                    <li><strong>Resume Information:</strong> Your uploaded resume file for analyzing your background and skills</li>
                    <li><strong>Job Details:</strong> URLs of job postings you're interested in applying to</li>
                    <li><strong>Personal Bio:</strong> Brief description you provide to personalize email content</li>
                    <li><strong>Preferences:</strong> Email tone and experience level settings</li>
                    <li><strong>Technical Data:</strong> Basic usage analytics to improve our service (anonymized)</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <p>Your information is used exclusively for the following purposes:</p>
                  <ul>
                    <li><strong>Email Generation:</strong> Analyzing job requirements and your background to create personalized cold emails</li>
                    <li><strong>Service Improvement:</strong> Understanding usage patterns to enhance our AI algorithms (anonymized data only)</li>
                    <li><strong>Security:</strong> Monitoring for fraud, abuse, and security threats</li>
                  </ul>
                  <p><strong>We never use your information for:</strong></p>
                  <ul>
                    <li>Marketing or advertising to you</li>
                    <li>Selling or sharing with third parties</li>
                    <li>Training AI models that could benefit competitors</li>
                    <li>Any purpose not directly related to our service</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Data Security & Storage</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <p>We implement industry-leading security measures to protect your data:</p>
                  <ul>
                    <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                    <li><strong>Temporary Processing:</strong> Resume files are processed temporarily and deleted within 24 hours</li>
                    <li><strong>Secure Infrastructure:</strong> Hosted on enterprise-grade cloud infrastructure with robust security controls</li>
                    <li><strong>Access Controls:</strong> Strict internal access controls with multi-factor authentication</li>
                    <li><strong>Regular Audits:</strong> Regular security assessments and vulnerability testing</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Your Rights & Controls</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <p>You have complete control over your personal information:</p>
                  <ul>
                    <li><strong>Data Access:</strong> Request a copy of all data we have about you</li>
                    <li><strong>Data Deletion:</strong> Request immediate deletion of all your personal information</li>
                    <li><strong>Data Correction:</strong> Update or correct any inaccurate information</li>
                    <li><strong>Processing Objection:</strong> Object to certain types of data processing</li>
                    <li><strong>Data Portability:</strong> Export your data in a machine-readable format</li>
                  </ul>
                  <p>To exercise any of these rights, contact us at privacy@talentpitch.ai</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact & Updates</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <p>We believe in transparency and open communication about privacy practices:</p>
                  <ul>
                    <li><strong>Privacy Questions:</strong> Email us at privacy@talentpitch.ai</li>
                    <li><strong>Policy Updates:</strong> We'll notify you of any material changes to this policy</li>
                    <li><strong>Effective Date:</strong> This policy is effective as of January 1, 2025</li>
                    <li><strong>Regular Reviews:</strong> We review and update our privacy practices regularly</li>
                  </ul>
                  <p>
                    <strong>Last updated:</strong> January 1, 2025<br/>
                    <strong>Next review:</strong> July 1, 2025
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}