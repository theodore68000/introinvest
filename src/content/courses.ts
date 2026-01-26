// src/content/courses.ts

export type PartId = "comprendre" | "choisir" | "investir";

export type Course = {
  /** Unique id used for routing: /course/[id] */
  id: string;
  /** Display title */
  title: string;
  /** Estimated duration shown in the UI */
  minutes: number;
  /** Where the .md file lives (relative to src/content/lessons) */
  lessonPath: string;
  /** Optional short description shown on the card */
  summary?: string;
};

export type Part = {
  id: PartId;
  title: string;
  description: string;
  courses: Course[];
};

/**
 * Source of truth for your learning path.
 * No unlocking: everything is accessible.
 *
 * Convention:
 * - Course id: "<part>-<n>"  e.g. "comprendre-1"
 * - lessonPath: "<part>/c<n>.md" e.g. "comprendre/c1.md"
 */
export const PARTS: Part[] = [
  {
    id: "comprendre",
    title: "Comprendre",
    description: "Apprend les bases du fonctionnement de la bourse et des produits financiers",
    courses: [
      {
        id: "comprendre-1",
        title: "Pourquoi Investir ?",
        minutes: 6,
        lessonPath: "comprendre/c1.md",
        summary: "Découvre la puissance des intérêts composés",
      },
      {
        id: "comprendre-2",
        title: "La Bourse : Qu'est-ce que c'est ?",
        minutes: 7,
        lessonPath: "comprendre/c2.md",
        summary: "Entre dans le monde de Pierre Chartier !",
      },
      {
        id: "comprendre-3",
        title: "Une Action : Qu'est-ce que c'est ?",
        minutes: 8,
        lessonPath: "comprendre/c3.md",
        summary: "Tu en as forcément entendu parlé, mais sais-tu précisemment ce que c'est ?",
      },
      {
        id: "comprendre-4",
        title: "Une Obligation : Qu'est-ce que c'est ?",
        minutes: 7,
        lessonPath: "comprendre/c4.md",
        summary: "Tu en as surement entendu parlé, mais sais-tu précisemment ce que c'est ?",
      },
      {
        id: "comprendre-5",
        title: "Les Indices Boursiers : Qu'est-ce que c'est ?",
        minutes: 6,
        lessonPath: "comprendre/c5.md",
        summary: "CAC40, S&P500 : découvre ce qu'ils représentent réellement !",
      },
      {
        id: "comprendre-6",
        title: "La Bourse : Comment ça marche ?",
        minutes: 6,
        lessonPath: "comprendre/c6.md",
        summary: "Découvre son fonctionnement en détail",
      },
      {
        id: "comprendre-7",
        title: "La Bourse : Pourquoi ça marche ?",
        minutes: 6,
        lessonPath: "comprendre/c7.md",
        summary: "Découvre pourquoi les indices boursiers ne font qu'augmenter depuis leur création",
      },
      {
        id: "comprendre-8",
        title: "Les Entreprises : Pourquoi elles utilisent la bourse ?",
        minutes: 6,
        lessonPath: "comprendre/c8.md",
        summary: "Découvre pourquoi les entreprises entre en bourse",
      },
      {
        id: "comprendre-9",
        title: "Les Actionnaires : Pourquoi ils utilisent la bourse ?",
        minutes: 6,
        lessonPath: "comprendre/c9.md",
        summary: "Découvre ce qui pousse les investisseurs et les banques à investir",
      },
    ],
  },
  {
    id: "choisir",
    title: "Choisir",
    description: "Découvre comment investir et comment se préparer aux risques",
    courses: [
      {
        id: "choisir-1",
        title: "Avant d'acheter : Le mindset de l'investisseur",
        minutes: 8,
        lessonPath: "choisir/c1.md",
        summary: "Es-tu dans le bon état d'esprit ?",
      },
      {
        id: "choisir-2",
        title: "Trouve ton profil d'investisseur",
        minutes: 7,
        lessonPath: "choisir/c2.md",
        summary: "Fais face à plusieurs profil et découvre dans lequel tu te reconnais le plus",
      },
      {
        id: "choisir-3",
        title: "Une seule règle : se fixer des règles",
        minutes: 7,
        lessonPath: "choisir/c3.md",
        summary: "Découvre comment fixer tes règles pour qu'elles décident à ta place en moments de crise",
      },
      {
        id: "choisir-4",
        title: "Tiendras-tu le choc ?",
        minutes: 6,
        lessonPath: "choisir/c4.md",
        summary: "Fais face à ces cas désavantageux pour vérifier si tu joues selon tes règles",
      },
      {
        id: "choisir-5",
        title: "Quels produits financier acheter ?",
        minutes: 6,
        lessonPath: "choisir/c5.md",
        summary: "PEA, CTO, Assurance-Vie : découvre les avantages et inconvénients de chaque type de portefeuille",
      },
      {
        id: "choisir-6",
        title: "Quand et Comment les acheter ?",
        minutes: 8,
        lessonPath: "choisir/c6.md",
        summary: "Expérimente des stratégies simples d'investissement",
      },
            {
        id: "choisir-7",
        title: "Les pièges à éviter !",
        minutes: 8,
        lessonPath: "choisir/c7.md",
        summary: "Les arnaques et frais démesurés sont monnaie courante dans ce domaine : découvre comment t'en prémunir",
      },
    ],
  },
  {
    id: "investir",
    title: "Investir",
    description: "Passer à l’action dès maintenant !",
    courses: [
      {
        id: "Les plateformes d'investissment",
        title: "Quand investir ? (mythes et réalité)",
        minutes: 6,
        lessonPath: "investir/c1.md",
        summary: "Découvre les plateformes depuis lequel tu peux investir, avec leurs avantages et inconvénients",
      },
      {
        id: "investir-2",
        title: "Ton Premier Investissement",
        minutes: 7,
        lessonPath: "investir/c2.md",
        summary: "Expérimente un premier investissement comme si tu le faisais toi-même et découvre toutes les subtilités",
      },
    ],
  },
];

// Helpers pratiques (optionnels)
export const ALL_COURSES: Course[] = PARTS.flatMap((p) => p.courses);

export function getCourseById(id: string): Course | undefined {
  return ALL_COURSES.find((c) => c.id === id);
}

export function getPartById(id: PartId): Part | undefined {
  return PARTS.find((p) => p.id === id);
}
