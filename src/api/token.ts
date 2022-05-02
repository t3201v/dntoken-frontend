import api from ".";

const path = "/token";

export function getDataInDashboard(priKey: string) {
  return api.get(`${path}/dashboard?priKey=${priKey}`);
}

export function getBlockchainAnalytics() {
  return api.get(`${path}/analytics`);
}

export function mineNewBlock(minerAddr: string) {
  return api.post(`${path}/add`, { minerAddr });
}
