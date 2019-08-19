import { Extraction } from './Extraction';
import { DSSFormatOptions } from './DSSFormatOptions';
import { DSSFormatSettings } from './DSSFormatSettings';
import { DSSMetadata } from './DSSMetadata';


export class ImportConfig {
  name: string;
  extractions: Extraction[];
  options: DSSFormatOptions;
  settings: DSSFormatSettings;
  meta: DSSMetadata;
}