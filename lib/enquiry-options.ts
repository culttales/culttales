// Choices offered on the enquiry form. The API only accepts these values for
// the matching fields, so the confirmation email can repeat them safely.
export const BUDGETS = [
  "₹2 – 5 lakh",
  "₹5 – 10 lakh",
  "₹10 lakh +",
  "Not sure yet",
] as const;

export const GUESTS = [
  "Intimate (under 100 guests)",
  "100 – 250 guests",
  "250 – 500 guests",
  "500+ guests",
] as const;

export const SCOPES = [
  "Photography + Wedding Cinema",
  "Photography only",
  "Wedding Cinema only",
] as const;
