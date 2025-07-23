import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Upload, Link as LinkIcon, User, FileText, Wand2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { validateJobUrl, validateFileType } from '@/lib/utils'

const formSchema = z.object({
  jobUrl: z.string().min(1, 'Job URL is required').refine(validateJobUrl, {
    message: 'Please enter a valid job posting URL from LinkedIn, Indeed, Glassdoor, Monster, or ZipRecruiter'
  }),
  resume: z.any().refine((file) => file && file.length > 0, 'Resume is required'),
  bio: z.string().min(50, 'Bio must be at least 50 characters').max(500, 'Bio must be less than 500 characters'),
  tone: z.string().min(1, 'Please select an email tone'),
  experience: z.string().min(1, 'Please select your experience level'),
})

type FormData = z.infer<typeof formSchema>

const toneOptions = [
  { value: 'professional', label: 'Professional', description: 'Formal and business-appropriate' },
  { value: 'friendly', label: 'Friendly', description: 'Warm and approachable' },
  { value: 'confident', label: 'Confident', description: 'Bold and assertive' },
  { value: 'enthusiastic', label: 'Enthusiastic', description: 'Energetic and passionate' },
]

const experienceOptions = [
  { value: 'entry', label: 'Entry Level (0-2 years)' },
  { value: 'mid', label: 'Mid Level (2-5 years)' },
  { value: 'senior', label: 'Senior Level (5+ years)' },
  { value: 'executive', label: 'Executive Level' },
]

export function GeneratePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const selectedFile = watch('resume')

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (validateFileType(file)) {
        setValue('resume', e.dataTransfer.files)
      }
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (validateFileType(file)) {
        setValue('resume', e.target.files)
      }
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      navigate('/preview', { 
        state: { 
          formData: data,
          generatedEmails: [
            {
              id: 1,
              subject: `Passionate ${data.experience === 'entry' ? 'Junior' : 'Senior'} Developer - Application for Your Team`,
              content: `Dear Hiring Manager,

I hope this message finds you well. I recently came across your job posting and was immediately drawn to the opportunity to contribute to your team.

With my background in software development and genuine passion for creating innovative solutions, I believe I would be a valuable addition to your organization. My experience aligns well with the requirements you've outlined, particularly in areas of modern web development and collaborative team environments.

I've attached my resume for your review and would welcome the opportunity to discuss how my skills and enthusiasm can contribute to your team's success. Thank you for considering my application.

Best regards,
[Your Name]`
            },
            {
              id: 2,
              subject: `Re: ${data.experience === 'entry' ? 'Entry-Level' : 'Experienced'} Position - Let's Connect`,
              content: `Hello,

I was excited to discover your recent job posting, as it perfectly aligns with my career aspirations and technical expertise.

As someone who thrives in dynamic environments and enjoys tackling complex challenges, I'm particularly interested in how this role could leverage my skills while contributing to your team's objectives. My background has prepared me well for the responsibilities outlined in your posting.

I would love to learn more about your team's current projects and discuss how my experience and fresh perspective could benefit your organization. Would you be available for a brief conversation this week?

Looking forward to your response.

Warm regards,
[Your Name]`
            }
          ]
        }
      })
    }, 2000)
  }

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Generate Your Perfect Cold Email
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Provide your job details and let our AI craft personalized, compelling emails that get responses.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Job URL Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <LinkIcon className="h-5 w-5 text-primary" />
                  <span>Job Posting URL</span>
                </CardTitle>
                <CardDescription>
                  Paste the link to the job posting you're interested in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Input
                    placeholder="https://www.linkedin.com/jobs/view/..."
                    {...register('jobUrl')}
                    className={errors.jobUrl ? 'border-destructive' : ''}
                  />
                  {errors.jobUrl && (
                    <p className="text-sm text-destructive flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.jobUrl.message}</span>
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Supported platforms: LinkedIn, Indeed, Glassdoor, Monster, ZipRecruiter
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resume Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Resume Upload</span>
                </CardTitle>
                <CardDescription>
                  Upload your resume so we can personalize the email content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive
                      ? 'border-primary bg-primary/5'
                      : errors.resume
                      ? 'border-destructive'
                      : 'border-muted-foreground/25 hover:border-primary/50'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    {...register('resume')}
                  />
                  <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <div className="space-y-2">
                    {selectedFile && selectedFile[0] ? (
                      <p className="text-sm font-medium text-primary">
                        Selected: {selectedFile[0].name}
                      </p>
                    ) : (
                      <>
                        <p className="text-lg font-medium">
                          Drop your resume here, or <span className="text-primary">browse</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Supports PDF, DOC, DOCX, TXT files
                        </p>
                      </>
                    )}
                  </div>
                </div>
                {errors.resume && (
                  <p className="text-sm text-destructive flex items-center space-x-1 mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.resume.message}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Personal Bio</span>
                </CardTitle>
                <CardDescription>
                  Tell us about yourself in 50-500 characters to personalize your pitch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Textarea
                    placeholder="I'm a passionate software developer with 3 years of experience in React and Node.js. I love building user-centric applications and am always eager to learn new technologies..."
                    className={`min-h-[120px] ${errors.bio ? 'border-destructive' : ''}`}
                    {...register('bio')}
                  />
                  {errors.bio && (
                    <p className="text-sm text-destructive flex items-center space-x-1">
                      <AlertCircle className="h-4 w-4" />
                      <span>{errors.bio.message}</span>
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {watch('bio')?.length || 0}/500 characters
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Email Preferences */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Email Preferences</CardTitle>
                <CardDescription>
                  Customize the tone and style of your generated emails
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tone">Email Tone</Label>
                    <Select onValueChange={(value) => setValue('tone', value)}>
                      <SelectTrigger className={errors.tone ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select email tone" />
                      </SelectTrigger>
                      <SelectContent>
                        {toneOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <div>
                              <div className="font-medium">{option.label}</div>
                              <div className="text-sm text-muted-foreground">{option.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.tone && (
                      <p className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.tone.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select onValueChange={(value) => setValue('experience', value)}>
                      <SelectTrigger className={errors.experience ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.experience && (
                      <p className="text-sm text-destructive flex items-center space-x-1">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.experience.message}</span>
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="group min-w-[200px]"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <Wand2 className="h-4 w-4" />
                  </motion.div>
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Generate Cold Emails
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}