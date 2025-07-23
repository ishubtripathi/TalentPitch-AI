import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function validateJobUrl(url: string): boolean {
  try {
    const parsedUrl = new URL(url)
    const validDomains = ['linkedin.com', 'indeed.com', 'glassdoor.com', 'monster.com', 'ziprecruiter.com']
    return validDomains.some(domain => parsedUrl.hostname.includes(domain))
  } catch {
    return false
  }
}

export function extractFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || ''
}

export function validateFileType(file: File): boolean {
  const allowedTypes = ['pdf', 'doc', 'docx', 'txt']
  const extension = extractFileExtension(file.name)
  return allowedTypes.includes(extension)
}