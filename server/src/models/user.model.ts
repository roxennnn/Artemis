export interface User {
  _id: { $oid: string };
  username: string;
  email: string;
  password: string;
  eth_address: string;
  priv_key: string;
  demographics_done: boolean;
  demographics_timestamp: string;
  skills_done: boolean;
  skills_timestamp: string;
  domestic_done: boolean;
  domestic_timestamp: string;
}
