const API_KEY = process.env.REACT_APP_API_KEY;
const onResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}
class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    // получение всех товаров
    getGoodsList() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers,
        }).then(onResponse)
    }
}

const config = {
    baseUrl: "https://fortniteapi.io/v1/shop?lang=ru",
    headers: {
        Authorization: API_KEY,
    }
}

const api = new Api(config);
export default api;