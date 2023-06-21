import { TypeCheck } from "../config/credentials";

export interface QrCodeValue {
  type: TypeCheck;
  value: string;
}
export const qrCodeGenerator = (type: TypeCheck, value: string) => {
  const obj: QrCodeValue = {
    type,
    value,
  };
  return btoa(JSON.stringify(obj));
};

export const qrCodeValidator = (hash: string) => {
  try {
    const data = JSON.parse(atob(hash)) as QrCodeValue;
    if (data?.type === TypeCheck.EVENT || data?.type === TypeCheck.USER) {
      return data;
    }
  } catch (error) {}
  return null;
};

//console.log(qrCodeValidator('eyJ0eXBlIjoiZjgwMzJkNWNhZTNkZTIwZmNlYzg4N2YzOTVlYzlhNmEiLCJ2YWx1ZSI6ImdjU1FqWTRPRmFaSWtoaXRacXlUd1p2SlRxdTIifQ=='))
//console.log(qrCodeValidator('eyJ0eXBlIjoiZjgwMzJkNWNhZTNkZTIwZmlYzg4N2YzOTVlYzlhNmEiLCJ2YWx1ZSI6ImdjU1FqWTRPRmFaSWtoaXRacXlUd1p2SlRxdTIifQ=='))