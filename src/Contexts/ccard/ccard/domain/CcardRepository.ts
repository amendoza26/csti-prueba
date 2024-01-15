import { Ccard } from "./Ccard";

export interface CcardRepository {
  find(token: string): Promise<Ccard>;
}
