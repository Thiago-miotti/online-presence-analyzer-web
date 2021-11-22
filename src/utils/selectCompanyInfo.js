import companyIcons from '../Assets/companyLogoIcons.json';

const selectCompanyInfoById = (id) => {
    let result = companyIcons.icons.filter((icon) => icon.id.toString() === id.toString() );
    return result[0] ? result[0] : '';
}

const selectCompanyInfoByUrlName = (urlName) => {
    let result = companyIcons.icons.filter((icon) => icon.name.toString() === urlName.toString() );
    return result[0] ? result[0] : '';
}


export { selectCompanyInfoById, selectCompanyInfoByUrlName };