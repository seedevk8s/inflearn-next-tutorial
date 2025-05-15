'use server'

export async function searchUsers(name: string) {
    const DB = [
        { id: 1, name: 'HoJin Chu' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'John Smith' },
    ];
    
    return DB.filter((user) => user.name.includes(name));
}
