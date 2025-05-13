import { getCompanyByIdUtil } from "../../util/index.js";

const getCompanyById = async (req, res) => {
  try {
    const { companyId } = req.params;

    const result = await getCompanyByIdUtil(companyId);

    return res.status(200).json(result);
  } catch (error) {
    console.log("error", error.message);

    return res.status(error.response?.status || 500).json({
      error: error.response?.data || "Error forwarding request",
    });
  }
};

export default getCompanyById;
