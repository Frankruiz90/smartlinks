export class Hoteles {
    idhotel!: number;
    descripcion!: string;
    habitacionesDisponibles!:number;
    precio!:number;
    deshabilitada:boolean = false;
    numeroHabitaciones?:number;
    impuesto?:number;
    tipoHabitacion?:string;
    ubicacion?: string;
    ciudad?: string
}

export class Reserva {
    idhotel!: number;
    nombre!:string;
    apellido!:string;
    celular!:string;
    correo!:string;
    descripcion!: string;
    precio!:number;
    numeroHabitaciones!:number;
    numeroPersonas?:number;
    ciudad?: string;
    fechaIngreso?:string;
    fechaSalida?:string;
}

export class Login {
    usuario!:String;
    clave!:String;
    rol!:string;
}