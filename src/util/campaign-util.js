import { firstValueFrom } from "rxjs";
import { clientCouponAPi } from "../config/index.js";

export const getCampaignListUtil = async (payload) => {
  const pattern = { cmd: "CampaignService.getCampaignList" };
  return await firstValueFrom(
    clientCouponAPi.send(pattern, {
      body: { query: { ...payload } },
      headers: { "x-service-code": "secret" },
    })
  );
};

export const getCampaignByIdUtil = async (campaignId) => {
  const pattern = { cmd: "CampaignService.getCampaignById" };
  return await firstValueFrom(
    clientCouponAPi.send(pattern, {
      body: { param: { campaignId } },
      headers: { "x-service-code": "secret" },
    })
  );
};
