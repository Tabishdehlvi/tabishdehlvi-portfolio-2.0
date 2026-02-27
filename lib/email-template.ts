export function ContactEmailTemplate(
  name: string,
  email: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; }
          .info-block { margin-bottom: 25px; }
          .label { color: #667eea; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
          .value { color: #333333; font-size: 14px; line-height: 1.6; }
          .message-box { background-color: #f9f9f9; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .message-box p { margin: 0; color: #555555; font-size: 14px; line-height: 1.8; }
          .footer { background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #dddddd; }
          .timestamp { color: #999999; font-size: 12px; margin-top: 10px; }
          a { color: #667eea; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">From Your Portfolio</p>
          </div>
          
          <div class="content">
            <div class="info-block">
              <div class="label">👤 Sender Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="info-block">
              <div class="label">📧 Email Address</div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            <div class="info-block">
              <div class="label">💬 Message</div>
              <div class="message-box">
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div class="timestamp">
              Received on: ${new Date().toLocaleString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: true
              })}
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from your portfolio website contact form.</p>
            <p style="margin-top: 10px;">You can reply directly to this email to contact the sender.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
