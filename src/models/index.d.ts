import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerRol = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rol, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tipo_rol?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRol = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rol, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tipo_rol?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rol = LazyLoading extends LazyLoadingDisabled ? EagerRol : LazyRol

export declare const Rol: (new (init: ModelInit<Rol>) => Rol) & {
  copyOf(source: Rol, mutator: (draft: MutableModel<Rol>) => MutableModel<Rol> | void): Rol;
}

type EagerReciboDonaciones = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReciboDonaciones, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuariosID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReciboDonaciones = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReciboDonaciones, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly usuariosID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReciboDonaciones = LazyLoading extends LazyLoadingDisabled ? EagerReciboDonaciones : LazyReciboDonaciones

export declare const ReciboDonaciones: (new (init: ModelInit<ReciboDonaciones>) => ReciboDonaciones) & {
  copyOf(source: ReciboDonaciones, mutator: (draft: MutableModel<ReciboDonaciones>) => MutableModel<ReciboDonaciones> | void): ReciboDonaciones;
}

type EagerUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly imagen?: string | null;
  readonly pais?: string | null;
  readonly provincia?: string | null;
  readonly localidad?: string | null;
  readonly id_ubicacion?: string | null;
  readonly sub: string;
  readonly notificaciones?: string | null;
  readonly publicaciones?: string | null;
  readonly dni?: number | null;
  readonly backup?: (string | null)[] | null;
  readonly bloqueado?: boolean | null;
  readonly telefono?: string | null;
  readonly ReciboDonaciones?: (ReciboDonaciones | null)[] | null;
  readonly Rol?: Rol | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usuariosRolId?: string | null;
}

type LazyUsuarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly imagen?: string | null;
  readonly pais?: string | null;
  readonly provincia?: string | null;
  readonly localidad?: string | null;
  readonly id_ubicacion?: string | null;
  readonly sub: string;
  readonly notificaciones?: string | null;
  readonly publicaciones?: string | null;
  readonly dni?: number | null;
  readonly backup?: (string | null)[] | null;
  readonly bloqueado?: boolean | null;
  readonly telefono?: string | null;
  readonly ReciboDonaciones: AsyncCollection<ReciboDonaciones>;
  readonly Rol: AsyncItem<Rol | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly usuariosRolId?: string | null;
}

export declare type Usuarios = LazyLoading extends LazyLoadingDisabled ? EagerUsuarios : LazyUsuarios

export declare const Usuarios: (new (init: ModelInit<Usuarios>) => Usuarios) & {
  copyOf(source: Usuarios, mutator: (draft: MutableModel<Usuarios>) => MutableModel<Usuarios> | void): Usuarios;
}