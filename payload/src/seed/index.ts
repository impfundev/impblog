import type { Payload } from 'payload';

export const seed = async (payload: Payload): Promise<void> => {
  await payload.create({
    collection: 'users',
    data: {
      email: 'mail@ilhammaulana.me',
      firstName: 'Ilham Maulana',
      lastName: 'Pratama',
      password: 'Ilhammaulana13!!',
      roles: ['admin'],
      twitter: 'ilhammaulana',
    },
  });
};
