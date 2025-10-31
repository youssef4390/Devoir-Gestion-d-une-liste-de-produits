export const isExpired = (isoDate, ref = new Date()) =>
  new Date(isoDate) < ref;// Vérifie si une date ISO est antérieure à la date de référence (par défaut aujourd'hui)
