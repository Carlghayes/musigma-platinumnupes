import 'next-auth';

declare module 'next-auth' {
  interface User {
    role?: 'ADMIN' | 'MEMBER';
  }

  interface Session {
    user: User & {
      role?: 'ADMIN' | 'MEMBER';
    };
  }
}