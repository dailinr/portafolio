export const informacion = {
    nombre: 'Dailin',
    apellido: 'Romero',
    nombreCompleto: 'Dailin Romero',
    fechaNacimiento: new Date(2002, 3, 27), 
    ocupacion: 'Estudiante de ing sistemas',
    correo: 'dailinromero@gmail.com',
    descripcion_corta: "Soy estudiante de ingeniería en sistemas, actualmente estoy en mis últimos semestres. Mi enfoque va hacia el diseño y desarrollo de páginas web. Mi formación me ha brindado las habilidades necesarias para poder desarrollar proyectos funcionales.",
    descripcion_larga: "Tengo un sólido entendimiento en desarrollo web, especialmente en frontend con diseños adaptables e intuitivos. Domino muy bien la definición de requisitos, el diseño y normalización de bases de datos relacionales. Poseo habilidades en modelado de diagramas UML y aplicación de métricas en diseño y código. ",
    ciudad: 'Santa Marta',
    formacion: 'Universidad del Magdalena',
    
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
