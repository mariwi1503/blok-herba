export * from './organization-data'

export interface IResident {
  id: string;
  fullName: string;
  idCardNumber: string;
  idCardType: 'BATAM' | 'NON_BATAM';
  phone?: string;
  maritalStatus: 'KAWIN' | 'BELUM_KAWIN' | 'DUDA_JANDA';
  gender: 'L' | 'P';
  isHead: boolean;
  image?: string;
  houseNumber: string;
}