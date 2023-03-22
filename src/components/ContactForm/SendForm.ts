import { Email } from '../../interfaces/interfaces';

export default async ({ name, mail, topic, message }: Email) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'text/plain');

  const raw = `name=${name}&mail=${mail}&topic=${topic}&message=${message}`;
  console.log('raw: ', raw);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch('https://krlproducciones.cl/php/mail.php', requestOptions)
      .then((response) => response.text())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
