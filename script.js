
const SUPABASE_URL = "https://mpxrtrshllqhwvrqufxk.supabase.co";

const SUPABASE_KEY = "sb_publishable_xCwQqJxAG_oGX7Xse1A96w_oifQGFPp";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("VisionVoice Supabase initialized!");
