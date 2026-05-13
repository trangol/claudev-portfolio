export interface IBadgeStyle {
  backgroundColor: string;
  textColor: string;
  label: string;
  icon: string;
}

export interface IStatusBadgeStrategy {
  getStyle(): IBadgeStyle;
}

export class ProductionBadgeStrategy implements IStatusBadgeStrategy {
  getStyle(): IBadgeStyle {
    return {
      backgroundColor: '#10B981',
      textColor: '#FFFFFF',
      label: 'En Producción',
      icon: '🚀'
    };
  }
}

export class DevelopmentBadgeStrategy implements IStatusBadgeStrategy {
  getStyle(): IBadgeStyle {
    return {
      backgroundColor: '#3B82F6',
      textColor: '#FFFFFF',
      label: 'En Desarrollo',
      icon: '⚙️'
    };
  }
}

export class ProofOfConceptBadgeStrategy implements IStatusBadgeStrategy {
  getStyle(): IBadgeStyle {
    return {
      backgroundColor: '#F59E0B',
      textColor: '#FFFFFF',
      label: 'Prueba Conceptual',
      icon: '🧪'
    };
  }
}

export class StatusBadgeContext {
  private strategies: Map<string, IStatusBadgeStrategy> = new Map();

  constructor() {
    this.strategies.set('production', new ProductionBadgeStrategy());
    this.strategies.set('development', new DevelopmentBadgeStrategy());
    this.strategies.set('proof_of_concept', new ProofOfConceptBadgeStrategy());
  }

  getBadgeStyle(phase: string): IBadgeStyle {
    const strategy = this.strategies.get(phase);
    if (!strategy) {
      return new DevelopmentBadgeStrategy().getStyle();
    }
    return strategy.getStyle();
  }
}
