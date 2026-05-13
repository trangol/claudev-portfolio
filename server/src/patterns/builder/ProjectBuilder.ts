import { Project, ProjectPhase, ProjectStatus, TechStackItem } from '../../models/Project';

export interface IProjectBuilder {
  setId(id: string): this;
  setName(name: string): this;
  setDescription(description: string): this;
  setObjectives(objectives: string[]): this;
  setStack(stack: TechStackItem[]): this;
  setPhase(phase: ProjectPhase): this;
  setStatus(status: ProjectStatus): this;
  setUrl(url: string): this;
  setImageUrl(imageUrl: string): this;
  setAdditionalInfo(info: Record<string, any>): this;
  build(): Project;
}

export class ProjectBuilder implements IProjectBuilder {
  private _id?: string;
  private _name?: string;
  private _description?: string;
  private _objectives?: string[];
  private _stack?: TechStackItem[];
  private _phase?: ProjectPhase;
  private _status?: ProjectStatus;
  private _url?: string;
  private _imageUrl?: string;
  private _additionalInfo?: Record<string, any>;

  setId(id: string): this {
    this._id = id;
    return this;
  }

  setName(name: string): this {
    this._name = name;
    return this;
  }

  setDescription(description: string): this {
    this._description = description;
    return this;
  }

  setObjectives(objectives: string[]): this {
    this._objectives = objectives;
    return this;
  }

  setStack(stack: TechStackItem[]): this {
    this._stack = stack;
    return this;
  }

  setPhase(phase: ProjectPhase): this {
    this._phase = phase;
    return this;
  }

  setStatus(status: ProjectStatus): this {
    this._status = status;
    return this;
  }

  setUrl(url: string): this {
    this._url = url;
    return this;
  }

  setImageUrl(imageUrl: string): this {
    this._imageUrl = imageUrl;
    return this;
  }

  setAdditionalInfo(info: Record<string, any>): this {
    this._additionalInfo = info;
    return this;
  }

  build(): Project {
    if (!this._id || !this._name || !this._phase) {
      throw new Error('Project must have at least id, name and phase');
    }
    return new Project(
      this._id,
      this._name,
      this._description || '',
      this._objectives || [],
      this._stack || [],
      this._phase,
      this._status || 'active',
      this._url,
      this._imageUrl,
      this._additionalInfo || {}
    );
  }
}
