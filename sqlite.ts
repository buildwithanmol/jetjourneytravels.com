import { Database } from '@sqlitecloud/drivers';

export async function getDatabase(): Promise<Database>  {
  const connStr = process.env.SQLITECLOUD_URL!;
  
  if (!connStr) {
    throw new Error('Missing SQLITECLOUD_URL in .env.local');
  }

  console.log('[DB_CONNECTION]', connStr)
  
  const db = new Database(connStr); 

  console.log('[DB_INSTANCE]', db);

  return db;
}
