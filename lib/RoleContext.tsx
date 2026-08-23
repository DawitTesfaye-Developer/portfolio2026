'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Role } from './types';
import { roleMeta } from './data';

interface RoleContextValue {
  role: Role;
  setRole: (r: Role) => void;
  meta: (typeof roleMeta)[Role];
}

const RoleContext = createContext<RoleContextValue | null>(null);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('dev');
  return (
    <RoleContext.Provider value={{ role, setRole, meta: roleMeta[role] }}>{children}</RoleContext.Provider>
  );
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error('useRole must be used within RoleProvider');
  return ctx;
}
