import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-500 mb-4">Compass</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              An open-source, local AI chat application focused on privacy, decentralization, and true data ownership.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">
                  GitHub Repository
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-emerald-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Compass AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
