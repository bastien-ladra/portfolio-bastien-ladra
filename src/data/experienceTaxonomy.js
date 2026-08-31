export const experienceTaxonomy = {
  "NEHS Digital — Projet DRIM-M": "professional",
  GSOI: "professional",
  "ASTEK Digital Cloud Factory": "professional",
  "EPITECH EIP": "academic",
};

export function getExperienceKind(company) {
  return experienceTaxonomy[company] ?? null;
}
