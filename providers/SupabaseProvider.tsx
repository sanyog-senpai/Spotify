"use client"

import {Database} from '@/types_db'
import { createClientComponentClient, SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

interface SupabaseProviderProps {
  children: React.ReactNode;
}

const SupabaseProvider:React.FC<SupabaseProviderProps> = ({children}) => {
  
  const [supabaseClient] = useState<SupabaseClient<Database>>(() => 
    createClientComponentClient<Database>()
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider