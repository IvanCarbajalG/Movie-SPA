const dataOriginal = [
    {
        "aseguradora": "AFIRME",
        "cotizacion": {},
        "cliente": {
            "tipoPersona": "fisica",
            "nombre": "prueba",
            "apellidoPat": "prueba",
            "apellidoMat": "prueba",
            "rfc": "",
            "fechaNacimiento": "01-01-2005",
            "ocupacion": "",
            "curp": "",
            "direccion": {
                "calle": "oriente 945",
                "noExt": "410",
                "noInt": "021",
                "colonia": "prueba",
                "codPostal": "56618",
                "poblacion": "mexico",
                "ciudad": "cdmx",
                "pais": "mexico"
            },
            "edad": "18",
            "genero": "MASCULINO",
            "telefono": "",
            "email": ""
        }
    }
];

const dataCopia = structuredClone(dataOriginal);


const [primerElemento] = dataCopia; // Desestructuracion del arreglo
const { cliente } = primerElemento;  // Desestructuracion del objeto cliente

cliente.nombre = "Ivan";
cliente.apellidoPat = "Carbajal";
cliente.apellidoMat = "Gorostieta";
cliente.email = "ivan.desarrollador@test.com";
cliente.rfc = "IVAN900101ABC";
cliente.direccion.colonia = "Nueva Colonia";
cliente.fechaNacimiento = "15-09-2003";

console.log("=== ARREGLO ORIGINAL ===");
console.log(JSON.stringify(dataOriginal,null, 2)); // Mostrar el arreglo original para verificar que no se ha modificado

console.log("\n=== ARREGLO COPIA ===");
console.log(JSON.stringify(dataCopia,null, 2)); // Mostrar el arreglo copia para verificar los cambios realizados
