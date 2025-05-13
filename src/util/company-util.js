import { firstValueFrom } from "rxjs";
import { clientUserAPi } from "../config/index.js";

export const getCompanyByIdUtil = async (id) => {
    const pattern = { cmd: "UserService.getUserById" };
    return await firstValueFrom(
      clientUserAPi.send(pattern, {
        input: { id },
        headers: { "x-service-code": "secret" },
      })
    );
}
