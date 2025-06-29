import api from "@/lib/api";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/signin", {
      email,
      password,
    });

    if (!response || !response.data) {
      throw new Error("No data received from the server");
    }
    const { data } = response;

    localStorage.setItem("accessToken", data.accessToken);
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
