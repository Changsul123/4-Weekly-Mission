import { useQuery, useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Link } from "@/src/link/type";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
const DEFAULT_USER = {
  id: 0,
  name: "",
  email: "",
  imageSource: "",
};

interface LoginParams {
  email: string;
  password: string;
}

interface SignUpParams extends LoginParams {}

export function usePostLogin() {
  return useMutation({
    mutationFn: async ({ email, password }: LoginParams) => {
      const response = await fetch(`${BASE_URL}/auth/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }
      return data;
    },
  });
}

export function usePostSignup() {
  return useMutation({
    mutationFn: async ({ email, password }: SignUpParams) => {
      const response = await fetch(`${BASE_URL}/auth/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      return data;
    },
  });
}

export function useGetUser() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }, []);

  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const responseData = await response.json();

      const data = responseData?.[0] && {
        id: responseData?.[0].id,
        name: responseData?.[0].name,
        email: responseData?.[0].email,
        imageSource: responseData?.[0].image_source,
      };
      localStorage.setItem("userId", data.id);

      return data;
    },
    enabled: !!token,
    initialData: DEFAULT_USER,
  });
}

export function useGetFolders() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }, []);

  return useQuery({
    queryKey: ["folders"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/folders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      localStorage.setItem("folderId", data?.[0].id);

      return data;
    },
    enabled: !!token,
  });
}
export function useGetLinks() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }, []);

  return useQuery({
    queryKey: ["links"],
    queryFn: async () => {
      const response = await fetch(`${BASE_URL}/sample/links`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    },
  });
}

export function useGetSharedLinks() {
  const [userId, setUserId] = useState<number | null>(null);
  const [folderId, setFolderId] = useState<number | null>(null);

  useEffect(() => {
    setUserId(Number(localStorage.getItem("userId")));
    setFolderId(Number(localStorage.getItem("folderId")));
  }, []);

  return useQuery<Link[]>({
    queryKey: ["userLinks"],
    queryFn: async () => {
      const response = await fetch(
        `${BASE_URL}/users/${userId}/links?folderId=${folderId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      return data;
    },
    enabled: !!userId,
  });
}
