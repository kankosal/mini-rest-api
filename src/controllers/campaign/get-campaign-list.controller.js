import { getCampaignListUtil } from "../../util/index.js";

const getCampaignList = async (req, res) => {
  try {
    const { limit, page, search } = req.query;

    const result = await getCampaignListUtil({ ...req.query });

    return res.status(200).json(result);
  } catch (error) {
    console.log('error', error.message);
    
    return res.status(error.response?.status || 500).json({
      error: error.response?.data || "Error forwarding request",
    });
  }
};

export default getCampaignList;
