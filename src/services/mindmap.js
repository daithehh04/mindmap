// const api = process.env.NEXT_PUBLIC_API;
const api = 'http://localhost:3005/mindmaps';
export const postMindmap = async (data) => {
  try {
    const response = await fetch(`${api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMindmap = async (id) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateMindmap = async (dataUpdate, id) => {
  try {
    const response = await fetch(`${api}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataUpdate),
    });
    const dataMode = await response.json();
    return { response, dataMode };
  } catch (error) {
    console.log(error);
  }
};
