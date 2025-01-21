// specifies indexed db tables to initialize at app startup
export const idbTables = [
    {
        name: 'work',
        options: {},
        indexes: ['id']
    }
]