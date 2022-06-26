export interface AccountDetails {
  id:                   string;
  balance:              number;
  currantPage:          number;
  totalePages:           number;
  pageSize:             number;
  operations:           AccountOperation[];
}

export interface AccountOperation {
  id:            number;
  dateOperation: Date;
  amount:        number;
  type:          string;
  description:   string;
}

