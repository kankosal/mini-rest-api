import { clientUserAPi } from "../../config/index.js";
import { firstValueFrom } from "rxjs";

const listCompany = async (req, res) => {
  try {
    const { limit, page, search } = req.query;

    const pattern = { cmd: "UserService.getUserById" };
    const result = await firstValueFrom(
      clientUserAPi.send(pattern, {
        input: { id: "102461bc-0a1f-11f0-b7d8-005056b96969" },
        headers: { "x-service-code": "secret" },
      })
    );

    return res.status(200).json(result);
  } catch (error) {
    console.log('error', error.message);
    
    return res.status(error.response?.status || 500).json({
      error: error.response?.data || "Error forwarding request",
    });
  }
};

export default listCompany;
