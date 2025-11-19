import { AgendaItem, ModuleSummary } from './types';

export const REPORT_META = {
  title: "Compte Rendu de Formation - Jour 1",
  subtitle: "Santé Sexuelle et Reproductive en Situation d'Urgence",
  date: "13 Novembre 2025",
  location: "Salle de l'économat général, Uvira",
  organizers: ["MCZ", "Partenaire AFPDE"],
  authors: ["IT Kirungu", "IT Kavimvira", "IT Kalundu Etat"]
};

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    time: "08:30 - 10:30",
    title: "Ouverture & Protocole",
    description: "Mots d'ouverture, présentation des participants, élection du chef de village, code de bonne conduite et pré-test.",
    icon: 'users'
  },
  {
    time: "10:30 - 11:10",
    title: "Pause Café",
    description: "Pause et réseautage.",
    icon: 'coffee'
  },
  {
    time: "11:10 - 13:00",
    title: "Module 1 : DMU & SSR",
    description: "Introduction au Dispositif Minimum d'Urgence et objectifs de la santé sexuelle.",
    icon: 'book'
  },
  {
    time: "13:00 - 14:30",
    title: "Module 2 : Coordination",
    description: "Rôle, niveaux et importance de la coordination humanitaire.",
    icon: 'activity'
  },
  {
    time: "14:30 - 14:58",
    title: "Pause Repas",
    description: "Déjeuner.",
    icon: 'coffee'
  },
  {
    time: "14:59 - 16:00",
    title: "Module 3 : VBG",
    description: "Violences Basées sur le Genre : définitions, facteurs de risque et prévention.",
    icon: 'users'
  },
  {
    time: "16:00",
    title: "Clôture",
    description: "Évaluation journalière et fin de la session.",
    icon: 'clock'
  }
];

export const MODULES: ModuleSummary[] = [
  {
    title: "Introduction à la SSR et le DMU",
    facilitator: "Premier Facilitateur",
    details: "Le Dispositif Minimum d'Urgence (DMU) est un ensemble d'activités prioritaires vitales.",
    keyPoints: [
      "Prévenir la violence sexuelle et gérer les conséquences.",
      "Réduire la transmission du VIH.",
      "Prévenir la surmortalité maternelle et néo-natale.",
      "Planification des services complets dès le début de l'urgence.",
      "Analyse des causes des crises : catastrophes, conflits, épidémies."
    ]
  },
  {
    title: "La Coordination Humanitaire",
    facilitator: "Premier Facilitateur",
    details: "La coordination est le premier objectif du DMU, essentiel pour l'efficacité et la rapidité.",
    keyPoints: [
      "Assurer une fonction à temps plein (3-6 mois).",
      "Appui technique et rationnel aux partenaires.",
      "Collaboration entre agents de santé et autres secteurs.",
      "Prise de décision stratégique et résolution de problèmes."
    ]
  },
  {
    title: "Violences Basées sur le Genre (VBG)",
    facilitator: "Deuxième Facilitateur",
    details: "Analyse des risques accrus de VBG en situation de conflit et d'urgence.",
    keyPoints: [
      "Définition : Actes préjudiciables basés sur les différences de genre.",
      "Facteurs aggravants : promiscuité, manque d'intimité, vulnérabilité, conflits armés.",
      "Formes : Violence verbale, sexuelle, domestique, mariage forcé.",
      "Prévention : Actions concrètes avant et après la crise."
    ]
  }
];

export const FULL_REPORT_CONTEXT = `
CONTEXTE:
Rapport journalier de formation (J1) tenue à Uvira, Salle de l'économat général, le 13 Novembre 2025.
Thème : Santé Sexuelle et Reproductive en Situation d'Urgence.

DÉROULEMENT:
- Ouverture avec léger retard. Mots du MCZ et AFPDE.
- Présentation participants, agenda, élection chef de village, code de conduite.
- Pré-test réalisé.
- 10h30 : Pause café.

MODULE 1 (11h10-13h) : DMU (Dispositif Minimum d'Urgence)
- Définition : Ensemble coordonné d'activités prioritaires pour sauver des vies.
- Buts : Prévenir violence sexuelle, VIH, mortalité maternelle/néonatale.
- 6 Objectifs du DMU : 1) Coordination, 2) VBG, 3) VIH/IST, 4) Mortalité maternelle/néonatale, 5) Grossesses non désirées, 6) Planification SSR.
- Crises humanitaires : Causes (catastrophes, climat, conflits, épidémies).
- Populations touchées : Réfugiés, déplacés, hôtes.

MODULE 2 : COORDINATION
- Premier objectif du DMU.
- Importance : Efficacité, rapidité, décision stratégique.
- Rôle : Fonction temps plein (3-6 mois), appui technique, planification coordonnée.

PAUSE REPAS (14h30-14h58)

MODULE 3 (14h59) : VBG (Violences Basées sur le Genre)
- Facilitateur 2.
- Définition : Acte contre la volonté basé sur le genre.
- Facteurs de risque en urgence : Conflits, exploitation, manque d'intimité, séparation familiale.
- Types : Verbale, mariage forcé, sexuelle, domestique, liée à la dote.
- Causes racines : Pauvreté, manque d'éducation, alcoolisme.

CLÔTURE (16h00) : Évaluation de la journée.
Rapporteurs : IT Kirungu, IT Kavimvira, IT Kalundu Etat.
`;