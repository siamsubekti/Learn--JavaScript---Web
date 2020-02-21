import { AxiosResponse } from "axios";
import { LoginResponse, LoginFormDto } from "../models";
import service from "../../shared/services/HttpService";

const login = async (data: LoginFormDto): Promise<LoginResponse> => {
    const response: AxiosResponse<LoginResponse> = await service.post('api/auth/login', data);

    return response.data;
};

export {
    login,
};