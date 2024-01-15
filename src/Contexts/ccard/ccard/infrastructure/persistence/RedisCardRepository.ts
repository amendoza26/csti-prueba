import { RedisRepository } from "../../../../Shared/infrastructure/persistence/redis/RedisRepository";
import { Ccard } from "../../domain/Ccard";
import { CcardRepository } from "../../domain/CcardRepository";

export class RedisCardRepository
  extends RedisRepository
  implements CcardRepository
{
  async find(token: string): Promise<Ccard> {
    const client = await this.connect();
    const response = await client.get(token);
    const jsonResponse = JSON.parse(response);
    delete jsonResponse.cvv;
    return jsonResponse && Ccard.fromPrimitive(jsonResponse);
  }
}
