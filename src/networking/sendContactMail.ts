import axios from 'axios';

export const sendContactMail = async (
  recipientMail: string,
  name: string,
  email: string,
  phone: string,
  attend: string,
  relation: string,
) => {
  const data = {
    recipientMail,
    name,
    email,
    phone,
    attend,
    relation,
  };

  try {
    const res = await axios({
      method: 'post',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    });
    return res;
  } catch (error) {
    return error;
  }
};
