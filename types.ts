export type Client = {
    id: number,
    first_name: string,
    last_name: string,
    dni: string,
    address: string,
    phone_number: string,
}

export type Cash = {
    id: number,
    description: string, 
    responsible: number,
    income: number,
    outcome: number,
}