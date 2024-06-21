export const informacion = {
    nombre: 'Dailin',
    apellido: 'Romero',
    nombreCompleto: 'Dailin Romero',
    fechaNacimiento: new Date(2002, 3, 27), 
    ocupacion: 'Estudiante de ing sistemas',
    correo: 'dailinromero@gmail.com',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, nemo. Quod, odio perferendis? Facere doloribus repellendus eaque illum temporibus magnam magni ab odio consequatur, repudiandae accusantium sapiente veniam eius sunt.',
    habilidades: [
        'Desarrollo web',
    ],
    

    get edad() {
        const hoy = new Date();
        const nacimiento = this.fechaNacimiento;
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const m = hoy.getMonth() - nacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}
