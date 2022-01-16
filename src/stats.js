const totalLinks = (arraylinks) => {

    const totalArray = arraylinks.map(link => link.href);
    const uniqueLinks = [...new Set(totalArray)];
    const brokenLinks = arraylinks.filter(link =>  link.status != 200)
    return {
        total: totalArray.length,
        unique: uniqueLinks.length,
        broke: brokenLinks.length
    }

}



