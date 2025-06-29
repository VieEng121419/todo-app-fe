import api from "@/lib/api";

export const getTodos = async () => {
  try {
    const response = await api.get("api/todo");
    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
