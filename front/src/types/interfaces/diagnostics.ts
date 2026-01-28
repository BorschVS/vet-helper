export interface DiagnosticProcedure {
  id: number;
  name: string;
  type: 'ultrasound' | 'xray' | 'bloodTest' | 'urineTest';
  category: string;
  parameters: UltrasoundParameters | XRayParameters | BloodTestParameters | UrineTestParameters;
  basePrice: number;
}

export interface DiagnosticAppointment {
  id: number;
  procedure: DiagnosticProcedure;
  price: number;
  prescribedBy: string;
  performedBy: string;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}

export interface UltrasoundParameters {
  category: 'urinary' | 'abdominal' | 'cardiac' | 'joints' | 'brain' | 'thyroid';
  details: string;
  findings: string;
}

export interface XRayParameters {
  area: string;
  views: string[];
  findings: string;
}

export interface BloodTestParameters {
  type: 'general' | 'biochemical';
  parameters: {
    name: string;
    value: string;
    unit: string;
    referenceRange: string;
  }[];
}

export interface UrineTestParameters {
  type: 'physical' | 'chemical' | 'microscopic';
  parameters: {
    name: string;
    value: string;
    unit: string;
    referenceRange: string;
  }[];
  sediment: {
    present: boolean;
    description: string;
  };
} 