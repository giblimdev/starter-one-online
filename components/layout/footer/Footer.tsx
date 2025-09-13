//@/components/layout/footer/Footer.tsx
"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Facebook,
  Instagram,
  Send,
  ChevronUp,
  Heart,
  Globe,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

interface FooterLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverColor: string;
}

const footerSections: FooterSection[] = [
  {
    title: "Produits",
    links: [
      { label: "Solutions", href: "#solutions", icon: <Zap size={12} /> },
      { label: "Tarifs", href: "#pricing", icon: <Globe size={12} /> },
      { label: "API", href: "#api", icon: <Shield size={12} /> },
      { label: "Documentation", href: "#docs" },
      { label: "Intégrations", href: "#integrations" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Carrières", href: "#careers" },
      { label: "Presse", href: "#press" },
      { label: "Partenaires", href: "#partners" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Centre d'aide", href: "#help" },
      { label: "Communauté", href: "#community" },
      { label: "Statut", href: "#status" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Confidentialité", href: "#privacy" },
      { label: "Conditions", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
      { label: "Mentions légales", href: "#legal" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter size={18} />,
    bgColor: "bg-blue-500/10",
    hoverColor:
      "hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/25",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin size={18} />,
    bgColor: "bg-blue-600/10",
    hoverColor:
      "hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <Github size={18} />,
    bgColor: "bg-gray-800/10",
    hoverColor:
      "hover:bg-gray-800 hover:text-white hover:shadow-lg hover:shadow-gray-800/25",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: <Youtube size={18} />,
    bgColor: "bg-red-500/10",
    hoverColor:
      "hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/25",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: <Facebook size={18} />,
    bgColor: "bg-blue-600/10",
    hoverColor:
      "hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <Instagram size={18} />,
    bgColor: "bg-gradient-to-r from-purple-500/10 to-pink-500/10",
    hoverColor:
      "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-purple-500/25",
  },
];

const contactInfo: FooterLink[] = [
  {
    label: "contact@monapp.com",
    href: "mailto:contact@monapp.com",
    icon: <Mail size={16} />,
  },
  {
    label: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
    icon: <Phone size={16} />,
  },
  {
    label: "123 Rue de la Tech, 75001 Paris",
    href: "https://maps.google.com/?q=123+Rue+de+la+Tech+75001+Paris",
    icon: <MapPin size={16} />,
  },
];

// Variants avec les bons types TypeScript
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Footer: React.FC<FooterProps> = ({ className }) => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });
  const currentYear: number = new Date().getFullYear();

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      aria-label="Pied de page du site"
      className={cn(
        // Position statique - pas de position fixed
        "relative w-full mt-16 lg:mt-24 overflow-hidden",
        // Pas de position fixed ou absolute
        "block",
        className
      )}
    >
      {/* Background avec gradient coloré */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5" />

      {/* Effet de vague SVG avec couleurs */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180"
        aria-hidden="true"
      >
        <motion.svg
          className="relative block w-full h-16 sm:h-20 md:h-28 lg:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <defs>
            <linearGradient
              id="waveGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="25%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="75%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient
              id="waveGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#0f172a" stopOpacity="1" />
              <stop offset="100%" stopColor="#1e293b" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          <path
            fill="url(#waveGradient1)"
            d="M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,58.7C672,75,768,85,864,74.7C960,64,1056,32,1152,32C1248,32,1344,64,1392,80L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />

          <motion.path
            fill="url(#waveGradient2)"
            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          />
        </motion.svg>
      </div>

      {/* Contenu principal - dans le flux normal */}
      <motion.div
        className="relative z-10 w-full pt-12 sm:pt-16 md:pt-20 lg:pt-24 text-white"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
            {/* Section Branding */}
            <motion.div
              className="sm:col-span-2 lg:col-span-4 space-y-6"
              variants={itemVariants}
            >
              <div className="space-y-4">
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  MonApp
                </motion.h2>
                <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Créez des expériences extraordinaires avec notre plateforme
                  moderne et intuitive. Rejoignez des milliers
                  d&apos;utilisateurs qui nous font confiance pour transformer
                  leurs idées en réalité.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-4">
                <h3 className="sr-only">Informations de contact</h3>
                {contactInfo.map((contact: FooterLink, index: number) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-3 text-sm sm:text-base text-slate-300 hover:text-blue-400 transition-all duration-300 group p-2 rounded-lg hover:bg-white/5"
                    whileHover={{ x: 6 }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                    }
                    transition={{ delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    target={
                      contact.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="text-blue-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 p-1 rounded bg-blue-400/10 group-hover:bg-cyan-400/20">
                      {contact.icon}
                    </span>
                    <span className="group-hover:text-white transition-colors duration-300">
                      {contact.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 flex-wrap pt-2">
                <h3 className="sr-only">Réseaux sociaux</h3>
                {socialLinks.map((social: SocialLink, index: number) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-xl border border-white/10 text-slate-300 transition-all duration-300",
                      social.bgColor,
                      social.hoverColor
                    )}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0, rotate: 180 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, rotate: 0 }
                        : { opacity: 0, scale: 0, rotate: 180 }
                    }
                    transition={{
                      delay: 0.6 + index * 0.05,
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                    }}
                    aria-label={`Suivez-nous sur ${social.label}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Sections */}
            <nav
              className="sm:col-span-2 lg:col-span-6 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
              aria-label="Liens de navigation du pied de page"
            >
              {footerSections.map(
                (section: FooterSection, sectionIndex: number) => (
                  <motion.div
                    key={section.title}
                    className="space-y-4"
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.4 + sectionIndex * 0.1 }}
                  >
                    <h3 className="font-bold text-base sm:text-lg text-white relative pb-2">
                      {section.title}
                      <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map(
                        (link: FooterLink, linkIndex: number) => (
                          <motion.li key={link.label}>
                            <motion.a
                              href={link.href}
                              className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-all duration-300 py-1 group"
                              whileHover={{ x: 4 }}
                              initial={{ opacity: 0 }}
                              animate={
                                isInView ? { opacity: 1 } : { opacity: 0 }
                              }
                              transition={{
                                delay:
                                  0.5 + sectionIndex * 0.1 + linkIndex * 0.05,
                                ease: "easeOut",
                              }}
                            >
                              {link.icon && (
                                <span className="text-blue-400 group-hover:text-cyan-400 transition-colors duration-300">
                                  {link.icon}
                                </span>
                              )}
                              <span className="group-hover:translate-x-1 transition-transform duration-300">
                                {link.label}
                              </span>
                            </motion.a>
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>
                )
              )}
            </nav>

            {/* Newsletter */}
            <motion.div
              className="sm:col-span-2 lg:col-span-2"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 shadow-2xl">
                <h3 className="font-bold text-lg sm:text-xl text-white mb-3">
                  🚀 Newsletter
                </h3>
                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Recevez nos dernières innovations et conseils d&apos;experts
                  directement dans votre boîte mail.
                </p>
                <form
                  className="space-y-4"
                  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    console.log("Newsletter subscription");
                  }}
                  noValidate
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      name="email"
                      placeholder="votre@email.com"
                      className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                      required
                      aria-label="Adresse email pour la newsletter"
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25"
                      >
                        <Send size={16} className="mr-2" />
                        Rejoindre
                      </Button>
                    </motion.div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    ✨ Pas de spam, désinscription en un clic. Nous respectons
                    votre vie privée.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Separator */}
          <div
            className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
            role="separator"
          />

          {/* Footer Bottom */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-8 lg:pb-12"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-slate-400 order-2 sm:order-1">
              <span>© {currentYear} MonApp. Fait avec</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="inline-block"
                aria-label="cœur"
              >
                <Heart size={16} className="text-red-400 fill-current mx-1" />
              </motion.span>
              <span>à Paris, France</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 order-1 sm:order-2">
              <nav className="flex gap-6 text-xs" aria-label="Liens légaux">
                <a
                  href="/privacy"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
                >
                  Confidentialité
                </a>
                <a
                  href="/terms"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
                >
                  Conditions
                </a>
                <a
                  href="/cookies"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
                >
                  Cookies
                </a>
              </nav>

              <motion.button
                onClick={scrollToTop}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500 hover:to-purple-600 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Retour en haut de la page"
              >
                <ChevronUp size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Styles intégrés pour les animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes wave-float {
            0%, 100% {
              transform: translateX(0px) translateY(0px);
            }
            25% {
              transform: translateX(-15px) translateY(-8px);
            }
            50% {
              transform: translateX(0px) translateY(-5px);
            }
            75% {
              transform: translateX(15px) translateY(-10px);
            }
          }
          
          .wave-float {
            animation: wave-float 8s ease-in-out infinite;
          }
          
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          @media (max-width: 640px) {
            @keyframes wave-float {
              0%, 100% {
                transform: translateX(0px) translateY(0px);
              }
              50% {
                transform: translateX(0px) translateY(-3px);
              }
            }
          }
        `,
        }}
      />
    </footer>
  );
};

export default Footer;
