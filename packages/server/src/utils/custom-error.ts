export class CustomError extends Error {
  public statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = 'ClientError';
    this.statusCode = statusCode;
  }
}
