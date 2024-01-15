export interface CcardBody {
  card_number: number;
  cvv: number;
  expiration_month: string;
  expiration_year: string;
  email: string;
}

export class Ccard {
  private card_number: number;
  private cvv: number;
  private expiration_month: string;
  private expiration_year: string;
  private email: string;

  private constructor(data: CcardBody) {
    this.card_number = data.card_number;
    this.cvv = data.cvv;
    this.expiration_month = data.expiration_month;
    this.expiration_year = data.expiration_year;
    this.email = data.email;
  }

  static fromPrimitive(data: any): Ccard {
    return new Ccard({
      ...data,
    });
  }

  public static toPrimitive(data: Ccard): any {
    return {
      ...data,
    };
  }
}
