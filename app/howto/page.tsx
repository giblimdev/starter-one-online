// pages/howto.tsx
"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Play,
  CheckCircle,
  Users,
  FileText,
  Clock,
  Target,
  Building,
  Zap,
  BookOpen,
  Lightbulb,
  HelpCircle,
  Keyboard,
  Rocket,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ModeEmploi() {
  // État pour contrôler les sections ouvertes
  const [openSections, setOpenSections] = useState(["workflow-project"]); // Ouvre la première section par défaut

  type WorkflowStepProps = {
    number: string;
    title: string;
    description: string;
    status?: "pending" | "active" | "completed";
  };

  const WorkflowStep = ({
    number,
    title,
    description,
    status = "pending",
  }: WorkflowStepProps) => (
    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg mb-3">
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          status === "completed"
            ? "bg-green-500 text-white"
            : status === "active"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-600"
        }`}
      >
        {status === "completed" ? <CheckCircle className="w-5 h-5" /> : number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Mode d'emploi - Project Manager
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Guide complet pour maîtriser votre application de gestion de projet
            selon les bonnes pratiques Agile et Scrum
          </p>
        </div>

        {/* Navigation rapide */}
        <div className="bg-blue-50 p-6 rounded-xl mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <Rocket className="h-6 w-6 mr-2" />
            Navigation rapide
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => setOpenSections(["workflow-project"])}
              className="p-4 bg-white rounded-lg text-sm text-blue-700 hover:bg-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              📋 Workflow Projet
            </button>
            <button
              onClick={() => setOpenSections(["workflow-teams"])}
              className="p-4 bg-white rounded-lg text-sm text-blue-700 hover:bg-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              👥 Workflow Équipes
            </button>
            <button
              onClick={() => setOpenSections(["workflow-pilotage"])}
              className="p-4 bg-white rounded-lg text-sm text-blue-700 hover:bg-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              ⚡ Workflow Pilotage
            </button>
            <button
              onClick={() => setOpenSections(["documentation"])}
              className="p-4 bg-white rounded-lg text-sm text-blue-700 hover:bg-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              📚 Documentation
            </button>
          </div>
        </div>

        {/* Accordéon principal utilisant tout l'espace */}
        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="w-full space-y-4"
        >
          {/* Workflow Projet */}
          <AccordionItem
            value="workflow-project"
            className="bg-white rounded-xl shadow-lg border-0"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-xl">
              <div className="flex items-center space-x-3">
                <Play className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Workflow Projet - De l'idée à la livraison
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-6">
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Objectif
                  </h4>
                  <p className="text-green-800">
                    Suivez cette méthodologie éprouvée pour structurer vos
                    projets selon les bonnes pratiques Agile et maximiser vos
                    chances de succès.
                  </p>
                </div>

                <WorkflowStep
                  number="1"
                  title="Créez votre projet"
                  description="Définissez les bases : nom, description, équipe, dates de début/fin, priorité et statut initial."
                  status="active"
                />

                <div className="ml-12 bg-blue-50 p-6 rounded-lg mb-4">
                  <h5 className="font-medium text-blue-900 mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Informations essentielles
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-blue-800 text-sm">
                    <div>
                      <strong>Nom :</strong> Titre clair et descriptif
                    </div>
                    <div>
                      <strong>Description :</strong> Vision, objectifs et
                      périmètre
                    </div>
                    <div>
                      <strong>Équipe :</strong> Assignation des membres et rôles
                    </div>
                    <div>
                      <strong>Priorité :</strong> Niveau d'importance (1-5)
                    </div>
                    <div>
                      <strong>Dates :</strong> Planning prévisionnel
                    </div>
                  </div>
                </div>

                <WorkflowStep
                  number="2"
                  title="Définissez les Features et User Stories"
                  description="Décomposez votre projet en fonctionnalités métier et besoins utilisateur."
                />

                <div className="ml-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h5 className="font-medium text-purple-900 mb-2 flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      Features (Fonctionnalités)
                    </h5>
                    <p className="text-purple-800 text-sm mb-2">
                      Grandes fonctionnalités techniques ou métier de votre
                      application.
                    </p>
                    <div className="text-purple-700 text-sm">
                      <strong>Exemple :</strong> "Système d'authentification",
                      "Gestion des commandes", "Tableau de bord"
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h5 className="font-medium text-orange-900 mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      User Stories
                    </h5>
                    <p className="text-orange-800 text-sm mb-2">
                      Besoins exprimés du point de vue utilisateur selon le
                      format standard.
                    </p>
                    <div className="text-orange-700 text-sm italic">
                      <strong>Format :</strong> "En tant que [utilisateur], je
                      veux [action] afin de [bénéfice]"
                    </div>
                  </div>
                </div>

                <WorkflowStep
                  number="3"
                  title="Définissez vos tâches à partir des Features et User Stories"
                  description="Décomposez chaque fonctionnalité en tâches concrètes et assignables."
                />

                <div className="ml-12 bg-yellow-50 p-6 rounded-lg">
                  <h5 className="font-medium text-yellow-900 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Bonnes pratiques pour les tâches
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-yellow-800 text-sm">
                    <div>
                      <strong>Granularité :</strong> 1-3 jours maximum par tâche
                    </div>
                    <div>
                      <strong>Assignation :</strong> Une personne responsable
                      par tâche
                    </div>
                    <div>
                      <strong>Critères d'acceptation :</strong> Définition
                      claire du "fini"
                    </div>
                    <div>
                      <strong>Dépendances :</strong> Identifier les prérequis
                    </div>
                    <div>
                      <strong>Estimation :</strong> Temps de réalisation prévu
                    </div>
                  </div>
                </div>

                <WorkflowStep
                  number="4"
                  title="Créez vos Sprints à partir des tâches"
                  description="Organisez vos tâches en itérations courtes avec des objectifs clairs."
                />

                <div className="ml-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h5 className="font-medium text-indigo-900 mb-2 flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Planification Sprint
                    </h5>
                    <ul className="text-indigo-800 text-sm space-y-1">
                      <li>
                        <strong>Durée :</strong> 1-4 semaines (recommandé : 2
                        semaines)
                      </li>
                      <li>
                        <strong>Objectif :</strong> Livrable concret et
                        démontrable
                      </li>
                      <li>
                        <strong>Capacité :</strong> Charge de travail réaliste
                        pour l'équipe
                      </li>
                      <li>
                        <strong>Statut :</strong> PLANNED → ACTIVE → COMPLETED
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h5 className="font-medium text-green-900 mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Cérémonies Scrum
                    </h5>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>
                        <strong>Sprint Planning :</strong> Sélection et
                        estimation des tâches
                      </li>
                      <li>
                        <strong>Daily Standup :</strong> Point quotidien
                        d'avancement
                      </li>
                      <li>
                        <strong>Sprint Review :</strong> Démonstration des
                        livrables
                      </li>
                      <li>
                        <strong>Sprint Retrospective :</strong> Amélioration
                        continue
                      </li>
                    </ul>
                  </div>
                </div>

                <WorkflowStep
                  number="5"
                  title="Créez l'architecture de votre application"
                  description="Définissez la structure technique et organisez vos fichiers de code."
                />

                <div className="ml-12 bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2 flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Gestion des fichiers
                  </h5>
                  <p className="text-gray-700 text-sm mb-4">
                    Utilisez le système de fichiers hiérarchique pour organiser
                    votre code :
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                    {["PAGE", "COMPONENT", "UTIL", "LIB", "STORE"].map(
                      (type) => (
                        <span
                          key={type}
                          className="px-3 py-2 bg-gray-200 text-gray-700 rounded text-xs text-center font-medium"
                        >
                          {type}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Workflow Teams */}
          <AccordionItem
            value="workflow-teams"
            className="bg-white rounded-xl shadow-lg border-0"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-xl">
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Workflow Équipes - Organisation et collaboration
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    Objectif
                  </h4>
                  <p className="text-blue-800">
                    Structurez vos équipes de manière hiérarchique pour
                    optimiser la collaboration et la gestion des droits.
                  </p>
                </div>

                <WorkflowStep
                  number="1"
                  title="Créez votre équipe principale (Organisation/Entreprise)"
                  description="Définissez l'entité racine qui chapeaute toutes vos équipes."
                  status="active"
                />

                <div className="ml-12 bg-purple-50 p-6 rounded-lg">
                  <h5 className="font-medium text-purple-900 mb-2 flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Équipe principale
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-purple-800 text-sm">
                    <div>
                      <strong>Nom :</strong> Nom de votre organisation
                    </div>
                    <div>
                      <strong>Thema :</strong> "ORGANIZATION" ou "COMPANY"
                    </div>
                    <div>
                      <strong>Description :</strong> Mission et valeurs
                    </div>
                    <div>
                      <strong>Privilèges :</strong> Droits administratifs
                      globaux
                    </div>
                  </div>
                </div>

                <WorkflowStep
                  number="2"
                  title="Créez vos équipes (Services/Départements)"
                  description="Organisez par domaines métier ou fonctionnels."
                />

                <div className="ml-12 bg-green-50 p-6 rounded-lg">
                  <h5 className="font-medium text-green-900 mb-4 flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Exemples d'équipes métier
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <strong className="text-green-900">
                        IT/Développement
                      </strong>
                      <p className="text-green-700 text-sm">
                        Frontend, Backend, DevOps
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <strong className="text-green-900">Produit</strong>
                      <p className="text-green-700 text-sm">
                        Product Owners, UX/UI
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <strong className="text-green-900">Marketing</strong>
                      <p className="text-green-700 text-sm">
                        Communication, Growth
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <strong className="text-green-900">Support</strong>
                      <p className="text-green-700 text-sm">
                        Customer Success, QA
                      </p>
                    </div>
                  </div>
                </div>

                <WorkflowStep
                  number="3"
                  title="Créez vos équipes opérationnelles"
                  description="Équipes projet spécialisées et squads de développement."
                />

                <div className="ml-12 bg-orange-50 p-6 rounded-lg">
                  <h5 className="font-medium text-orange-900 mb-2 flex items-center">
                    <Zap className="h-4 w-4 mr-2" />
                    Équipes opérationnelles
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-orange-800 text-sm">
                    <div>
                      <strong>Squad Alpha :</strong> Équipe produit principal
                    </div>
                    <div>
                      <strong>Squad Beta :</strong> Nouvelles fonctionnalités
                    </div>
                    <div>
                      <strong>Squad Infrastructure :</strong> Plateforme et
                      outils
                    </div>
                    <div>
                      <strong>Squad Mobile :</strong> Applications mobiles
                    </div>
                  </div>
                </div>

                <WorkflowStep
                  number="4"
                  title="Gérez les droits et autorisations"
                  description="Configurez les rôles et permissions selon les responsabilités."
                />

                <div className="ml-12 bg-red-50 p-6 rounded-lg">
                  <h5 className="font-medium text-red-900 mb-4 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Matrice des rôles
                  </h5>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm bg-white rounded-lg">
                      <thead>
                        <tr className="border-b border-red-200 bg-red-50">
                          <th className="text-left py-3 px-4 text-red-900 font-semibold">
                            Rôle
                          </th>
                          <th className="text-center py-3 px-4 text-red-900 font-semibold">
                            Lecture
                          </th>
                          <th className="text-center py-3 px-4 text-red-900 font-semibold">
                            Écriture
                          </th>
                          <th className="text-center py-3 px-4 text-red-900 font-semibold">
                            Admin
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-red-800">
                        {[
                          {
                            role: "USER",
                            read: "✅",
                            write: "❌",
                            admin: "❌",
                          },
                          {
                            role: "READER",
                            read: "✅",
                            write: "❌",
                            admin: "❌",
                          },
                          {
                            role: "AUTHOR",
                            read: "✅",
                            write: "✅",
                            admin: "❌",
                          },
                          { role: "DEV", read: "✅", write: "✅", admin: "⚠️" },
                          {
                            role: "ADMIN",
                            read: "✅",
                            write: "✅",
                            admin: "✅",
                          },
                        ].map((item, index) => (
                          <tr
                            key={index}
                            className="border-b border-red-100 hover:bg-red-25"
                          >
                            <td className="py-3 px-4 font-medium">
                              {item.role}
                            </td>
                            <td className="text-center py-3 px-4">
                              {item.read}
                            </td>
                            <td className="text-center py-3 px-4">
                              {item.write}
                            </td>
                            <td className="text-center py-3 px-4">
                              {item.admin}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <WorkflowStep
                  number="5"
                  title="Onboardez les collaborateurs"
                  description="Intégrez les nouveaux membres avec les bons accès et formations."
                />

                <div className="ml-12 bg-blue-50 p-6 rounded-lg">
                  <h5 className="font-medium text-blue-900 mb-2 flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Processus d'onboarding
                  </h5>
                  <ol className="text-blue-800 text-sm space-y-2 list-decimal list-inside">
                    <li>Création du compte utilisateur</li>
                    <li>Attribution du rôle approprié</li>
                    <li>Ajout aux équipes pertinentes</li>
                    <li>Formation aux outils et processus</li>
                    <li>Assignation aux premiers projets</li>
                  </ol>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Workflow Pilotage */}
          <AccordionItem
            value="workflow-pilotage"
            className="bg-white rounded-xl shadow-lg border-0"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-orange-50 to-amber-50 rounded-t-xl">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Workflow Pilotage - Gestion des ressources et suivi
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-6">
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Objectif
                  </h4>
                  <p className="text-orange-800">
                    Optimisez l'allocation des ressources et suivez la
                    performance de vos équipes en temps réel.
                  </p>
                </div>

                <WorkflowStep
                  number="1"
                  title="Attribuez des ressources à vos sprints"
                  description="Assignez les bonnes personnes aux bonnes tâches selon leurs compétences."
                  status="active"
                />

                <div className="ml-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h5 className="font-medium text-indigo-900 mb-2 flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      Allocation des ressources
                    </h5>
                    <ul className="text-indigo-800 text-sm space-y-1">
                      <li>
                        <strong>Capacité d'équipe :</strong> Calculez la
                        vélocité moyenne
                      </li>
                      <li>
                        <strong>Compétences :</strong> Matchez les profils aux
                        besoins techniques
                      </li>
                      <li>
                        <strong>Disponibilité :</strong> Vérifiez les congés et
                        autres projets
                      </li>
                      <li>
                        <strong>Charge de travail :</strong> Évitez la surcharge
                        et le sous-emploi
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h5 className="font-medium text-green-900 mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Métriques de suivi
                    </h5>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { title: "Vélocité", desc: "Points/tâches par sprint" },
                        { title: "Burndown", desc: "Progression quotidienne" },
                        {
                          title: "Time Tracking",
                          desc: "Temps réel vs estimé",
                        },
                        { title: "Qualité", desc: "Bugs et retours" },
                      ].map((metric, index) => (
                        <div
                          key={index}
                          className="bg-white p-3 rounded shadow-sm"
                        >
                          <strong className="text-green-900 text-sm">
                            {metric.title}
                          </strong>
                          <p className="text-green-700 text-xs">
                            {metric.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <WorkflowStep
                  number="2"
                  title="Suivez l'avancement en temps réel"
                  description="Utilisez les outils de reporting pour piloter efficacement."
                />

                <div className="ml-12 bg-yellow-50 p-6 rounded-lg">
                  <h5 className="font-medium text-yellow-900 mb-2 flex items-center">
                    <Target className="h-4 w-4 mr-2" />
                    Tableaux de bord
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-yellow-800 text-sm">
                    <div>
                      <strong>Vue Sprint :</strong> Avancement des tâches en
                      cours
                    </div>
                    <div>
                      <strong>Vue Projet :</strong> Progression globale et
                      roadmap
                    </div>
                    <div>
                      <strong>Vue Équipe :</strong> Charge et performance
                      individuelle
                    </div>
                    <div>
                      <strong>Vue Portfolio :</strong> Statut de tous les
                      projets
                    </div>
                  </div>
                </div>

                <WorkflowStep
                  number="3"
                  title="Optimisez et ajustez"
                  description="Analysez les données pour améliorer continuellement vos processus."
                />

                <div className="ml-12 bg-purple-50 p-6 rounded-lg">
                  <h5 className="font-medium text-purple-900 mb-2 flex items-center">
                    <Rocket className="h-4 w-4 mr-2" />
                    Amélioration continue
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-purple-800 text-sm">
                    <div>
                      <strong>Rétrospectives :</strong> Identifiez les blocages
                      et améliorations
                    </div>
                    <div>
                      <strong>Métriques :</strong> Analysez les tendances de
                      performance
                    </div>
                    <div>
                      <strong>Ajustements :</strong> Adaptez les processus et
                      allocations
                    </div>
                    <div>
                      <strong>Formation :</strong> Développez les compétences
                      manquantes
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Documentation */}
          <AccordionItem
            value="documentation"
            className="bg-white rounded-xl shadow-lg border-0"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gradient-to-r from-purple-50 to-violet-50 rounded-t-xl">
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Documentation - Ressources Scrum et bonnes pratiques
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-6">
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Ressources
                  </h4>
                  <p className="text-purple-800">
                    Retrouvez tous les documents et templates Scrum pour
                    accompagner vos équipes.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Templates Scrum
                    </h5>
                    <ul className="text-blue-800 text-sm space-y-2">
                      <li>
                        • <strong>Product Backlog :</strong> Priorisation des
                        fonctionnalités
                      </li>
                      <li>
                        • <strong>Sprint Backlog :</strong> Tâches du sprint en
                        cours
                      </li>
                      <li>
                        • <strong>User Story Template :</strong> Format
                        standardisé
                      </li>
                      <li>
                        • <strong>Definition of Done :</strong> Critères
                        d'acceptation
                      </li>
                      <li>
                        • <strong>Sprint Planning :</strong> Agenda et objectifs
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-green-900 mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Outils de suivi
                    </h5>
                    <ul className="text-green-800 text-sm space-y-2">
                      <li>
                        • <strong>Burndown Chart :</strong> Graphique
                        d'avancement
                      </li>
                      <li>
                        • <strong>Velocity Chart :</strong> Vélocité de l'équipe
                      </li>
                      <li>
                        • <strong>Cumulative Flow :</strong> Flux de travail
                      </li>
                      <li>
                        • <strong>Sprint Report :</strong> Bilan de sprint
                      </li>
                      <li>
                        • <strong>Retrospective Board :</strong> Amélioration
                        continue
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-orange-900 mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Guides pratiques
                    </h5>
                    <ul className="text-orange-800 text-sm space-y-2">
                      <li>
                        • <strong>Estimation :</strong> Planning Poker et Story
                        Points
                      </li>
                      <li>
                        • <strong>Cérémonies :</strong> Déroulé des meetings
                        Scrum
                      </li>
                      <li>
                        • <strong>Rôles :</strong> Product Owner, Scrum Master,
                        Dev Team
                      </li>
                      <li>
                        • <strong>Métriques :</strong> KPIs et indicateurs de
                        performance
                      </li>
                      <li>
                        • <strong>Scaling :</strong> Scrum à grande échelle
                        (SAFe, LeSS)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg">
                    <h5 className="font-semibold text-red-900 mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      Anti-patterns
                    </h5>
                    <ul className="text-red-800 text-sm space-y-2">
                      <li>
                        • <strong>Sprints trop longs :</strong> Maximum 4
                        semaines
                      </li>
                      <li>
                        • <strong>Scope creep :</strong> Pas de changements en
                        cours de sprint
                      </li>
                      <li>
                        • <strong>Micro-management :</strong> Autonomie de
                        l'équipe
                      </li>
                      <li>
                        • <strong>Réunions trop longues :</strong> Time-box
                        respecté
                      </li>
                      <li>
                        • <strong>Pas de rétrospective :</strong> Amélioration
                        continue obligatoire
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Ressources complémentaires
                  </h5>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "Scrum Guide",
                        desc: "Guide officiel Scrum.org",
                      },
                      {
                        title: "Agile Manifesto",
                        desc: "Principes fondamentaux",
                      },
                      {
                        title: "Templates Atlassian",
                        desc: "Modèles prêts à l'emploi",
                      },
                    ].map((resource, index) => (
                      <div
                        key={index}
                        className="text-center p-4 bg-white rounded-lg shadow-sm"
                      >
                        <h6 className="font-medium text-gray-900 mb-2">
                          {resource.title}
                        </h6>
                        <p className="text-gray-600 text-sm">{resource.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Raccourcis et astuces */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <Lightbulb className="h-6 w-6 mr-2" />
            Astuces et raccourcis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h6 className="font-medium text-gray-900 mb-2 flex items-center">
                <Keyboard className="h-4 w-4 mr-2" />
                Raccourcis clavier
              </h6>
              <div className="space-y-2 text-gray-600 text-sm">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+N</code>{" "}
                  : Nouveau projet
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+T</code>{" "}
                  : Nouvelle tâche
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+S</code>{" "}
                  : Nouveau sprint
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">Ctrl+/</code>{" "}
                  : Recherche globale
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h6 className="font-medium text-gray-900 mb-2 flex items-center">
                <Rocket className="h-4 w-4 mr-2" />
                Bonnes pratiques
              </h6>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Utilisez des noms descriptifs</li>
                <li>• Mettez à jour les statuts régulièrement</li>
                <li>• Commentez les décisions importantes</li>
                <li>• Archivez les projets terminés</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
            <HelpCircle className="h-6 w-6 mr-2" />
            Besoin d'aide ?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Documentation",
                desc: "Consultez cette page",
                color: "blue",
              },
              {
                icon: Users,
                title: "Équipe",
                desc: "Contactez votre admin",
                color: "green",
              },
              {
                icon: Play,
                title: "Formation",
                desc: "Sessions d'onboarding",
                color: "purple",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div
                  className={`bg-${item.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                </div>
                <h6 className="font-medium text-gray-900 mb-1">{item.title}</h6>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
