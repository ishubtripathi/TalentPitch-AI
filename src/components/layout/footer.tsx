import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <p className="text-center text-xs leading-5 text-muted-foreground">
              &copy; 2025 TalentPitch AI. All rights reserved. Built with ❤️ for job seekers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}