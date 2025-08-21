"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Github,
  Clock,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("Please fill in all required fields.")
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
        budget: "",
        timeline: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 2000)
  }

  const projectTypes = [
    "Video Editing",
    "Graphic Design",
    "Translation Services",
    "Brand Identity",
    "Motion Graphics",
    "Other",
  ]

  const budgetRanges = ["Under $500", "$500 - $1,000", "$1,000 - $2,500", "$2,500 - $5,000", "$5,000+", "Let's discuss"]

  const timelineOptions = ["ASAP", "Within 1 week", "Within 1 month", "1-3 months", "3+ months", "Flexible"]

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="lg:col-span-1 space-y-6">
        {/* Profile Card */}
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=96&width=96&text=LNB"
                alt="Liba Natur Brilian"
                width={96}
                height={96}
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Liba Natur Brilian</h3>
            <p className="text-muted-foreground mb-4">Graphics Designer, Video Editor & Translator</p>
            <div className="flex justify-center space-x-2">
              <Link
                href="https://linkedin.com/in/naturbrilian"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="https://twitter.com/naturbrilian"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/naturbrilian"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-primary/10 p-2 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Contact Details */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-muted-foreground text-sm break-all">liba.natur.brilian@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-muted-foreground text-sm">+6289686865736</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-muted-foreground text-sm">Indonesia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Response Time</p>
                  <p className="text-muted-foreground text-sm">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">Services I Offer</h3>
            <div className="space-y-2">
              <Badge variant="secondary" className="mr-2 mb-2">
                Video Editing
              </Badge>
              <Badge variant="secondary" className="mr-2 mb-2">
                Motion Graphics
              </Badge>
              <Badge variant="secondary" className="mr-2 mb-2">
                Graphic Design
              </Badge>
              <Badge variant="secondary" className="mr-2 mb-2">
                Brand Identity
              </Badge>
              <Badge variant="secondary" className="mr-2 mb-2">
                Translation EN/ID
              </Badge>
              <Badge variant="secondary" className="mr-2 mb-2">
                Localization
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Availability */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">Current Availability</h3>
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm font-medium">Available for new projects</span>
            </div>
            <p className="text-sm text-muted-foreground">
              I'm currently accepting new projects with start dates in the next 2-4 weeks.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold">Let's Start a Conversation</h2>
            </div>

            {submitSuccess ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-6 rounded-lg mb-6 flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium mb-1">Message sent successfully!</h3>
                  <p className="text-sm">
                    Thank you for reaching out. I'll get back to you within 24 hours to discuss your project in detail.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    {submitError}
                  </div>
                )}

                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief description of your project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project in detail. Include any specific requirements, goals, or questions you have."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By sending this message, you agree to discuss your project requirements. I'll respond within 24 hours
                  with next steps.
                </p>
              </form>
            )}
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="mt-8">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">What's your typical project timeline?</h4>
                <p className="text-sm text-muted-foreground">
                  Project timelines vary based on scope and complexity. Simple designs typically take 1-2 weeks, while
                  comprehensive video projects can take 4-8 weeks. I'll provide a detailed timeline after discussing
                  your specific requirements.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Do you work with international clients?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes! I work with clients worldwide and am comfortable with remote collaboration. I'm available during
                  Indonesian business hours but can accommodate different time zones for meetings.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">What file formats do you deliver?</h4>
                <p className="text-sm text-muted-foreground">
                  I deliver files in industry-standard formats based on your needs. For design work: AI, PSD, PDF, PNG,
                  JPG. For video: MP4, MOV, AVI in various resolutions. For translation: DOCX, PDF, or your preferred
                  format.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Do you offer revisions?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, I include 2-3 rounds of revisions in all projects to ensure you're completely satisfied with the
                  final result. Additional revisions can be accommodated if needed.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
