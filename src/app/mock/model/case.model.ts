export type CaseStatus = 'active' | 'urgent' | 'closed';

export interface Case {
  id: number;
  number: string;
  title: string;
  city?: string;
  plaintiffType?: string;
  defendantType?: string;
  hearingType?: string;
  stage: string;
  plaintiff: string;
  defendant: string;
  nextHearing: string;
  status: CaseStatus;
}
