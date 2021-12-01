const formatDate = (date) => {
    if( typeof date === "number" ) date = date.toString();

    //Posição 0, 4 digitos = ano
    //Posição 4, 2 digitos = mes
    //Posição 6, 2 digitos = dia
    return `${date.substr( 6 )}-${date.substr( 4, 2 )}-${date.substr( 0, 4 )}`;
}

export default formatDate;