export interface Union {
  nameOfUnion: string;
}

export interface Upazila {
  nameOfUpazilaOrThana: string;
  unions: Union[];
}

export interface District {
  nameofdistrict: string;
  upazilas: Upazila[];
}

export interface Division {
  division: string;
  districts: District[];
}

export const mymensinghInfo: Division[];
export default mymensinghInfo;