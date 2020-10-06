import nodemailer from 'nodemailer';

const emailPass = 'Oscar890914Oscar';

const transporter = nodemailer.createTransport({
  host: 'www40.cpt4.host-h.net',
  port: 587,
  auth: {
    user: 'rsvp@marisaneilwedding.co.za',
    pass: emailPass,
  },
});
//[1]

export default async (req, res) => {
  const { recipientMail, name, email, phone, attend, relation } = req.body;
  //[2]

  // Check if fields are all filled
  if (
    email === '' ||
    name === '' ||
    phone === ''
    // attend === '' ||
    // // relation === '' ||
    // recipientMail === ''
  ) {
    res.status(403).send('');
    return;
  }
  //[3]

  const mailerRes = await mailer({
    senderMail: email,
    name,
    text: `
      Name: ${name}.
      Email: ${email}.
      Phone: ${phone}.
      Attending: ${attend}.
      Relationship: ${attend}.
    `,
    recipientMail,
  });
  res.send(mailerRes);
  //[4]
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
  //[5]

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info),
    );
  });
  //[6]
};
