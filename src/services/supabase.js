import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tdikbzdsrditlqhzpisr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaWtiemRzcmRpdGxxaHpwaXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5Mzk2OTksImV4cCI6MjA2NjUxNTY5OX0._bi6SxroAeMz1LE2j3urJB5H9TxNXJzmcY-iuhS-bZY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
