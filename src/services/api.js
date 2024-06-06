const serverURL = "http://localhost:8080/";

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
