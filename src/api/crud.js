import { supabase } from './supabase';

// Create (Insert)
export async function createTask(task) {
    const { data, error } = await supabase.from('todos').insert([{ task }]);
    if (error) throw error;
    return data;
}

// Read (Fetch all)
export async function fetchTasks() {
    const { data, error } = await supabase.from('todos').select('*');
    if (error) throw error;
    return data;
}

// Update (Edit)
export async function updateTask(id, updatedFields) {
    const { data, error } = await supabase.from('todos').update(updatedFields).eq('id', id);
    if (error) throw error;
    return data;
}

// Delete
export async function deleteTask(id) {
    const { data, error } = await supabase.from('todos').delete().eq('id', id);
    if (error) throw error;
    return data;
}
