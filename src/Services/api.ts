import axios, { AxiosResponse as ImportedAxiosResponse } from "axios";

import { config } from "../config";

const api = axios.create({ baseURL: `${config.apiURL}` });

export type AxiosResponse<T> = ImportedAxiosResponse<T>;

export default api;
