export type Client = {
    id: number,
    name: string,
    dni: string,
    address: string,
    email: string,
    phone: string,
}

export type Route = {
    id:number,
    from: string,
    to: string,
}

export type Aircraft = {
    id: number,
    client_id: Client,
    location: Location,
    fabricant: string,
    brand: string,
    serial: string,
    acronym: string,
    flight_hours: number,
    cycles: number,
    fabricant_date: string,
    owner: string,
    aircraft_operator: string,
    type_engine: string,
    number_engine: number,
    coments: string,
}

export type DebtsPayments = {
    id: number,
    bank_acount: string,
    flights: Flights,
    client: Client,
    pay_method: string,
    pay_amount: string,
    payment_date: Date,
    pay_description: string,
}

export type BuyedOrders = {
    id: number,
    purchase_order: Purchase_Orders,
    buy_date: Date,
    deliver_date: Date,
    proforma_invoice: string,
    invoice: string,
    observation: string,
    invoice_deliver: string,
    bill: string,
    provider: string,
}

export type Purchase_Orders = {
    id: number,

}

export type Location = {
    id: number,
    name: string,
}

export type DebtTransaction = {
    id: number, 
    amount: number,
    client: Client,
}

export type ClientDebts = {
    id:number,
    total_debts: number,
    status_debt: boolean,
    flight: Flights[],
    debts_payments: DebtTransaction[],
}

export type Flights = {
    id:number,
    client: Client,      //Client
    route: Route,      //Route
    aircraft: Aircraft,  //Aircraft
    date: string,
    details: string,
    fee: number,
    total_amount: number,
    type: "carga" | "pax" | "chart",
    payed_amount: number,
    debt_status: "pendiente" | "pagado",
}


export type Cash = {
    id: number,
    description: string, 
    responsible: number,
    income: number,
    outcome: number,
}
