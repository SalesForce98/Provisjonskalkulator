// script.js

function calculateCommission(sales) {
    const commissionPerSale = 205;
    let commission = sales * commissionPerSale;

    let bonus = 0;
    if (sales >= 60) bonus += 6000;
    if (sales >= 80) bonus += 2000;
    if (sales >= 100) bonus += 10000;
    if (sales >= 120) bonus += 2000;

    return commission + bonus;
}

function calculateHourlyWage(hourlyRate, workDays) {
    const dailyHours = 6.5;
    return hourlyRate * dailyHours * workDays;
}

function calculateSalary() {
    // Hent verdier fra input-feltene
    const sales = parseInt(document.getElementById("sales").value);
    const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
    const workDays = parseInt(document.getElementById("workDays").value);

    // Kalkuler provisjon og bonus
    const commission = calculateCommission(sales);

    // Kalkuler lønn fra timeslønn
    const wage = calculateHourlyWage(hourlyRate, workDays);

    // Kalkuler total bruttolønn
    const grossSalary = commission + wage;

    // Vis resultatet
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h3>Lønnsberegning</h3>
        <p>Antall salg: ${sales}</p>
        <p>Provisjon og bonus: ${commission.toFixed(2)} kr</p>
        <p>Lønn fra timeslønn: ${wage.toFixed(2)} kr</p>
        <p><strong>Totalt bruttolønn: ${grossSalary.toFixed(2)} kr</strong></p>
    `;
}
