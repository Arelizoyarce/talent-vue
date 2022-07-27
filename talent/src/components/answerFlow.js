export const answers = {
    menssage: 'Hola, Para ayudarte, indicame sobre qué tema tienes dudas, marcando una de las siguientes opciones: 1.Agendar con mentor 2.Proyecto final 3.Certificación 4.Otros',
    options: {
        mentor: {
            menssage: 'Deseas agendar con el mentor seleccionado: 1.Si 2.No',
            options: {
                1: {
                    menssage: 'Tiene los siguientes horarios disponibles:'
                },
                2:{
                    menssage: 'No hay horarios disponible'
                }
            }
        },
        project:{
            menssage:'El proyecto se entrega uan vez finalizado el curso'
        },
        certification:{
            menssage:'El certificado se te enviará al correo al aprobar tu proyecto final'
        },
        others:{
            menssage: 'En breve uno de nuestros colaboradores se contactará contigo'
        }
    },
    default:'No entiendo lo que tratas de decirme'
}