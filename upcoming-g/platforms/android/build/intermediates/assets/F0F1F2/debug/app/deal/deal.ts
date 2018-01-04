export class Kitchen {
  pk: number;
  name: string;
  slug: string;
}
export class WorkModels {
  pk: number;
  name: string;
  slug: string;
}
export class Deal {
  pk: number;
  image: string;
  fantasy: string;
  name: string;
  description: string;
  cnpj: string;
  site: string;
  kitchen: any;
  work_models: any;

  // constructor(values: Object = {}) {
  //   Object.assign(this, values);
  // }
}
