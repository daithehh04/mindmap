const api = process.env.NEXT_PUBLIC_API;
export const postMindmap = async (data) => {
  try {
    const response = await fetch(`${api}/mindmaps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const dataPost = await response.json();
    return { response, data: dataPost };
  } catch (error) {
    console.log(error);
  }
};

export const deleteMindmap = async (id) => {
  try {
    const response = await fetch(`${api}/mindmaps/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateMindmap = async (dataUpdate, id) => {
  try {
    const response = await fetch(`${api}/mindmaps/${id}`, {
      method: 'PUT',
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
