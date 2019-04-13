export namespace bi {
  /** 
   * Generate a random Civil Identification Number (Número de Identificação Civil / Bilhete de Identidade).
   * @returns A valid number including check digit.
   */
  export function generate(): string;
  /** 
   * Validate a given Civil Identification Number (Número de Identificação Civil / Bilhete de Identidade).
   * @param number - the number to validate.
   * @returns True if the given number is valid.
   */
  export function validate(number: string): boolean;
}

export namespace cc {
  /** 
   * Generate a random Citizen's Card (Cartão do Cidadão) Document Number.
   * @returns A valid document number including alpha-numeric version and check digit.
   */
  export function generate(): string;
  /** 
   * Validate a given Citizen's Card (Cartão do Cidadão) Document Number.
   * @param number - the document number to validate.
   * @returns True if the given document number is valid.
   */
  export function validate(number: string): boolean;
}

export namespace nif {
  /**
   * Generate a random Fiscal Identification Number (Número de Identificação Fiscal).
   * @param type - optional type ('personal' or 'company'), defaults to any.
   * @returns A valid number including check digit.
   */
  export function generate(type?: 'personal' | 'company'): string;
  /**
   * Validate a Fiscal Identification Number (Número de Identificação Fiscal).
   * @param number - the number to validate.
   * @param type - optional type ('personal' or 'company'), defaults to any.
   * @returns True if the given number is valid.
   */
  export function validate(number: string, type?: 'personal' | 'company'): boolean;
}

export class InvalidArgumentError extends Error {}