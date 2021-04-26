const path = require('path');
const MailerService = require('moleculer-mail');
const { MIME_TYPES } = require('@semapps/mime-types');
const CONFIG = require('../config');

module.exports = {
  name: 'mailer',
  mixins: [MailerService],
  settings: {
    from: `${CONFIG.FROM_NAME} <${CONFIG.FROM_EMAIL}>`,
    transport: {
      host: CONFIG.SMTP_HOST,
      port: CONFIG.SMTP_PORT,
      secure: CONFIG.SMTP_SECURE,
      auth: {
        user: CONFIG.SMTP_USER,
        pass: CONFIG.SMTP_PASS,
      },
    },
    templateFolder: path.join(__dirname, "../templates"),
  },
  dependencies: ['ldp'],
  actions: {
    async contactUser(ctx) {
      const { userUri, name, email, title, content } = ctx.params;

      console.log({
        from: `${CONFIG.FROM_NAME} <${CONFIG.FROM_EMAIL}>`,
        transport: {
          host: CONFIG.SMTP_HOST,
          port: CONFIG.SMTP_PORT,
          secure: CONFIG.SMTP_SECURE,
          auth: {
            user: CONFIG.SMTP_USER,
            pass: CONFIG.SMTP_PASS,
          },
        },
      });

      if( !userUri ) {
        throw new Error('Parameter userUri is missing');
      }

      const user = await ctx.call('ldp.resource.get', {
        resourceUri: userUri,
        accept: MIME_TYPES.JSON
      });

      console.log({
        to: `${user['pair:label']} <${user['pair:e-mail']}>`,
        replyTo: `${name} <${email}>`,
        subject: title,
        template: 'contact-user',
        data: {
          name,
          email,
          title,
          content,
          contentWithBr: content.replace(/\r\n|\r|\n/g, '<br />')
        }
      });

      await ctx.call('mailer.send', {
        to: `${user['pair:label']} <${user['pair:e-mail']}>`,
        replyTo: `${name} <${email}>`,
        subject: title,
        template: 'contact-user',
        data: {
          name,
          email,
          title,
          content,
          contentWithBr: content.replace(/\r\n|\r|\n/g, '<br />')
        }
      });
    },
    getApiRoutes() {
      return [
        {
          bodyParsers: { json: true },
          aliases: {
            [`POST _mailer/contact-user`]: 'mailer.contactUser',
          }
        }
      ];
    }
  }
};
