export const informacion = {
    nombre: 'Dailin',
    apellido: 'Romero',
    nombreCompleto: 'Dailin Romero',
    fechaNacimiento: new Date(2002, 3, 27), 
    ocupacion: 'Estudiante de ing sistemas',
    correo: 'dailinromero@gmail.com',
    descripcion_corta: "Soy estudiante de ingeniería en sistemas, actualmente estoy en mis últimos semestres. Mi enfoque va hacia el diseño y desarrollo de páginas web. Mi formación me ha brindado las habilidades necesarias que me han permitido desarrollar proyectos completos y funcionales.",
    descripcion_larga: "Tengo un sólido entendimiento en desarrollo web y bases de datos relacionales. Domino muy bien la definición de requisitos, el diseño y normalización de bases de datos. Poseo habilidades en modelado de casos de uso, diagramas UML y aplicación de métricas en diseño y código. ",
    
    habilidades: [
        'Desarrollo web',
    ],
    ciudad: 'Santa Marta',

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
