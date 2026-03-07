import { Link } from "react-router"

import {
  ButterflyIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react"

import { AppRoutes } from "@/config/app-routes"

import { cn } from "@/lib/utils"

export function Footer({ className }: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "bg-sidebar text-muted-foreground flex w-full flex-col items-center justify-between gap-4 border-t p-4 shadow",
        className
      )}
    >
      <section className="container flex flex-col px-4 py-2 md:px-8">
        <div className="grid grid-cols-1 gap-8 px-2 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="group flex items-center gap-1">
              <ButterflyIcon
                size="24"
                className="group-hover:text-primary -mt-2 rotate-340 group-hover:cursor-pointer"
              />
              <span className="group-hover:text-primary font-serif text-2xl font-semibold group-hover:cursor-pointer">
                lillia platform
              </span>
            </div>
            <p className="py-4">
              Developing innovative solutions for your business since 2025. We
              help companies scale efficiently by providing modern accounting
              platform and services.
            </p>
            <div className="flex gap-2 py-2">
              <Link
                to={AppRoutes.Home.path}
                className="hover:text-primary"
                aria-label="Visit our LinkedIn page"
              >
                <LinkedinLogoIcon size="24" className="hover:text-blue-600" />
              </Link>

              <Link
                to={AppRoutes.Home.path}
                className="hover:text-primary"
                aria-label="Visit our Facebook page"
              >
                <FacebookLogoIcon size="24" className="hover:text-blue-800" />
              </Link>

              <Link
                to={AppRoutes.Home.path}
                className="hover:text-primary"
                aria-label="Visit our Instagram page"
              >
                <InstagramLogoIcon size="24" className="hover:text-pink-700" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Links</h4>
            <ul className="space-y-4 py-4">
              <li>
                <Link to={AppRoutes.Home.path} className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to={AppRoutes.Home.path} className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to={AppRoutes.Home.path} className="hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link to={AppRoutes.Home.path} className="hover:text-primary">
                  Prices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="space-y-4 py-4">
              <li>
                <Link to={AppRoutes.Home.path} className="hover:text-primary">
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link to={AppRoutes.Home.path} className="hover:text-primary">
                  Strategic Planning
                </Link>
              </li>

              <li>
                <Link to={AppRoutes.Home.path} className="hover:text-primary">
                  Financial Analysis
                </Link>
              </li>
              <li>
                <Link to={AppRoutes.Home.path} className="hover:text-primary">
                  Process Optimization
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Contact</h4>
            <ul className="items-center space-y-4 py-4">
              <li className="group flex gap-2">
                <EnvelopeSimpleIcon
                  className="group-hover:text-primary mt-px group-hover:cursor-pointer"
                  size="24"
                  aria-hidden
                />
                <Link
                  to="mailto:contact@clarxlabs.com"
                  className="group-hover:text-primary"
                >
                  contact@clarxlabs.com
                </Link>
              </li>
              <li className="group flex gap-2">
                <PhoneIcon
                  className="group-hover:text-primary group-hover:cursor-pointer"
                  size="24"
                  aria-hidden
                />
                <Link to="tel:+1666666666" className="group-hover:text-primary">
                  +1 (666) 666-666
                </Link>
              </li>
              <li className="group flex gap-2">
                <MapPinIcon
                  className="group-hover:text-primary group-hover:cursor-pointer"
                  size="24"
                  aria-hidden
                />
                <p className="group-hover:text-primary flex flex-col hover:cursor-pointer">
                  <span>123 Hell's Highway</span>
                  <span>New York, NY 10001</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t py-2">
          <div className="flex flex-col items-center justify-center py-2 md:flex-row md:justify-between">
            <p className="py-2 text-center text-sm">
              © 2025 Clarx Labs. All rights reserved.
            </p>
            <div className="flex flex-col gap-2 py-2 text-sm sm:flex-row">
              <Link
                to={AppRoutes.TermsOfUse.path}
                className="hover:text-primary mx-auto w-fit"
              >
                Terms of Use
              </Link>
              <Link
                to={AppRoutes.PrivacyPolicy.path}
                className="hover:text-primary mx-auto w-fit"
              >
                Privacy Policy
              </Link>
              <Link
                to={AppRoutes.Home.path}
                className="hover:text-primary mx-auto w-fit"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
