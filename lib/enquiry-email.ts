// HTML and plain-text bodies for the enquiry notification email.
// Email clients ignore most CSS, so this is table markup with inline styles.

export type EnquiryData = Record<
  | "name"
  | "email"
  | "phone"
  | "wedding"
  | "location"
  | "guests"
  | "rituals"
  | "scope"
  | "budget"
  | "message",
  string
>;

const INK = "#161412";
const BRONZE = "#9E7B56";
const IVORY = "#F7F4EF";
const SAND = "#EDE6DB";
const MUTED = "#7A7268";
const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Digits only for tel: and wa.me links; a bare 10-digit number is assumed to be Indian.
function phoneDigits(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  return digits.replace(/^00/, "");
}

const label = (text: string) =>
  `<div style="font:600 10px/1 ${SANS};letter-spacing:2px;text-transform:uppercase;color:${BRONZE};padding-bottom:6px">${text}</div>`;

// One cell of the summary card.
function summaryCell(title: string, valueHtml: string, width = "50%") {
  return `<td valign="top" width="${width}" style="padding:14px 20px 14px 0">${label(title)}<div style="font:400 15px/1.45 ${SANS};color:${INK}">${valueHtml}</div></td>`;
}

export function buildEnquiryHtml(data: EnquiryData) {
  const e = (value: string) => escapeHtml(value);
  const digits = data.phone ? phoneDigits(data.phone) : "";

  const phoneHtml = data.phone
    ? digits
      ? `<a href="tel:+${digits}" style="color:${INK};text-decoration:none;font-weight:600">${e(data.phone)}</a>`
      : e(data.phone)
    : "";
  const emailHtml = `<a href="mailto:${e(data.email)}" style="color:${INK};text-decoration:none;font-weight:600">${e(data.email)}</a>`;

  const summary: string[] = [];
  if (data.phone) summary.push(summaryCell("Phone / WhatsApp", phoneHtml));
  summary.push(summaryCell("Email", emailHtml));
  if (data.wedding) summary.push(summaryCell("Celebration dates", e(data.wedding)));
  if (data.budget) summary.push(summaryCell("Budget", `<span style="font-weight:600">${e(data.budget)}</span>`));
  if (data.scope) summary.push(summaryCell("Coverage", e(data.scope), "100%"));

  // Two cells per row; a full-width cell takes a row of its own.
  const rows: string[] = [];
  let pending = "";
  for (const cell of summary) {
    if (cell.includes('width="100%"')) {
      if (pending) rows.push(`<tr>${pending}</tr>`);
      pending = "";
      rows.push(`<tr>${cell.replace('width="100%"', 'colspan="2" width="100%"')}</tr>`);
    } else if (pending) {
      rows.push(`<tr>${pending}${cell}</tr>`);
      pending = "";
    } else {
      pending = cell;
    }
  }
  if (pending) rows.push(`<tr>${pending}<td></td></tr>`);

  const details = (
    [
      ["Venue & city", data.location],
      ["Guests", data.guests],
      ["Rituals & events", data.rituals],
    ] as const
  )
    .filter(([, value]) => value)
    .map(
      ([title, value]) =>
        `<tr><td style="padding:12px 0;border-top:1px solid ${SAND}">${label(title)}<div style="font:400 15px/1.5 ${SANS};color:${INK}">${e(value)}</div></td></tr>`,
    )
    .join("");

  const button = (href: string, text: string, filled: boolean) =>
    `<a href="${href}" style="display:inline-block;margin:0 8px 8px 0;padding:13px 24px;font:600 11px/1 ${SANS};letter-spacing:2px;text-transform:uppercase;text-decoration:none;border:1px solid ${INK};background:${filled ? INK : "transparent"};color:${filled ? IVORY : INK}">${text}</a>`;

  const buttons = [
    button(`mailto:${e(data.email)}`, "Reply by email", true),
    digits ? button(`https://wa.me/${digits}`, "WhatsApp", false) : "",
    digits ? button(`tel:+${digits}`, "Call", false) : "",
  ].join("");

  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:${IVORY}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${e(data.name)}${data.budget ? ` · ${e(data.budget)}` : ""}${data.wedding ? ` · ${e(data.wedding)}` : ""}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${IVORY}"><tr><td align="center" style="padding:32px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px">
  <tr><td style="background:${INK};padding:28px 32px">
    <div style="font:400 22px/1 ${SERIF};letter-spacing:1px;color:${IVORY}">CULT<span style="color:${BRONZE}">.</span> tales</div>
  </td></tr>
  <tr><td style="background:#FFFFFF;padding:36px 32px 8px">
    ${label("New enquiry")}
    <div style="font:400 32px/1.15 ${SERIF};color:${INK}">${e(data.name)}</div>
  </td></tr>
  <tr><td style="background:#FFFFFF;padding:20px 32px 12px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${IVORY};border-left:3px solid ${BRONZE}"><tr><td style="padding:12px 0 6px 24px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows.join("")}</table>
    </td></tr></table>
  </td></tr>
  ${
    details
      ? `<tr><td style="background:#FFFFFF;padding:8px 32px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${details}</table></td></tr>`
      : ""
  }
  <tr><td style="background:#FFFFFF;padding:16px 32px 8px">
    <div style="border-top:1px solid ${SAND};padding-top:16px">${label("Message")}
    <div style="font:400 17px/1.65 ${SERIF};color:${INK}">${e(data.message).replace(/\n/g, "<br>")}</div></div>
  </td></tr>
  <tr><td style="background:#FFFFFF;padding:24px 32px 36px">${buttons}</td></tr>
  <tr><td style="padding:20px 32px;font:400 11px/1.6 ${SANS};color:${MUTED};text-align:center">Sent from the enquiry form at culttales.com. Replying to this email goes to ${e(data.name)}.</td></tr>
</table>
</td></tr></table>
</body></html>`;
}

export function buildEnquiryText(data: EnquiryData) {
  const lines: [string, string][] = [
    ["Names", data.name],
    ["Phone / WhatsApp", data.phone],
    ["Email", data.email],
    ["Celebration dates", data.wedding],
    ["Budget estimate", data.budget],
    ["Coverage", data.scope],
    ["Venue & city", data.location],
    ["Guests", data.guests],
    ["Rituals & events", data.rituals],
  ];
  return [
    ...lines.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    data.message,
  ].join("\n");
}

// Automatic acknowledgement sent to the person who submitted the enquiry.
// No response time is promised on purpose.
export function buildConfirmationHtml(data: EnquiryData) {
  const first = escapeHtml(data.name.split(/\s+/)[0] || data.name);
  const rows = (
    [
      ["Celebration dates", data.wedding],
      ["Venue & city", data.location],
      ["Coverage", data.scope],
    ] as const
  )
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:10px 0;border-top:1px solid ${SAND}">${label(k)}<div style="font:400 15px/1.5 ${SANS};color:${INK}">${escapeHtml(v)}</div></td></tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:${IVORY}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">Thank you for reaching out. Our team will be in touch with you shortly.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${IVORY}"><tr><td align="center" style="padding:32px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px">
  <tr><td style="background:${INK};padding:28px 32px"><div style="font:400 22px/1 ${SERIF};letter-spacing:1px;color:${IVORY}">CULT<span style="color:${BRONZE}">.</span> tales</div></td></tr>
  <tr><td style="background:#FFFFFF;padding:40px 32px 8px">
    ${label("Enquiry received")}
    <div style="font:400 30px/1.2 ${SERIF};color:${INK}">Thank you, ${first}.</div>
  </td></tr>
  <tr><td style="background:#FFFFFF;padding:12px 32px 8px;font:400 15px/1.7 ${SANS};color:${INK}">
    <p style="margin:0 0 16px">We have received your enquiry and are grateful you thought of us for your celebration.</p>
    <p style="margin:0">Our team will contact you shortly to talk through your story and how we can document it.</p>
  </td></tr>
  ${rows ? `<tr><td style="background:#FFFFFF;padding:20px 32px 0"><div style="font:600 10px/1 ${SANS};letter-spacing:2px;text-transform:uppercase;color:${MUTED};padding-bottom:10px">What you shared</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table></td></tr>` : ""}
  <tr><td style="background:#FFFFFF;padding:24px 32px 36px;font:400 14px/1.7 ${SANS};color:${MUTED}">
    If you would like to add anything, simply reply to this email.<br><br>
    <span style="font:400 18px/1 ${SERIF};color:${INK}">Warmly,</span><br>
    <span style="font:400 18px/1.6 ${SERIF};color:${INK}">Team CULT<span style="color:${BRONZE}">.</span> tales</span>
  </td></tr>
  <tr><td style="padding:20px 32px;font:400 11px/1.6 ${SANS};color:${MUTED};text-align:center">You are receiving this because you submitted an enquiry at culttales.com.</td></tr>
</table>
</td></tr></table>
</body></html>`;
}

export function buildConfirmationText(data: EnquiryData) {
  const first = data.name.split(/\s+/)[0] || data.name;
  return `Thank you, ${first}.

We have received your enquiry and are grateful you thought of us for your celebration.

Our team will contact you shortly to talk through your story and how we can document it.

If you would like to add anything, simply reply to this email.

Warmly,
Team CULT. tales`;
}
