import nodemailer, { TransportOptions } from 'nodemailer';
import { regex } from 'src/components/Rsvp/errors';

const transporter = nodemailer.createTransport({
  host: 'disabled',
  port: 'disabled',
  auth: {
    user: 'disabled',
    pass: 'disabled',
  },
} as TransportOptions);

const validate = (name: string, value: string): boolean => {
  if (value === '') {
    return false;
  }

  if (regex.special.test(value)) {
    return false;
  }

  if (name === 'email' || name === 'phone') {
    if (!regex[name].test(value)) {
      return false;
    }
  }

  return true;
};

export default async (req, res) => {
  const { recipientMail, name, email, phone, attend, relation } = req.body;

  if (
    !validate('email', email) ||
    !validate('name', name) ||
    !validate('phone', phone) ||
    !validate('attend', attend) ||
    !validate('relation', relation) ||
    !validate('recipientMail', recipientMail)
  ) {
    res.status(403).send('');
    return;
  }

  const mailerRes = await mailer({
    senderMail: email,
    name,
    text: `
      Name: ${name}.
      Email: ${email}.
      Phone: ${phone}.
      Attending: ${attend}.
      Relationship: ${relation}.
    `,
    recipientMail,
  });
  res.send(mailerRes);
};

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from,
    to: `${recipientMail}`,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info),
    );
  });
};
