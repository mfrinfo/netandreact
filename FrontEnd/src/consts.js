export default {
    API_URL: window._env_.API_URL,
    FRONT_URL: window._env_.FRONT_URL,
    TITULO_HOME: "Países",
    TITULO_EMPRESA: "ReactJs",

    LOGIN: "login",
    COMPANY: "company",
    USERKEY: "__paises__",
    HEADER_AXIOS: {
        headers: {
            "Content-Type": "application/json",
        },
    },
    HEADER_WITH_TOKEN_AXIOS: {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("__paises__")
                ? JSON.parse(localStorage.getItem("__paises__")).accessToken
                : null
                }`,
        },
    },
};
