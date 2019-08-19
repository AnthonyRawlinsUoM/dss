import { DSSVersion } from './DSSVersion';

export class DSSFormatSettings {
  input_path: string;
  frappe_output: string;
  output_path: string;
  output_format: DSSVersion;
  name: string;
  overwrite: boolean;
}


export enum DSSFormat {
  DSS = '.dss',
  DSS1 = '.dss1',
  DSS2 = '.dss2'
}