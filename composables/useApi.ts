import ky from "ky";

export const useApi = () => {
  const config = useRuntimeConfig();
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");

  return ky.create({
    prefixUrl: config.public.apiBase,
    hooks: {
      beforeRequest: [
        (request) => {
          if (accessToken.value) {
            request.headers.set("Authorization", `Bearer ${accessToken.value}`);
          }
        },
      ],
      afterResponse: [
        async (request, options, response) => {
          if (response.status === 401 && refreshToken.value) {
            // try refresh
            try {
              const refreshed = await ky
                .post(`${config.public.apiBase}/auth/refresh`, {
                  json: { refresh_token: refreshToken.value },
                })
                .json<{ access_token: string }>();

              accessToken.value = refreshed.access_token;

              // retry original request with new token
              request.headers.set(
                "Authorization",
                `Bearer ${refreshed.access_token}`,
              );
              return ky(request);
            } catch (refreshError) {
              console.error("Refresh failed:", refreshError);
              useAuthStore().logout();
              return response;
            }
          }

          return response;
        },
      ],
    },
  });
};
