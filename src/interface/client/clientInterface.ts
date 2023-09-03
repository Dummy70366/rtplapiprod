// import { ILoginUserData } from "../user/userInterface";

export interface IClientData {
  id?: number;
  email?: string;
  code?: string;
  name?: string;
  country?: string;
  isActive?: boolean;
  startDate?: Date;
  endDate?: Date;
  autoUpdateEndDate?: number;
  timeSheetStartDay?: number;
  approvalEmail?: string;
  isShowPrices?: boolean;
  isShowCostCenter?: boolean;
  isShowCatalogueNo?: boolean;
  titreDeConge?: string;
  isResetBalance?: boolean;
  startMonthBack?: number;
  medicalEmailSubmission?: string;
  medicalEmailToday?: string;
  medicalEmailMonthly?: string;
  isShowNSS?: boolean;
  isShowCarteChifa?: boolean;
  isShowSalaryInfo?: boolean;
  isShowRotation?: boolean;
  isShowBalance?: boolean;
  logo?: string;
  segment?: string;
  subSegment?: string;
  bonusType?: string;
  createdAt?: Date | string;
  createdBy?: number;
  updatedAt?: Date | string;
  updatedBy?: number;
  deletedAt?: Date | null | string;
}

export interface IClientResponseData {
  id?: number;
  code?: string;
  country?: string;
  isActive?: boolean;
  startDate?: Date;
  endDate?: Date;
  autoUpdateEndDate?: number;
  timeSheetStartDay?: number;
  approvalEmail?: string;
  isShowPrices?: boolean;
  isShowCostCenter?: boolean;
  isShowCatalogueNo?: boolean;
  titreDeConge?: string;
  isResetBalance?: boolean;
  startMonthBack?: number;
  medicalEmailSubmission?: string;
  medicalEmailToday?: string;
  medicalEmailMonthly?: string;
  isShowNSS?: boolean;
  isShowCarteChifa?: boolean;
  isShowSalaryInfo?: boolean;
  isShowRotation?: boolean;
  isShowBalance?: boolean;
  logo?: string;
  segment?: string;
  subSegment?: string;
  bonusType?: string;
  createdAt?: Date | string;
  createdBy?: number;
  updatedAt?: Date | string;
  updatedBy?: number;
  deletedAt?: Date | null | string;
  // loginUserData?: ILoginUserData;
}