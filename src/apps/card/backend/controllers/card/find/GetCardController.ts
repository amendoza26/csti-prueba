import { Response } from "express";
import { BaseController } from "../../../../../../Contexts/Shared/infrastructure/api/BaseController";
import { GetCard } from "../../../../../../Contexts/ccard/ccard/application/get/GetCard";
import { HttpRequest } from "../../../../../../Contexts/Shared/domain/HttpRequest";
import { ApplicationError } from "Contexts/Shared/domain/ApplicationError";

export class GetCardController extends BaseController {
  constructor(private readonly service: GetCard) {
    super();
  }
  async handle(
    httpRequest: HttpRequest,
    httpResponse: Response
  ): Promise<void> {
    try {
      const response = await this.service.run(httpRequest.token || "");
      this.ok(httpResponse, response);
    } catch (error) {
      this.fail(httpResponse, error as ApplicationError);
    }
  }
}
