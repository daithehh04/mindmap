const api = `${process.env.NEXT_PUBLIC_API}/mindmaps`;
export const postMindmap = async (data) => {
  try {
    const response = await fetch(`${api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // Xử lý khi trạng thái phản hồi không thành công (ví dụ: 404 Not Found, 500 Internal Server Error)
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response;
  } catch (error) {
    // Xử lý lỗi xảy ra trong quá trình fetch
    console.error('Error during fetch:', error);
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
export const getMindmaps = async (id) => {
  try {
    const response = await fetch(`${api}?user_id=${id}`);
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
