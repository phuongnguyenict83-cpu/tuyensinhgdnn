export interface Major {
  id: string;
  name: string;
  code: string;
  description: string;
  subjects: string[];
  image: string;
}

export interface AdmissionMethod {
  title: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
}
