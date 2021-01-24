let logged;

function sendAnalytics(data: string) {
    console.log(data);
    logged = true;
    logged = 'MAX';
}

sendAnalytics('The data');