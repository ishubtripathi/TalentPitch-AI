import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Copy, Mail, ArrowLeft, Download, RefreshCw, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

interface GeneratedEmail {
  id: number
  subject: string
  content: string
}

export function PreviewPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedEmailId, setSelectedEmailId] = useState<number>(1)
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})

  const { formData, generatedEmails } = location.state || {}

  if (!formData || !generatedEmails) {
    navigate('/generate')
    return null
  }

  const selectedEmail = generatedEmails.find((email: GeneratedEmail) => email.id === selectedEmailId)

  const copyToClipboard = async (text: string, type: 'subject' | 'content') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates({ ...copiedStates, [type]: true })
      setTimeout(() => {
        setCopiedStates({ ...copiedStates, [type]: false })
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const downloadAsText = () => {
    if (!selectedEmail) return
    
    const content = `Subject: ${selectedEmail.subject}\n\n${selectedEmail.content}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `cold-email-${selectedEmail.id}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto max-w-6xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/generate')} className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Generate
          </Button>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Generated Cold Emails</h1>
            <p className="text-muted-foreground mt-2">
              Here are your personalized cold emails ready to send
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Email Variants Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card>
              <CardHeader>
                <CardTitle>Email Variants</CardTitle>
                <CardDescription>
                  Choose from different versions of your cold email
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {generatedEmails.map((email: GeneratedEmail, index: number) => (
                  <motion.div
                    key={email.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedEmailId === email.id
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setSelectedEmailId(email.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Version {index + 1}</h3>
                            <p className="text-sm text-muted-foreground">
                              {formData.tone.charAt(0).toUpperCase() + formData.tone.slice(1)} tone
                            </p>
                          </div>
                          {selectedEmailId === email.id && (
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Generate More Button */}
                <Button variant="outline" className="w-full group" disabled>
                  <RefreshCw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                  Generate More Variants
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            {selectedEmail && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Email Preview</CardTitle>
                      <CardDescription>
                        Review and customize your cold email before sending
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={downloadAsText}>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Subject Line */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Subject Line</label>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(selectedEmail.subject, 'subject')}
                        className="h-8 px-2"
                      >
                        {copiedStates.subject ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        value={selectedEmail.subject}
                        readOnly
                        className="w-full p-3 border rounded-md bg-muted/30 font-medium"
                      />
                    </div>
                  </div>

                  {/* Email Body */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Email Body</label>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(selectedEmail.content, 'content')}
                        className="h-8 px-2"
                      >
                        {copiedStates.content ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <Textarea
                      value={selectedEmail.content}
                      readOnly
                      className="min-h-[300px] font-mono text-sm leading-relaxed bg-muted/30"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                    <Button className="flex-1 group">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => copyToClipboard(`${selectedEmail.subject}\n\n${selectedEmail.content}`, 'content')}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy All
                    </Button>
                  </div>

                  {/* Email Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {selectedEmail.subject.length}
                      </div>
                      <p className="text-sm text-muted-foreground">Subject Length</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {selectedEmail.content.split(' ').length}
                      </div>
                      <p className="text-sm text-muted-foreground">Word Count</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Pro Tips for Cold Email Success</CardTitle>
              <CardDescription>
                Maximize your response rates with these best practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Before Sending:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Research the company and hiring manager</li>
                    <li>• Double-check all names and company details</li>
                    <li>• Ensure your resume is attached and up-to-date</li>
                    <li>• Send during business hours (9 AM - 5 PM)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Follow-up Strategy:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Wait 5-7 days before first follow-up</li>
                    <li>• Keep follow-ups brief and add value</li>
                    <li>• Limit to 2-3 total contact attempts</li>
                    <li>• Track your response rates and optimize</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}