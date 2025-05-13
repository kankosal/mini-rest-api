import { getCampaignByIdUtil } from "../../util/index.js";

const getCampaignList = async (req, res) => {
  try {
    const { campaignId } = req.params;

    const result = await getCampaignByIdUtil(campaignId);

    return res.status(200).json(result);
  } catch (error) {
    console.log("error", error.message);

    return res.status(error.response?.status || 500).json({
      error: error.response?.data || "Error forwarding request",
    });
  }
};

export default getCampaignList;
