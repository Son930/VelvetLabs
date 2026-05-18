export type ContactNotificationInput = {
  name: string
  email: string
  company?: string
  message: string
  clientIp: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function buildContactNotificationEmail({
  name,
  email,
  company,
  message,
  clientIp,
}: ContactNotificationInput): { subject: string; text: string; html: string } {
  const subject = `Contact: ${name}${company ? ` (${company})` : ''}`

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    '',
    message,
    '',
    `— Sent via velvetlabs.co.uk contact form (${clientIp})`,
  ]
    .filter(Boolean)
    .join('\n')

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeCompany = company ? escapeHtml(company) : ''
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')
  const safeIp = escapeHtml(clientIp)

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Segoe UI',system-ui,sans-serif;color:#f5f5f4;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0a0a0a;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#141414;border:1px solid #2a2a2a;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="padding:28px 32px 20px;border-bottom:1px solid #2a2a2a;">
              <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#c4a35a;">Velvet Labs</p>
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:500;color:#f5f5f4;">New contact message</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 32px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;line-height:1.6;color:#a8a29e;">
                <tr><td style="padding-bottom:10px;"><strong style="color:#f5f5f4;">Name</strong><br />${safeName}</td></tr>
                <tr><td style="padding-bottom:10px;"><strong style="color:#f5f5f4;">Email</strong><br /><a href="mailto:${safeEmail}" style="color:#c4a35a;text-decoration:none;">${safeEmail}</a></td></tr>
                ${company ? `<tr><td style="padding-bottom:10px;"><strong style="color:#f5f5f4;">Company</strong><br />${safeCompany}</td></tr>` : ''}
                <tr>
                  <td style="padding-top:8px;">
                    <strong style="color:#f5f5f4;">Message</strong>
                    <p style="margin:8px 0 0;color:#d6d3d1;">${safeMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 24px;border-top:1px solid #2a2a2a;font-size:11px;color:#737373;">
              Sent via velvetlabs.co.uk contact form · ${safeIp}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  return { subject, text, html }
}
