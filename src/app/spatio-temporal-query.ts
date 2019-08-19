export class SpatioTemporalQuery {
  start: string;
  finish: string;
  geo_json: any;
  model: string;

  constructor(start, finish, geo_json, model) {
    this.start = start;
    this.finish = finish;
    this.geo_json = geo_json;
    this.model = model;

  }
}