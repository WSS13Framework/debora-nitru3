import { createClient } from '@supabase/supabase-js'

// Estes valores virão automaticamente quando você conectar o Supabase no painel
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
