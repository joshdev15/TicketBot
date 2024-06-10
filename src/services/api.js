const serverURL = "https://tatcbot-backend-production.up.railway.app/";

export const connectionHandler = async () => {
  try {
    const response = await fetch(serverURL);
    const data = await response.json();
    console.log(data);
    return data.message;
  } catch (e) {
    console.error(e);
  }
};
