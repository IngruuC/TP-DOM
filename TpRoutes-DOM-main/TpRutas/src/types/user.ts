export interface user
{
    id: number;
    name: string;
    email: string;
    username: string;
    permissionLevel: PermissionLevel[]
}

export type PermissionLevel = 'admin' | 'vendedor' | 'viewer';